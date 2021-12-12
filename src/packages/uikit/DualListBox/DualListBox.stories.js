import React, { Component } from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';


import DualListBox from './DualListBox';

const options = [{
  id: 'name',
  label: 'Name',
  visible: true,
  readOnly: true,
},{
  id: 'last_name',
  label: 'Last name',
  visible: false,
  readOnly: false,
},{
  id: 'email',
  label: 'Email',
  visible: false,
  readOnly: false,
}];

class DualListBoxDemo extends Component {
  state = {
    options: options,
  };

  handleChange = options => {
    this.setState({
      options
    })
  };

  render() {
    const { options } = this.state;
    const { headerLabelLeft, headerLabelRight } = this.props;

    return (
      <DualListBox
        headerLabelLeft={headerLabelLeft}
        headerLabelRight={headerLabelRight}
        options={options}
        onChange={this.handleChange}
      />
    );
  }
}

storiesOf('DualListBox', module)
  .addParameters({
    info: {
      text: 'DualListBox',
      propTablesExclude: [DualListBox],
    },
  })
  .add('Default', () => (
    <div style={{ paddingLeft: 20, paddingTop: 20 }}>
      <DualListBoxDemo
        options={options}
        onChange={action('onChange')}
        headerLabelLeft={text('headerLabelLeft', 'Available')}
        headerLabelRight={text('headerLabelRight', 'Selected')}
      />
    </div>
  ));
