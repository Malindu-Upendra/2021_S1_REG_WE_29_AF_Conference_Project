import {Component} from "react";
import axios from "axios";
import {Table} from "react-bootstrap";


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
                                <td>{workshops.approval}</td>

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