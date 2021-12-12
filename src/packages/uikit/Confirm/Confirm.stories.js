import React, { Component } from 'react';

import { storiesOf } from '@storybook/react';
import { text, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import { Button } from '@customary/uikit';
import Confirm, { THEMES } from './Confirm';

class ConfirmDemo extends Component {

  state = {
    isOpen: false
  };

  componentDidMount = () => {
    this.setState({isOpen: this.props.isOpen || false})
  };

  onConfirm = () => {
    this.setState({isOpen: !this.state.isOpen})
  };

  closeConfirmModal = () => {
    this.setState({isOpen: !this.state.isOpen})
  };

  render() {

    return (
      <div>
        <Button onClick={() => this.setState({isOpen: true})}>Toggle Confirm</Button>

        <Confirm
          {...this.props}
          open={this.state.isOpen}
          onConfirm={this.onConfirm}
          closeConfirmModal={this.closeConfirmModal}
        />

      </div>
    )
  }
}

storiesOf('Confirm', module)
  .addParameters({
    info: {
      text: 'Confirm',
      propTablesExclude: [Confirm],
    },
  })
  .add('Default', () => (
    <div style={{paddingLeft: 20, paddingTop: 20}}>
      <ConfirmDemo
        text={text('text', 'Confirm title')}
        description={text('description', "The backups created with this functionality may contain some sensitive data.")}
        onConfirm={action('onConfirm')}
        closeConfirmModal={action('closeConfirmModal')}
        dismiss={text('dismiss', 'Cancel')}
        actionTexts={{ dismiss: text('dismiss', 'Cancel'), confirm: text('confirm', 'Accept')}}
        confirm={text('confirm', 'Accept')}
        type={select("type", THEMES)}
      />
    </div>
  ));
