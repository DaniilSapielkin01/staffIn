import React from 'react';

import { storiesOf } from '@storybook/react';
import { text, select, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import TextFieldFloating , { TYPES } from './TextFieldFloating';

storiesOf('TextFieldFloating', module)
  .addParameters({
    info: {
      text: 'TextFieldFloating',
      propTablesExclude: [TextFieldFloating],
    },
  })
  .add('Default', () => (
    <div style={{paddingLeft: 20, paddingTop: 20, width: 407}}>
      <TextFieldFloating
        labelText={text('label', "First Name")}
        isSuccess={boolean('isSuccess', false)}
        isError={boolean('isError', false)}
        type={select('type', TYPES, 'email')}
        onChange={action('onChange')}
        required={boolean('required', true)}
        errorMessage={text('errorMessage', '')}
      />
    </div>
  ));

