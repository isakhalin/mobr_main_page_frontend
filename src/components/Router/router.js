import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';

import {privateRoutes, publicRoutes, adminRoutes} from './routes';

/** Include utils */
import {MAIN_ROUTE} from "../utils";

export const AppRouter = ({session, isAdmin = false}) => {

  return session ?
    (
      !isAdmin
        ?
        (
          <Switch>
            {
              privateRoutes.map(({path, component}) => (
                <Route path={path} element={component} exact={true}/>
              ))
            }
            <Redirect to={MAIN_ROUTE}/>
          </Switch>
        )
        :
        (
          <Switch>
            {
              adminRoutes.map(({path, component}) => (
                <Route path={path} element={component} exact={true}/>
              ))
            }
            <Redirect to={MAIN_ROUTE}/>
          </Switch>
        )
    )
    :
    (
      <Switch>
        {
          publicRoutes.map(({path, component}) => (
            <Route path={path} element={component} exact={true}/>
          ))
        }
        <Redirect to={MAIN_ROUTE}/>
      </Switch>
    )
}