import React, { Component } from 'react';
import CodeForm from '../components/codeform';

class LogIn extends Component {
    render() {
        return (
            <div className="login-screen">
        <div className="backg-img">
          {/* <img src={logo} className="logo-app" alt="logo" /> */}

          <h1 className="greeting-login">¡Hola!</h1>

          <CodeForm />
        </div>
      </div>
        );
    }
}

export default LogIn;