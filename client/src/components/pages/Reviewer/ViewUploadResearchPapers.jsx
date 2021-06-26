import {Component} from "react";
import axios from "axios";
import {Table} from "react-bootstrap";


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
            //console.log( ResearchPapers);
            this.setState({ ResearchPaper: ResearchPapers});
        }).catch(err => err.message)
    }


    render() {

        return(
            <>

                <div style={{paddingTop:'50px'}}></div>
                <div className='container' style={{paddingTop:'30px', paddingBottom:'30px'}}>
                <Table striped bordered hover variant="dark">
                    <thead>
                    <tr>
                        <th>Number</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th>Paper</th>
                        <th>Approval</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.ResearchPaper.map((ResearchPapers,index) => (
                    <tr>
                        <td>{index + 1}</td>
                        <td>{ResearchPapers.title}</td>
                        <td>{ResearchPapers.author}</td>
                        <td>{ResearchPapers.email}</td>
                        <td>{ResearchPapers.phoneNumber}</td>
                        <td>{ResearchPapers.paper}</td>
                        <td>{ResearchPapers.approval}</td>
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