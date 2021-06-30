import React, { Component } from 'react'
import {Link} from "react-router-dom";
import '../../css/Header.css'
import Menu from '../../svg/bars-solid.svg'
import Close from '../../svg/times-solid.svg'
import decode from "jwt-decode";
import Navbar from "../Admin/Navbar";
import ReviewerNavbar from '../Reviewer/ReviewerNavbar.js'
import EditorNavBar from  '../Editor/Navbar.js'

export  class Header extends Component{

    state = {
        toggle: false,
        user:''
    }

    menuToggle = () =>{
        this.setState({toggle: !this.state.toggle})
    }

    componentDidMount = () => {

        if(sessionStorage.token) {
            this.setState({user:decode(sessionStorage.token).position})
        }else {
            this.setState({user:'user'})
        }
    }

    render() {
        const {toggle} = this.state;
        return(
            <>

            { this.state.user==='user'  ?
                    <>

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
                    </>
                    : this.state.user==='Admin'  ? <Navbar/> :

                        this.state.user==='Reviewer' ? <ReviewerNavbar/> :

                            this.state.user==='Editor' ? <EditorNavBar/> : null}

                    </>

        )
    }

}


export default Header;