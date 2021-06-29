import React, { Component } from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import Header from "./components/pages/Header/Header";
import Footer from "./components/pages/Footer/Footer";
import Section from "./components/Section";
import Navbar from "./components/pages/Admin/Navbar";
import ReviewerNavbar from "./components/pages/Reviewer/ReviewerNavbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';


export class App extends Component{
    state={
        user:'reviewer',

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
             { this.state.user==='admin'  ?
                 <>
                     <Navbar/>
                     <Section/>
                 </>
                 : null}

             { this.state.user==='reviewer'  ?
                 <>
                     <ReviewerNavbar/>
                     <Section/>
                 </>
                 : null}

         </Router>
        )
    }
}

export  default App;