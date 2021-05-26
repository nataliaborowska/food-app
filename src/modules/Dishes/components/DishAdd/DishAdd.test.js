import {mount} from 'enzyme';
import moxios from 'moxios';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';

import {DishAdd} from './DishAdd';
import {findByTestAttribute} from '../../../../utils/testUtils';
import {dishTypes} from '../../../../utils';
import {storeFactory} from '../../../../utils/testUtils';
import {addDish} from '../../../../store/actions';

describe('testing DishAdd', () => {
  let wrapper;
  let store;

  beforeEach(() => {
    store = storeFactory({});
    wrapper = mount(
      <Provider store={store}>
        <BrowserRouter>
          <DishAdd dishTypes={dishTypes} />
        </BrowserRouter>
      </Provider>
    );
  });

  it('renders properly', () => {
    const dishAddComponent = findByTestAttribute(wrapper, 'dishAdd');

    expect(dishAddComponent.length).toBe(1);
  });

  it('initially renders the form', () => {
    const dishAddForm = findByTestAttribute(wrapper, 'dishAddForm');

    expect(dishAddForm.length).toBe(1);
  });
});

describe('testing if field changes cause state change', () => {
  let wrapper;
  let store;

  beforeEach(() => {
    store = storeFactory({});
    wrapper = mount(
      <Provider store={store}>
        <BrowserRouter>
          <DishAdd dishTypes={dishTypes} />
        </BrowserRouter>
      </Provider>
    );
  });

  it('name field change cause dishName state change', () => {
    const dishNameInputField = findByTestAttribute(wrapper, 'textInputField').at(0);

    dishNameInputField.simulate('change', {
      target: {
        name: 'name',
        value: 'test'
      }
    });

    const dishNameInputFieldUpdated = findByTestAttribute(wrapper, 'textInputField').at(0);

    expect(dishNameInputFieldUpdated.props().value).toEqual('test');
  });

  it('description field change cause dishName state change', () => {
    const dishDescriptionInputField = findByTestAttribute(wrapper, 'textInputField').at(1);

    dishDescriptionInputField.simulate('change', {
      target: {
        name: 'description',
        value: 'testDescription'
      }
    });

    const dishDescriptionInputFieldUpdated = findByTestAttribute(wrapper, 'textInputField').at(1);

    expect(dishDescriptionInputFieldUpdated.props().value).toEqual('testDescription');
  });

  it('size field change cause dishSize state change', () => {
    const dishSizeInputField = findByTestAttribute(wrapper, 'numberInputField').at(0);

    dishSizeInputField.simulate('change', {
      target: {
        name: 'size',
        value: '1',
      }
    });

    const dishSizeInputFieldUpdated = findByTestAttribute(wrapper, 'numberInputField').at(0);

    expect(dishSizeInputFieldUpdated.props().value).toEqual('1');
  });

  it('price field change cause dish state change', () => {
    const dishPriceInputField = findByTestAttribute(wrapper, 'numberInputField').at(1);

    dishPriceInputField.simulate('change', {
      target: {
        name: 'price',
        value: '100',
      }
    });

    const dishPriceInputFieldUpdated = findByTestAttribute(wrapper, 'numberInputField').at(1);

    expect(dishPriceInputFieldUpdated.props().value).toEqual('100');
  });

    it('type field change cause dish state change', () => {
    const dishTypeInputField = findByTestAttribute(wrapper, 'selectField').at(0);

    dishTypeInputField.simulate('change', {
      target: {
        name: 'type',
        value: 'vegan',
      }
    });

    const dishTypeInputFieldUpdated = findByTestAttribute(wrapper, 'selectField').at(0);

    expect(dishTypeInputFieldUpdated.props().value).toEqual('vegan');
  });
});

describe('testing state change on form submission', () => {
  let wrapper;
  let store;

  beforeEach(() => {
    store = storeFactory({});
    wrapper = mount(
      <Provider store={store}>
        <BrowserRouter>
          <DishAdd dishTypes={dishTypes} />
        </BrowserRouter>
      </Provider>
    );
    });

  it('loading state changes on form submission', () => {
    const dishAddForm = findByTestAttribute(wrapper, 'dishAddForm');

    dishAddForm.simulate('submit', {
      preventDefault: () => { }
    });

    const loader = wrapper.find('Loader');

    expect(loader.length).toEqual(1);
  });
})

describe('testing form submission async request', () => {
  let wrapper;
  let store;
  let newDish;
  let dishAddForm;

  beforeEach(() => {
    store = storeFactory({});
    wrapper = mount(
      <Provider store={store}>
        <BrowserRouter>
          <DishAdd dishTypes={dishTypes} />
        </BrowserRouter>
      </Provider>
    );
    moxios.install();

    dishAddForm = findByTestAttribute(wrapper, 'dishAddForm');

    newDish = {
      name: 'testName',
      description: 'testDescription',
      size: '2',
      type: 'vegan',
      price: '100',
    }
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('updated store correctly after successful submission', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();

      request.respondWith({
        status: 200,
        response: newDish,
      })
    });

    return store.dispatch(addDish(newDish))
    .then(() => {
      const {dishes} = store.getState().dishes;

      expect(dishes).toEqual(
        expect.arrayContaining([
          expect.objectContaining(newDish)
        ])
      );

      wrapper.update();

      expect(dishAddForm.length).toBe(1);

      const dishAddSuccess = findByTestAttribute(wrapper, 'dishAddSuccess');

      expect(dishAddSuccess.length).toBe(1);
    })
  });

  it('updated store correctly after unsuccessful submission', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();

      request.respondWith({
        status: 400,
      })
    });

    return store.dispatch(addDish(newDish))
    .then(() => {
      wrapper.update();

      const dishAddFail = findByTestAttribute(wrapper, 'dishAddFail');

      expect(dishAddFail.length).toBe(1);
    })
  });
});



