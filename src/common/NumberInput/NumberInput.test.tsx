import {shallow} from 'enzyme';

import {findByTestAttribute} from '../../utils/testUtils';
import {NumberInput} from './NumberInput';

describe('renders NumberInput', () => {
  const wrapper = shallow(<NumberInput />);
  it('renders without error', () => {
    const numberInputComponent = findByTestAttribute(wrapper, 'numberInput');

    expect(numberInputComponent.length).toBe(1);
  });
});

describe('renders correctly with props passed', () => {
  it('renders with passed props', () => {
    const numberInputProps = {
      inputId: 'testID',
      isReset: true,
      label: 'testLabel',
    }
    const wrapper = shallow(<NumberInput {...numberInputProps} />);

    const numberInputLabel = findByTestAttribute(wrapper, 'numberInputLabel');
    const numberInputField = findByTestAttribute(wrapper, 'numberInputField');

    expect(numberInputLabel.text()).toBe('testLabel');

    expect(numberInputField.props().id).toBe('testID');

    expect(numberInputField.props().value).toBe('');
  });

  it('changes value when typing to input field', () => {
    const numberInputProps = {
      inputId: 'testID',
      isReset: false,
      label: 'testLabel',
    }
    const wrapper = shallow(<NumberInput {...numberInputProps} />);

    const numberInputField = findByTestAttribute(wrapper, 'numberInputField');

    numberInputField.at(0).simulate('change', {
      target: {
        name: 'testID',
        value: '2'
      }
    });

    const numberInputFieldUpdated = findByTestAttribute(wrapper, 'numberInputField');

    expect(numberInputFieldUpdated.props().value).toEqual('2');
  });
});