import {Component} from "react";
import Card from "react-bootstrap/Card";
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import Icon from "@material-ui/core/Icon";


export class CreateKeynotes extends Component{

    render() {
        return(
                <div style={{paddingBottom:'40px', paddingTop:'40px'}}>
                    <div className='container' style={{paddingTop:'40px', paddingBottom:'40px'}}>
                    <Card>
                        <Card.Header className="text-center" as="h5">KeyNotes Speaker</Card.Header>
                        <Card.Body>
                        <div className='container'>

                            <Form>
                                <Row>

                                    <Col sm='2'>
                                        <Form.Control placeholder="Title"  />
                                    </Col>

                                    <Col sm='5'>
                                        <Form.Control placeholder="First name"  />
                                    </Col>
                                    <Col sm='5'>
                                        <Form.Control placeholder="Last name" />
                                    </Col>


                                </Row>
                                <p></p>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    {/*<Form.Label>Email address</Form.Label>*/}
                                    <Form.Control type="text" placeholder="University" />
                                </Form.Group>


                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    {/*<Form.Label>Password</Form.Label>*/}
                                    <Form.Control as="textarea" rows="5" placeholder="Description" />
                                </Form.Group>


                                <Form.Group className="mb-4" controlId="formBasicPassword">

                                    <Form.File
                                        id="custom-file-translate-scss"
                                        label="choose the Picture"
                                        custom
                                    />


                                </Form.Group>


                                <Button variant="primary" type="submit"
                                >
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