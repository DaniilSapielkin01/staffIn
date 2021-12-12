import React, { Component } from 'react';

import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import Radio from './Radio';

storiesOf('Radio', module)
  .addParameters({
    info: {
      text: 'Radio',
      propTablesExclude: [Radio],
    },
  })
  .add('Default', () => (
    <div style={{ paddingLeft: 20, paddingTop: 20 }}>
      <Radio
        label={text('label', 'Option 1')}
        onChange={action('onChange')}
        name="test"
      />
      <Radio
        label={text('label', 'Option 2')}
        onChange={action('onChange')}
        name="test"
      />
      <Radio
        label={text('label', 'Option 3')}
        onChange={action('onChange')}
        name="test"
      />
    </div>
  ));
