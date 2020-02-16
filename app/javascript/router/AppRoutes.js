import React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from '../components/App';
import User from '../components/admin/user/User';
import Service from '../components/admin/service/Service';

const AppRoutes = () =>
    <App>
        <Switch>
            <Route path="/" exact component={User} />
            <Route path="/services" exact component={Service} />
        </Switch>
    </App>;

export default AppRoutes;