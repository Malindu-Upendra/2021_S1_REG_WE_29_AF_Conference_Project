import React, { Component } from 'react';
import { isEmail } from 'validator';
import {Button, Form, Modal} from "react-bootstrap";
import '../css/Attendee.css'
import Payment from '../../Payment/Payment.jsx'

class Register extends Component {

    state = {
        fname:'',
        email:'',
        phoneNumber:0,
        amount:10,
        openModal:''
    }

    componentDidMount() {
        this.setState({openModal:false})
    }

    ModalOn = (e) => {
        e.preventDefault();
        this.setState({openModal:true})

    }

    ModalOff = () => {
        this.setState({openModal:false})
    }

    handleChange = (e) => {
        const {name , value} = e.target;
        this.setState({[name]:value});
    }

    render() {
        return(
            <div className='container' style={{marginTop:'50px' , marginBottom:'100px' }}>
                <div style={{textAlign:'center' , backgroundColor:'#80d4ff'}}><h2 style={{borderRadius:'5px', padding:'2px'}}>Details of the Attendee</h2></div>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" name="fname" onChange={this.handleChange} />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" onChange={this.handleChange} />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                     <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="number" name="phoneNumber" onChange={this.handleChange} />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={this.ModalOn} style={{width:'100%'}}>
                    Register
                </Button>
            </Form>
                <div>
                    <Modal
                        show={this.state.openModal}
                        size="lg"
                        aria-labelledby="contained-modal-title-vcenter"
                        centered
                    >
                        <Modal.Body>
                            <h4>Payment Method</h4>
                            <Payment
                                email={this.state.email}
                                name={this.state.fname}
                                phoneNumber={this.state.phoneNumber}
                                amount={this.state.amount}/>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="outline-danger" type="submit" onClick={this.ModalOff}>Close</Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>
        )
    }

}

export default Register;