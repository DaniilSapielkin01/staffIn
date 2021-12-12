import React from 'react';
import PropTypes from 'prop-types';
import classnames from "classnames";
import { Modal } from "reactstrap";

import {
  CONFIRM_ERROR_POPUP,
  CONFIRM_INFO_POPUP,
  CONFIRM_SUCCESSFULLY_POPUP
} from '../../../constants/defaultValues';
import Button from '../Button';
import { getConfirmType } from '../Utils/getConfirmType/getConfirmType';

import classes from "./Alert.module.scss";

import { ReactComponent as IconClose } from "../../../assets/icons/close-popup.svg";

const CONFIRM_DEFAULT = 'default';

export const THEMES = [
  CONFIRM_DEFAULT,
  CONFIRM_SUCCESSFULLY_POPUP,
  CONFIRM_INFO_POPUP,
  CONFIRM_ERROR_POPUP
];

const Alert = ({
  closeAlertModal,
  open,
  text,
  description,
  confirm,
  confirmAction,
  type,
  width,
  height
 }) => {
  const handleClose = () => {
    if (confirmAction) {
      confirmAction()
    }

    closeAlertModal();
  };


  return (
    <Modal isOpen={open} toggle={handleClose} style={{ maxWidth: width, width: width,  minHeight: height }}>

    <div className={classes.modal_alert} style={{ maxWidth: width, width: width,  minHeight: height }}>
        <div className={classes.close__icon} onClick={handleClose}>
          <IconClose/>
          <span className={classes.close__escape}>ESC</span>
        </div>

        <div className={classes.content}>
          <div className={classes.popupIcon}>
            <div className={classes[type]}>
              {getConfirmType(type)}
            </div>
          </div>

          <div className={classnames(classes.header, classes[type])}>
            {text && text}
          </div>
          <div className={classes.description}>
            {description && description}
          </div>
        </div>

        <div className={classnames("d-flex justify-content-center", classes.actionButtons)}>

          <Button onClick={handleClose}>
            {confirm && confirm}
          </Button>

        </div>
      </div>
    </Modal>
  )
};

Alert.propTypes = {
  open: PropTypes.bool,
  text: PropTypes.string,
  confirm: PropTypes.string,
  closeAlertModal: PropTypes.func,
  type: PropTypes.string,
};

Alert.defaultProps = {
  open: false,
  text: '',
  description: '',
  confirm: 'Close',
  type: CONFIRM_DEFAULT,
};

export default Alert;
