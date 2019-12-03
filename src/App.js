import React, {Component} from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import SignUp from './Views/SignUp';
import LogIn from './Views/LogIn';
import FormRequest from './Views/FormRequest';
import CreditProposal from './Views/CreditProposal';
import Payment from './Views/Payment';

class App extends Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL} >
        <Switch>
          <Route exact path='/home' component={SignUp} />
          <Route path='/' component={LogIn} />
          <Route path='/solicitudcredito' component={FormRequest} />
          <Route path='/propuesta' component={CreditProposal} />
          <Route path='/pago' component={Payment} />
        </Switch>
      </Router>
    );
  }
}

export default App;
