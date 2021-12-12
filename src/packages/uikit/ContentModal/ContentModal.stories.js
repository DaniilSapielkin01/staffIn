import React, { Component } from 'react';

import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import { Button } from '@customary/uikit';
import ContentModal from './ContentModal';

class ContentModalDemo extends Component {

  state = {
    isOpen: false
  };

  componentDidMount = () => {
    this.setState({isOpen: this.props.isOpen || false})
  };

  closeContentModal = () => {
    this.setState(prevState => ({isOpen: !prevState.isOpen}))
  };

  render() {

    return (
      <div>
        <Button onClick={() => this.setState({isOpen: true})}>Toggle Content</Button>

        <ContentModal
          {...this.props}
          open={this.state.isOpen}
          closeContentModal={this.closeContentModal}
        />

      </div>
    )
  }
}

storiesOf('ContentModal', module)
  .addParameters({
    info: {
      text: 'ContentModal',
      propTablesExclude: [ContentModal],
    },
  })
  .add('Default', () => (
    <div style={{paddingLeft: 20, paddingTop: 20}}>
      <ContentModalDemo
        headerText={text('headerText', 'Content title')}
        closeContentModal={action('closeContentModal')}
      />
    </div>
  ));
