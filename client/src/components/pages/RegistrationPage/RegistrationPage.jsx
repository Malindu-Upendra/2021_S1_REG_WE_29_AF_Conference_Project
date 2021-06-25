import { Component } from "react";
import Attendee from "./Attendee/Attendee.jsx";

class RegistrationPage extends Component{

    constructor(props) {
        super(props);
        this.state = {
            decision:'Attendee'
        };
    }

    handleChange = e => {
        const { name, value } = e.target;

        this.setState({
            [name]: value
        });
    };

    render() {
        return (
            <div className="container" style={{marginTop:'50px' , marginBottom:'50px'}}>
                <h2 style={{backgroundColor:'#ff944d' , borderRadius:'5px', padding:'2px'}}>Please Select Your Category</h2>
            <div className="radio-buttons">
                Normal Attendee
                <input
                    id="Attendee"
                    value="Attendee"
                    name="decision"
                    type="radio"
                    onChange={this.handleChange}
                    checked={this.state.decision ==='Attendee'}
                />
                {" "}Researcher
                <input
                    id="Researcher"
                    value="Researcher"
                    name="decision"
                    type="radio"
                    onChange={this.handleChange}
                />
                {" "}WorkShop Conductor
                <input
                    id="Conductor"
                    value="WorkShop Conductor"
                    name="decision"
                    type="radio"
                    onChange={this.handleChange}
                />
            </div>

                { this.state.decision==='Researcher'  ? <h2>details of the { this.state.decision}</h2> : null }
                { this.state.decision==='WorkShop Conductor'  ? <h2>details of the { this.state.decision}</h2> : null }
                { this.state.decision==='Attendee'  ?
                    <>
                        <Attendee />
                    </>

                    : null }
            </div>
        );
    }

}

export default RegistrationPage;
