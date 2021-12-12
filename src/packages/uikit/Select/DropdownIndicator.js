import React from 'react'
import { ReactComponent as IconDropdown } from '../../../assets/icons/dropdown-indicator.svg';

const DropdownIndicator = () => (
  <div className="px-1 cursor-pointer" style={{color:"#00A0FF"}}>
    <IconDropdown width={10} height={10} />
  </div>
);

export default DropdownIndicator
