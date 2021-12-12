import React from 'react';

import { storiesOf } from '@storybook/react';
import { text, select } from '@storybook/addon-knobs';

import ColoredTag from './ColoredTag';
import { THEMES } from '../ColoredTag/ColoredTag';

storiesOf('ColoredTag', module)
  .addParameters({
    info: {
      text: 'ColoredTag',
      propTablesExclude: [ColoredTag],
    },
  })
  .add('Default', () => (
    <div style={{ paddingLeft: 20, paddingTop: 20, width: 350 }}>
      <ColoredTag
        children={text('text', 'tag')}
        color={text('color', '#d84437')}
        theme={select('theme', THEMES)}
      />
    </div>
  ));
