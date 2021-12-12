import React, { Component } from 'react';
import wNumb from 'wnumb';
import { storiesOf } from '@storybook/react';
import { text, number } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import Slider from './Slider';

class SliderDemo extends Component {

  state = { value: 0 }

  componentDidMount = () => {
    this.setState({ value: this.props.value })
  }

  onUpdate = value => {
    this.setState({ value: parseInt(value.join()) })
  }

  render() {

    const { value } = this.state

    return (
      <Slider
        { ...this.props }
        onUpdate={ this.onUpdate }
        value={ value }
      />
    )
  }
}

storiesOf('Slider', module)
  .addParameters({
    info: {
      text: 'Slider',
      propTablesExclude: [Slider],
    },
  })
  .add('Default', () => (
    <div style={{ paddingLeft: 20, paddingTop: 20, maxWidth: 300 }}>
      <SliderDemo
        label={text('label', 'Label to slider')}
        start={number('start', 120)}
        step={number('step', 1)}
        range={{
          min: number('min', 2),
          max: number('max', 900)
        }}
        onUpdate={action('onUpdate')}
        value={number('value', 10)}
        tooltips={wNumb({decimals: 0})}
      />
    </div>
  ));
