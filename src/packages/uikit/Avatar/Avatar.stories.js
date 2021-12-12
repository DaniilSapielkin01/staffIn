import React from 'react';

import { storiesOf } from '@storybook/react';
import { select, text } from '@storybook/addon-knobs';

import Avatar, { STATUSES, NAME } from './Avatar';

storiesOf('Avatar', module)
  .addParameters({
    info: {
      text: 'Avatar',
      propTablesExclude: [Avatar],
    },
  })
  .add('Default', () =>
    (

      <div style={{paddingLeft: 20, paddingTop: 20}}>
        <Avatar
          name={text("name", NAME)}
          status={select('status', STATUSES)}
        />
      </div>
    ));
