import { Component } from "react";
import Attendee from "./Attendee/regformAlign.jsx";

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
            <>
                <h2>Please Select Your Category</h2>
            <div className="radio-buttons">
                Normal Attendee
                <input
                    id="windows"
                    value="Attendee"
                    name="decision"
                    type="radio"
                    onChange={this.handleChange}
                    checked={this.state.decision ==='Attendee'}
                />
                {"       "}Researcher
                <input
                    id="mac"
                    value="Researcher"
                    name="decision"
                    type="radio"
                    onChange={this.handleChange}
                />
                {"       "}WorkShop Conductor
                <input
                    id="linux"
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
                        <h2>details of the { this.state.decision}</h2>
                        <Attendee />
                    </>

                    : null }
            </>
        );
    }

}

export default RegistrationPage;
