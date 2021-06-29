import {Component} from "react";
import axios from "axios";
import {Button, Table} from "react-bootstrap";


export class ViewUploadResearchPapers extends Component{

    constructor(props) {
        super(props);
    }
    state = {
        ResearchPaper:[]
    }
    componentDidMount() {
        axios.get('http://localhost:5000/reviewer/uploadedResearchPapers').
        then(res => {
            const  ResearchPapers = res.data;
            console.log( ResearchPapers);
            this.setState({ ResearchPaper: ResearchPapers});
        }).catch(err => err.message)
    }

    DeclineResearchPapers = (id) => {
        axios.put(`http://localhost:5000/reviewer/declineResearch/${id}`).
        then(res =>{
            if(res.data.success){
                alert(res.data.message);
                window.location.reload(false);
            }
        })
    }

    ApproveResearchPapers = (id) => {
        axios.put(`http://localhost:5000/reviewer/approveResearch/${id}`).
        then(res =>{
            if(res.data.success){
                alert(res.data.message);
                window.location.reload(false);
            }
        })
    }

    render() {

        return(
            <>
                <div style={{paddingTop:'50px'}}></div>
                <div className='container' style={{paddingTop:'30px', paddingBottom:'30px'}}>
                    <h3 style={{color:'#009999', fontFamily:'"Times New Roman", Times, serif', textAlign:'center',paddingBottom:'10px'}}>
                        List of Research Papers </h3>
                <Table striped bordered hover variant="dark">
                    <thead>
                    <tr style={{backgroundColor:'#334d4d'}}>
                        <th>Lines</th>
                        <th>Title</th>
                        {/*<th>Author</th>*/}
                        {/*<th>Email</th>*/}
                        {/*<th>Phone Number</th>*/}
                        <th>Paper</th>
                        <th>Approval</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.ResearchPaper.map((ResearchPapers,index) => (
                    <tr>
                        <td>{index + 1}</td>
                        <td>
                            <a href={`/ListResearchPaper/${ResearchPapers._id}`} >
                            {ResearchPapers.title}
                            </a>
                        </td>
                        {/*<td>{ResearchPapers.author}</td>*/}
                        {/*<td>{ResearchPapers.email}</td>*/}
                        {/*<td>{ResearchPapers.phoneNumber}</td>*/}
                        <td>
                            <a href={ResearchPapers.paper} target="_blank">
                            <img src={ResearchPapers.paper} style={{width:'200px' , height:'200px'}}/>
                            </a>
                        </td>
                        <td>
                             { ResearchPapers.approval==='Not Approved' ?
                                 <>
                                <h6 style={{backgroundColor:'yellow' , padding:'9px', color:'black', borderRadius:'3px', width:'100px'}}>
                                    Pending
                                </h6>
                                <Button
                                    variant="outline-success"
                                    style={{ width:'100px'}}
                                    onClick={this.ApproveResearchPapers.bind(this,ResearchPapers._id)}>
                                    Approve
                                </Button>{' '}
                                <p></p>
                                <Button
                                    variant="outline-danger"
                                    style={{ width:'100px'}}
                                    onClick={this.DeclineResearchPapers.bind(this,ResearchPapers._id)}>
                                    Reject
                                </Button>{' '}
                            </>
                            : null }

                            { ResearchPapers.approval==='Approved' ?
                                <>
                                    <h6 style={{backgroundColor:'green' , padding:'9px', color:'black', borderRadius:'3px', width:'100px'}}>
                                        Approved
                                    </h6>
                                    <p></p>
                                    <Button
                                        variant="outline-danger"
                                        style={{ width:'100px'}}
                                        onClick={this.DeclineResearchPapers.bind(this,ResearchPapers._id)}>
                                        Reject
                                    </Button>{' '}
                                </>
                                : null }

                            { ResearchPapers.approval==='Declined' ?
                                <>
                                    <h6 style={{backgroundColor:'red' , padding:'9px', color:'black', borderRadius:'3px', width:'100px'}}>
                                        Rejected
                                    </h6>
                                    <p></p>
                                    <Button
                                        variant="outline-success"
                                        style={{ width:'100px'}}
                                        onClick={this.ApproveResearchPapers.bind(this,ResearchPapers._id)}>
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
            </>
        )
    }

}

export default ViewUploadResearchPapers;