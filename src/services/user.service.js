//import  config  from 'config';
import { authHeader } from '../helpers/auth-header';
import { handleResponse } from '../helpers/handle-response';

export const userService = {
    getAll
};

function getAll() {
    const requestOptions = { method: 'GET', headers: authHeader() };
    return fetch(`http://www.vacacionesya.com.ar/backend/public/index.php/api/operaciones`, requestOptions).then(handleResponse);
}