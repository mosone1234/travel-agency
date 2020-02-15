import React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from '../components/App';
import User from '../components/admin/user/User';

const AppRoutes = () =>
    <App>
        <Switch>
            <Route exact path="/" component={User} />
            <Route exact path="/admin/users" component={User} />
        </Switch>
    </App>;

export default AppRoutes;