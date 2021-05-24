import React, {ChangeEvent} from 'react';

export interface IPropTypes {
  inputId: string;
  label: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

export const TextInput: React.FC<IPropTypes> = (props) => (
  <div className="mb-3" data-test="textInput">
    <label
      htmlFor={props.inputId}
      className="visually-hidden"
      data-test="textInputLabel"
    >
      {props.label}
    </label>
    <input
      data-test="textInputField"
      type="text"
      className="form-control"
      id={props.inputId}
      name={props.inputId}
      onChange={props.onChange}
      value={props.value}
    />
  </div>
);
