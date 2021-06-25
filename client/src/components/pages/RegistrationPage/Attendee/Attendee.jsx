import React, { Component } from 'react';
import { Form, Input, Label, FormGroup, FormFeedback, Button } from 'reactstrap';
import { isEmail } from 'validator';
import {Link} from "react-router-dom";

class Register extends Component {
    constructor(props) {
        super(props);

        this.state = this.getInitialState();
    }

    getInitialState = () => ({
        data: {
            Name: '',
            email: '',
            phoneNumber: ''
        },
        errors: {}
    });

    handleChange = (e) => {
        this.setState({
            data: {
                ...this.state.data,
                [e.target.name]: e.target.value
            },
            errors: {
                ...this.state.errors,
                [e.target.name]: ''
            }
        });
    }

    validate = (evt) => {
        const { data } = this.state;
        let errors = {};

        if (data.Name === '') errors.Name = 'Enter Your Name!!!';
        if (!isEmail(data.email)) errors.email = 'Enter a Valid Email Address!!!';
        //if (data.phoneNumber === '') errors.phoneNumber = 'Enter Your Phone Number!!!';

        const rx_live = /^[+-]?\d*(?:[.,]\d*)?$/;

        if (!rx_live.test(data.phoneNumber))
        {
            errors.phoneNumber = 'Enter Your Phone Number!!!'
        }
        else if(data.phoneNumber.length < 10)
        {
            errors.phoneNumber = 'Enter valid Phone Number!!!'
        }

        return errors;
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const { data } = this.state;

        const errors = this.validate();

        if (Object.keys(errors).length === 0) {
            console.log(data);

            this.setState(this.getInitialState());
            //window.location = `/payment/${data}`
        } else {
            this.setState({ errors });
        }

    }

    render() {
        const { data, errors } = this.state;
        return (
            <div>    <br></br>
                <div className="container">
                    <Form onSubmit={this.handleSubmit}>
                        <FormGroup>
                            <Label for="firstName">Name</Label>
                            <Input id="firstName" value={data.Name} invalid={errors.Name ? true : false} name="Name" placeholder="Enter Your Name" onChange={this.handleChange} />
                            <FormFeedback style={{color:'red'}}>{errors.Name}</FormFeedback>
                        </FormGroup>
                        <br></br>

                        <FormGroup>
                            <Label for="email">Email</Label>
                            <Input id="email" value={data.email} invalid={errors.email ? true : false} name="email"  placeholder="Enter Your Email ID" onChange={this.handleChange} />
                            <FormFeedback style={{color:'red'}}>{errors.email}</FormFeedback>
                        </FormGroup>

                        <br></br>
                        <FormGroup>
                            <Label for="lastName">Phone Number</Label>
                            <Input id="lastName" maxLength={10} value={data.phoneNumber} invalid={errors.phoneNumber ? true : false} name="phoneNumber"  placeholder="Enter Your Phone Number" onChange={this.handleChange} />
                            <FormFeedback style={{color:'red'}}>{errors.phoneNumber}</FormFeedback>
                        </FormGroup>

                        <br></br>

                        <Link
                            to={{
                                pathname: "/payment",
                                data: this.state.data // your data array of objects
                            }}
                        ><Button type="submit" outline color="success">Register</Button></Link>
                        <br></br> <br></br>
                    </Form>
                </div>

                <br></br>
            </div>

        );
    }
}

export default Register;