import React, { ChangeEventHandler, memo } from 'react';
import { TextFieldProps } from './TextField.types';
import './TextField.css';

function TextFieldComponent({
  label,
  placeholder,
  containerClassName = '',
  inputType,
  value,
  onChange,
  errorText,
  isInvalid,
  disabled,
}: TextFieldProps) {
  const onInputChange: ChangeEventHandler<HTMLInputElement> = (evt) => onChange(evt.target.value);
  return (
    <div className={`mb-3 ${containerClassName}`}>
      <label htmlFor={label} className="form-label">
        {label}
      </label>
      <input
        type={inputType}
        className={`form-control ${isInvalid}`}
        id={label}
        placeholder={placeholder}
        value={value}
        onChange={onInputChange}
        disabled={disabled}
      />
      {errorText && <div className="invalid">{errorText}</div>}
    </div>
  );
}

export const TextField = memo(TextFieldComponent);
