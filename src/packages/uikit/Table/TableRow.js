import React from 'react';
import './styles.scss';
import classnames from 'classnames';

export const TableRow = ({ children, className }) => {

  return (
    <tr className={classnames('responsive-table__row align-items-center', className)}>
      {children}
    </tr>
  )
};

export default TableRow;
