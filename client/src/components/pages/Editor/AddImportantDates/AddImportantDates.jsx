import {Component} from "react";
import Card from 'react-bootstrap/Card'
import {Form} from "react-bootstrap";
import {TextField} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Icon from '@material-ui/core/Icon';


export class AddImportantDates extends Component{

    render() {
        return(
            <Card style={{ width: '50%',marginLeft: '30%',marginTop: '5%',height :'300px',marginBottom: '5%' }}>
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
                            />

                        </Form.Group>

                        <Button
                            variant="contained"
                            color="primary"
                            size="large"
                            type={"submit"}
                            startIcon={<Icon className="fa fa-plus-circle" />}
                        >
                            Add Date
                        </Button>
                    </Form>

                </Card.Body>
            </Card>

        )
    }

}
export default AddImportantDates;