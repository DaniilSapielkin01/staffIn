import React from 'react';

import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import Checkbox from './Checkbox';

storiesOf('Checkbox', module)
  .addParameters({
    info: {
      text: 'Checkbox',
      propTablesExclude: [Checkbox],
    },
  })
  .add('Default', () => (
    <div style={{ paddingLeft: 20, paddingTop: 20 }}>
      <Checkbox
        label={text('label', 'Checkbox')}
        onChange={action('onChange')}
      />
    </div>
  ));
