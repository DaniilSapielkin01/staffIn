import React, { useState } from 'react';
import { Modal } from 'reactstrap';

import classes from './CustomPopup.module.scss';

const CustomPopup = ({ isOpen }) => {
  const [ modal, setModal ] = useState(isOpen);
  const toggle = () => setModal(!modal);

  return (
    <Modal
       isOpen={modal}
       toggle={toggle}
    >
      custom Popup
    </Modal>
  )
};

export default CustomPopup;