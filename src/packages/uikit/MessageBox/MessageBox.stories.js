import React, { Component } from 'react';

import { storiesOf } from '@storybook/react';
import { text, boolean, select } from '@storybook/addon-knobs';

import MessageBox, { TYPES } from './MessageBox';

storiesOf('MessageBox', module)
  .addParameters({
    info: {
      text: 'MessageBox',
      propTablesExclude: [MessageBox],
    },
  })
  .add('Default', () => (
    <div style={{ paddingLeft: 20, paddingTop: 20, width: 350 }}>
      <MessageBox
        placeholder={text('placeholder', 'Type message...')}
        withActions={boolean('witchActions', true)}
        submitBtn={text('submitBtn', 'send')}
        type={select('type', TYPES)}
        outbound={boolean('outbound', false)}
      />
    </div>
  ));
