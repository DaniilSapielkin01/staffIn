import React from 'react';

import { storiesOf } from '@storybook/react';
import { text, select, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import TagsField, { ORIENTATIONS, TYPES } from './TagsField';

storiesOf('TagsField', module)
  .addParameters({
    info: {
      text: 'TagsField',
      propTablesExclude: [TagsField],
    },
  })
  .add('Default', () => (
    <div style={{ paddingLeft: 20, paddingTop: 20, width: 350 }}>
      <TagsField
        label={text('label', 'Label')}
        orientation={select('orientation', ['horizontal', 'vertical'])}
        placeholder={text('placeholder', 'type text...')}
        required={boolean('required', true)}
        isDisabled={boolean('isDisabled', false)}
        isError={boolean('isError', true)}
        orientation={select('orientation', ORIENTATIONS)}
        errorMessage={text('errorMessage', 'Some error message')}
        onChange={action('onChange')}
      />
    </div>
  ));

