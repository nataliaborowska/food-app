import {mount, shallow} from 'Enzyme';
import axios from 'axios';
import moxios from 'moxios';
import {act} from 'react-dom/test-utils';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';

import {Dishes} from './Dishes';
import {DishList} from './components/DishList';
import {findByTestAttribute} from '../../utils/testUtils';
import {storeFactory} from '../../utils/testUtils';
import {getDishes} from '../../store/actions';

describe('testing Dishes', () => {
  let wrapper;
  let store;

  beforeEach(() => {
    store = storeFactory({});
    wrapper = mount(
      <Provider store={store}>
        <BrowserRouter>
          <Dishes />
        </BrowserRouter>
      </Provider>
    );
  });

  it('check if dishes render correctly', () => {
    const dishes = findByTestAttribute(wrapper, 'dishes');

    expect(dishes.length).toBe(1);
  });
  
  it('initially renders with loader', () => {
    expect(wrapper.find('Loader').length).toBe(1);
  });
});

describe('testing async request on page load', () => {
  let wrapper;
  let store;
  let dishList;

  beforeEach(() => {
    store = storeFactory({});
    wrapper = mount(
      <Provider store={store}>
        <BrowserRouter>
          <Dishes />
        </BrowserRouter>
      </Provider>
    );

    moxios.install();

    dishList = [
      {
        name: 'testName',
        description: 'testDescription',
        size: '2',
        type: 'vegan',
        price: '100',
      },
      {
        name: 'testName2',
        description: 'testDescription2',
        size: '3',
        type: 'vegetarian',
        price: '150',
      },
    ]
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('updates form list correctly after successful request after first render', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();

      request.respondWith({
        statue: 200,
        response: dishList,
      });
    });

    return store.dispatch(getDishes())
    .then(() => {
      const {dishes} = store.getState().dishes;

       expect(dishes).toEqual(dishList);

       wrapper.update();

       const dishesTable = findByTestAttribute(wrapper, 'dishesTable');

       expect(dishesTable.length).toBe(1);

       expect(DishList.length).toBe(1);
    });
  });

  it('updates form list correctly after unsuccessful request after first render', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();

      request.respondWith({
        status: 400,
      });
    });

    return store.dispatch(getDishes())
    .then(() => {
       wrapper.update();

       const dishListError = findByTestAttribute(wrapper, 'dishListError');

       expect(dishListError.length).toBe(1);
    });
  });
});
