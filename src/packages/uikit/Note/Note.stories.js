import React from 'react';

import { storiesOf } from '@storybook/react';
import { text, select } from '@storybook/addon-knobs';

import Note, { THEMES } from './Note';

storiesOf('Note', module)
  .addParameters({
    info: {
      text: 'Note',
      propTablesExclude: [Note],
    },
  })
  .add('Default', () => (
    <div style={{ paddingLeft: 20, paddingTop: 20 }}>
      <Note
        className={text('className', 'd-inline-block')}
        children={text('children', 'Read/Write permissions will be given toall the profiles with\n' +
          'access to this module.')}
        theme={select('theme', THEMES)}
      />
    </div>
  ));
