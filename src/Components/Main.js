import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignUp from './SignUp';

const Main = () => {
    <Switch>
        <Route exact path='/' component={SignUp} />
        {/* <Route path='/home' component={Home} />
        <Route path='/creditform' component={CreditForm} />
        <Route path='/proposal' component={Proposal} /> */}
    </Switch>
}

export default Main;