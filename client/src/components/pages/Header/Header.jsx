import React, { Component } from 'react'
import {Link} from "react-router-dom";
import '../../css/Header.css'
import Menu from '../../svg/bars-solid.svg'
import Close from '../../svg/times-solid.svg'

export  class Header extends Component{

    state = {
        toggle: false
    }

    menuToggle = () =>{
        this.setState({toggle: !this.state.toggle})
    }

    render() {
        const {toggle} = this.state;
        return(

        <header>

            <div className="menu" onClick={this.menuToggle}>
                <img src={Menu} alt="" width="20"/>
            </div>
            <div className="logo">
                <Link to="/">  SLIIT Conf .
                    <i className="fas fa-american-sign-language-interpreting"></i>
                </Link>
            </div>

            <nav>
                <ul className={toggle ? "toggle" : ""}>

                    <li><Link to="/"> <i className="fas fa-home"></i> Home</Link></li>
                    <li><Link to="/">  Keynotes </Link></li>


                    <li><Link to="/"> Download Templates </Link></li>
                    <li><Link to="/nav"> Workshop </Link></li>

                    <li><Link to="/registrationPage">  Register </Link></li>


                    <li><Link to="/contactUs">  Contact-Us </Link></li>

                    <li><Link to="/login">  Login </Link></li>

                    <li className="close" onClick={this.menuToggle}>
                        <img src={Close} alt="" width="20"/>
                    </li>

                </ul>
            </nav>




        </header>


        )
    }

}


export default Header;