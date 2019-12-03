import React, {Component} from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from './Views/Home';
import LogIn from './Views/LogIn';
import FormRequest from './Views/FormRequest';
import CreditProposal from './Views/CreditProposal';
import Payment from './Views/Payment';
import Formulario from './Views/Formulario';

class App extends Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL} >
        <Switch>

          <Route exact path='/' component={SignUp} />
          <Route exact path='/iniciasesion' component={Login} />
          <Route exact path='/solicitudcredito' component={FormRequest} />
          <Route exact path='/propuesta' component={CreditProposal} />
          <Route exact path='/pago' component={Payment} />
          <Route exact path='/formulario' component={Formulario} />

        </Switch>
      </Router>
    );
  }
}

export default App;
