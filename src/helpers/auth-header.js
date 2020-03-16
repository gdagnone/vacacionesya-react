import { authenticationService } from '../services/authentication.service';

import  Cookies  from 'js-cookie';

export function authHeader() {
    // return authorization header with jwt token
    console.log( "entro header");    
    const currentUser = authenticationService.currentUserValue;
    if (currentUser && currentUser.token) {
        console.log( currentUser.token);        
        //console.log( "BEARER");

        return { Authorization: `Bearer ${currentUser.token}` };

    } else {
        return {};
    }
}