import React, { Component } from 'react';
import logo from "../img/monte_logo.png";


class SignUp extends Component {
    render() {
        return (
            <div className="signup-screen">
            <div className="backg-img">
          <img src={logo} className="logo-signup" alt="logo" />    
          <h1 className="greeting-login"></h1>
          </div>
          </div>
        );
    }
}

export default SignUp;