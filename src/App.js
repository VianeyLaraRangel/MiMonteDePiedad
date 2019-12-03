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
      <Router basename={process.env.PUBLIC_URL} >
        <Switch>
          <Route exact path='/' component={SignUp} />
          <Route path='/iniciasesion' component={Login} />
          <Route path='/solicitudcredito' component={FormRequest} />
          <Route path='/propuesta' component={CreditProposal} />
          <Route path='/pago' component={Payment} />
        </Switch>
      </Router>
    );
  }
}

export default App;
