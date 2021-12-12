import React from 'react';
import './styles.scss';
import classnames from 'classnames';

export const TableHead = ({ children, className }) => {

  return (
    <thead>
    <tr className={classnames('responsive-table__row responsive-table__header align-items-center', className)}>
      {children}
    </tr>
    </thead>
  )
};

export default TableHead;
