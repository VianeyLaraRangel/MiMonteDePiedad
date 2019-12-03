import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Button, Table } from 'reactstrap';

import '../Components/Home/Home.css';
import logo from '../img/monte_logo.png';

class Credits extends Component {
    render() {
        return (
            <div className="home-box">
                <Link to="/tucredimonte" className="brand-box">
                    <a className="back-icon">
                        <i class="fas fa-chevron-left"></i>
                        <img src={logo} className="home-logoCredi" alt="logo" />
                    </a>
                </Link>
                <p className="title-CrediMonte">Tus Creditos</p>
                <section className="box-table">
                    <Table className="credit-table" border="1" cellspacing="0">
                        <thead>
                            <tr className="tr-without">
                                <th>No.5674890</th>
                                <th>$10,000</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="tr-red">
                                <th scope="row">Pagos realizados</th>
                                <td>$2,116</td>
                            </tr>
                            <tr>
                                <th scope="row">Pagos restantes</th>
                                <td>$10,834</td>
                            </tr>
                        </tbody>
                    </Table>
                </section>
            </div>
        );
    }
}

export default Credits;