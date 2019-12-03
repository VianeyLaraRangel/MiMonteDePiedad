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
                <p className="title-CrediMonte">Tu CrediMonte</p>
                <section>
                    <Button color="info" className="btn-options">
                        <Link to="/tuscreditos">
                            <p>Tus créditos</p>
                        </Link>
                    </Button>
                    <Button color="info" className="btn-options">
                        <p>Consulta de estados de Cuenta</p>
                    </Button>
                </section>
            </div>
        );
    }
}

export default CrediMonte;