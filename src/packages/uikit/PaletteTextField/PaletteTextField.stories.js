import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import PaletteTextField from './PaletteTextField';

storiesOf('PaletteTextField', module)
  .addParameters({
    info: {
      text: 'PaletteTextField',
      propTablesExclude: [PaletteTextField],
    },
  })
  .add('Default', () => (
    <div style={{ paddingLeft: 20, paddingTop: 20, width: 350 }}>
      <PaletteTextField
        onChange={action('onChange')}
        label={'djs'}
      />
    </div>
  ));
