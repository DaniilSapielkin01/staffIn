import React from 'react';

import { storiesOf } from '@storybook/react';
import { text, select, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import TextField, { ORIENTATIONS, TYPES, THEMES } from './TextField';

storiesOf('TextField', module)
  .addParameters({
    info: {
      text: 'TextField',
      propTablesExclude: [TextField],
    },
  })
  .add('Default', () => (
    <div style={{ paddingLeft: 20, paddingTop: 20, width: 350 }}>
      <TextField
        label={text('label', 'Set Name')}
        placeholder={text('placeholder', 'Enter text...')}
        required={boolean('required', true)}
        isDisabled={boolean('isDisabled', false)}
        isError={boolean('isError', true)}
        theme={select('theme', THEMES, "default")}
        orientation={select('orientation', ORIENTATIONS)}
        type={select('type', TYPES, 'text')}
        errorMessage={text('errorMessage', 'Some error message')}
        onChange={action('onChange')}
      />
    </div>
  ));

