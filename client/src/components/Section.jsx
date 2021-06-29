import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import ContactUs from './pages/ContactUs/Contactus'
import Login from "./pages/Login/Login";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import Payment from "./pages/Payment/Payment";
// import Dashboard from "./pages/Reviewer/Dashboard";
import ViewUploadResearchPapers from "./pages/Reviewer/ViewUploadResearchPapers";
import ViewWorkShop from "./pages/Reviewer/ViewWorkShop";
import Attendees from "./pages/Admin/Attendees/Attendees.jsx";
import NavBar from "./pages/Admin/Navbar";
import ReviewerNavbar from "./pages/Reviewer/ReviewerNavbar";
import AddConferenceTracks from "./pages/Editor/AddConferenceTracks/AddConferenceTracks";
import AddImportantDates from "./pages/Editor/AddImportantDates/AddImportantDates";
import CreateKeynotes from "./pages/Editor/CreateKeynotes/CreateKeynotes";
import ListAllResearchPapers from "./pages/Reviewer/ListAllResearchPapers";
import ListAllWorkshop from "./pages/Reviewer/ListAllWorkshop";
import Homepage from "./pages/Homepage/Homepage.jsx";

export class Section extends Component{

    render() {

        return(

            <section>

                <Route path="/" component={Homepage} exact />
                <Route path="/login" component={Login} exact />
                <Route path="/contactUs" component={ContactUs} exact />
                <Route path="/registrationPage" component={RegistrationPage} exact />
                <Route path="/payment" component={Payment} exact />
                <Route path="/researchPaper" component={ViewUploadResearchPapers} exact />
                <Route path="/workshop" component={ViewWorkShop} exact />
                <Route path="/admin/attendees" component={Attendees} exact />
                <Route path="/admin/navbar" component={NavBar} exact />
                <Route path="/reviewer/navbar" component={ReviewerNavbar} exact />
                <Route path="/addConferenceTracks" component={AddConferenceTracks} exact />
                <Route path="/addImportanceDates" component={AddImportantDates} exact />
                <Route path="/createKeynotes" component={CreateKeynotes} exact />
                <Route path="/ListResearchPaper/:id" component={ListAllResearchPapers} exact />
                <Route path="/ListWorkshop/:id" component={ListAllWorkshop} exact />

                {/*<Route path="/ReviewerDashboard" component={Dashboard} exact />*/}
            </section>
        )
    }
}

export default Section