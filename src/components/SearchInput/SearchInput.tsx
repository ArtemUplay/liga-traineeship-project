import React, { ChangeEventHandler, MouseEvent } from 'react';
import './SearchInput.css';
import { SearchInputProps } from './SearchInput.types';

export function SearchInput({ disabled, onChange, value, onReset, isInvalid }: SearchInputProps) {
  const onSearchInputChange: ChangeEventHandler<HTMLInputElement> = (evt) => onChange(evt.target.value);

  const onResetBtnClick = (evt: MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault();
    if (onReset) onReset();
  };

  return (
    <div className="search-panel">
      <input
        disabled={disabled}
        className={`form-control search-input ${isInvalid}`}
        placeholder="search"
        onChange={onSearchInputChange}
        value={value}
      />
      <button className="close" onClick={onResetBtnClick}>
        <i className="fa fa-close"></i>
      </button>
    </div>
  );
}
