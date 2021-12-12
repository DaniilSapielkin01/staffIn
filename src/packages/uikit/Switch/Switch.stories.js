import React from 'react';

import { storiesOf } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import Switch from './Switch';

storiesOf('Switch', module)
  .addParameters({
    info: {
      text: 'Switch',
      propTablesExclude: [Switch],
    },
  })
  .add('Default', () => (
    <div style={{ paddingLeft: 20, paddingTop: 20 }}>
      <Switch
        isOn={boolean('isOn', true)}
        onChange={action('onChange')}
        label={text('label', 'Enabled')}
      />
    </div>
  ));
