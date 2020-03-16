import React from 'react';
import { Router, Route, Link } from 'react-router-dom';

import './assets/css/bootstrap-superhero.min.css';

import { history } from '../src/helpers/history';
import { authenticationService } from '../src/services/authentication.service';
import { PrivateRoute } from '../src/routes/Private';
import  HomePage  from '../src/routes/Home';
import  LoginPage  from '../src/routes/Login';
import  OperacionesPage  from '../src/routes/Operaciones';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentUser: null
        };
    }

    componentDidMount() {
        authenticationService.currentUser.subscribe(x => this.setState({ currentUser: x }));
    }

    logout() {
        authenticationService.logout();
        history.push('/login');
    }

    render() {
        const { currentUser } = this.state;
        return (
            <Router history={history}>
                <div className="app container col-md-10 ">
                    {currentUser &&
                        <nav className="navbar navbar-expand navbar-dark bg-dark">
                            <div className="navbar-nav">
                                <Link to="/" className="nav-item nav-link active" >Inicio</Link>
                                <Link to="/operaciones" className="nav-item nav-link active" >Operaciones</Link>
                                <a onClick={this.logout} href="#" className="nav-item nav-link">Salir</a>
                            </div>
                        </nav>
                    }
                    <div className="jumbotron">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 ">
                                    <PrivateRoute exact path="/" component={HomePage} />
                                    <PrivateRoute exact path="/operaciones" component={OperacionesPage} />
                                    <Route path="/login" component={LoginPage} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Router>
        );
    }
}

export default  App ;