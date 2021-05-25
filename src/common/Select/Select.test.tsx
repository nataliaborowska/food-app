import React, {ChangeEvent} from 'react';
import {shallow, ShallowWrapper} from 'enzyme';

import {findByTestAttribute} from '../../utils/testUtils';
import {Select, IPropTypes} from './Select';

describe('renders TextInput', () => {
  let mockOnChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  let selectProps: IPropTypes;
  let wrapper: ShallowWrapper<typeof Select>;
  beforeEach(() => {
    mockOnChange = jest.fn();
    selectProps = {
      selectId: 'testID',
      label: 'testLabel',
      values: ['A', 'B'],
      value: 'A',
      onChange: mockOnChange,
    }
    wrapper = shallow(<Select {...selectProps} />);
  });

  it('renders without error', () => {
    const selectComponent = findByTestAttribute(wrapper, 'select');

    expect(selectComponent.length).toBe(1);
  });
});

describe('renders correctly with props passed', () => {
  let mockOnChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  let selectProps: IPropTypes;
  let wrapper: ShallowWrapper<typeof Select>;
  beforeEach(() => {
    mockOnChange = jest.fn();
    selectProps = {
      selectId: 'testID',
      label: 'testLabel',
      values: ['A', 'B'],
      value: 'A',
      onChange: mockOnChange,
    }
    wrapper = shallow(<Select {...selectProps} />);
  });

  it('renders with passed props', () => {
    const selectLabel = findByTestAttribute(wrapper, 'selectLabel');
    const selectField = findByTestAttribute(wrapper, 'selectField');

    expect(selectLabel.text()).toBe('testLabel');

    expect(selectField.props().id).toBe('testID');

    expect(selectField.props().value).toBe('A');

    expect(selectField.children()).toHaveLength(2);
  });

  it('changes value when typing to input field', () => {
    const selectField = findByTestAttribute(wrapper, 'selectField');

    selectField.at(0).simulate('change');

    expect(mockOnChange).toHaveBeenCalled();
  });
});