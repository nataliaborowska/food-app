import {shallow} from 'Enzyme';

import {DishList} from './DishList';
import {Dish} from './Dish';

describe('testing DishList component', () => {
  const dishesEmpty = []

  it('testing if component renders correctly', () => {
    const wrapper = shallow(<DishList dishes={dishesEmpty} />);

    expect(wrapper).toMatchSnapshot();
  });

  const dishesFull = [{
    name: 'test',
    description: 'test',
    size: 2,
    price: 2,
    _id: 'test',
  }];

  it('renders one list element', () => {
    const wrapper = shallow(<DishList dishes={dishesFull} />);

    expect(wrapper.find(Dish).length).toEqual(1);
  });
});