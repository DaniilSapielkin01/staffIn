import React, { Component } from 'react';

import { storiesOf } from '@storybook/react';
import { select, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import { Button } from '@customary/uikit';
import Alert from './Alert';
import { THEMES } from '../Confirm/Confirm';

class AlertDemo extends Component {

  state = {
    isOpen: false
  };

  componentDidMount = () => {
    this.setState({isOpen: this.props.isOpen || false})
  };

  closeAlertModal = () => {
    this.setState({isOpen: !this.state.isOpen});
  };

  render() {
    return (
      <div>
        <Button onClick={() => this.setState({isOpen: true})}>Toggle Alert</Button>

        <Alert
          {...this.props}
          open={this.state.isOpen}
          closeAlertModal={this.closeAlertModal}
        />
      </div>
    )
  }
}

storiesOf('Alert', module)
  .addParameters({
    info: {
      text: 'Alert',
      propTablesExclude: [Alert],
    },
  })
  .add('Default', () => (
    <div style={{paddingLeft: 20, paddingTop: 20}}>
      <AlertDemo
        text={text('text', 'Alert title')}
        closeAlertModal={action('closeAlertModal')}
        confirm={text('confirm', 'Close Alert')}
        description={text('description', 'Description')}
        type={select("type", THEMES)}
      />
    </div>
  ));
