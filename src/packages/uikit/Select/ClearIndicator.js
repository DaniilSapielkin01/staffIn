import React from 'react'
import { ReactComponent as IconClear } from '../../../assets/icons/close.svg';

const ClearIndicator = ({ innerProps, innerRef }) => (
  <div
    className="px-1 text-muted cursor-pointer clear-icon"
    {...innerProps}
    ref={innerRef}
  >
    <IconClear width={10} height={10} />
  </div>
);

export default ClearIndicator
