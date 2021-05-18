import {shallow} from 'enzyme';

import {findByTestAttribute} from '../../utils/testUtils';
import {TextInput} from './TextInput';

describe('renders TextInput', () => {
  const wrapper = shallow(<TextInput />);
  it('renders without error', () => {
    const textInputComponent = findByTestAttribute(wrapper, 'textInput');

    expect(textInputComponent.length).toBe(1);
  });
});

describe('renders correctly with props passed', () => {
  it('renders with passed props', () => {
    const textInputProps = {
      inputId: 'testID',
      isReset: true,
      label: 'testLabel',
    }
    const wrapper = shallow(<TextInput {...textInputProps} />);

    const textInputLabel = findByTestAttribute(wrapper, 'textInputLabel');
    const textInputField = findByTestAttribute(wrapper, 'textInputField');

    expect(textInputLabel.text()).toBe('testLabel');

    expect(textInputField.props().id).toBe('testID');

    expect(textInputField.props().value).toBe('');
  });

  it('changes value when typing to input field', () => {
    const textInputProps = {
      inputId: 'testID',
      isReset: false,
      label: 'testLabel',
    }
    const wrapper = shallow(<TextInput {...textInputProps} />);

    const textInputField = findByTestAttribute(wrapper, 'textInputField');

    textInputField.at(0).simulate('change', {
      target: {
        name: 'testID',
        value: 'test'
      }
    });

    const textInputFieldUpdated = findByTestAttribute(wrapper, 'textInputField');

    expect(textInputFieldUpdated.props().value).toEqual('test');
  });
});