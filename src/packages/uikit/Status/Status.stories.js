import React, { Component, createRef } from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Status from './Status';

const options =  [{
  status: 'Status',
  value: 'status',
  color: 'red',
}, {
  status: 'Type',
  value: 'type',
  color: 'blue',

}, {
  status: 'Date',
  value: 'date',
  color: 'green',

}];

class StatusDemo extends Component {
  wrapperRef = createRef();

  state = {
    options: options,
    selected: options[0]
  };

  onChange = selected => {
    this.setState({ selected });
  };

  render() {

    const { options, selected } = this.state;

    return (
      <Status
        { ...this.props }
        options={ options }
        selected={ selected }
        menuPortalTarget={document.getElementsByTagName('body')[0]}
        onChangedStatus={ this.onChange }
      />
    )
  }
}

storiesOf('Status', module)
  .addParameters({
    info: {
      text: 'Status',
      propTablesExclude: [Status],
    },
  })
  .add('Default', () => (
    <div style={{ paddingLeft: 20, paddingTop: 20, maxWidth: 200 }}>
      <StatusDemo
        onChange={action('onChange event triggered')}
      />
    </div>
  ));
