import {shallow} from 'enzyme';

import {Dish} from './Dish';
import {findByTestAttribute} from '../../../../../utils/testUtils';

describe('testing dish', () => {
  const dishes = {
    name: 'test',
    description: 'test',
    size: 2,
    price: 2,
    _id: 'test',
  };

  it('renders properly', () => {
    const wrapper = shallow(<Dish dishes={dishes} />);
    const dish = findByTestAttribute(wrapper, 'dish');

    expect(dish.length).toBe(1);
  });
});