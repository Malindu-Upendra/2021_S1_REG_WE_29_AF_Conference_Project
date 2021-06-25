import react, {Component} from 'react'
import { isEmail } from 'validator';
import '../../css/Contactus.css'
import axios from "axios";

export class Contactus extends Component{

    constructor(props) {
        super(props);

        this.state = this.getInitialState();
    }

    getInitialState = () =>({

        data: {
            name:"",
            email:"",
            subject:"",
            message:""

        },
        user:JSON.parse(localStorage.getItem('profile')),
        errors:{}
});

    componentDidMount() {
        this.setState({user:JSON.parse(localStorage.getItem('profile'))})

    }

    handleChange = (e) => {
        this.setState({
            data: {   //works in browser console where gets the entered details in console (ES6)
                ...this.state.data,
                [e.target.name]: e.target.value
            },
            errors: {
                ...this.state.errors,
                [e.target.name]: ''
            }
        });
    }


    validate = () =>{

        const {data} =this.state;
        let errors = {};

        if (data.name=== '') errors.name = 'Enter Your Name!!';
        if (!isEmail(data.email)) errors.email = 'Enter a Valid Email Address!!!';
        if (data.email=== '') errors.email = "Enter Your Email!!!";
        if (data.subject==='') errors.subject = "Enter a Subject!!!";
        if (data.message==='') errors.message ="Enter a message!!!!!";

        return errors;
    }


    handleSubmit = (e) => {

        e.preventDefault();
        console.log(this.state.data);
        const { data } = this.state;
        const errors = this.validate();

        if (Object.keys(errors).length === 0){

            console.log(data);

            //Resetting the form
            this.setState(this.getInitialState());
        }else {

            this.setState({ errors });
        }

        axios.post('http://localhost:5000/user/ContactUs',this.state.data)
            .then(response => {
                if (response.data.success) {
                    window.location = '/'
                } else {
                    alert('Failed to insert')
                }
            })
            .catch(err => console.log(err));

    }

    render() {
        const {data,errors}= this.state;
        return(
    <>
            <div className='Title'>
            <p> Contact Us</p>
                <hr className='hline'></hr>
            </div>

    {/*    <section id="contact" className="section-bg wow fadeInUp">*/}

    {/*        <div className="container">*/}
    {/*            /!*<div className="row contact-info">*!/*/}
    {/*            /!*    <div className="col-md-4">*!/*/}
    {/*                    <div className="contact-address">*/}
    {/*                        <i className="ion-ios-location-outline"></i>*/}
    {/*                        <h3>Address</h3>*/}
    {/*                        <address> Computing Research Unit,*/}
    {/*                            1nd Floor,*/}
    {/*                            Computing Building,*/}
    {/*                            Panitan University,*/}
    {/*                            Sri Lanka.*/}

    {/*                        </address>*/}
    {/*                    </div>*/}
    {/*                /!*</div>*!/*/}

    {/*                /!*<div className="col-md-4">*!/*/}
    {/*                    <div className="contact-phone">*/}
    {/*                        <i className="ion-ios-telephone-outline"></i>*/}
    {/*                        <h3>Phone Number</h3>*/}
    {/*                        <p><a href="">+94 11-459 5001</a></p>*/}
    {/*                    </div>*/}
    {/*                /!*</div>*!/*/}

    {/*                /!*<div className="col-md-4">*!/*/}
    {/*                    <div className="contact-email">*/}
    {/*                        <i className="ion-ios-email-outline"></i>*/}
    {/*                        <h3>Email</h3>*/}
    {/*                        <p><a href="">panitan@cof.lk</a></p>*/}
    {/*                    </div>*/}
    {/*                /!*</div>*!/*/}

    {/*            /!*</div>*!/*/}
    {/*            </div>*/}

    {/*</section>*/}


        <h3> Leave a comment</h3>


            <form onSubmit={this.handleSubmit}>
                <div className="row">
                    <div className="col-25">
                        <label for="name"> Name: </label>
                    </div>
                    <div className="col-75">
                        <input type="text" id="nname" value={data.name} invalid={errors.name ? true : false}
                               name="name" placeholder="Your name.." onChange={this.handleChange}/>
                        <div className="errormsg">  {errors.name} </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-25">
                        <label for="email">Email: </label>
                    </div>
                    <div className="col-75">
                        <input type="email" id="eemail" value={data.email} invalid={errors.email ? true : false}
                               name="email" placeholder="Your Email.." onChange={this.handleChange}/>
                <div className="errormsg">   {errors.email} </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-25">
                        <label for="sub">Subject: </label>
                    </div>
                    <div className="col-75">
                        <input type="text" id="ssub" value={data.subject} invalid={errors.subject ? true : false}
                               name="subject" placeholder="Enter a Subject.." onChange={this.handleChange}/>
                      <div className="errormsg">  {errors.subject} </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-25">
                        <label for="msg">Message: </label>
                    </div>
                    <div className="col-75">
                        <textarea id="mssg" value={data.message} invalid={errors.message ? true:false}
                                  name="message" placeholder="Write something.." onChange={this.handleChange}
                                  style={{height:'200px'}}> </textarea>
                     <div className="errormsg">  {errors.message} </div>
                    </div>
                </div>
                <div className="row">
                    <input type="submit" value="Submit"/>
                </div>
            </form>

        <p></p>
        </>

        )
    }


}

export default Contactus;