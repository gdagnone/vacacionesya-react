import React, {Component} from 'react';
//import Buscador from './components/Buscador';

import './assets/css/bootstrap-superhero.min.css';
//import Resultado from './components/Resultado';

class App extends Component {

  state = {

    valorInput : '',
    imagenes : [],
    pagina:''


  }

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

  console.log(pagina);
}


paginaSiguiente = () => {

  let pagina = this.state.pagina;

  pagina +=1;

  this.setState({pagina}, () =>{
    this.consultarApi();
    this.scroll();
  });

  console.log(pagina);


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


  render(){
    return (
      <div className="app container">
        
        <div className="jumbotron">

          <p  className="lead text-center" >Buscador de Imágenes</p>
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
      </div>
    );
  }
}

export default App;
