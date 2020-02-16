import {
    getAllServices
} from '../../api/service.api'

export const serviceServices = {
    getAll
    // create,
    // update,
    // destroy,
    // get
}

async function getAll() {
    try {
        const response = await getAllServices();
        console.log(response);
        return response.data;
      } catch (error) {
        console.log('Error', error)
        throw (error);
    }
}

// function get(id) {
//     return axios.get('http://localhost:3200/api/articles/' + id).then((response) => {
//         return response;
//     }).catch((err) => {
//         console.log('Error in response');
//         console.log(err);
//         throw (err);
//     });
// }

// function create(article) {
//     return axios.post('http://localhost:3200/api/articles', article).then((response) => {
//         return response;
//     }).catch((err) => {
//         console.log('Error in response');
//         console.log(err);
//         throw (err);
//     });
// }

// function update(article) {
//     return axios.put('http://localhost:3200/api/articles', article).then((response) => {
//         return response;
//     }).catch((err) => {
//         console.log('Error in response');
//         console.log(err);
//         throw (err);
//     });
// }

// function destroy(id) {
//     return axios.delete('http://localhost:3200/api/articles', id).then((response) => {
//         return response;
//     }).catch((err) => {
//         console.log('Error in response');
//         console.log(err);
//         throw (err);
//     });
// }