import React, { useState } from 'react'
import { UncontrolledTooltip } from 'reactstrap';

import { ReactComponent as IconError } from '../../../assets/icons/error.svg';
import {generateID} from '../../../helpers/utils';

const IndicatorSeparator = ({ isError, errorMessage, isDisabled }) => {
  const [tooltipId] = useState(generateID());

  return (
    <>
      {/*{!isDisabled && isError ? (*/}
      {/*  <div className="position-relative d-flex ml-2 mr-1 text-danger">*/}
      {/*    <IconError id={`tooltip-error-${tooltipId}`} width={18} height={18} />*/}
      {/*    <UncontrolledTooltip className="error" placement="right" target={`tooltip-error-${tooltipId}`}>*/}
      {/*      {errorMessage}*/}
      {/*    </UncontrolledTooltip>*/}
      {/*  </div>*/}
      {/*) : null}*/}
    </>
  )
};

export default IndicatorSeparator
