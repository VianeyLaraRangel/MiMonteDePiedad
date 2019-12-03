import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BreadCrumbs from '../Components/Home/BreadCrumbs';

import { Button } from 'reactstrap';

import '../Components/Home/Home.css';
import logo from '../img/monte_logo.png';

class Home extends Component {
    render() {
        return (
            <div className="home-box">
                <img src={logo} className="home-logo" alt="logo" />
                <BreadCrumbs className="options-box" />
                <section>
                    <Button color="info" className="btn-options">
                        <Link to="/tuscreditos">
                            <p>Solicitud de CrediMonte</p>
                        </Link>
                    </Button>
                    <Button color="info" className="btn-options">
                            <p>Tu CrediMonte</p>
                    </Button>
                </section>
            </div>
        );
    }
}

export default Home;