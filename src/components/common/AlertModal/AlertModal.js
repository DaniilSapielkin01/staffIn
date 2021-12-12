import React from 'react';
import { connect } from 'react-redux';

import { closeAlertModal } from '../../../redux/modals/actions'

import { Alert } from "@customary/uikit";

const AlertModal = ({ alertModal: { open, params }, closeAlertModal }) =>
  <Alert
    closeAlertModal={closeAlertModal}
    open={open}
    {...params}
  />;

const mapStateToProps = ({ alertModal }) => ({ alertModal });

const mapActionsToProps = { closeAlertModal };

export default connect(mapStateToProps, mapActionsToProps)(AlertModal);

