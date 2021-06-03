import React, { Component } from 'react'
import {render} from "react-dom";
import {BrowserRouter as Router} from 'react-router-dom'
import Header from "./components/pages/Header/Header";
import Footer from "./components/pages/Footer/Footer";
import Section from "./components/Section";

export class App extends Component{

    render(){
        return(

         <Router>
             <Header/>

                <Section/>

             <Footer/>
         </Router>
        )

    }
}

export  default App;