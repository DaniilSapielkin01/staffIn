import React, { Component } from 'react';

import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import Popover from './Popover';

class PopoverDemo extends Component {

  state = {
    isOpenPopover: false
  }

  setIsOpenPopover = () => {
    this.setState({ isOpenPopover: !this.state.isOpenPopover })
    this.props.toggle()
  }

  render() {

    const { isOpenPopover } = this.state
    const { id, icon, placement } = this.props

    return (
      <Popover
        id={ id }
        icon={ icon }
        isOpenPopover={ isOpenPopover }
        toggle={ this.setIsOpenPopover }
        placement={ placement }
      >
        <span
          href="#"
          className="item"
        >
          Mark as required
        </span>
        <span
          href="#"
          className="item"
        >
          Edit Properties
        </span>
        <span
          href="#"
          className="item text-danger"
        >
          Remove field
        </span>
      </Popover>
    )
  }
}

storiesOf('Popover', module)
  .addParameters({
    info: {
      text: 'Popover',
      propTablesExclude: [Popover],
    },
  })
  .add('Default', () => (
    <div style={{ paddingLeft: 20, paddingTop: 20, maxWidth: 200 }}>
      <PopoverDemo
        toggle={action('toggle method triggered')}
        icon={select('icon', ['dots', 'settings'])}
      />
    </div>
  ));
