
import React, {Component} from 'react';

import {authenticationService}  from '../services/authentication.service';
import {userService}  from '../services/user.service';
import {operacionesService}  from '../services/operaciones.service';
import Buscador from '../components/Buscador';
import Resultado from '../components/Resultado';

class HomePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentUser: authenticationService.currentUserValue,
            users: null,
            valorInput : '',
            imagenes : [],
            pagina:'',
            operaciones : null
    
        };
    }

    componentDidMount() {
       // operacionesService.getAll().then(operaciones => this.setState({ operaciones }));
    }

    //Buscador

    

    scroll = () =>{
    const elemento = document.querySelector('.jumbotron');

    elemento.scrollIntoView('auto', 'start');


    }

    paginaAnterior = () => {

    let pagina = this.state.pagina;

    if(pagina===1) return null;
    
    pagina -=1;

    this.setState({pagina}, () =>{
        this.consultarApi();
        this.scroll();
    });

    //console.log(pagina);
    }


    paginaSiguiente = () => {

    let pagina = this.state.pagina;

    pagina +=1;

    this.setState({pagina}, () =>{
        this.consultarApi();
        this.scroll();
    });

    //console.log(pagina);


    }

    consultarApi = () => {
    const busqueda = this.state.valorInput;
    const pagina = this.state.pagina;
    const url = `https://pixabay.com/api/?key=1732750-d45b5378879d1e877cd1d35a6&q=${busqueda}&per_page=30&page=${pagina}`;

    fetch(url)
        .then(respuesta => respuesta.json() )
        .then(resultado => this.setState( { imagenes: resultado.hits}))

    }

    datosBusqueda = (valorInput) => {
        this.setState({
        valorInput: valorInput,
        pagina:1
        },() =>{this.consultarApi(); } )

    //console.log(valorInput);

    }

    //Render Home

    render() {
        const { currentUser, users, operaciones } = this.state;
        return (
            <div >
            
             
        
             <div className="jumbotron">
     
               <p  className="lead text-left" >Buscador de Imágenes</p>
               <Buscador datosBusqueda= {this.datosBusqueda}
               
               />
     
             </div>
             <div className="row justify-content-center">
                 <Resultado 
                   imagenes={this.state.imagenes}
                   paginaAnterior={this.paginaAnterior}
                   paginaSiguiente={this.paginaSiguiente}
                 
                 />
             </div>
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
        );
    }
}

export default  HomePage ;