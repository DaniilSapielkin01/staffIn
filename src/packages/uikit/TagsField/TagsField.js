import React, { useState } from 'react'
import classnames from 'classnames'
import { UncontrolledTooltip } from 'reactstrap'
import pt from 'prop-types'

import { ReactComponent as IconUser } from '../../../assets/icons/user-input.svg';
import { ReactComponent as IconError } from '../../../assets/icons/error.svg'
import { ReactComponent as IconClose } from '../../../assets/icons/close.svg'

import { Field } from 'formik';
import { get, isEmpty } from 'lodash';

import './TagsField.scss'
import { generateID } from '../../../helpers/utils';

const KEY_CODE_ENTER = 13;
const KEY_CODE_BACKSPACE = 8;
const KEY_CODE_SPACE = 32;

const TagsField = ({
  placeholder,
  isDisabled,
  setFieldValue,
  errors,
  values,
}) => {

  const [tooltipId] = useState(generateID());

  const handleKeyDown = e => {
    const { keyCode, target: { value } } = e;

    if (keyCode === KEY_CODE_ENTER || keyCode === KEY_CODE_SPACE) {

      if (value.length && isEmpty(errors)) {
        setFieldValue('emails', [...values.emails, { email: value, id: generateID() }]);
        setFieldValue('email', '');
      }
    }
    if (keyCode === KEY_CODE_BACKSPACE && !value.length && values.emails.length) {

      const emails = [...values.emails];

      setFieldValue('emails',  emails.slice(0, -1))
    }
  };

  return (
    <div className="w-100 c-text-field d-flex tagfield">
      <Field name="email">
        {({ field, form: { touched, errors, setFieldValue } }) => {
          const isError = get(errors, field.name) && get(touched, field.name);
          const errorMessage = get(errors, field.name);

          return (
            <div className={
              classnames('position-relative d-flex align-items-center c-text-field__w-input w-100',
                {
                  'c-text-field__is-invalid': isError,
                  'disabled': isDisabled,
                })}
            >
              <div className="tagfield__tags w-100">
                { values.emails.map(({ email, id }) =>
                  <div className="tagfield__tags-tag" key={id}>
                    { email }
                    <div
                      className="tagfield__tags-tag_remove d-flex"
                      onClick={() => setFieldValue('emails', values.emails.filter(email => email.id !== id)) }
                    >
                      <IconClose />
                    </div>
                  </div>
                )}
                 <input
                   placeholder={placeholder}
                   disabled={isDisabled}
                   className="tagfield__tags-input"
                   onKeyDown={handleKeyDown}
                   onChange={e => setFieldValue(field.name, e.target.value.trim())}
                   value={field.value}
                 />
              </div>
              {isError ? (
                <div className="position-relative d-flex error">
                  <IconError id={`tooltip-error-${tooltipId}`} width={18} height={18}/>
                  <UncontrolledTooltip className="error" placement="right" target={`tooltip-error-${tooltipId}`}>
                    {errorMessage}
                  </UncontrolledTooltip>
                </div>
              ) : <div style={{color: "#acafb8", marginTop:"0.357rem"}}>
                 <IconUser width={22} height={22} />
               </div>}
            </div>
          )
        }}
      </Field>
    </div>
  )
};

TagsField.propTypes = {
  required: pt.bool,
  isDisabled: pt.bool,
  placeholder: pt.string,
};

export default TagsField
