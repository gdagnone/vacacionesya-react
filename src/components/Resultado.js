import React, { Component } from 'react';
import Imagen from './Imagen';

import Pagination from './Pagination';


class Resultado extends Component {

    mostrarImagenes = () =>{

        const imagenes = this.props.imagenes;

        if(imagenes.length===0) return null;

        //console.log(imagenes);

        return(

            <React.Fragment>
                <div className="col12 p-5 row">

                {imagenes.map((imagen) =>(
                    <Imagen 
                    imagen={imagen}
                    key={imagen.id}/>

                ))}
                </div>

                <Pagination
                     paginaAnterior={this.props.paginaAnterior}
                     paginaSiguiente={this.props.paginaSiguiente}
                     
                
                ></Pagination>
            </React.Fragment>
        )



    }

render(){

    return(
           
        <React.Fragment>
            {this.mostrarImagenes()}
        </React.Fragment>

    );

}


}

export default Resultado;