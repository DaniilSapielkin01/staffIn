import React, { Component } from 'react';

import { storiesOf } from '@storybook/react';

import Table from './Table';

import { TableCell, TableHead, TableNoData, TableRow } from './index';

import { Checkbox, ModifyColumns } from "../index";

const data = [
  {
    id: 1,
    list: {
      id: 1,
      name: 'Alex',
      last_name: 'Nil',
      age: 21,
      email: 'nil@gmail.com',
      phone: '+380322343242',
      city: 'NY',
      address: 'NY, Street 10'
    }
  },
  {
    id: 2,
    list: {
      id: 2,
      name: 'Ali',
      last_name: 'Gerrard',
      age: 19,
      email: 'gerrard@gmail.com',
      phone: '+4343443534',
      city: 'NY',
      address: 'NY, Street 10'
    }
  },
  {
    id: 3,
    list: {
      id: 3,
      name: 'Saad',
      last_name: 'Terry',
      age: 16,
      email: 'terry@gmail.com',
      phone: '+2342342342',
      city: 'NY',
      address: 'NY, Street 10'
    }
  },
  {
    id: 4,
    list: {
      id: 4,
      name: 'Tom',
      last_name: 'Loi',
      age: 25,
      email: 'asad@email.com',
      phone: '+23423423423',
      city: 'NY',
      address: 'NY, Street 10'
    }
  },
];

const filter = [
  {id: 'id', label: 'Id', visible: true, readOnly: false},
  {id: 'name', label: 'Name', visible: true, readOnly: true},
  {id: 'last_name', label: 'Last name', visible: true, readOnly: true},
  {id: 'age', label: 'Age', visible: true, readOnly: false},
  {id: 'email', label: 'Email', visible: false, readOnly: false},
  {id: 'phone', label: 'Phone', visible: true, readOnly: false},
  {id: 'city', label: 'City', visible: true, readOnly: false},
  {id: 'address', label: 'Address', visible: true, readOnly: false},
];

const getRowsData = () => {
  const keys = getKeys();

  return data.map(row => <TableRow><RenderRow key={row.id} data={row} keys={keys} /></TableRow>
  )
};

const getKeys = () => {
  return filter.filter(el => el.visible).map(item => item.id);
};

const RenderRow = (props) => {
  return props.keys.map(key => <TableCell key={props.data.list[key]}>{props.data.list[key]}</TableCell>)
};

class TableWithFilterDemo extends Component {

  state = {
    data: data,
    filter: filter,
  };

  getKeys = () => {
    return this.state.filter.filter(el => el.visible).map(item => item.id);
  };

  getRowsData = () => {
    const { data } = this.state;
    const keys = this.getKeys();

    return data.map(row => (
      <TableRow>
        <Checkbox onChange={e => console.log(e)} />
        <RenderRow key={row.id} data={row} keys={keys} />
      </TableRow>)
    )
  };

  onChange = selectedItem => {
    const res = this.state.filter.map(item => {
      if (item.id === selectedItem.id) {
        return {
          ...item,
          visible: !item.visible,
        }
      }
      return item;
    });

    this.setState({
      filter: res,
    });
  };

  render() {
    const { filter } = this.state;

    return (
      <Table>
        <TableHead className="pl-5">
          <div className="position-absolute bg-white l-0 px-3 cell-settings">
            <ModifyColumns
              schema={filter}
              onChangeList={this.onChange}
            />
          </div>
          {
            filter.filter(item => item.visible).map(item => (
              <TableCell key={item}>
                {item.label}
              </TableCell>
            ))
          }
        </TableHead>
        {this.getRowsData()}
      </Table>
    );
  }
}

storiesOf('Table', module)
  .addParameters({
    info: {
      text: 'Button',
      propTablesExclude: [Table],
    },
  })
  .add('Default', () => (
    <div style={{ paddingLeft: 20, paddingTop: 20 }}>
      <Table>
        <TableHead>
          {
            filter.map(item => (
              <TableCell key={item}>
                {item.label}
              </TableCell>
            ))
          }

        </TableHead>
        {getRowsData()}
      </Table>
    </div>
  ))
  .add('With settings', () => (
    <div style={{ paddingLeft: 20, paddingTop: 20 }}>
      <TableWithFilterDemo />
    </div>
  )).add('Without data', () => (
  <div style={{ paddingLeft: 20, paddingTop: 20 }}>
    <Table>
      <TableHead>
        {
          filter.map(item => (
            <TableCell key={item}>
              {item.label}
            </TableCell>
          ))
        }
      </TableHead>
      <TableNoData />
    </Table>
  </div>
));
