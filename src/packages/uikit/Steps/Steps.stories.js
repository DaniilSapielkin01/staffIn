import React from 'react';

import { storiesOf } from '@storybook/react';

import Steps from './Steps';

const steps = [{ step: 1, title: 'Basic info'}, { step: 2, title: 'Company'}, {step: 3, title: 'All set'}];

storiesOf('Steps', module)
  .addParameters({
    info: {
      text: 'Steps',
      propTablesExclude: [Steps],
    },
  })
  .add('Default', () => (
    <div style={{ paddingLeft: 20, paddingTop: 20, maxWidth: 400 }}>
      <Steps steps={steps} currentStep={2} />
    </div>
  ));
