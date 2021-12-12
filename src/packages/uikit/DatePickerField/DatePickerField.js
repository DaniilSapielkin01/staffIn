import React from 'react';
import { DatePicker } from 'antd';
import '../../../assets/sass/partials/ant.css';

import cn from 'classnames';

import moment from 'moment';

const DatePickerField = props =>  {
    const {
      isError,
      errorMessage,
      isDisabled,
      readOnly,
      format,
      value,
      withBorder,
      ...rest
    } = props;

    const date = moment(value, format);

    return (
        <div className="d-flex w-100 position-relative">
          <DatePicker
            {...rest}
            format={format}
            className={cn({ error: errorMessage, withBorder: withBorder })}
            value={date.isValid() ? date : null}
            disabled={isDisabled}
          />

          {isError ? (
            <div className="d-flex error">
              <div className="c-text-field_error-messages">
                {errorMessage}
              </div>
            </div>
          ) : null}
        </div>
    );
};

export default DatePickerField;
