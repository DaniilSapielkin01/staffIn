import React, {Component} from 'react';

import { storiesOf } from '@storybook/react';
import { number } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import PaginationPanel from './PaginationPanel';

class PaginationPanelDemo extends Component {
  state = {
    page: 1,
  };

  handleChange = page => {
    this.setState({ page })
  };

  render() {
    const { total, pageSize } = this.props;
    return (
      <PaginationPanel
        onChange={this.handleChange}
        total={total}
        pageSize={pageSize}
        currentPage={this.state.page}
      />
    );
  }
}

storiesOf('PaginationPanel', module)
  .addParameters({
    info: {
      text: 'PaginationPanel',
      propTablesExclude: [PaginationPanel],
    },
  })
  .add('Default', () => (
    <div style={{ paddingLeft: 20, paddingTop: 20 }}>
      <PaginationPanelDemo
        onChange={action('onChange')}
        total={number('total', 500)}
        pageSize={number('pageSize', 15)}
      />
    </div>
  ));
