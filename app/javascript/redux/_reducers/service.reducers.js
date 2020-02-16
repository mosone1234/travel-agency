// import { FETCH_SERVICES } from '../_actions/type';
// import {actions} from '../_actions';

const initialState = {
    services: []
};

export default function articleReducer(state = initialState, action) {
    switch (action.type) {
        case 'FETCH_SERVICES':
            return {
                ...state,
                services: action.services
            };
        default:
            return state
    }
}