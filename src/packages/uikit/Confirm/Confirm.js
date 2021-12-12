import React  from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'reactstrap';

import {
  CONFIRM_ERROR_POPUP,
  CONFIRM_INFO_POPUP,
  CONFIRM_SUCCESSFULLY_POPUP
} from '../../../constants/defaultValues';

import { get } from 'lodash';

import classnames from "classnames";

import Button from '../Button';

import classes from "./Confirm.module.scss";

import { ReactComponent as IconClose } from "../../../assets/icons/close-popup.svg";
import { ReactComponent as IconRequired } from "../../../assets/icons/required-popup.svg";
import { ReactComponent as IconSuccess } from "../../../assets/icons/successfully-popup.svg";
import { ReactComponent as IconFailed } from "../../../assets/icons/failed-popup.svg";


const CONFIRM_DEFAULT = 'default';

export const THEMES = [
  CONFIRM_DEFAULT,
  CONFIRM_SUCCESSFULLY_POPUP,
  CONFIRM_INFO_POPUP,
  CONFIRM_ERROR_POPUP
];

const Confirm = ({
  closeConfirmModal,
  open,
  text,
  description,
  actionTexts,
  onConfirm,
  type,
  icon,
  width,
  height
}) => {

  const handleConfirm = () => {
    onConfirm();
    closeConfirmModal();
  };

  const handleClose = () => {
    closeConfirmModal();
  };

  const getConfirmType = incomeType => {

    if(!icon) {
      switch (incomeType) {
        case CONFIRM_SUCCESSFULLY_POPUP:
          return <IconSuccess/>;

        case CONFIRM_INFO_POPUP:
          return <IconRequired/>;

        case CONFIRM_ERROR_POPUP:
          return <IconFailed/>;

        default:
          return null
      }
    }
    return icon
  };
  return (
        <Modal isOpen={open} toggle={handleClose} style={{ maxWidth: width, width: width,  minHeight: height }}>
        <div style={{ maxWidth: width, width: width,  minHeight: height }}>
          <div className={classnames(classes.modal_confirm )}>
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

            <div className={classnames("d-flex justify-content-between", classes.actionButtons)}>

              <Button onClick={handleClose} theme="secondary">
                {get(actionTexts, 'dismiss')}
              </Button>

              <Button onClick={handleConfirm}>
                {get(actionTexts, 'confirm')}
              </Button>
            </div>
          </div>
        </div>
      </Modal>
  )
};

Confirm.propTypes = {
  open: PropTypes.bool,
  text: PropTypes.string,
  dismiss: PropTypes.string,
  confirm: PropTypes.string,
  onConfirm: PropTypes.func,
  closeConfirmModal: PropTypes.func,
  type: PropTypes.string,
};

Confirm.defaultProps = {
  open: false,
  text: '',
  description: '',
  actionTexts: {
    dismiss: 'No',
    confirm: 'Yes',
  },
  type: CONFIRM_DEFAULT,
};

export default Confirm;
