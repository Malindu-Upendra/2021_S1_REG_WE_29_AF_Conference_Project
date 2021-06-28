import {Component} from "react";
import Card from 'react-bootstrap/Card'
import {Button, Form} from "react-bootstrap";
import {TextField} from "@material-ui/core";


export class AddConferenceTracks extends Component{

    render() {
        return(
            <Card style={{ width: '50%',marginLeft: '30%',marginTop: '5%',height :'425px',marginBottom: '5%' }}>
                <Card.Header className={"text-center"} as="h5">Add Conference Tracks</Card.Header>
                <Card.Body>
                    <Form>

                        <Form.Group className="mb-3" style={{height:'50px'}} controlId="ctitle">
                            <TextField style={{ width: '100%' }}
                                       id="title"
                                       label="Heading"
                                       variant="outlined"
                                       multiline
                                       rows={1}
                            />

                        </Form.Group>

                        <Form.Group className="mb-3" style={{marginTop:'40px'}} controlId="cdescription">
                            <TextField style={{ width: '100%' }}
                                       id="description"
                                       label="Description"
                                       variant="outlined"
                                       multiline
                                       rows={8}
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