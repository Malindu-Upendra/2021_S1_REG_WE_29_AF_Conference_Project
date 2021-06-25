import React, { Component } from 'react';
import {Row, Col} from 'reactstrap';
import Attendee from "./Attendee";
import '../css/regform.css'

export class RegformForAttendee extends Component {
    render() { 
        return (  

            <div className="Reg_Container">
                <Row>
                    <Col md={12}>
                         <Attendee />
                    </Col>
                </Row>
            </div>

        );
    }
}
 
export default RegformForAttendee;
