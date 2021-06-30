import { Component } from "react";
import { Table } from "react-bootstrap";
//import axios from "axios";

export class ImportantDates extends Component {


    render() {
        return (
            <>
            <div style={{paddingTop:'50px'}}></div>
            <div className="container" style={{ paddingTop: '50px' }}>

                <h2>Important Dates</h2><br/>

                <Table style={{fontFamily: "Arial", padding: "10px"}} bordered hover size="sm">
                    <thead>
                    <tr style={{backgroundColor: "blue", color: 'white'}}>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    </tbody>
                </Table>
            </div>
            </>
        )
    }

}

export default ImportantDates;


