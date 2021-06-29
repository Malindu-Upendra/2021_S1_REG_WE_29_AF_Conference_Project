import React, { Component } from 'react'
import {Route} from 'react-router-dom';
import Hero from "./Hero/Hero.jsx";
import About from "./About/About";

export class Homepage extends Component{
    render() {
        return(
            <>
            <Hero/>
            <About/>
            </>
        )
    }


}
export default Homepage;