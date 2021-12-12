import React from 'react';

import { storiesOf } from '@storybook/react';
import { text, boolean, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import Button, { TYPES, THEMES, SIZES } from './Button';

storiesOf('Button', module)
  .addParameters({
    info: {
      text: 'Button',
      propTablesExclude: [Button],
    },
  })
  .add('Default', () => (
    <div style={{ paddingLeft: 20, paddingTop: 20 }}>
      <Button
        outline={boolean('outline', false)}
        children={text('children', 'Button')}
        theme={select('theme', THEMES)}
        onClick={action('clicked')}
        fixedWidth={boolean('fixedWidth', false)}
        type={select('type', TYPES)}
        size={select('size', SIZES)}
        disabled={boolean('disabled', false)}
      />
    </div>
  ));
