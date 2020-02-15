import AdminContent from '../components/admin/admin-content/AdminContent';
import PropTypes from 'prop-types';
import Sidebar from './layout/sidebar/Sidebar';

import React, { Component } from 'react';

class App extends Component {
    static propTypes = {
        children: PropTypes.object.isRequired,
    };
    render() {
        const { children } = this.props;
        const currentRoute = window.location.pathname;
        return (
            <div>
                <div className="d-flex" id="wrapper">
                    <Sidebar></Sidebar>
                    <AdminContent body={children}></AdminContent>
                </div>
            </div>
        )
    }
}


export default App;