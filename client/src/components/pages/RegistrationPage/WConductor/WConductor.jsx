import React, {Component} from "react";
import {Button, Form, Modal} from "react-bootstrap";
import Payment from "../../Payment/Payment";
import axios from "axios";

export class WConductor extends Component{

    state = {
        title:'',
        description:'',
        wconductors:'',
        image:''
    }

    handleChange = (e) => {
        const {name , value} = e.target;
        this.setState({[name]:value});
    }

    handleImage = (e) => {
        this.setState({image:e.target.files[0]})
        console.log(e.target.files[0])
        console.log(this.state.image)
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        console.log(this.state.image)

        try {
            let formData = new FormData();
            formData.append("title", this.state.title);
            formData.append("description", this.state.description);
            formData.append("wconductors", this.state.wconductors);
            formData.append("image", this.state.image);

            axios.post('http://localhost:5000/user/sample', formData).then(res => {
                alert("Successfully added")
                history.replace("/");
            })

        } catch (error) {
            console.log(error);
        }

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
                        <Form.File id="exampleFormControlFile1"
                                   name="image"
                                   // accept="application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                                   label="Example file input" onChange={this.handleImage}/>
                    </Form.Group>

                    <Button variant="primary" onClick={this.handleSubmit} style={{width:'100%'}}>
                        Submit
                    </Button>
                </Form>

            </div>
        )
    }

}

export default WConductor;