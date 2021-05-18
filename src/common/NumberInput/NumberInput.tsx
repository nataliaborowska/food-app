import React, {useEffect, useState} from 'react';

interface IPropTypes {
  isReset: boolean;
  inputId: string;
  label: string;
}

export const NumberInput: React.FC<IPropTypes> = (props) => {
  const [value, setValue] = useState('');
  const handleFieldChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    if (props.isReset) {
      setValue('');
    }
  }, [props.isReset]);

  return (
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
        onChange={handleFieldChange}
        value={value}
      />
    </div>
  );
}
