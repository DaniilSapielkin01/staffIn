import React, { Component } from 'react';
import classnames from 'classnames';
import { UncontrolledTooltip } from 'reactstrap';
import pt from 'prop-types';
import { TimePicker as TimePickerReact } from 'antd';
import './TimePicker.scss'
import { ReactComponent as IconError } from '../../../assets/icons/error.svg';
import { withLabelControl } from '../../../hoc/withLabelControl';
import {generateID} from '../../../helpers/utils';


class TimePicker extends Component {
  state = {
    tooltipId: generateID(),
  };

  static propTypes = {
    /**
     * flag for indicate an error
     */
    isError: pt.bool,
    /**
     * flag for required value
     */
    isDisabled: pt.bool,
    /**
     * error message for input
     */
    errorMessage: pt.string,
    /**
     * Readonly
     */
    readOnly: pt.bool,
  };


  render() {
    const {
      isError,
      errorMessage,
      isDisabled,
      readOnly,
    } = this.props;
    const { tooltipId } = this.state;
    return (
      <div className="c-text-field w-100 border-0 px-0">
        <div className={
          classnames(
            ' d-flex align-items-center c-text-field__w-input w-100',
            {
              'c-text-field__is-invalid': isError,
              'disabled': isDisabled,
              'readonly': readOnly,
            }
          )}
        >
          <TimePickerReact {...this.props} />

          {isError ? (
            <div className="d-flex error">
              <IconError id={`tooltip-error-${tooltipId}`} width={18} height={18}/>
              <UncontrolledTooltip className="error" placement="right" target={`tooltip-error-${tooltipId}`}>
                {errorMessage}
              </UncontrolledTooltip>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}
export default withLabelControl(TimePicker);
