import React, { PureComponent } from 'react';
import classnames from 'classnames';
import pt from 'prop-types';
import { Popover, PopoverBody } from 'reactstrap';
import FloatingLabelInput from 'react-floating-label-input';
import cn from 'classnames';

import { withLabelControl } from '../../../hoc/withLabelControl';
import { getFieldFloatingType } from "../Utils/getFieldFloating/getFieldFloatingType";
import {
  FIELD_FLOATING_ACTION_ERROR,
  FIELD_FLOATING_ACTION_SUCCESS,
  FIELD_FLOATING_EDIT_TEXT,
  FIELD_FLOATING_EMAIL,
  FIELD_FLOATING_PASSWORD,
  FIELD_FLOATING_TEXT,
  FIELD_FLOATING_CUSTOM_ICON
} from '../../../constants/defaultValues';
import './TextFieldFloating.scss';
import classes from './TextFieldFloating.module.scss'


export const TYPES = [
  FIELD_FLOATING_EMAIL,
  FIELD_FLOATING_PASSWORD,
  FIELD_FLOATING_TEXT,
  FIELD_FLOATING_EDIT_TEXT,
  FIELD_FLOATING_CUSTOM_ICON
];
export const ACTION_TYPES = [FIELD_FLOATING_ACTION_ERROR, FIELD_FLOATING_ACTION_SUCCESS, FIELD_FLOATING_TEXT]

export const props = {
  types: TYPES,
};

class TextFieldFloating extends PureComponent {
  state = {
    passwordShown: false,
    focus: false,
    toolTypeOpen: false,
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
    className: pt.string,
  };

  static defaultProps = {
    type: FIELD_FLOATING_TEXT,
  };

  setPasswordShown = isShown => {
    this.setState({
      passwordShown: isShown,
    });
  };

  handleOnFocus =(e)=>{
    this.setState({
      focus: e.type === 'focus'
    });
  }

  hoverToolType = ()  => {
    this.setState(prevState=>({
      toolTypeOpen: !prevState.toolTypeOpen,
    }));
  }


  render() {
    const { focus, passwordShown, toolTypeOpen } = this.state;
    const {
      className,
      isError,
      type,
      value,
      labelText,
      onBlur,
      onChange,
      errorMessage,
      name,
      readOnly,
      toolType,
      customIcon,
    } = this.props;

    const arr = value && setTimeout(() => value.length > 0, 1500)
    const isSuccess =  arr && !errorMessage && !isError;
    return (
      <div className={cn("c-text-field d-flex" ,classes.errorMessages)}>
        <div className={
          classnames('position-relative d-flex align-items-center c-text-field-floating__w-input',
            {
              'c-text-field-floating__is-change': focus,
              'c-text-field-floating__is-invalid': isError,
              [classes.errorTextField]: isError,
              'c-text-field-floating__is-success': isSuccess,
              [className]: className,
            })}>
          <FloatingLabelInput
            type={passwordShown ? "text" : type}
            label={labelText}
            onChange={onChange}
            onFocus={this.handleOnFocus}
            onBlur={onBlur}
            value={value}
            name={name}
            readOnly={readOnly}
            className={classes.floatingInput}
          />
          {
            isSuccess || isError
              ? isSuccess
              ? <div className="h-100">
                <div className={classes.iconBox} id={type}
                     onMouseEnter={this.hoverToolType}
                     onMouseLeave={this.hoverToolType}>
                  {getFieldFloatingType(customIcon, type, this.setPasswordShown,
                    passwordShown, this.state.focus, false, true)
                  }
                </div>
              </div>

              : <div className="h-100">
                <div className={classes.iconBox} id={type}
                      onMouseEnter={this.hoverToolType}
                      onMouseLeave={this.hoverToolType}>
                  {getFieldFloatingType(customIcon, type, this.setPasswordShown,
                    passwordShown, this.state.focus, true)}
                </div>
              </div>
              : type &&
              <div className="d-flex  mr-1 pr-1 h-100 error" id={type}>
                <div className={classes.iconBox}>
                  {getFieldFloatingType(customIcon, type, this.setPasswordShown,
                    passwordShown, this.state.focus,false)}
                </div>
              </div>
          }
        </div>
        {errorMessage && isError && <div className={classes.errorMessagesItem}>
          {errorMessage}
        </div>}

        {toolType &&
        <Popover
          cssModule={{'arrow':classes.customArrow, "bs-popover-auto": classes.popoverAuto}}
          placement="top"
          isOpen={toolTypeOpen}
          target={type  }
          style={{marginBottom:"14px"}}>
          <PopoverBody className={classes.toolTypeItem}>
            {toolType}
          </PopoverBody>
        </Popover> }
      </div>
    );
  }
}

export default withLabelControl(TextFieldFloating);

export const TextFieldWithoutLabel = TextFieldFloating;
