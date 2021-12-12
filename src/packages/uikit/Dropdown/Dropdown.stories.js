import React, { Component } from 'react';

import { storiesOf } from '@storybook/react';
import { text, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import Dropdown, { THEMES } from './Dropdown';

class DropdownDemo extends Component {
  state = {
    options: [{
      name: 'Status',
      value: 1
    }, {
      name: 'Type',
      value: 2
    }, {
      name: 'Date',
      value: 3
    }],
    selected: {
      name: 'Date',
      value: 3
    },
  }

  onChange = selected => {
    this.setState({ selected });
    this.props.onChange()
  }

  render() {

    const { options, selected } = this.state;

    return (
      <Dropdown
        { ...this.props }
        options={ options }
        selected={ selected }
        onChange={ this.onChange }
      />
    )
  }
}

storiesOf('Dropdown', module)
  .addParameters({
    info: {
      text: 'Dropdown',
      propTablesExclude: [Dropdown],
    },
  })
  .add('Default', () => (
    <div style={{ paddingLeft: 20, paddingTop: 20, maxWidth: 200 }}>
      <DropdownDemo
        label={text('label', 'Order by:')}
        onChange={action('onChange event triggered')}
        theme={select('theme', THEMES)}
      />
    </div>
  ));
