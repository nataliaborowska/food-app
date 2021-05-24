import React, {ChangeEvent} from 'react';

export interface IPropTypes {
  inputId: string;
  label: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

export const NumberInput: React.FC<IPropTypes> = (props) => (
  <div className="mb-3" data-test="numberInput">
    <label
      htmlFor={props.inputId}
      className="visually-hidden"
      data-test="numberInputLabel"
    >
      {props.label}
    </label>
    <input
      data-test="numberInputField"
      type="number"
      className="form-control"
      id={props.inputId}
      name={props.inputId}
      onChange={props.onChange}
      value={props.value}
    />
  </div>
);
