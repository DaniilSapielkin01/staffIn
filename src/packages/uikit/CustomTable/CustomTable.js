import React, { useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import { useTable, useRowSelect, useResizeColumns, useFlexLayout } from 'react-table';
import classnames from 'classnames';
import { isArray } from 'lodash'
import {
  saveMetaData,
  generateSchema,
  sortByMetaData,
  removeNonVisible,
  differenceBetween,
} from '../../../helpers/tableMetaDataHelper';
import { headerProps, cellProps } from './CustomTableProps';
import { DEFAULT_FIELDS } from '../../../constants/defaultValues';
import { ModifyColumns, Checkbox } from '@customary/uikit'
import './CustomTable.scss';

const CustomTable = ({
  tableId,
  className,
  tableType,
  handleSort,
  getRowProps,
  selectedIds,
  emptyMessage,
  withCheckbox,
  withColModify,
  updateMetaData,
  handleCheckModuleRow,
  ...props
}) => {

  const [initialCols, setInitialCols] = useState([]);
  const [hiddenColumns, setHiddenColumns] = useState([]);
  const [sortBy, setSortBy] = useState({});
  const [resizing, setResizing] = useState("");
  const [dragOver, setDragOver] = useState("");
  const [dragIx, setDragIx] = useState("");

  const modifyColumns = (metadata, columns) => {
    const _metadata = sortByMetaData(columns, metadata);
    update(_metadata)
  };

  const getSelectMark = schema => ({
    id: 'select-mark',
    Header: (
      withColModify ?
        <ModifyColumns
          schema={schema}
          disabledNames={[DEFAULT_FIELDS.NAME]}
          nameKeys='id'
          onChangeList={modifiedCols => modifyColumns(modifiedCols, schema)}
        />
        : <></>
    ),
    accessor: 'select-mark',
    disableResizing: true,
    disableMoving: true,
    enableSorting: false,
    width: 80,
    Cell: ({ row: { original } }) => (
      <div className="d-flex">
        <Checkbox
          id={`group-row-${original.id}`}
          value={ selectedIds.includes(original.id) }
          onChange={() => handleCheckModuleRow(original)}
        />
      </div>
    )
  });

  useEffect(() => {
    const _metadata = isArray(props.metaData) && props.metaData.length ? props.metaData : [];
    const _columns = _metadata.length ? sortByMetaData(props.columns, _metadata) : props.columns;
    const schema = generateSchema(_columns, _metadata);
    const selectMark = getSelectMark(schema);
    const headers = withCheckbox ? [ selectMark, ..._columns ] : _columns;
    if ( headers.every(header => header.id) ) {
      setInitialCols(headers)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.metaData, selectedIds]);


  useEffect(() => {
    const _metadata = isArray(props.metaData) && props.metaData.length ? props.metaData : [];
    const _hiddenColumns = _metadata.map(({ visible, id }) => (visible === false && id)).filter(item => item);
    setHiddenColumns(_hiddenColumns)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialCols]);

  const { getTableProps, headerGroups, rows, prepareRow, ...restProps } = useTable({
      columns: initialCols,
      data: props.rows,
      defaultColumn: useMemo(() => ({ minWidth: 100 }), []),
      initialState: { hiddenColumns, sortBy: [{ id: 'created_at', asc: true }] }
    }, useResizeColumns, useFlexLayout, useRowSelect,
  );

  const handleDragStart = ({ target: { id }, dataTransfer }) => {
    dataTransfer.setData("colIdx", id.split('td')[1]);
    setDragIx(id.split('td')[1])
  };

  const handleDragOver = e => e.preventDefault()
  const handleDragEnter = ({ target: { id } }) => setDragOver(id);

  const handleOnDrop = ({ target: { id }, dataTransfer }) => {
    const droppedColIdx = id.split('td')[1];
    const draggedColIdx = dataTransfer.getData("colIdx");
    const tempCols = removeNonVisible(initialCols);

    const element = tempCols[draggedColIdx];
    tempCols.splice(draggedColIdx, 1);

    tempCols.splice(droppedColIdx, 0, element);

    const hiddenCols = differenceBetween(tempCols, initialCols);
    const _initialColumns = [ ...tempCols, ...hiddenCols ];

    setInitialCols(_initialColumns);
    setDragOver("");
    setDragIx("");

    saveTableState(_initialColumns)
  };

  const handleSorting = id => {
    let _sortBy = {}
    if (id in sortBy) {
      _sortBy[id] = sortBy[id] === 'desc' ? 'asc' : 'desc'
    }
    else {
      _sortBy[id] = 'desc'
    }
    setSortBy(_sortBy)
    handleSort(id, _sortBy[id])
  }

  const saveColumnWidth = () => {
    if ( resizing ) {
      saveTableState()
      setResizing('')
    }
  };

  const saveTableState = metadata => {
    let _metadata = [];
    if ( !metadata ) {
      metadata = restProps.columns.map(({ id, Header, width, visible }) => ({ id, Header, width, visible }));
      const hiddenCols = differenceBetween(metadata, initialCols);
      const _initialColumns = [ ...metadata, ...hiddenCols ];

      _metadata = sortByMetaData(initialCols, _initialColumns)
    } else {
      _metadata = sortByMetaData(initialCols, metadata)
    }

    update(_metadata)
  };

  const update = metadata => {
    if ( tableId && tableType ) {
      saveMetaData(metadata, tableId, tableType)
        .then(({ data }) => {
          updateMetaData(data[tableType][tableId])
        })
    }
  };

  const getColsProps = (disableMoving, colI) => (
    !disableMoving ? ({
      onDragStart: handleDragStart,
      onDragOver: handleDragOver,
      onDragEnd: () => setDragOver(''),
      onDrop: handleOnDrop,
      onDragEnter: handleDragEnter,
      dragover: (`td${colI}` === dragOver).toString(),
      draggable: !disableMoving,
    }) : ({})
  );

  return (
    <div className="table">
      <div {...getTableProps()} className="table-container">
        <div className="thead">
          {headerGroups.map(headerGroup => (
            <div
              {...headerGroup.getHeaderGroupProps()}
              className="tr"
            >
              {headerGroup.headers.map((column, colI) => (
                <div
                  {...column.getHeaderProps(headerProps)}
                  className={
                    classnames('th d-flex align-items-center', {
                      'is-drag': (
                        (`td${colI}` === dragOver) && (`td${colI}` !== `td${dragIx}`)
                      )
                    })
                  }
                >
                  <div
                    id={ `td${colI}` }
                    className={ classnames({
                      "draggable" : !column.disableMoving,
                      "non-draggable" : column.disableMoving,
                    }) }
                    { ...getColsProps(column.disableMoving, colI) }
                  >
                    {column.render('Header')}
                  </div>

                  { column.enableSorting && (
                    <div
                      onClick={ () => handleSorting(column.id) }
                      className={classnames("sorting", {
                        'up': (column.id in sortBy && sortBy[column.id] === 'asc'),
                        'down': (column.id in sortBy && sortBy[column.id] === 'desc'),
                      })}
                    />
                  )}

                  { column.canResize && !column.isResizing && column.render('Header') === resizing && saveColumnWidth() }
                  { column.canResize && !column.disableMoving && (
                    <div
                      {...column.getResizerProps()}
                      onMouseDown={e => {
                        column.getResizerProps().onMouseDown(e);
                        setResizing(column.render('Header'))
                      }}
                      className={classnames('resizer', { 'isResizing': column.isResizing } )}
                    />
                  ) }
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="tbody">
          { rows.length ?
            <>
              {rows.map(row => {
                prepareRow(row);
                return (
                  <div
                    {...row.getRowProps(getRowProps && getRowProps(row))}
                    className={
                      classnames("tr", {
                        [row.getRowProps(getRowProps && getRowProps(row)).className]: row.getRowProps(getRowProps && getRowProps(row)).className
                      })
                    }
                  >
                    {
                      row.cells.map((cell, cellI) => (
                        <div
                          {...cell.getCellProps(cellProps)}
                          dragover={ (initialCols[cellI] === dragOver).toString() }
                          className="td"
                        >
                          {cell.render('Cell')}
                        </div>
                      ))
                    }
                  </div>
                )
              })}
            </>
            :
            <div className="tr empty-row text-center">
              <div className="td">{ emptyMessage || 'No Data' }</div>
            </div>
          }
        </div>
      </div>
    </div>
  )
}

CustomTable.defaultProps = {
  rows: [],
  metaData: [],
  withCheckbox: true,
  updateMetaData: () => {},
  withColModify: true,
  handleSort: () => {},
};

CustomTable.propTypes = {
  rows: PropTypes.array.isRequired,
  className: PropTypes.string,
  getRowProps: PropTypes.func,
  withCheckbox: PropTypes.bool,
  emptyMessage: PropTypes.string,
  withColModify: PropTypes.bool,
  handleCheckModuleRow: PropTypes.func,
  metaData: PropTypes.any,
  columns: PropTypes.array.isRequired,
  tableId: PropTypes.number,
  tableType: PropTypes.string,
  updateMetaData: PropTypes.func,
  handleSorting: PropTypes.func,
}

export default CustomTable;
