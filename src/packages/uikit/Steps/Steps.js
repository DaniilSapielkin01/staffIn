import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames';

import './Steps.scss'

class Steps extends Component {
  static propTypes = {
    steps: PropTypes.array,
    currentStep: PropTypes.number,
  };

  render() {
    const { steps, currentStep } = this.props;

    return (
      <div className="steps d-flex justify-content-between align-items-start text-center">
        {steps.map(({step, title }, i) => {
          return (
            <div
              key={ i }
              className={classNames(
                'steps__step w-100',
                { 'active': currentStep === step }
              )}
            >
              <div className="steps__step-mark">
                <div className="cicle" />
              </div>
              <div className="steps__step-title">
                {title}
              </div>
            </div>
          );
        })}
      </div>
    )
  }
}

export default Steps;
