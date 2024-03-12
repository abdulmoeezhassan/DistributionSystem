import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import './login.css';

const Login = () => {
    const navigate = useNavigate();

    const [data, setdata] = useState({
        UserName: null,
        Password: null
    });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setdata(data => ({
            ...data,
            [name]: value
        }));
    }
    const SaveLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:4000/Login", data);
            if (response.status === 200) {
                localStorage.setItem('token', response.data.token);
                setError('');
              navigate('/DashBoard');
              alert("Login Successfully");
            }
            else {
                console.error('Error logging in:', error.response.data);
                setError('Invalid username or password');
                alert("Invalid Username or Password");
            }
        }
        catch (error) {
            console.log(error);
        }
    }
    return (
        <div className="Login-Page">
            <div>
                <h2>Login</h2>
            </div>
            <div>
                <label>Username</label>
                <input type="text" className="username" name="UserName" value={data.UserName || ''} onChange={handleChange} />
                <label>Password</label>
                <input type="password" className="password" name="Password" value={data.Password || ''} onChange={handleChange} />
            </div>
            <div>
                {error && <div className="error">{error}</div>}
                <button onClick={SaveLogin}>Login</button>
            </div>
        </div>
    );
}
export default Login; 