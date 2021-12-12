import React, { Component } from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import ModifyColumns, { TYPES, THEMES } from './ModifyColumns';

const schema = [{
  id: 1,
  label: 'Alex',
  visible: true,
  readOnly: true,
},
  {
    id: 2,
    label: 'Tom',
    visible: true,
    readOnly: false,
  }];

class ModifyColumnsDemo extends Component {
  state = {
    schema: schema,
  };

  handleChange = item => {
    this.setState({
      schema: this.state.schema.map(el => el.id === item.id ? {...el, visible: !item.visible} : el)
    })
  };

  render() {
    const { schema } = this.state;

    return (
      <ModifyColumns
        schema={schema}
        onChangeList={this.handleChange}
      />
    );
  }
}

storiesOf('ModifyColumns', module)
  .addParameters({
    info: {
      text: 'ModifyColumns',
      propTablesExclude: [ModifyColumns],
    },
  })
  .add('Default', () => (
    <div style={{ paddingLeft: 20, paddingTop: 20 }}>
      <ModifyColumnsDemo
        schema={schema}
        onChangeList={action('onChangeList')}
      />
    </div>
  ));
