import React, { Component } from 'react';

import { storiesOf } from '@storybook/react';
import { text, select } from '@storybook/addon-knobs';

import ColoredTagAdd from './ColoredTagAdd';

storiesOf('ColoredTagAdd', module)
  .addParameters({
    info: {
      text: 'ColoredTagAdd',
      propTablesExclude: [ColoredTagAdd],
    },
  })
  .add('Default', () => (
    <div style={{ paddingLeft: 20, paddingTop: 20, width: 350 }}>
      <ColoredTagAdd
        children={text('children', '+ add')}
      />
    </div>
  ));
