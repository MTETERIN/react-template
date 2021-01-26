import React from 'react';
import { Redirect } from 'react-router-dom';
import { Route } from 'react-router-dom';

// pages
const Starter = React.lazy(() => import('../pages/Starter'));

// tables
const BasicTables = React.lazy(() => import('../pages/tables/Basic'));
const AdvancedTables = React.lazy(() => import('../pages/tables/Advanced'));

// root routes
const rootRoute = {
    path: '/',
    exact: true,
    component: () => <Redirect to="/pages/starter" />,
    route: Route,
};


// pages
const pageRoutes = {
    path: '/starter',
    name: 'Starter',
    icon: 'uil-copy-alt',
    header: 'Custom',
    component: Starter,
    route: Route,
};


// ui
const uiRoutes = {
    path: '/tables',
    name: 'Tables',
    icon: 'uil-package',
    header: 'Tables',
        children: [
            {
                path: '/tables/basic',
                name: 'Basic',
                component: BasicTables,
                route: Route,
            },
            {
                path: '/tables/advanced',
                name: 'Advanced',
                component: AdvancedTables,
                route: Route,
            },
        ],
};

// flatten the list of all nested routes
const flattenRoutes = routes => {
    let flatRoutes = [];

    routes = routes || [];
    routes.forEach(item => {
        flatRoutes.push(item);

        if (typeof item.children !== 'undefined') {
            flatRoutes = [...flatRoutes, ...flattenRoutes(item.children)];
        }
    });
    return flatRoutes;
};

// All routes
const allRoutes = [rootRoute, pageRoutes, uiRoutes];

const allFlattenRoutes = flattenRoutes(allRoutes);

export { allRoutes, allFlattenRoutes };
