import React, { useEffect, useState } from 'react';

import { storiesOf } from '@storybook/react';
import { text, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import NotificationContainer , { TYPES } from './NotificationContainer';

const stateCommon = {
  message:[
    {id: 1, text: "Danger", type: "danger"},
    {id: 2, text: "Warning", type: "warning"},
    {id: 3, text: "Info", type: "info"},
    {id: 4, text: "Success", type: "success"},
  ]
}

const NotificationContainerDemo = ({select,text}) => {
  const [common, setCommon] = useState({message: []})

  useEffect(() => {
    let data = [];
    stateCommon.message.forEach(el => el.type === select ? data.push({...el, text: text}) : el)
    setCommon({message: data})
  }, [select, text])

  return (
    <>
    <NotificationContainer
      common={common}
      hideMessage={action('hideMessage')}
    />
  </>
  );
}


storiesOf('NotificationContainer', module)
  .addParameters({
    info: {
      text: 'NotificationContainer',
      propTablesExclude: [NotificationContainer],
    },
  })
  .add('Default', () =>
        <div style={{paddingLeft: 20, paddingTop: 20, width: 407}}>
          <NotificationContainerDemo
            select={select('select',TYPES, "success")}
            hideMessage={action('hideMessage')}
            text={text('text',"Default")}
          />
        </div>
  );
