import React, { Component } from 'react'
import {render} from "react-dom";
import {BrowserRouter as Router} from 'react-router-dom'
import Header from "./components/pages/Header/Header";
import Footer from "./components/pages/Footer/Footer";
import Section from "./components/Section";
import AdminSection from "./components/AdminSection";

export class App extends Component{
    state={
        user:'user',
        Admin:'admin'
    }

    render(){
        return(

         <Router>
             { this.state.user==='user'  ?
                 <>
             <Header/>
                <Section/>
             <Footer/>
        </>
                 : null}


             { this.state.Admin==='admin'  ?
                 <>
                     <AdminSection/>
                 </>
                 : null}

         </Router>
        )

    }
}

export  default App;