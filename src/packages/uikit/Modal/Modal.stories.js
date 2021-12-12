import React, { Component } from 'react';

import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import { Button } from '@customary/uikit';
import Modal from './Modal';

class ModalDemo extends Component {

  state = {
    isOpen: false
  }

  componentDidMount = () => {
    this.setState({ isOpen: this.props.isOpen || false })
  }

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen })
    this.props.toggle()
  }

  render() {
    return (
      <div>
        <Button onClick={ this.toggle }>Toggle Modal</Button>

        <Modal
          { ...this.props }
          isOpen={ this.state.isOpen }
          toggle={ this.toggle }
        />
      </div>
    )
  }
}

storiesOf('Modal', module)
  .addParameters({
    info: {
      text: 'Modal',
      propTablesExclude: [Modal],
    },
  })
  .add('Default', () => (
    <div style={{ paddingLeft: 20, paddingTop: 20 }}>
      <ModalDemo
        header={text('header', 'Modal title')}
        toggle={action('toggle')}
        children={text('children', 'Here could be JSX with the HTML tags')}
        footer={text('footer', 'Here could be JSX with the HTML tags')}
      />
    </div>
  ));
