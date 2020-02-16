// import { FETCH_SERVICES } from './type';
import { serviceServices } from '../_services';
import { getAllServices } from '../../api/service.api';

// import { history } from '../../_helpers';

export const serviceAction = {
    getServices
}

// show all articles

function getServices() {
    return async (dispatch) => {
        try {
            const response = await getAllServices();
            console.log('Esta es la respuesta ---> ', response.data);
            dispatch(response.data);
        }
        catch (err) {
            console.log('Error');
            console.log(err);
            throw (err);
        }
    }
}
