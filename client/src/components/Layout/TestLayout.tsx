import { Box, Toolbar } from '@mui/material';
import Checklist from 'features/test/checklist';
import Dashboard from 'features/test/dashboard';
import TestResult from 'features/test/result';
import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Header, Sidebar } from '../Common';

export interface TestLayoutProps {}

export function TestLayout() {
  return (
    <Box sx={{ display: 'flex' }}>
      <Header />
      <Sidebar />
      <Box component='main' sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Switch>
          <Route path='/test/dashboard'>
            <Dashboard />
          </Route>
          <Route path='/test/checklist'>
            <Checklist />
          </Route>
          <Route path='/test/testresult'>
            <TestResult />
          </Route>
        </Switch>
      </Box>
    </Box>
  );
}
