import React, {ChangeEvent} from 'react';
import {shallow, ShallowWrapper} from 'enzyme';

import {findByTestAttribute} from '../../utils/testUtils';
import {NumberInput, IPropTypes} from './NumberInput';

describe('renders TextInput', () => {
  const wrapper = shallow(<NumberInput />);
  it('renders without error', () => {
    const numberInputComponent = findByTestAttribute(wrapper, 'numberInput');

    expect(numberInputComponent.length).toBe(1);
  });
});

describe('renders correctly with props passed', () => {
  let mockOnChange: (event: ChangeEvent<HTMLInputElement>) => void;
  let numberInputProps: IPropTypes;
  let wrapper: ShallowWrapper<typeof NumberInput>;;
  beforeEach(() => {
    mockOnChange = jest.fn();
    numberInputProps = {
      inputId: 'testID',
      isReset: true,
      label: 'testLabel',
      value: '',
      onChange: mockOnChange,
    }
    wrapper = shallow(<NumberInput {...numberInputProps} />);
  });

  it('renders with passed props', () => {
    const numberInputLabel = findByTestAttribute(wrapper, 'numberInputLabel');
    const numberInputField = findByTestAttribute(wrapper, 'numberInputField');

    expect(numberInputLabel.text()).toBe('testLabel');

    expect(numberInputField.props().id).toBe('testID');

    expect(numberInputField.props().value).toBe('');
  });

  it('changes value when typing to input field', () => {
    const numberInputField = findByTestAttribute(wrapper, 'numberInputField');

    numberInputField.at(0).simulate('change');

    expect(mockOnChange).toHaveBeenCalled();
  });
});