import React, { Component } from 'react'
//import {Route} from 'react-router-dom';
import Hero from "./Hero/Hero.jsx";
import About from "./About/About";
import Keynotes from "./Keynotes/Keynotes";
import Countdown from "./CountDown/Countdown";

export class Homepage extends Component{
    render() {
        return(
            <>
            <Hero/>
            <About/>
            <Countdown/>
            <Keynotes/>
            </>
        )
    }
} export default Homepage;