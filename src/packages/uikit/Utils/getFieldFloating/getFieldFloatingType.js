import React from 'react';

import {
  FIELD_FLOATING_EDIT_TEXT,
  FIELD_FLOATING_EMAIL,
  FIELD_FLOATING_TEXT,
  FIELD_FLOATING_PASSWORD,
  FIELD_FLOATING_CUSTOM_ICON
} from '../../../../constants/defaultValues';
import { ReactComponent as IconUser } from '../../../../assets/icons/user-input.svg';
import { ReactComponent as IconEmail } from '../../../../assets/icons/at-sign.svg';
import { ReactComponent as IconEditText } from '../../../../assets/icons/pancel-reset-password.svg';
import { ReactComponent as IconEyeClose } from '../../../../assets/icons/eye-close.svg';
import { ReactComponent as IconEye } from '../../../../assets/icons/eye-sign.svg';

import cn from 'classnames'
import classnames from 'classnames';

import classes from './getFieldFloating.module.scss'

export const getFieldFloatingType = (
  customIcon,
  incomeType,
  setPasswordShown,
  passwordShown,
  focus,
  error,
  success = false,
  ) => {

  const customClass = classnames({
    error: error,
    default: !focus && !error,
    focus: focus && !error && !success,
    success: success && focus && !error,
  });

  switch (incomeType) {
    case FIELD_FLOATING_TEXT:
      return <div className={cn('mr-1 mt-1', classes[customClass])}>
        <IconUser width={21} height={21} />
      </div>;
    case FIELD_FLOATING_EMAIL:
      return <div className={cn('mr-1 mt-1', classes[customClass])}>
        <IconEmail width={21} height={21} />
      </div>;
    case FIELD_FLOATING_EDIT_TEXT:
      return <div className={cn('mr-1 mt-1', classes[customClass])}>
        <IconEditText width={21} height={21} />
      </div>;

    case FIELD_FLOATING_CUSTOM_ICON:
      return <div className={cn('mr-1 mt-1', classes[customClass])}>
        {customIcon}
      </div>;

    case FIELD_FLOATING_PASSWORD :
      return (
        passwordShown
          ? <div className={cn("d-flex",classes[customClass])}>
            <IconEyeClose onClick={() => setPasswordShown(!passwordShown)} width={29} height={24} />
          </div>
          : <div className={cn("d-flex",classes[customClass])}>
            <IconEye width={29} height={24} onClick={() => setPasswordShown(!passwordShown)} />
          </div>
      );

    default:
      return null
  }
};
