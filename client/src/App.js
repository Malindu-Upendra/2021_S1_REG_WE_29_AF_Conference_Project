import React, { Component } from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import Header from "./components/pages/Header/Header";
import Footer from "./components/pages/Footer/Footer";
import Section from "./components/Section";
import Navbar from "./components/pages/Admin/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import decode from 'jwt-decode'

export class App extends Component{
    state={
        user:'user',
    }

    componentDidMount = () => {

        if(sessionStorage.token) {
            this.setState({user:decode(sessionStorage.token).position})
        }else {
            this.setState({user:'user'})
        }
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
             { this.state.user==='Admin'  ?
                 <>
                     <Navbar/>
                     <Section/>
                 </>
                 : null}
         </Router>
        )
    }
}

export  default App;