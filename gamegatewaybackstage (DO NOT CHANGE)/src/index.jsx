import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import PrivateRoute from './tools/AuthenticatedComponent';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { LoginSettingLayout } from './pages/provider';

import { WelcomePageLayout } from './pages/WelcomePage/provider';

import { GameSettingLayout } from './pages/GameSetting/provider';
import { ServiceSettingLayout } from './pages/ServiceSetting/provider';
import { SubclassLayout } from './pages/SubclassSetting/provider';
import { MachineIncomeLayout } from './pages/MachineIncome/provider';

const client = new ApolloClient({
  uri: 'https://machine-record-test.cloudprogrammingonline.com/graphql',
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <Switch>

        <Route exact path={`${process.env.PUBLIC_URL}/`} >
          <LoginSettingLayout />
        </Route>

        <PrivateRoute path={`${process.env.PUBLIC_URL}/WelcomePageLayout`} component={WelcomePageLayout} />

        <PrivateRoute path={`${process.env.PUBLIC_URL}/GameSettingLayout`} component={GameSettingLayout} />
        <PrivateRoute path={`${process.env.PUBLIC_URL}/SubclassLayout`} component={SubclassLayout} />
        <PrivateRoute path={`${process.env.PUBLIC_URL}/ServiceSettingLayout`} component={ServiceSettingLayout} />
        <PrivateRoute path={`${process.env.PUBLIC_URL}/MachineIncomeLayout`} component={MachineIncomeLayout} />

      </Switch>
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById('root')
);
