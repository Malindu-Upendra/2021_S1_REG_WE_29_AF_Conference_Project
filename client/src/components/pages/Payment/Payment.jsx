import React , {Component} from "react";
//import '../css/paypall.css'
//import PayPal from "./PayPal";

export class Pay extends Component{

    state = {
        user: []
    }

    componentDidMount = () => {
        //const details = this.props.match.params.user;
        const details = this.props.location.data;
        console.log(details)
        this.setState({details})
        console.log(this.state.user)
    }

    render() {
        return (
            /*<div className="pay">
                <PayPal
                    email={this.state.email}
                    toPay={this.state.total}/>

            </div>*/
            <h2>{this.state.user}</h2>
        );
    }
}

export default Pay;
