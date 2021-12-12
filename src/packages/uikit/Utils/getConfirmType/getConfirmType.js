import React from 'react';

import { CONFIRM_ERROR_POPUP, CONFIRM_INFO_POPUP, CONFIRM_SUCCESSFULLY_POPUP } from '../../../../constants/defaultValues';
import { ReactComponent as IconSuccess } from '../../../../assets/icons/successfully-popup.svg';
import { ReactComponent as IconRequired } from '../../../../assets/icons/required-popup.svg';
import { ReactComponent as IconFailed } from '../../../../assets/icons/failed-popup.svg';

export const getConfirmType = incomeType => {

  switch (incomeType) {
    case CONFIRM_SUCCESSFULLY_POPUP:
      return <IconSuccess />;

    case CONFIRM_INFO_POPUP:
      return <IconRequired />;

    case CONFIRM_ERROR_POPUP:
      return <IconFailed />;

    default:
      return null
  }
};
