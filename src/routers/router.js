import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import {
    CreateKahootITLogin,
    CreateKahootITRegister,
    KahootIT,
} from '../containers';

import {
    HeaderFooterLayout
} from '../layouts';

export const Routers = () => {
    //const buildysURL = process.env.REACT_APP_LINK_BUILDYS;

    return (
        <Router>            
            <Route
                exact={true}
                path={'create.kahoot.it/auth/login'}
                component={CreateKahootITLogin}
                layout={HeaderFooterLayout}
            />

            <Route
                exact={true}
                path={'create.kahoot.it/auth/register'}
                component={CreateKahootITRegister}
                layout={HeaderFooterLayout}
            />

            <Route
                exact={true}
                path={'kahoot.it'}
                component={KahootIT}
                layout={HeaderFooterLayout}
            />
        </Router>
    );
};