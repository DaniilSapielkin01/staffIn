import React, { Component } from 'react';

import { storiesOf } from '@storybook/react';

import CustomTable from './CustomTable';

const data = [
  {
    id: 1,
    name: 'Alex',
    last_name: 'Nil',
    age: 21,
    email: 'nil@gmail.com',
    phone: '+380322343242',
    city: 'NY',
    address: 'NY, Street 10'
  },
  {
    id: 2,
    name: 'Ali',
    last_name: 'Gerrard',
    age: 19,
    email: 'gerrard@gmail.com',
    phone: '+4343443534',
    city: 'NY',
    address: 'NY, Street 10'
  },
  {
    id: 3,
    name: 'Saad',
    last_name: 'Terry',
    age: 16,
    email: 'terry@gmail.com',
    phone: '+2342342342',
    city: 'NY',
    address: 'NY, Street 10'
  },
  {
    id: 4,
    name: 'Tom',
    last_name: 'Loi',
    age: 25,
    email: 'asad@email.com',
    phone: '+23423423423',
    city: 'NY',
    address: 'NY, Street 10'
  },
];

const filter = [
  {accessor: 'id', Header: 'Id', width: 50, disableResizing: true,},
  {accessor: 'name', Header: 'Name'},
  {accessor: 'last_name', Header: 'Last name'},
  {accessor: 'age', Header: 'Age'},
  {accessor: 'email', Header: 'Email'},
  {accessor: 'phone', Header: 'Phone'},
  {accessor: 'city', Header: 'City'},
  {accessor: 'address', Header: 'Address'},
];

storiesOf('CustomTable', module)
  .addParameters({
    info: {
      text: 'CustomTable',
      propTablesExclude: [CustomTable],
    },
  })
  .add('Default', () => (
    <div style={{ paddingLeft: 20, paddingTop: 20 }}>
      <CustomTable
        columns={ filter }
        rows={ data }
      />
    </div>
  ));
