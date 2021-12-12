import React from 'react';
import classnames from 'classnames';
import {TableCell, TableRow} from "./index";

export const TableNoData = ({ className, colSpan }) => {
  return (
    <TableRow className={classnames(' py-4', className)}>
      <TableCell width="100%" colSpan={colSpan} className="text-muted text-center">No data</TableCell>
    </TableRow>
  )
};

export default TableNoData;
