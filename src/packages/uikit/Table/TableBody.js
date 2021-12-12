import React from 'react';
import './styles.scss';
import classnames from 'classnames';

export const TableBody = ({ children, className }) => {

  return (
    <tbody className={classnames(className)}>
    {children}
    </tbody>
  )
};

export default TableBody;
