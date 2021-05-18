import {shallow, mount} from 'enzyme';
import axios from 'axios';
import {act} from 'react-dom/test-utils';
import {BrowserRouter} from 'react-router-dom';

import {DishAdd} from './DishAdd';

describe('testing DishAdd', () => {
  it('renders properly', () => {
    const wrapper = shallow(<BrowserRouter><DishAdd /></BrowserRouter>);

    expect(wrapper).toMatchSnapshot();
  });
});

// jest.mock(axios);


