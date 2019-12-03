import React from 'react';
import {  List, ListItem, ListItemContent, Tabs, Tab, Grid, Cell } from 'react-mdl';
import { withRouter } from 'react-router';

import FormNegocio from './FormNegocio';
import FormProposito from './FormProposito';

class FormTab extends React.Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 2 };
    }

    // toggleCategories() {
    //     if (this.state.activeTab === 0) {
    //         return (
    //             <FormNegocio />
    //         )
    //     } else if (this.state.activeTab === 1) {
    //         return (
    //             <FormProposito/>
    //         )
    //     } else if (this.state.activeTab === 2) {
    //         return (
    //             <article>
    //                 <p>>Confirmacion</p>
    //             </article>
    //         )
    //     }
    // }

    render() {
        return (
            <div className="demo-tabs">
            <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                <Tab>Starks</Tab>
                <Tab>Lannisters</Tab>
                <Tab>Targaryens</Tab>
            </Tabs>
            <section>
                <div className="content">Content for the tab: {this.state.activeTab}</div>
            </section>
        </div>   
            // <div className="aboutme-tabs">
            //     <Tabs activeTab={this.state.activeTab} 
            //         onChange={(tabId) => this.setState({ activeTab: tabId })}>
            //         <Tab>Tecnologías</Tab>
            //         <Tab>Habilidades</Tab>
            //         <Tab>Presentación</Tab>
            //     </Tabs>
            //     <section>
            //         <div className="content">Content for the tab: {this.state.activeTab}</div>
            //     </section>  

            // </div>
        );
    }
}

export default withRouter(FormTab);