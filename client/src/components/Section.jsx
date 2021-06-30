import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import ContactUs from './pages/ContactUs/Contactus'
import Login from "./pages/Login/Login";
import RegistrationPage from "./pages/User/RegistrationPage/RegistrationPage";
import Payment from "./pages/User/Payment/Payment";
// import Dashboard from "./pages/Reviewer/Dashboard";
import ViewUploadResearchPapers from "./pages/Reviewer/ViewUploadResearchPapers";
import ViewWorkShop from "./pages/Reviewer/ViewWorkShop";
import Attendees from "./pages/Admin/Attendees/Attendees.jsx";
import ImportantDates from "./pages/Admin/ImportantDates/ImportantDates";
import RetrieveWorkShop from "./pages/Admin/RetrieveWorkShop/RetrieveWorkShop";
import NavBar from "./pages/Admin/Navbar";
import KeynoteSpeakers from "./pages/Homepage/KeynoteSpeakers";
import ReviewerNavbar from "./pages/Reviewer/ReviewerNavbar";
import AddConferenceTracks from "./pages/Editor/AddConferenceTracks/AddConferenceTracks";
import AddImportantDates from "./pages/Editor/AddImportantDates/AddImportantDates";
import CreateKeynotes from "./pages/Editor/CreateKeynotes/CreateKeynotes";
import ListAllResearchPapers from "./pages/Reviewer/ListAllResearchPapers";
import ListAllWorkshop from "./pages/Reviewer/ListAllWorkshop";
import Homepage from "./pages/Homepage/Homepage.jsx";
import InsertedKeynotes from "./pages/Admin/EditorChanges/InsertedKeynotes.jsx";
//import ImportantDates from "./pages/Admin/ImportantDates/ImportantDates";
//import ImportantDatesSection from "./pages/Homepage/ImportantDates";
import Keynote from "./pages/Admin/RetrieveWorkShop/RetrieveWorkShop.jsx";
import ConferenceTracks from "./pages/Admin/ConferenceTracks/ConferenceTracks.jsx";

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
                <Route path="/admin/conferencetracks" component={ConferenceTracks} exact />
                <Route path="/admin/importantdates" component={ImportantDates} exact />
                <Route path="/admin/keynotes" component={RetrieveWorkShop} exact />
                <Route path="/admin/navbar" component={NavBar} exact />
                <Route path="/keynoteSpeakers" component={KeynoteSpeakers} exact />
                <Route path="/reviewer/navbar" component={ReviewerNavbar} exact />
                <Route path="/addConferenceTracks" component={AddConferenceTracks} exact />
                <Route path="/addImportanceDates" component={AddImportantDates} exact />
                <Route path="/createKeynotes" component={CreateKeynotes} exact />
                <Route path="/ListResearchPaper/:id" component={ListAllResearchPapers} exact />
                <Route path="/ListWorkshop/:id" component={ListAllWorkshop} exact />
                <Route path="/admin/ListKeynotes" component={InsertedKeynotes} exact />
                <Route path="/admin/RetrieveWorkShop" component={Keynote} exact />
                <Route path="/admin/conferencetracks" component={ConferenceTracks} exact />
                <Route path="/editor/conferencetracks" component={AddConferenceTracks} exact />
                <Route path="/editor/importantdates" component={AddImportantDates} exact />
                <Route path="/editor/createkeynotes" component={CreateKeynotes} exact />
                {/*<Route path="/ReviewerDashboard" component={Dashboard} exact />*/}

            </section>
        )
    }
}

export default Section