import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';

import SearchField from './SearchField';

storiesOf('SearchField', module)
  .addParameters({
    info: {
      text: 'SearchField',
      propTablesExclude: [SearchField],
    },
  })
  .add('Default', () => (
    <div style={{ paddingLeft: 20, paddingTop: 20, width: 400 }}>
      <SearchField
        onChange={action('onChange')}
        placeholder={text('placeholder', 'Placeholder')}
      />
    </div>
  ));
