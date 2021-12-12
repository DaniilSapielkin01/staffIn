import React from 'react';
import PropTypes from 'prop-types';

import { defaultTimeout, successDefaultTimeout } from '../../../constants/defaultValues';
import { ReactComponent as IconClose } from "../../../assets/icons/close-notification.svg";
import { getNotificationType } from '../Utils/getNotificationType/getNotificationType';

import {
  NOTIFICATION_DANGER,
  NOTIFICATION_INFO,
  NOTIFICATION_SUCCESS,
  NOTIFICATION_WARNING
} from "../../../constants/popupModalTypes";
import classnames from 'classnames';
import classes from './Notification.module.scss'

class Notification extends React.Component {
  static propTypes = {
    type: PropTypes.oneOf([
      NOTIFICATION_DANGER,
      NOTIFICATION_INFO,
      NOTIFICATION_SUCCESS,
      NOTIFICATION_WARNING,
    ]),
    title: PropTypes.node,
    message: PropTypes.node.isRequired,
    timeOut: PropTypes.number,
    onClick: PropTypes.func,
    onRequestHide: PropTypes.func,
    customClassName: PropTypes.string,
  };

  static defaultProps = {
    type: 'info',
    title: null,
    message: null,
    timeOut: defaultTimeout,
    onClick: () => {
    },
    customClassName: '',
  };

  componentDidMount = () => {
    const { timeOut , type} = this.props;
    if (timeOut !== 0) {
      this.timer = setTimeout(this.requestHide, type === NOTIFICATION_SUCCESS  ? successDefaultTimeout : timeOut);
    }
  };

  componentWillUnmount = () => {
    if (this.timer) {
      clearTimeout(this.timer);
    }
  };

  requestHide = () => {
    const { onRequestHide,id } = this.props;
    onRequestHide(id)
  };


  render() {
    const { type, message } = this.props;

    let classesType = classnames({
      error: type === NOTIFICATION_DANGER,
      info: type === NOTIFICATION_INFO,
      warning: type === NOTIFICATION_WARNING,
      success: type === NOTIFICATION_SUCCESS
    })


    let classNames = classnames([classes.bodyNotification], [classes[classesType]]);


    return (
      <div className={classNames}>
        <div className={classes.notificationMessage} role="alert">
          <div className={classes.iconAction}>
            {getNotificationType(type)}
          </div>
          <span>{message}</span>
          <div className={classes.iconClose} onClick={this.requestHide}><IconClose/></div>
        </div>
      </div>
    );
  }
}

export default Notification;
