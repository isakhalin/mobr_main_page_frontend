import React from "react";
import {Route, Switch, Redirect} from 'react-router-dom';

import {privateRoutes, publicRoutes, adminRoutes} from './routes'

/** Include utils */
import {MAIN_ROUTE} from "../utils";

export const AppRouter = ({session, isAdmin = false}) => {
    // const user = false;
    return session ?
        (   // if session true
            !isAdmin ?
                (   // Если авторизован, но не админ
                    <Switch>
                        {
                            privateRoutes.map(({path, component}) => (
                                <Route path={path} element={component} exact={true}/>
                            ))
                        }
                        <Redirect to={MAIN_ROUTE} /> {/* Редиректит в MAIN_ROUTE при попытке перейти на несуществующий роут*/}
                    </Switch>
                )
                :
                (   // Если авторизован, и админ
                    <Switch>
                        {
                            adminRoutes.map(({path, component}) => (
                                <Route path={path} element={component} exact={true}/>
                            ))
                        }
                        <Redirect to={MAIN_ROUTE} /> {/* Редиректит в MAIN_ROUTE при попытке перейти на несуществующий роут*/}
                    </Switch>
                )
        )
        : // Если пользователь не авторизован
        (
            <Switch>
                {
                    publicRoutes.map(({path, component}) => (
                        <Route path={path} element={component} exact={true}/>
                    ))
                }
            </Switch>
        )
}