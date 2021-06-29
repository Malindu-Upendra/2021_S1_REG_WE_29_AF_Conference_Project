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

    componentDidMount() {
        axios.get('http://localhost:5000/reviewer/uploadedWorkshops').
        then(res => {
            const  workshops = res.data;
            //console.log( workshops);
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
                    <h3 style={{color:'#009999', fontFamily:'"Times New Roman", Times, serif', textAlign:'center',paddingBottom:'10px'}}>
                        List of WorkShops </h3>
                    <Table striped bordered hover variant="dark">
                        <thead>
                        <tr style={{backgroundColor:'#334d4d'}}>
                            <th>Lines</th>
                            <th>Title</th>
                            {/*<th>Description</th>*/}
                            {/*<th>Workshop conductors</th>*/}
                            <th style={{width:'20%'}}>Flyer</th>
                            <th>Approval</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.workshops.map((workshops,index) => (
                            <tr>
                                <td>{index + 1}</td>
                                <td>
                                    <a href={`/ListWorkshop/${workshops._id}`} >
                                        {workshops.title}
                                    </a>
                                </td>
                                {/*<td>{workshops.description}</td>*/}
                                {/*<td>{workshops.wconductors}</td>*/}
                                <td>
                                    <a href={workshops.flyer} target="_blank">
                                    <img src={workshops.flyer} style={{width:'200px' , height:'200px'}}/>
                                    </a>
                                </td>
                                <td>
                                    { workshops.approval==='Not Approved' ?
                                        <>
                                        <h6 style={{backgroundColor:'yellow' , padding:'9px', color:'black', borderRadius:'3px',width:'100px'}}>
                                            Pending
                                        </h6>

                                        <Button
                                            variant="outline-success"
                                            style={{ width:'100px'}}
                                            onClick={this.ApproveWorkshop.bind(this,workshops._id)}>
                                            Approve
                                        </Button>{' '}

                                            <p></p>
                                        <Button
                                            variant="outline-danger"
                                            style={{ width:'100px'}}
                                            onClick={this.DeclineWorkshop.bind(this,workshops._id)}>
                                            Reject
                                        </Button>{' '}
                                        </>
                                        : null }

                                    { workshops.approval==='Approved' ?
                                        <>
                                            <h6 style={{backgroundColor:'green' , padding:'9px', color:'black', borderRadius:'3px', width:'100px'}}>
                                                Approved</h6>
                                            <p></p>
                                            <Button
                                                variant="outline-danger"
                                                style={{ width:'100px'}}
                                                onClick={this.DeclineWorkshop.bind(this,workshops._id)}>
                                                Reject
                                            </Button>{' '}
                                        </>
                                        : null }

                                    { workshops.approval==='Declined' ?
                                        <>
                                            <h6 style={{backgroundColor:'red' , padding:'9px', color:'black', borderRadius:'3px', width:'100px'}}>
                                                Rejected
                                            </h6>
                                            <p></p>
                                            <Button
                                                variant="outline-success"
                                                style={{ width:'100px'}}
                                                onClick={this.ApproveWorkshop.bind(this,workshops._id)}>
                                                Approve
                                            </Button>{' '}
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