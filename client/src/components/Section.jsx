import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import ContactUs from './pages/Contactus'

export class Section extends Component{

    render() {

        return(

            <section>
                <Route path="/" component={ContactUs} exact />




            </section>
        )
    }
}

export default Section