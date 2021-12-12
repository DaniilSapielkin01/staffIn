import React from 'react';

import { storiesOf } from '@storybook/react';
import { text, boolean, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { LABELS } from './Select'

import Select from './Select';

storiesOf('Select', module)
  .addParameters({
    info: {
      text: 'Select',
      propTablesExclude: [Select],
    },
  })
  .add('Default', () => (
    <div style={{ marginLeft: 20, marginTop: 20, maxWidth: 250 }}>
      <Select
        // label={text('label', 'Choose your option')}
        orientation={select('orientation', ['horizontal', 'vertical'])}
        required={boolean('required', true)}
        isMulti={boolean('is multiple', false)}
        onChange={action('onChange event triggered')}
        placeholder={text('placeholder', 'Dropdown option')}
        isClearable={boolean('is clearable', false)}
        isError={boolean('is error', false)}
        errorMessage={text('error message', 'Invalid value')}
        styleLabel={select('styleLabel', LABELS, 'default')}
      />
    </div>
  ));
