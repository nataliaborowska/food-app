import {shallow} from 'enzyme';

import {Dish} from './Dish';

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

    expect(wrapper).toMatchSnapshot();
  });
});