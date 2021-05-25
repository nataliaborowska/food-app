import React, {ChangeEvent} from 'react';
import { v4 as uuidv4 } from 'uuid';

export interface IPropTypes {
  label: string;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  selectId: string;
  values: Array<string>;
  value: string;
}

export const Select: React.FC<IPropTypes> = (props) => (
  <div className="mb-3" data-test="select">
    <label
      data-test="selectLabel"
      htmlFor={props.selectId}
      className="visually-hidden"
    >
      {props.label}
    </label>
    <select
      className="form-control"
      data-test="selectField"
      aria-label={props.label}
      onChange={props.onChange}
      id={props.selectId}
      name={props.selectId}
      value={props.value}
    >
      {props.values.map((selectValue: string) => (
        <option key={uuidv4()} value={selectValue}>{selectValue}</option>
      ))}
  </select>
  </div>
);
