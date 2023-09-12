// import React, { useState } from 'react';
// import axios from 'axios';
// import { Link, useNavigate } from 'react-router-dom';

// const Register = () => {
//     const [name, setName] = useState();
//     const [email, setEmail] = useState();
//     const [password, setPassword] = useState();
// const navigate = useNavigate()

//     // const handleSubmit = (e) => {
//     //     e.preventDefault();
//     //     axios.post('http://localhost:3002/register', { name, email, password })
//     //         .then(res => {
//     //             navigate('/login')
//     //         })
//     //         .catch(err => console.log(err))
//     // }

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const userData = {
//             name,
//             email,
//             password
//         };
//         axios.post('http://localhost:3002/register', { name, email, password })
//             .then((res) => {
//                 // Store the name in local storage as a JSON string
//                 localStorage.setItem('userData', JSON.stringify(userData));
//                 navigate('/login');
//             })
//             .catch((err) => console.log(err));
//     }
    


//     return (
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <label>Name: - </label>
//                 <input type='text' placeholder='name' onChange={(e) => setName(e.target.value)} /> <br></br>
//                 <label>Email: - </label>
//                 <input type='email' placeholder='name' onChange={(e) => setEmail(e.target.value)} /><br></br>
//                 <label>Password: - </label>
//                 <input type='password' placeholder='name' onChange={(e) => setPassword(e.target.value)} /><br></br><br></br>
//                 <button type='submit'>Submit</button><br></br><br></br>
//                 <Link to ="/login" type='submit' style={{backgroundColor:"grey", padding:"10px", color:"white", borderRadius:"10px"}}>Login</Link>


//             </form>
//         </div>
//     )
// }

// export default Register




import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        // Retrieve the data from localStorage when the component is mounted
        const storedUserData = localStorage.getItem('userData');
        if (storedUserData) {
            const userData = JSON.parse(storedUserData);
            setName(userData.name);
            setEmail(userData.email);
            setPassword(userData.password);
        }
    }, []); 

    const handleSubmit = (e) => {
        e.preventDefault();
        const userData = {
            name,
            email,
            password
        };
        axios.post('http://localhost:3002/register', userData)
            .then((res) => {
                localStorage.setItem('userData', JSON.stringify(userData));
                navigate('/login');
            })
            .catch((err) => console.log(err));
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Name: - </label>
                <input type='text' placeholder='name' onChange={(e) => setName(e.target.value)} value={name} /> <br></br>
                <label>Email: - </label>
                <input type='email' placeholder='email' onChange={(e) => setEmail(e.target.value)} value={email} /><br></br>
                <label>Password: - </label>
                <input type='password' placeholder='password' onChange={(e) => setPassword(e.target.value)} value={password} /><br></br><br></br>
                <button type='submit'>Submit</button><br></br><br></br>
                <Link to="/login" type='submit' style={{ backgroundColor: "grey", padding: "10px", color: "white", borderRadius: "10px" }}>Login</Link>
            </form>
        </div>
    )
}

export default Register;

