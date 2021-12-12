import React from 'react'
import {
  NOTIFICATION_DANGER,
  NOTIFICATION_INFO,
  NOTIFICATION_SUCCESS,
  NOTIFICATION_WARNING
} from '../../../../constants/popupModalTypes';
import { ReactComponent as IconError } from '../../../../assets/icons/error-icon-notification.svg';
import { ReactComponent as IconWarning } from '../../../../assets/icons/warning-icon-notification.svg';
import { ReactComponent as IconInfo } from '../../../../assets/icons/info-icon-notification.svg';
import { ReactComponent as IconSuccessToo } from '../../../../assets/icons/icon-success.svg';
import { ReactComponent as IconSuccess } from '../../../../assets/icons/success-icon-notification.svg';

import classes from './getNotificationType.module.scss'

export const getNotificationType = incomeType => {
  switch (incomeType) {
    case NOTIFICATION_DANGER:
      return <div className={classes.error}><IconError/></div>
    case NOTIFICATION_WARNING:
      return <div className={classes.warning}><IconWarning/></div>
    case NOTIFICATION_INFO:
      return <div className={classes.info}><IconInfo/></div>
    case NOTIFICATION_SUCCESS:
      return <div className={classes.iconsSuccess}>
        <IconSuccessToo className={classes.iconVector}/>
        <IconSuccess/>
      </div>
    default:
      return null
  }
}
