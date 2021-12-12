import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from "reactstrap";
import classnames from "classnames";

import { ReactComponent as IconClose } from "../../../assets/icons/close-popup.svg";
import classes from "./ContentModal.module.scss";


const ContentModal = ({
  headerText,
  params,
  open,
  Component,
  closeContentModal,
  openContentModal,
  showDismissibleMessage,
  width,
  height
}) => {
  const handleClose = () => {
    closeContentModal();
  };

  return (
   <Modal isOpen={open} toggle={handleClose}
          style={{ maxWidth: width, width: width,  minHeight: height }}>
     <div
       id='content-modal'
       className={classes.modal_content}
       style={{ maxWidth: width, width: width,  minHeight: height }}
     >
       {
         headerText &&
         <div className={classnames(classes.header)}>
           { headerText}
         </div>
       }
       <div className={classes.close__icon} onClick={handleClose}>
         <IconClose/>
         <span className={classes.close__escape}>ESC</span>
       </div>
       {
         Component && <Component
           params={params}
           closeContentModal={closeContentModal}
           openContentModal={openContentModal}
           showDismissibleMessage={showDismissibleMessage}
         />
       }
     </div>
   </Modal>
  )
};

ContentModal.propTypes = {
  open: PropTypes.bool,
  headerText: PropTypes.string,
  closeContentModal: PropTypes.func,
  openContentModal: PropTypes.func,
  showDismissibleMessage: PropTypes.func,
};

ContentModal.defaultProps = {
  open: false,
  headerText: '',
  width: 550
};

export default ContentModal;
