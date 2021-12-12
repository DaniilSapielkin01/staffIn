import React, { Component } from 'react';
import { defaultTimeout, successDefaultTimeout } from '../../../constants/defaultValues';

import {
  NOTIFICATION_DANGER,
  NOTIFICATION_INFO,
  NOTIFICATION_SUCCESS,
  NOTIFICATION_WARNING
} from '../../../constants/popupModalTypes'
import NotificationManager from './NotificationManager';
import Notifications from './Notifications';

export const TYPES = [
  NOTIFICATION_DANGER,
  NOTIFICATION_INFO,
  NOTIFICATION_SUCCESS,
  NOTIFICATION_WARNING
]


class NotificationContainer extends Component {
  constructor(props) {
    super(props);
    NotificationManager.addChangeListener(this.handleStoreChange);
    this.state = {
      notifications: [],

    };
  }
  componentDidMount() {
      this.setState({
        notifications: this.props.common.message,
      })
  }

  componentWillUnmount = () => {
    NotificationManager.removeChangeListener(this.handleStoreChange);
  };

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    if (this.props.common !== nextProps.common) {
      let common = nextProps.common

      this.setState({
        notifications: common.message,
      })
      return true
    }
    return true
  }

  handleStoreChange = (notifications) => this.setState({notifications})
  hideMessage = (notification) => {
    let data = this.state.notifications.filter(n => n.id !== notification.id)
    this.setState({
      notifications:data
    })
  }

  render() {

    return (
      <>
        <Notifications
          notifications={this.state.notifications}
          onRequestHide={this.hideMessage}
        />
      </>
    );
  }
}

export default NotificationContainer
