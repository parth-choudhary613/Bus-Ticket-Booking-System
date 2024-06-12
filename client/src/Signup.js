import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import './Signup.css'

function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cpassword, setCpassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validation logic
        if (name.length < 6) {
            setError("Name must be at least 6 characters long.");
            return;
        }
        if (!/[a-zA-Z]/.test(name)) {
            setError("Name must contain at least one alphabet.");
            return;
        }
        if (password.length < 6) {
            setError("Password must be at least 6 characters long.");
            return;
        }
        if (password !== cpassword) {
            setError("Password and confirm password must match.");
            return;
        }
        if (!/\S+@\S+\.\S+/.test(email)) {
            setError("Email format is incorrect.");
            return;
        }

        axios.post('http://localhost:8500/signup', { name, email, password, cpassword })
            .then(result => {
                console.log(result);
                alert("User created, please login again");
                navigate('/login');
            })
            .catch(err => console.log(err));
    };

    return (
        <> 
         <div class="background">
        <div class="shape"></div>
        <div class="shape"></div>
    </div>
            <div className="container">
                <div className="form">
                <form onSubmit={handleSubmit}>
                <h3>Sign up Details</h3>
                   
                          <label for="username">Username</label>
                        
                            <input style={{color:"black"}}
                                type="text"
                                className="form-control"
                                id="inputname"
                                placeholder="Enter your name"
                                value={name}
                                autoComplete="off" 
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                       
                    
                    <label for="username">Email</label>
                       
                            <input style={{color:"black"}}
                                type="email"
                                className="form-control"
                                id="inputEmail3"
                                placeholder="enter your email"
                                value={email}
                                autoComplete="off" 
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                       
                    
                    <label for="username">Password</label>
                      
                            <input style={{color:"black"}}
                                type="password"
                                className="form-control"
                                id="inputPassword3"
                                placeholder="Enter password"
                                value={password}
                                autoComplete="off" 
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        
                  
                    
                    <label for="username">Confirm Password</label>
                      
                            <input style={{color:"black"}}
                                type="password"
                                className="form-control"
                                id="inputPassword4"
                                placeholder="Re-enter Your Password"
                                value={cpassword}
                                autoComplete="off" 
                                onChange={(e) => setCpassword(e.target.value)}
                                required
                                />
                    <div className="button">
                        <Link to='/login'><button className="btn btn-primary mx-5">Log in</button></Link>
                        <button type="submit" className="btn btn-primary">Sign up</button>
                    </div>
                        
                    
                    {error && <div className="alert alert-danger" role="alert">{error}</div>}
                </form>
                </div>
                                </div>
        </>
    );
}

export default Signup;
