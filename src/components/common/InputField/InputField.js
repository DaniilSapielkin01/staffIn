import React from 'react';

import './InputField.scss';

const InputField = ({ className, isRequired, ...restProps }) => {

  return (
    <div className={ className }>
      {restProps.label && <label className={`text-muted ${isRequired ? 'required' : ''}`}>{restProps.label}</label>}
      <input className="form-control" {...restProps} />
    </div>
  )
};

export default InputField;
