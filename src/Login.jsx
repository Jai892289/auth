import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
const navigate = useNavigate();

    axios.defaults.withCredentials = true;
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3002/login', { email, password })
            .then(res => {
                console.log("successs", res.data)
                if(res.data.Status==="Success"){
                    navigate('/dashboard')
                }else{
                    navigate('/register')

                }
            })
            .catch(err => console.log(err))
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>

                <label>Email: - </label>
                <input type='email' placeholder='name' onChange={(e) => setEmail(e.target.value)} /><br></br>
                <label>Password: - </label>
                <input type='password' placeholder='name' onChange={(e) => setPassword(e.target.value)} /><br></br><br></br>
                <button type='submit'>Submit</button><br></br><br></br>
                <Link to="/register" type='submit' style={{ backgroundColor: "grey", padding: "10px", color: "white", borderRadius: "10px" }}>Register</Link>


            </form>
        </div>
    )
}

export default Login

