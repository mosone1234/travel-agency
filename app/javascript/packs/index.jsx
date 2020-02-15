// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css';
// import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

import AppRoutes from '../router/AppRoutes';
import { history } from '../_helpers';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    // <Provider>
        <Router history={history}>
            <AppRoutes />
        </Router>,
    // </Provider>,
    document.body.appendChild(document.createElement('div')),
  )
})
