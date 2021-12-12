import React from 'react';

import { storiesOf } from '@storybook/react';
import { text, select, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import DatePickerField from './DatePickerField';

storiesOf('DatePickerField', module)
  .addParameters({
    info: {
      text: 'DatePickerField',
      propTablesExclude: [DatePickerField],
    },
  })
  .add('Default', () => (
    <div style={{ paddingLeft: 20, paddingTop: 20, width: 350 }}>
      <DatePickerField
        label={text('label', 'Label')}
        orientation={select('orientation', ['horizontal', 'vertical'])}
        placeholder={text('placeholder', 'type text...')}
        required={boolean('required', true)}
        isDisabled={boolean('isDisabled', false)}
        isError={boolean('isError', true)}
        errorMessage={text('errorMessage', 'Some error message')}
        onChange={action('onChange')}
      />
    </div>
  ));

