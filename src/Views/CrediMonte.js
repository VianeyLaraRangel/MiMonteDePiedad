import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Button } from 'reactstrap';

import '../Components/Home/Home.css';
import logo from '../img/monte_logo.png';

class CrediMonte extends Component {
    render() {
        return (
            <div className="home-box">
                <img src={logo} className="home-logo" alt="logo" />
                <h1>Tu CrediMonte</h1>
                <section>
                    <Button color="info" className="btn-options">
                        <Link to="/sobreti">
                           <p>Solicitud de CrediMonte</p>
                    </Link>
                    </Button>
                    <Button color="info" className="btn-options">Tu CrediMonte</Button>
                </section>
            </div>
        );
    }
}

export default CrediMonte;