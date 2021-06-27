import {Component} from "react";
import Card from 'react-bootstrap/Card'
import {Form} from "react-bootstrap";
import {TextField} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Icon from '@material-ui/core/Icon';

export class AddConferenceTracks extends Component{

    render() {
        return(
            <Card style={{ width: '50%',marginLeft: '30%',marginTop: '5%',height :'425px',marginBottom: '5%' }}>
                <Card.Header className={"text-center"} as="h5">Add Conference Tracks</Card.Header>
                <Card.Body>
                    <Form>

                        <Form.Group className="mb-3" controlId="ctitle">
                            <TextField style={{ width: '100%' }}
                                       id="title"
                                       label="Heading"
                                       variant="outlined"
                            />

                        </Form.Group>

                        <Form.Group className="mb-3" controlId="cdescription">
                            <TextField style={{ width: '100%' }}
                                       id="description"
                                       label="Description"
                                       variant="outlined"
                                       multiline
                                       rows={8}
                            />

                        </Form.Group>

                        <Button style={{ marginLeft: '25%' }}
                            variant="contained"
                            color="primary"
                            size="large"
                            type={"submit"}
                            startIcon={<Icon className="fa fa-plus-circle" />}
                        >
                            Add Conference Tracks
                        </Button>
                    </Form>

                </Card.Body>
            </Card>


        )
    }

}
export default AddConferenceTracks;