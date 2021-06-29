import {Component} from "react";
import {Col, Container, Form, Row} from "react-bootstrap";
import Card from "react-bootstrap/Card";
import {Button, Col, Form, Row} from "react-bootstrap";
import axios from "axios";


export class CreateKeynotes extends Component{


    constructor(props) {
        super(props);
    }

    state = {
        title: '',
        firstname: '',
        lastname: '',
        university: '',
        description: ''
    }

    handleChange = (e) => {
        this.setState({

                ...this.state.data,
                [e.target.name]: e.target.value
            }
        );
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const  Keynote ={
            title: this.state.title,
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            university: this.state.university,
            description: this.state.description
        };

        console.log('Data send:', Keynote)
        axios.post('http://localhost:5000/editor/keynotes',Keynote)
            .then(response => {
                alert('KeyNotes data successfully inserted')
                 window.location="/";
            })
            .catch(error => {
                console.log(error.message);
                alert(error.message)
            })
    }

    render() {
        return(
                <div style={{paddingBottom:'40px', paddingTop:'40px'}}>
                    <div className='container' style={{paddingTop:'40px', paddingBottom:'40px'}}>
                    <Card>
                        <Card.Header className="text-center" as="h5">KeyNotes Speaker</Card.Header>
                        <Card.Body>
                        <div className='container'>

                            <Form onSubmit={this.handleSubmit}>
                                <Row>

                                    <Col sm='2'>
                                        <Form.Control
                                            placeholder="Title"
                                            type="text"
                                            name="title"
                                            value={this.state.title}
                                            onChange={this.handleChange}
                                        />
                                    </Col>

                                    <Col sm='5'>
                                        <Form.Control
                                            placeholder="First name"
                                            type="text"
                                            name="firstname"
                                            value={this.state.firstname}
                                            onChange={this.handleChange}
                                        />
                                    </Col>

                                    <Col sm='5'>
                                        <Form.Control
                                            placeholder="Last name"
                                            type="text"
                                            name="lastname"
                                            value={this.state.lastname}
                                            onChange={this.handleChange}
                                        />
                                    </Col>
                                </Row>
                                <p></p>

                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    {/*<Form.Label>Email address</Form.Label>*/}
                                    <Form.Control
                                        type="text"
                                        placeholder="University"
                                        name="university"
                                        value={this.state.university}
                                        onChange={this.handleChange}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    {/*<Form.Label>Password</Form.Label>*/}
                                    <Form.Control
                                        as="textarea"
                                        rows="5"
                                        placeholder="Description"
                                        name="description"
                                        value={this.state.description}
                                        onChange={this.handleChange}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-4" controlId="formBasicPassword">
                                    <Form.File
                                        id="custom-file-translate-scss"
                                        label="choose the Picture"
                                        custom
                                    />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    <i className="fas fa-plus-circle"></i> {}
                                     Add Keynotes
                                </Button>
                            </Form>
                        </div>
                        </Card.Body>
                    </Card>
                    </div>
                </div>

        )
    }

}
export default CreateKeynotes;