import chroma from 'chroma-js';
import { get } from 'lodash';

export default {
  indicatorsContainer: () => ({
    padding: '0.393rem 0.571rem',
    display: 'flex',
    alignItems: 'center'
  }),

  menu: styles => ({
    ...styles,
    boxShadow: '0px 6px 24px rgba(0, 0, 0, 0.1)',
    zIndex: '10',
    border: '1px solid #EBEBF8',
    borderTop: '0px',
    margin: '0px',
  }),

  placeholder: (styles, { selectProps: { isDisabled } }) => {

    return ({
      ...styles,
      fontWeight: '500',
      fontSize: '1rem',
      letterSpacing: '-0.021rem',
      color: isDisabled ? '#EEEEEE' : '#454B60',
    })
  },

  dropdownIndicator: styles => ({
    ...styles,
    margin: '0',
  }),

  control: (styles, { selectProps: { isError, label, isDisabled }}) => {
    const padding = label ? { padding: '0.786rem 0.143rem' } : {};

    return ({
      display: 'flex',
      alignItems: 'center',
      outline: '0 !important',
      justifyContent: 'space-between',
      position: 'relative',
      transition: 'all 100ms',
      border: `1px solid ${!isError ? '#E9E9F3' : '#f6555f'}`,
      borderBottomLeftRadius: isError ? "0" : "0.286rem",
      minHeight: '24px',
      backgroundColor: isDisabled ? '#EEEEEE' : '#ffffff',
      height: 'inherit',
      ...padding,
    })
  },

  container: styles => ({
    ...styles,
    width: '100%',
    height:'100%'
  }),

  valueContainer: (styles, { selectProps: { label } }) =>({
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: 'auto',
    cursor: 'pointer',
    display: 'flex',
    height: 'auto',
    flexWrap: 'wrap',
    flex: '1 1 0%',
    overflow: 'hidden',
    position: 'relative',
    left: '10px',
    top: label ? '7px' : "0px",
  }),
  menuList: styles => ({
    ...styles,
     padding: '0.714rem',
  }),
  option: (styles, { isDisabled, isFocused }) => ({
    ...styles,
    padding: '0.643rem 0.714rem',
    color: '#181D1F',
    backgroundColor: (!isDisabled && ((isFocused && '#fafaff') || null)) || null,
    borderRadius: '5px',
    cursor: isDisabled ? 'not-allowed' : 'pointer',
  }),

  multiValue: (styles, { data }) => ({
    ...styles,
    backgroundColor: get(data, 'color', 'grey'),
    borderRadius: '.25rem',
    lineHeight: 'initial',
    fontSize: '0.875rem',
    margin: '2px',
    display: 'inline-flex',
  }),

  multiValueLabel: (styles, { data }) => ({
    ...styles,
    color: chroma.contrast(chroma(get(data, 'color', 'grey')), 'white') > 2 ? 'white' : 'black',
  }),

  multiValueRemove: (styles, { data }) => ({
    ...styles,
    color: chroma.contrast(chroma(get(data, 'color', 'grey')), 'white') > 2 ? 'white' : 'black',
    ':hover': {
      backgroundColor: 'transparent',
    },
  }),

  controlLabel: {
    position: 'absolute',
    top: '8px',
    left: '15px',
    fontSize: '0.857rem',
    letterSpacing: '-0.3px',
    color: '#8A8FA0'
  }
};
