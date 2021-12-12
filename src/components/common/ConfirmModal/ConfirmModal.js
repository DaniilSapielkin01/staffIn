import React from 'react';
import { connect } from 'react-redux';

import { closeConfirmModal } from '../../../redux/modals/actions'
import  Confirm  from '../../../packages/uikit/Confirm'

const ConfirmModal = ({ closeConfirmModal, confirmModal }) =>
   <Confirm
     closeConfirmModal={closeConfirmModal}
     open={confirmModal.open}
     {...confirmModal.params}
   />;

const mapStateToProps = ({ confirmModal }) => ({ confirmModal });
const mapActionsToProps = { closeConfirmModal };

export default connect(mapStateToProps, mapActionsToProps)(ConfirmModal);

