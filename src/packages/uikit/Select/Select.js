import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Select , { components } from 'react-select';
import cn from 'classnames';
import Option from './Option';
import MultiValue from './MultiValue';
import IndicatorSeparator from './IndicatorSeparator';
import ClearIndicator from './ClearIndicator';
import { NoOptionsMessage } from './NoOptionsMessage';
import DropdownIndicator from './DropdownIndicator';

import defaultStyles from './styles/default';
import './Select.scss'

const ORIENTATION_VERTICAL = 'vertical';
const ORIENTATION_HORIZONTAL = 'horizontal';
export const ORIENTATIONS = [ORIENTATION_VERTICAL, ORIENTATION_HORIZONTAL];

const DEFAULT_LABEL = 'default';
const INSIDE_LABEL = 'inside';
export const LABELS = [DEFAULT_LABEL, INSIDE_LABEL];

export const props = {
  orientation: ORIENTATIONS,
};

const Control = ({ children, ...props }) => {
  return (
     <components.Control {...props}>
        {props.selectProps.label && <span style={defaultStyles.controlLabel}> {props.selectProps.label}</span>}
        {children}
    </components.Control>
  );
};

class SelectField extends PureComponent {
  static propTypes = {
    options: PropTypes.array,
    className: PropTypes.string,
    onChange: PropTypes.func,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    required: PropTypes.bool,
    isMulti: PropTypes.bool,
    isOpenMenu: PropTypes.bool,
    isCloseMenu: PropTypes.bool,
    isClearable: PropTypes.bool,
    isError: PropTypes.bool,
    errorMessage: PropTypes.string,
  };

  static defaultProps = {
    options: [],
    orientation: ORIENTATION_VERTICAL,
    hideSelectedOptions: false,
    styles: defaultStyles,
  };

  render() {
    const {
      className,
      onChange,
      required,
      isMulti,
      isClearable,
      isError,
      errorMessage,
      orientation,
      components,
      menuPortalTarget,
      isDisabled,
      readOnly,
      customName,
      theme,
      label,
      customStyle,
      menuPosition,
      ...restProps
    } = this.props;

    const customComponents = {
      NoOptionsMessage,
      MultiValue: isMulti ? selectProps => MultiValue({
        ...selectProps,
        customName,
      }) : null,
      ClearIndicator: isClearable && ClearIndicator,
      DropdownIndicator: DropdownIndicator,
      IndicatorSeparator: selectProps => IndicatorSeparator({
        ...selectProps,
        isError,
        isDisabled,
        errorMessage,
        label
      }),
      Option,
      Control: Control,
      ...components,
    };
    return (
      <div className={
        cn('custom-select-react position-relative c-text-field d-flex w-100',
          {
            [className]: className }
        )
      }
      >
        {errorMessage && isError && <div className="custom-select-react__error-message">
          {errorMessage}
        </div>}
        <Select
          isMulti={isMulti}
          isDisabled={isDisabled || readOnly}
          components={customComponents}
          onChange={onChange}
          isError={isError}
          label={label}
          menuPosition={menuPosition && 'fixed'}
          menuPortalTarget={menuPortalTarget && document.getElementById( "selectPortal")}
          {...restProps}
        />
      </div>
    );
  }
}

export default SelectField;
