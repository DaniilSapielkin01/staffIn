import React, { PureComponent } from 'react';

import PropTypes from 'prop-types';

import cn from 'classnames';

import { generateID } from '../../../helpers/utils';

import styles from './Switch.module.scss';

class Switch extends PureComponent {
  static propTypes = {
    isOn: PropTypes.bool,
    label: PropTypes.string,
    className: PropTypes.string,
    onChange: PropTypes.func,
  };

  static defaultProps = {};

  state = {
    id: generateID()
  };

  render() {
    const {
      isOn,
      label,
      className,
      onChange,
      isDisabled
    } = this.props;

    return (
      <div className={cn(
        styles.root,
        'd-inline-flex align-items-center',
        {
          [className]: className
        }
      )}>
        {label ?
          <span
            className={styles.label}
          >
            {label}
          </span>
          : null
        }
        <input
          checked={isOn}
          onChange={onChange}
          className={styles.reactSwitch}
          disabled={isDisabled}
          id={this.state.id}
          type="checkbox"
        />
        <label
          className={cn(
           styles.reactSwitchLabel,
            {[styles.active]: isOn}
          )}
          htmlFor={this.state.id}
        >
          <span className={styles.reactSwitchButton}></span>
        </label>
      </div>
    );
  }
}
export default Switch;
