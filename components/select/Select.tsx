import React from 'react';
import { Props } from '@/components/select/types';

const Select = ({ label, name, value, options, onChange }: Props) => {
  return (
    <div className="form-control w-full max-w-xs">
      <label className="label" htmlFor={name}>
        <span className="label-text">{label}</span>
      </label>
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className="select select-primary w-full max-w-xs"
      >
        {options.map((option) => (
          <option key={option.key} value={option.key}>
            {option.value}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
