import * as React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { switchRoutes } from './routes';
import {
  DappsScene,
  TaxiYa,
  TitoFredoScene
} from 'scenes';

export const RouterComponent: React.FunctionComponent = () => {
  return (
    <Router>
      <Switch>
        <Route
          exact={true}
          path={[switchRoutes.root, switchRoutes.dapps]}
          component={DappsScene}
        />
        <Route
          exact={true}
          path={switchRoutes.titoFredo}
          component={TitoFredoScene}
        />
        <Route
          exact={true}
          path={switchRoutes.taxiYa}
          component={TaxiYa}
        />
      </Switch>
    </Router>
  );
};
