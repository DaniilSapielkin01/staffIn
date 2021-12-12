import React from 'react';
import { Redirect } from 'react-router-dom';
// import { DASHBOARD } from '../constants/routes';

const DASHBOARD = 'DASHBOARD';

export default () => (
  <Redirect to={DASHBOARD} />
);
