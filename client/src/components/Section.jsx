import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import ContactUs from './pages/ContactUs/Contactus'
import Login from "./pages/Login/Login";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import Payment from "./pages/Payment/Payment";
// import Dashboard from "./pages/Reviewer/Dashboard";
import ViewUploadResearchPapers from "./pages/Reviewer/ViewUploadResearchPapers";
import ViewWorkShop from "./pages/Reviewer/ViewWorkShop";
import Attendees from "./pages/Admin/Attendees/Attendees.jsx";
import NavBar from "./pages/Admin/Navbar";


export class Section extends Component{

    render() {

        return(

            <section>
                <Route path="/" component={Login} exact />
                <Route path="/contactUs" component={ContactUs} exact />
                <Route path="/registrationPage" component={RegistrationPage} exact />
                <Route path="/payment" component={Payment} exact />
                <Route path="/researchPaper" component={ViewUploadResearchPapers} exact />
                <Route path="/workshop" component={ViewWorkShop} exact />
                <Route path="/admin/attendees" component={Attendees} exact />
                <Route path="/admin/navbar" component={NavBar} exact />
                {/*<Route path="/ReviewerDashboard" component={Dashboard} exact />*/}
            </section>
        )
    }
}

export default Section