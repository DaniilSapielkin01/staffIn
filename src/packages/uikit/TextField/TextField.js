import React, { PureComponent } from 'react';
import classnames from 'classnames';
import pt from 'prop-types';

import { ReactComponent as IconEye } from '../../../assets/icons/eye.svg';
import { ReactComponent as IconEyeClose } from '../../../assets/icons/eye-close.svg';
import { withLabelControl } from '../../../hoc/withLabelControl';
import { generateID } from '../../../helpers/utils';
import './TextField.scss';

const ORIENTATION_VERTICAL = 'vertical' ;
const ORIENTATION_HORIZONTAL = 'horizontal' ;
export const THEME_INSIDE = "inside";
const THEME_DEFAULT = "default";

export const ORIENTATIONS = [ORIENTATION_VERTICAL, ORIENTATION_HORIZONTAL];
export const THEMES = [THEME_DEFAULT,THEME_INSIDE];

const TYPE_EMAIL = 'email';
const TYPE_TEXT = 'text';
const TYPE_PASSWORD = 'password';
const TYPE_SEARCH = 'search';
const TYPE_NUMBER = 'number';

export const TYPES = [TYPE_EMAIL, TYPE_TEXT, TYPE_PASSWORD, TYPE_SEARCH, TYPE_NUMBER];

export const props = {
  orientation: ORIENTATIONS,
  types: TYPES,
};

class TextField extends PureComponent {
  state = {
    tooltipId: generateID(),
    passwordShown: false,
  };

  static propTypes = {
    /**
     * change event callback
     */
    onChange: pt.func,
    /**
     * flag for indicate an error
     */
    isError: pt.bool,
    /**
     * flag for disabled input
     */
    isDisabled: pt.bool,
    /**
     * error message for input
     */
    errorMessage: pt.string,
    /**
     * placeholder for input
     */
    placeholder: pt.string,
    /**
     * button type
     */
    type: pt.oneOf(props.types),
    /**
     * orientation for display input
     */
    orientation: pt.oneOf(props.orientation),
    /**
     * orientation for display input
     */
    className: pt.string,
  };

  static defaultProps = {
    orientation: ORIENTATION_VERTICAL,
    type: TYPE_TEXT,
  };
  setPasswordShown = isShown => {
    this.setState({
      passwordShown: isShown,
    });
  };

  render() {
    const {
      className,
      isError,
      type,
      placeholder,
      errorMessage,
      onChange,
      isDisabled,
      readOnly,
      IndicatorAfter,
      name,
      value,
      onBlur,
      theme,
      autoFocus,
    } = this.props;

    const { passwordShown } = this.state;

    return (
      <div className="c-text-field d-flex">
        <div className={
          classnames('d-flex align-items-center c-text-field__w-input',
            {'c-text-field__is-invalid': isError,
              'disabled': isDisabled,
              'readonly': readOnly,
              'inside': theme === THEME_INSIDE,
              'error': isError,
              [className]: className,
            })}
        >
          <input
            type={passwordShown ? 'text' : type}
            name={name}
            placeholder={placeholder}
            readOnly={readOnly}
            disabled={isDisabled}
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            autoFocus={autoFocus}
            className="input"
          />
          {(type === 'password')
          && (<div className="c-text-field__w-input_icon-error text-muted mr-1 cursor-pointer">
            {
              passwordShown
                ? <IconEyeClose onClick={() => this.setPasswordShown(!passwordShown)} width={18} height={18} />
                : <IconEye onClick={() => this.setPasswordShown(!passwordShown)}/>
            }
          </div>)
          }
          { isError && <div className="c-text-field_error-messages">
            {errorMessage}
          </div>}
          {
            IndicatorAfter && IndicatorAfter
          }
        </div>
      </div>
    );
  }
}
export default withLabelControl(TextField);

export const TextFieldWithoutLabel = TextField;
