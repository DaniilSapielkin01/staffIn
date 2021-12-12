import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Modal,
  ModalHeader,
  ModalBody,
} from 'reactstrap';

// import { closeContentModal } from '../../../redux/modals/actions'
import classnames from 'classnames';

class ContentModal extends Component {
  onContent = () => {
    const { contentModal: { params }, closeContentModal } = this.props;

    params.onContent({ saved: true });
    closeContentModal();
  };

  render() {
    const { contentModal: { headerText, Component, params, open, fullScreen }, closeContentModal } = this.props;

    return (
      <Modal isOpen={open} toggle={closeContentModal} className={classnames({ 'fullscreen': fullScreen })}>
        {headerText && (
          <ModalHeader toggle={closeContentModal}>
            {headerText}
          </ModalHeader>
        )}
        <div className={classnames({ 'd-flex flex-column flex-grow-1 container-fluid': fullScreen })}>
          {Component && <Component params={params} closeContentModal={closeContentModal} />}
        </div>
      </Modal>
    );
  }
}

const mapStateToProps = ({ contentModal }) => ({ contentModal });

const mapActionsToProps = { closeContentModal };

export default connect(mapStateToProps, mapActionsToProps)(ContentModal);

