import React, { Component } from 'react'
//import {Route} from 'react-router-dom';
import Hero from "./Hero/Hero.jsx";
import About from "./About/About";
import Keynotes from "./Keynotes/Keynotes";
import ConferenceTracks from './ConferenceTracks/ConferenceTracks.jsx'


export class Homepage extends Component{
    render() {
        return(
            <>
            <Hero/>
            <About/>
            <Keynotes/>
            <ConferenceTracks/>
            </>
        )
    }
}
export default Homepage;