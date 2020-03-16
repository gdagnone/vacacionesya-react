//import  config  from 'config';
import { authHeader } from '../helpers/auth-header';
import { handleResponse } from '../helpers/handle-response';

const baseURL = process.env.REACT_APP_API_URL

export const operacionesService = {
    getAll
};

function getAll() {

    const url = baseURL + `operaciones`;

   
    const requestOptions = { method: 'GET', headers: authHeader() };
        
    const respuesta =fetch(url, requestOptions).then(handleResponse);
  
    return respuesta;

    
}