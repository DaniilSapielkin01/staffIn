import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from 'reactstrap';
import './Modal.scss';

class CustomModal extends PureComponent {
  static propTypes = {
    isOpen: PropTypes.bool,
    className: PropTypes.string,
    header: PropTypes.any,
    footer: PropTypes.any,
    children: PropTypes.any,
    toggle: PropTypes.func,
  };

  render() {
    const {
      isOpen,
      className,
      header,
      footer,
      toggle,
      children,
      ...props
    } = this.props;

    return (
      <Modal isOpen={isOpen} toggle={toggle} className={className}>
        {
          header ?
            <ModalHeader className={props.outbound && 'out-modal'} toggle={toggle}>{ header }</ModalHeader> : null
        }
        <ModalBody>
          { children }
        </ModalBody>
        {
          footer ?
            <ModalFooter className={props.outbound && 'out-footer'}>{ footer }</ModalFooter> : null
        }
      </Modal>
    );
  }
}
export default CustomModal;
