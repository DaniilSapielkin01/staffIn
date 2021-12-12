
import React from 'react';
import './styles.scss';
import classnames from 'classnames';

export const TableCell = ({ children, className, width = 180, colSpan }) => {

  return (
    <td style={{ width: width, minWidth: width }} colSpan={colSpan} className={classnames(className)}>
      {children}
    </td>
  )
};

export default TableCell;
