import React, {ChangeEvent} from 'react';
import {shallow, ShallowWrapper} from 'enzyme';

import {findByTestAttribute} from '../../utils/testUtils';
import {TextInput, IPropTypes} from './TextInput';

describe('renders TextInput', () => {
  const wrapper = shallow(<TextInput />);
  it('renders without error', () => {
    const textInputComponent = findByTestAttribute(wrapper, 'textInput');

    expect(textInputComponent.length).toBe(1);
  });
});

describe('renders correctly with props passed', () => {
  let mockOnChange: (event: ChangeEvent<HTMLInputElement>) => void;
  let textInputProps: IPropTypes;
  let wrapper: ShallowWrapper<typeof TextInput>;;
  beforeEach(() => {
    mockOnChange = jest.fn();
    textInputProps = {
      inputId: 'testID',
      label: 'testLabel',
      value: '',
      onChange: mockOnChange,
    }
    wrapper = shallow(<TextInput {...textInputProps} />);
  });

  it('renders with passed props', () => {
    const textInputLabel = findByTestAttribute(wrapper, 'textInputLabel');
    const textInputField = findByTestAttribute(wrapper, 'textInputField');

    expect(textInputLabel.text()).toBe('testLabel');

    expect(textInputField.props().id).toBe('testID');

    expect(textInputField.props().value).toBe('');
  });

  it('changes value when typing to input field', () => {
    const textInputField = findByTestAttribute(wrapper, 'textInputField');

    textInputField.at(0).simulate('change');

    expect(mockOnChange).toHaveBeenCalled();
  });
});