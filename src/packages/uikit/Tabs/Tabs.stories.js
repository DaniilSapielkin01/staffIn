import React from 'react';

import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import Tabs, { THEMES } from './Tabs';
import Tab from './Tab';


storiesOf('Tabs', module)
  .addParameters({
    info: {
      text: 'Tabs',
      propTablesExclude: [Tabs],
    },
  })
  .add('Default', () => (
    <div style={{ paddingLeft: 20, paddingTop: 20, width: 400 }}>
      <Tabs
        activeTab="first"
        theme={select('theme', THEMES)}
        onTabChange={action('change tab handle')}
      >
        <Tab
          tab="first"
          title="First"
        >
          First Tab
        </Tab>

        <Tab
          tab="second"
          title="Second"
        >
          Second Tab
        </Tab>

        <Tab
          tab="third"
          title="Third"
        >
          Third Tab
        </Tab>
      </Tabs>
    </div>
  ));