import {Component} from "react";
import Card from 'react-bootstrap/Card'
import {Col, Container, Form, Row} from "react-bootstrap";
import {FormControl, InputLabel, MenuItem, Select, TextField} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Icon from '@material-ui/core/Icon';



export class CreateKeynotes extends Component{

    render() {
        return(
                <Card style={{ width: '75%',marginLeft: '20%',marginTop: '5%',height :'600px',marginBottom: '5%' }}>
                    <Card.Header className={"text-center"} as="h5">Keynote Speakers</Card.Header>
                    <Card.Body>
                        <Container style={{ width: '100%',height :'50px' }}>
                            <Row>
                                <Col>
                        <Card style={{ width: '90%',height :'200px',marginLeft: '5%',marginTop:'15%'}}>

                        </Card>
                                    <Button style={{ marginTop:'5%',marginLeft:'20%'}}
                                        variant="contained"
                                        color="primary"
                                        size="small"
                                        type={"submit"}
                                        startIcon={<Icon className="fa fa-plus-circle" />}
                                    >
                                        Add Photo
                                    </Button>
                                </Col>
                                <Col xs = {9}>
                        <Form style={{ width: '100%'}}>
                            <Form.Group className="mb-3" controlId="ktitle">
                                <FormControl style={{ width: '14%' }} variant="outlined">
                                    <InputLabel id="demo-simple-select-outlined-label">Title*</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-outlined-label"
                                        id="demo-simple-select-outlined"

                                        label="Age"
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={10}>Prof</MenuItem>
                                        <MenuItem value={20}>Dr</MenuItem>
                                        <MenuItem value={30}>Mr</MenuItem>
                                        <MenuItem value={40}>Mrs</MenuItem>
                                        <MenuItem value={40}>Miss</MenuItem>
                                    </Select>
                                </FormControl>
                                <TextField style={{ width: '41%',marginLeft:'2%' }}
                                           id="fname"
                                           label="First Name"
                                           variant="outlined"
                                />
                                <TextField style={{ width: '41%',marginLeft:'2%' }}
                                           id="lname"
                                           label="Last Name"
                                           variant="outlined"
                                />

                            </Form.Group>

                            <Form.Group className="mb-3" controlId="kuni">
                                <TextField style={{ width: '100%' }}
                                           id="uni"
                                           label="University"
                                           variant="outlined"
                                />

                            </Form.Group>

                            <Form.Group className="mb-3" controlId="kno">
                                <TextField style={{ width: '100%' }}
                                           id="number"
                                           label="Keynote Number"
                                           variant="outlined"
                                />

                            </Form.Group>

                            <Form.Group className="mb-3" controlId="wdescription">
                                <TextField style={{ width: '100%' }}
                                           id="description"
                                           label="Description"
                                           variant="outlined"
                                           multiline
                                           rows={10}
                                />

                            </Form.Group>


                            <Button
                                variant="contained"
                                color="primary"
                                size="large"
                                type={"submit"}
                                startIcon={<Icon className="fa fa-plus-circle" />}
                            >
                                Add Keynotes
                            </Button>
                        </Form>
                                </Col>
                            </Row>
                        </Container>

                    </Card.Body>
                </Card>

        )
    }

}
export default CreateKeynotes;