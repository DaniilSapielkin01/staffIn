import React from 'react';

import { storiesOf } from '@storybook/react';
import { text, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import Tag, { THEMES } from './Tag';

storiesOf('Tag', module)
  .addParameters({
    info: {
      text: 'Tag',
      propTablesExclude: [Tag],
    },
  })
  .add('Default', () => (
    <div style={{ paddingLeft: 20, paddingTop: 20 }}>
      <Tag
        children={text('children', 'Tag')}
        theme={select('theme', THEMES)}
        onClose={action('closed')}
      />
    </div>
  ))
  .add('Without close button', () => (
    <div style={{ paddingLeft: 20, paddingTop: 20 }}>
      <Tag
        children={text('children', 'Tag')}
        theme={select('theme', THEMES)}
      />
    </div>
  ));
