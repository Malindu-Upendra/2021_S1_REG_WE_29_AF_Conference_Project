import {Component} from "react";
import Card from 'react-bootstrap/Card'
import {Button, Form} from "react-bootstrap";
import {TextField} from "@material-ui/core";


export class AddImportantDates extends Component{

    render() {
        return(
            <Card style={{ width: '50%', Height:'500px' ,marginLeft: '30%',marginTop: '5%',marginBottom: '5%' }}>
                <Card.Header className={"text-center"} as="h5">Add Important Dates</Card.Header>
                <Card.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="idate">
                            <TextField style={{ width: '100%' ,marginTop : '3%'}}
                                       id="date"
                                       label="Registration Deadline"
                                       type="date"
                                       variant="outlined"
                                       defaultValue="2020-01-01"
                            />

                        </Form.Group>

                        <Form.Group className="mb-3" controlId="idescription">
                            <TextField style={{ width: '100%' }}
                                       id="description"
                                       label="Description"
                                       variant="outlined"
                                       multiline
                                       rows={3}
                            />

                        </Form.Group>

                        <Button variant="primary" type="submit">
                            <i className="fas fa-plus-circle"></i> {}
                            Add Important Date
                        </Button>
                    </Form>

                </Card.Body>
            </Card>

        )
    }

}
export default AddImportantDates;