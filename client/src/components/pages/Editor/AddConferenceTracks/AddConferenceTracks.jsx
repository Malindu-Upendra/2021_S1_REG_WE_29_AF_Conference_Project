import {Component} from "react";
import Card from 'react-bootstrap/Card'
import {Button, Form} from "react-bootstrap";
import {TextField} from "@material-ui/core";
import axios from "axios";


export class AddConferenceTracks extends Component{

    constructor(props) {
        super(props);
    }

    state = {
        heading: '',
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
        const  AddConferenceTrack ={
            heading: this.state.heading,
            description: this.state.description
        };
        console.log('Data send:', AddConferenceTrack)
        axios.post('http://localhost:5000/editor/addConferenceTracksForm',AddConferenceTrack)
            .then(response => {
                alert('AddConferenceTracks data are successfully inserted')
                window.location="/";
            })
            .catch(error => {
                console.log(error.message);
                alert(error.message)
            })
    }

    render() {
        return(
            <Card style={{ width: '50%',marginLeft: '30%',marginTop: '5%',height :'425px',marginBottom: '5%' }}>
                <Card.Header className={"text-center"} as="h5">Add Conference Tracks</Card.Header>
                <Card.Body>
                    <Form onSubmit={this.handleSubmit}>

                        <Form.Group className="mb-3" style={{height:'50px'}} controlId="ctitle">
                            <TextField style={{ width: '100%' }}
                                       id="title"
                                       label="Heading"
                                       variant="outlined"
                                       multiline
                                       rows={1}
                                       name="heading"
                                       value={this.state.heading}
                                       onChange={this.handleChange}

                            />

                        </Form.Group>

                        <Form.Group className="mb-3" style={{marginTop:'40px'}} controlId="cdescription">
                            <TextField style={{ width: '100%' }}
                                       id="description"
                                       label="Description"
                                       variant="outlined"
                                       multiline
                                       rows={8}
                                       name="description"
                                       value={this.state.description}
                                       onChange={this.handleChange}
                            />

                        </Form.Group>

                        <Button variant="primary" type="submit">
                            <i className="fas fa-plus-circle"></i> {}
                            Add Conference Tracks
                        </Button>
                    </Form>

                </Card.Body>
            </Card>


        )
    }

}
export default AddConferenceTracks;