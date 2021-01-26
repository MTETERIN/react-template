import React, { Component } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import { allFlattenRoutes as routes } from './index';

// All layouts/containers
import VerticalLayout from '../layouts/Vertical';


class Routes extends Component {

    render() {
        const Layout = VerticalLayout;
        // rendering the router with layout
        return (
            <BrowserRouter>
                <Layout {...this.props}>
                    <Switch>
                        {routes.map((route, index) => {
                            return (
                                !route.children && (
                                    <route.route
                                        key={index}
                                        path={route.path}
                                        roles={route.roles}
                                        exact={route.exact}
                                        component={route.component}></route.route>
                                )
                            );
                        })}
                    </Switch>
                </Layout>
            </BrowserRouter>
        );
    }
}

export default Routes
