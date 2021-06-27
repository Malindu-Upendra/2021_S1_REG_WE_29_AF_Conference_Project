import {Component} from "react";
import axios from "axios";
import {Button, Table} from "react-bootstrap";


export class ViewWorkShop extends Component{
    constructor(props) {
        super(props);
    }
    state = {
        workshops:[]
    }

    componentDidMount = () => {
        axios.get('http://localhost:5000/reviewer/uploadedWorkshops').
        then(res => {
            const  workshops = res.data;
            this.setState({ workshops: workshops});
        }).catch(err => err.message)
    }

    DeclineWorkshop = (id) => {
        axios.put(`http://localhost:5000/reviewer/declineWorkShop/${id}`).
        then(res =>{
            if(res.data.success){
                alert(res.data.message);
                window.location.reload(false);
            }
        })
    }

    ApproveWorkshop = (id) => {
        axios.put(`http://localhost:5000/reviewer/approveWorkShop/${id}`).
        then(res =>{
            if(res.data.success){
                alert(res.data.message);
                window.location.reload(false);
            }
        })
    }

    render() {
        return(

            <div>

                <div style={{paddingTop:'50px'}}></div>
                <div className='container' style={{paddingTop:'40px', paddingBottom:'30px'}}>
                    <Table striped bordered hover variant="dark">
                        <thead>
                        <tr>
                            <th>Number</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Workshop conductors</th>
                            <th>Flyer</th>
                            <th>Approval</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.workshops.map((workshops,index) => (
                            <tr>
                                <td>{index + 1}</td>
                                <td>{workshops.title}</td>
                                <td>{workshops.description}</td>
                                <td>{workshops. wconductors}</td>
                                <td>{workshops.flyer}</td>
                                <td>
                                    { workshops.approval==='Not Approved' ?
                                        <>
                                        <h6 style={{backgroundColor:'yellow' , padding:'9px', color:'black', borderRadius:'3px'}}>  Pending</h6>
                                        <Button variant="outline-success" onClick={this.ApproveWorkshop.bind(this,workshops._id)}>Approve</Button>{' '}
                                            <p></p>
                                        <Button variant="outline-danger" onClick={this.DeclineWorkshop.bind(this,workshops._id)}>Reject</Button>{' '}
                                        </>
                                        : null }

                                    { workshops.approval==='Approved' ?
                                        <>
                                            <h6 style={{backgroundColor:'green' , padding:'9px', color:'black', borderRadius:'3px'}}>  Approved</h6>
                                            <p></p>
                                            <Button variant="outline-danger" onClick={this.DeclineWorkshop.bind(this,workshops._id)}>Reject</Button>{' '}
                                        </>
                                        : null }

                                    { workshops.approval==='Declined' ?
                                        <>
                                            <h6 style={{backgroundColor:'red' , padding:'9px', color:'black', borderRadius:'3px'}}>  Rejected</h6>
                                            <p></p>
                                            <Button variant="outline-success" onClick={this.ApproveWorkshop.bind(this,workshops._id)}>Approve</Button>{' '}
                                        </>
                                        : null }
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </Table>
                </div>

                <div style={{paddingBottom:'50px'}}></div>

            </div>
        )
    }

}

export default ViewWorkShop