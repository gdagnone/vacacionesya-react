import React, {Component} from 'react';

import {authenticationService}  from '../services/authentication.service';
import {operacionesService}  from '../services/operaciones.service';

class OperacionesPage extends Component {
    constructor(props) {
        super(props);
         
        this.state = {
            currentUser: authenticationService.currentUserValue,
            operaciones : null
    
        };
        
    }

    componentDidMount() {
        operacionesService.getAll().then(operaciones => this.setState({ operaciones}));
       
    }

    
   
    
    render() {
        const {operaciones} = this.state;
        return(
            <div>
           


            <div>
                 
                 {operaciones &&
                    <ul>
                             {operaciones.map((operacion) =>(

                            <li key={operacion.id}>
                                    {operacion.id} {operacion.operDetalle}

                            </li>

                            ))}

                                    

                    </ul>
                

                }
             </div>


            </div>
            
            
            
            
            
            
            )



    }


}
export default  OperacionesPage ;