import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { CustomInput } from 'reactstrap';
import './Radio.scss';
import {generateID} from '../../../helpers/utils';

class Radio extends PureComponent {
  static propTypes = {
    ...CustomInput.propTypes,
    label: PropTypes.string,
  };

  static defaultProps = {
    type: 'radio',
  };

  state = {
    id: generateID()
  };

  render() {
    const {
      label,
      className,
      disabled,
      ...props
    } = this.props;

    return (
      <div className="radio">
        <CustomInput
          disabled={disabled}
          id={ this.state.id }
          className={cn(
            "radio",
            {
              [className]: className
            }
          )}
          { ...props }
          label={ label }
        />
      </div>
    );
  }
}
export default Radio;
