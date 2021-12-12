import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import { withLabelControl } from '../../../hoc/withLabelControl';
import { generateID } from '../../../helpers/utils';
import './Textarea.scss';

const ORIENTATION_VERTICAL = 'vertical';
const ORIENTATION_HORIZONTAL = 'horizontal';
export const ORIENTATIONS = [ORIENTATION_VERTICAL, ORIENTATION_HORIZONTAL];

const THEME_INSIDE = "inside"
const THEME_DEFAULT = "default"
export const THEMES = [THEME_DEFAULT,THEME_INSIDE]


export const props = {
  themes: [],
  orientation: ORIENTATIONS,
};

class Textarea extends PureComponent {
  static propTypes = {
    children: PropTypes.string,
    required: PropTypes.bool,
    className: PropTypes.string,
    label: PropTypes.string,
    isError: PropTypes.bool,
    errorMessage: PropTypes.string,
    onChange: PropTypes.func,
    orientation: PropTypes.oneOf(props.orientation),
  };

  state = {
    tooltipId: generateID(),
  };

  render() {
    const { tooltipId } = this.state;

    const {
      className,
      label,
      isError,
      required,
      errorMessage,
      onChange,
      orientation,
      isDisabled,
      readOnly,
      theme,
      resize,
      ...props
    } = this.props;

    return (
      <div className={cn("w-100 h-100 c-text-field d-flex", {
        'textarea_isError': isError
      })}>
        {isError && <div className="c-text-field_error-messages">
          {errorMessage}
        </div>}
        <div className={
          cn('textarea position-relative d-flex align-items-center c-text-field__w-input w-100 h-100',
            {
              'is-invalid': isError,
              disabled: isDisabled,
              readonly: readOnly,
              [className]: className,
            })}
        >

          <textarea className={cn('w-100 pr-4 py-1 h-100',
            {
              'isError_text': isError,
              'out-height': props.outbound,
              'resize': resize,
              'inside': theme === THEME_INSIDE,
            })}
            onChange={onChange} {...props}/>

        </div>
      </div>
    );
  }
}

export default withLabelControl(Textarea);
