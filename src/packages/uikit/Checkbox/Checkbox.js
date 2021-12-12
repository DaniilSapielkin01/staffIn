import React, { PureComponent } from 'react';
import classnames from 'classnames';

import PropTypes from 'prop-types';

import { generateID } from '../../../helpers/utils';

import classes from './Checkbox.module.scss';

const Label = ({ label, id, labelLeft, className }) => (
  <label htmlFor={id} className={classnames("d-flex align-items-center mb-0", { [className]: className })}>
    {!labelLeft && label && <span className="text-truncate">{label}</span> }
  </label>
);

class Checkbox extends PureComponent {

  static defaultProps = {
    required: false,
  };

  state = {
    id: generateID()
  };

  render() {
    const {
      label,
      required,
      className,
      classNameLabel,
      isDisabled,
      name,
      value,
      onChange,
      labelLeft, // To use labelLeft we need to use withLabelControl and pass labelLeft true to display label from the left side
    } = this.props;

    return (
      <div className={classnames(classes.root, { [className]: className })}>
        <input
          name={name}
          checked={ value }
          onChange={ onChange }
          className={classes.checkboxInput}
          disabled={isDisabled}
          id={ this.state.id }
          type="checkbox"
        />
        <Label className={classNameLabel} required={required} label={label} labelLeft={labelLeft} id={this.state.id} />
      </div>
    );
  }
}

Checkbox.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([PropTypes.oneOf([null]), PropTypes.bool]),
};

export default Checkbox;
