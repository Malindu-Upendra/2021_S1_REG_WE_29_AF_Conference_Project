import React, {Component} from "react";
import {Button, Form, Modal} from "react-bootstrap";
import Payment from "../../Payment/Payment";

export class WConductor extends Component{

    state = {
        title:'',
        description:'',
        wconductors:'',
        file:''
    }

    handleChange = (e) => {
        const {name , value} = e.target;
        this.setState({[name]:value});
    }

    handleImage = (e) => {
        this.setState({file:e.target.files[0]})
        console.log(this.state.file)
    }

    render() {
        return(
            <div className='container' style={{marginTop:'50px' , marginBottom:'50px' }}>
                <div style={{textAlign:'center' , backgroundColor:'#80d4ff'}}><h2 style={{borderRadius:'5px', padding:'2px'}}>Details of Workshop Conductor/s </h2></div>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Title of Research Paper</Form.Label>
                        <Form.Control type="text" name="title" onChange={this.handleChange} />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" name="description" rows={5} onChange={this.handleChange}/>
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>WorkShop Conductors</Form.Label>
                        <Form.Control type="text" name="wconductors" onChange={this.handleChange} />
                    </Form.Group>
                    <Form.Group>
                        <Form.File id="exampleFormControlFile1" name="file" label="Example file input" onChange={this.handleImage}/>
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