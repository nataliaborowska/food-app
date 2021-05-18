import {mount, shallow} from 'Enzyme';
import axios from 'axios';
import {act} from 'react-dom/test-utils';
import {BrowserRouter} from 'react-router-dom';

import {Dishes} from './Dishes';
import {DishList} from './components/DishList';

describe('testing Dishes', () => {
  it('check if dishes render correctly', () => {
    const wrapper = shallow(<BrowserRouter><Dishes /></BrowserRouter>);

    expect(wrapper).toMatchSnapshot();
  });
});

jest.mock('axios');

const dishesArray = [{
  name: 'test',
  description: 'test',
  size: 2,
  price: 2,
  _id: 'test',
}];

const data = {
  data: dishesArray,
};

describe('test loading dishes', () => {
  let wrapper;

  afterEach(() => jest.clearAllMocks());

  it('renders with loading', () => {
    wrapper = shallow(<BrowserRouter><Dishes /></BrowserRouter>);

    expect(wrapper.dive().dive().dive().dive().find('.dishes__loading').text()).toBe('Loading ...');
  });

  it('loads dishes', async () => {
    await act(async () => {
      await axios.get.mockImplementationOnce(() => Promise.resolve(data))
      wrapper = mount(<BrowserRouter><Dishes /></BrowserRouter>)
    });

    wrapper.update();

    await expect(axios.get).toHaveBeenCalledWith('http://localhost:5000/dishes');

    await expect(axios.get).toHaveBeenCalledTimes(1);

    await expect(wrapper.find(DishList).props().dishes.sort()).toEqual(dishesArray.sort())
  })
})