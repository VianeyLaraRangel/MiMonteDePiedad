import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BreadCrumb from '../components/Components/Home/BreadCrumbs';

import { Button } from 'reactstrap';

import './components/Components/Home/Home.css';
import logo from '../img/monte_logo.png';

class Home extends Component {
    render() {
        return (
            <div className="home-box">
                <img src={logo} className="home-logo" alt="logo" />
                <BreadCrumb className="options-box" />
                <section>
                    <Button color="info" className="btn-options">
                        <Link to="/sobreti">
                            <p>Solicitud de CrediMonte</p>
                        </Link>
                    </Button>
                    <Button color="info" className="btn-options">
                        <Link to="/tucredimonte">
                        <p>Tu CrediMonte</p>
                        </Link>
                    </Button>
                </section>
            </div>
        );
    }
}

export default Home;