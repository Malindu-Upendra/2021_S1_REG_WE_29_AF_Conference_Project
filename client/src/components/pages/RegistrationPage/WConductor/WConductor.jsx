import React, {Component} from "react";
import {Button, Form, Modal} from "react-bootstrap";
import Payment from "../../Payment/Payment";

export class WConductor extends Component{

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

    handleChange = (e) => {
        const {name , value} = e.target;
        this.setState({[name]:value});
    }

    render() {
        return(
            <div className='container' style={{marginTop:'50px' , marginBottom:'50px' }}>
                <div style={{textAlign:'center' , backgroundColor:'#80d4ff'}}><h2 style={{borderRadius:'5px', padding:'2px'}}>Details of the Attendee</h2></div>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Title of Research Paper</Form.Label>
                        <Form.Control type="text" name="title" onChange={this.handleChange} />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" name="description" rows={5} />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>WorkShop Conductors</Form.Label>
                        <Form.Control type="text" name="wconductors" onChange={this.handleChange} />
                    </Form.Group>
                    <Form.Group>
                        <Form.File id="exampleFormControlFile1" name="file" label="Example file input" />
                    </Form.Group>

                    <Button variant="primary" type="submit"  style={{width:'100%'}}>
                        Submit
                    </Button>
                </Form>

            </div>
        )
    }

}

export default WConductor;