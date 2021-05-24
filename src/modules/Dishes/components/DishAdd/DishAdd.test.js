import {shallow, mount} from 'enzyme';
import moxios from 'moxios';
import {BrowserRouter} from 'react-router-dom';

import {DishAdd} from './DishAdd';
import {Loader} from '../../../../common/Loader';
import {findByTestAttribute} from '../../../../utils/testUtils';

describe('testing DishAdd', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<DishAdd />);
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

  beforeEach(() => {
    wrapper = mount(<BrowserRouter><DishAdd /></BrowserRouter>);
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
    const dishSizeInputField = findByTestAttribute(wrapper, 'numberInputField').at(0);

    dishSizeInputField.simulate('change', {
      target: {
        name: 'price',
        value: '1',
      }
    });

    const dishSizeInputFieldUpdated = findByTestAttribute(wrapper, 'numberInputField').at(0);

    expect(dishSizeInputFieldUpdated.props().value).toEqual('1');
  });
});

describe('testing state change on form submission', () => {
  const wrapper = shallow(<DishAdd />);

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

  beforeEach(() => {
    wrapper = shallow(<DishAdd />);
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('updated store correctly after submission', () => {
    const dishAddForm = findByTestAttribute(wrapper, 'dishAddForm');

    dishAddForm.simulate('submit', {
      preventDefault: () => { }
    });

    const newDish = {
      name: 'testName',
      description: 'testDescription',
      size: '2',
      price: '100',
    }

    moxios.wait(() => {
      const request = moxios.requests.mostRecent;

      request.responseWith({
        status: 200,
        response: newDish,
      })
        .then(() => {
          console.warn("after", wrapper.debug())
          const dishAddFormUpdated = findByTestAttribute(wrapper, 'dishAddForm');

          expect(dishAddFormUpdated.length).toBe(1);
        })
    });
  })

  //const dishAddForm = findByTestAttribute(wrapper, 'dishAddForm');

  // const newDish = {
  //   name: e.currentTarget.inputName.value,
  //   description: e.currentTarget.inputDescription.value,
  //   size: e.currentTarget.inputSize.value,
  //   price: e.currentTarget.inputPrice.value,
  // }

  // dishAddForm.simulate('submit');

  // console.warn(dishAddForm.debug())
});


