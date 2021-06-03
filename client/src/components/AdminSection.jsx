import React, { Component } from 'react';
import {Route} from 'react-router-dom';
// import ContactUs from './pages/ContactUs/Contactus'
import Navbar from '../components/pages/Admin/Navbar'


export class AdminSectionSection extends Component{

    render() {
        return(
            <section>
                {/*<Route path="/" component={ContactUs} exact />*/}
                {/*<Route path="/" component={ContactUs} exact />*/}
                <Route path="/nav" component={Navbar} exact />

            </section>
        )
    }
}

export default AdminSectionSection