import React from 'react';

import { storiesOf } from '@storybook/react';
import { text, boolean, select } from '@storybook/addon-knobs';

import Textarea, { THEMES } from './Textarea';

storiesOf('Textarea', module)
  .addParameters({
    info: {
      text: 'Textarea',
      propTablesExclude: [Textarea],
    },
  })
  .add('Default', () => (
    <div style={{ paddingLeft: 20, paddingTop: 20, width: 350 }}>
      <Textarea
        placeholder={text('placeholder', 'Type text')}
        theme={select('theme',THEMES)}
        orientation={select('orientation', ['horizontal', 'vertical'])}
        required={boolean('required', false)}
        label={text('label', 'Fill out')}
        isError={boolean('is error', false)}
        errorMessage={text('error message', 'invalid value')}
      />
    </div>
  ));
