import {shallow} from 'Enzyme';

import App from './App';

it('renders App component', () => {
  const wrapper = shallow(<App />);

  expect(wrapper).toMatchSnapshot();
});
