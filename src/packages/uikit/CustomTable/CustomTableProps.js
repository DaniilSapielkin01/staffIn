export const headerProps = (props, { column }) => getStyles(props, column.align)
export const cellProps = (props, { cell }) => getStyles(props, cell.column.align)
export const getStyles = (props, align = 'left') => [
  props,
  {
    style: {
      justifyContent: align === 'right' ? 'flex-end' : 'flex-start',
      alignItems: 'flex-start',
      display: 'flex',
    },
  },
]
