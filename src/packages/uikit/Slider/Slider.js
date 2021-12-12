import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Nouislider from 'nouislider-react';

import 'nouislider/distribute/nouislider.css';
import './Slider.scss';

class Slider extends PureComponent {
  static propTypes = {
    ...Nouislider.propTypes,
    label: PropTypes.string,
  };

  static defaultProps = {};

  render() {
    const {
      label,
      range: { min = 0, max = 0 }
    } = this.props;

    return (
      <div className="noUi">
        { label ? <label>{ label }</label> : null }
        <Nouislider
          { ...this.props }
          range={{ min: min || 0, max: max || 1 }}
          connect="lower"
        />
        <div className="noUi-minmax">
          <span>{ min }</span>
          <span>{ max }</span>
        </div>
      </div>
    );
  }
}
export default Slider;
