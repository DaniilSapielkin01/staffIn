import chroma from 'chroma-js';
import { get } from 'lodash';

export default {
  indicatorsContainer: () => ({
    padding: '0.393rem 0.571rem',
    display: 'flex',
    alignItems: 'center',
    color:'#00A0FF',
  }),

  menu: styles => ({
    ...styles,
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.08)',
    border: '1px solid #ededed',
    borderTop: '0px',
    margin: '0px',
    color:'#00A0FF',
    position: "absolute",
    zIndex: '10',
  }),

  placeholder: (styles, { selectProps: { isDisabled } }) => {

    return ({
      ...styles,
      fontWeight: '600',
      fontSize: '1rem',
      letterSpacing: '-0.021rem',
      color: isDisabled ? '#EEEEEE' : '#00A0FF',
    })
  },

  dropdownIndicator: styles => ({
    ...styles,
    margin: '0',
    color: '#00A0FF'
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
      border: `1px solid ${!isError ? '#00A0FF' : '#f6555f'}`,
      borderRadius: '0.571rem',
      borderBottomLeftRadius: isError ? "0" : "0.571rem",
      minHeight: '40px',
      backgroundColor: isDisabled ? '#EEEEEE' : '#FDFDFD',
      color: '#00A0FF',
      ...padding,
    })
  },

  container: styles => ({
    ...styles,
    width: '100%',
    height:'100%',
  }),

  singleValue: styles => ({
    ...styles,
    color:'#00A0FF',
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
    color:'#00A0FF',
  }),

  menuList: () => ({
    padding: '0.714rem'
  }),

  option: (styles, { isDisabled, isFocused }) => ({
    ...styles,
    padding: '0.643rem 0.714rem',
    borderRadius: '5px',
    color: '#181D1F',
    backgroundColor: (!isDisabled && ((isFocused && '#fafaff') || null)) || null,
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
    color: '#00A0FF'
  }
};
