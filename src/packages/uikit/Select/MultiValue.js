import React from 'react';

const MultiValue = props => {
  const { children, innerProps, innerRef, selectProps, value } = props;

  const selectedValue = selectProps.value;

  return (
    <span className="pr-2 text-truncate" ref={innerRef} {...innerProps}>
      {(selectedValue.map ? selectedValue : [selectedValue]).map(v => {
        const key = Object.keys(v).find(key => v[key] === value);
        return v[key];
      //  TODO Check if why we pass children twice
      }).indexOf(value) + 1 === selectedValue.length ? children : `${children}`}
    </span>
  );
};

export default MultiValue;
