import { createStore, combineReducers, applyMiddleware } from 'redux';
import services from './_reducers/service.reducers';
import thunk from 'redux-thunk';

const reducer = combineReducers({
    services: services
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
