import React, {Component} from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import SignUp from './Views/SignUp';
import Login from './Views/LogIn';
import FormRequest from './Views/FormRequest';
import CreditProposal from './Views/CreditProposal';
import Payment from './Views/Payment';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={SignUp} />
          <Route exact path='/iniciasesion' component={Login} />
          <Route exact path='/solicitudcredito' component={FormRequest} />
          <Route exact path='/propuesta' component={CreditProposal} />
          <Route exact path='/pago' component={Payment} />
        </Switch>
      </Router>
    );
  }
}

export default App;
