import React from 'react'
import { components } from 'react-select';
import InfoTooltip from '../../../components/ui/InfoTooltip';

export const SingleValueWithNote = ({ children, data, ...props }) => (
  <components.SingleValue {...props} style={{ width: '80%' }}>
    <div className="d-flex align-items-center">
      <div className="text-truncate">{children}</div>
      <InfoTooltip placement="bottom" className="d-flex ml-1" classNameIcon="color-theme" id={data.id} hintText={data.description} width="240px" />
    </div>
  </components.SingleValue>
);
