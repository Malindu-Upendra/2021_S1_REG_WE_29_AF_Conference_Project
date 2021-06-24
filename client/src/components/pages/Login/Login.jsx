import React, { useState } from 'react';
import { Form, Input, Label, FormGroup, Button } from 'reactstrap';
import { useDispatch } from "react-redux";
import { AUTH } from "../../actionTypes/actionTypes";
import axios from "axios";

const Login = () => {

    const [userName,setUserName] = useState('');
    const [password,setPassword] = useState('');
    const [user,setUser] = useState('')

    const dispatch = useDispatch();

    const handleChangeUserName = (e) => {
        setUserName(e.target.value);
    }

    const handleChangePassword = (e) => {
        setPassword(e.target.value)
    }


    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(userName,password);

        const LoginData = {
            position:userName,
            password:password
        }

        axios.post('http://localhost:5000/admin/login',LoginData)
            .then(response => {
                if (response.data.success) {
                    setUser(response.data)
                    console.log(response.data);
                    const data = response.data;
                    console.log(data);
                    dispatch({ type: AUTH, data:data });
                    window.location = '/contactUs'
                } else {
                    alert('Failed to login')
                }
            })
            .catch(err => console.log(err));
    }

    return (

        <div>
            <p> </p>

            {/* <div className="container"> */}
            <Form onSubmit={handleSubmit}>

                <FormGroup>
                    <Label for="uname"> <b>User Name </b></Label>
                    <Input id="Uname"  name="email" placeholder="Enter Your User Name" onChange={handleChangeUserName} />
                </FormGroup>
                <p> </p>

                <FormGroup>
                    <Label for="pass"><b> Password </b></Label>
                    <Input id="password"  name="password" placeholder="Enter Your Password" onChange={handleChangePassword} />
                </FormGroup>

                <p> </p>

                <Button type="submit" color="primary">Login</Button>
                <p> </p>

            </Form>
            {/* </div> */}
            <p> </p>

        </div>

    );

}

export default Login;