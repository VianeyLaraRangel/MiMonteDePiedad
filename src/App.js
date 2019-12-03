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
      <Router  basename={window.location.pathname || ""}>
        <Switch>
          <Route exact path='/' component={SignUp} />
          <Route exact path='/LogIn' component={LogIn} />
          <Route exact path='/solicitudcredito' component={FormRequest} />
          <Route exact path='/propuesta' component={CreditProposal} />
          <Route exact path='/pago' component={Payment} />
        </Switch>
      </Router>
    );
  }
}

export default App;
