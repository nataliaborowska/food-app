import React, {useEffect, useState} from 'react';

interface IPropTypes {
  isReset: boolean;
  inputId: string;
  label: string;
}

export const TextInput: React.FC<IPropTypes> = (props) => {
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
        onChange={handleFieldChange}
        value={value}
      />
    </div>
  );
}
