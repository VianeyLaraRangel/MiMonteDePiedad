import React, {Component} from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from './Views/Home';
import LogIn from './Views/LogIn';
import SignUp from './Views/SignUp';
import CodeVerif from './Views/CodeVerif';
import FormSobreTi from './Views/FormSobreTi';
import FormPlanes from './Views/FormPlanes';
import CreditProposal from './Views/CreditProposal';
import Payment from './Views/Payment';
import CrediMonte from './Views/CrediMonte';
import Credits from './Views/Credits';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={LogIn} />
          <Route exact path='/SignUp' component={SignUp} />
          <Route exact path='/CodeVerif' component={CodeVerif} />
          <Route exact path='/inicio' component={Home} /> 
          <Route exact path='/sobreti' component={FormSobreTi} />
          <Route exact path='/tusplanes' component={FormPlanes} />
          <Route exact path='/propuesta' component={CreditProposal} />
          <Route exact path='/pago' component={Payment} />
          <Route exact path='/tucredimonte' component={CrediMonte} />
          <Route exact path='/tuscreditos' component={Credits} />
        </Switch>
      </Router>
    );
  }
}

export default App;
