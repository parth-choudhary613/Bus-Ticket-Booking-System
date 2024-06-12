import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import './Signup.css'

function Login(){
    const [name,setName]=useState();
    const [email,setEmail]=useState();
    const [password,setPassword]=useState();
    const navigate=useNavigate()
    
    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post('http://localhost:8500/login',{name,email,password})
        .then(result=>{console.log(result)
        if(result.data === "success"){
            navigate('/home',{state:{id:name,email}})
        }else{alert('incorrect details')}
        })
        .catch(err=>console.log(err))
        
    }
    return(
        <>
         <div class="background">
        <div class="shape"></div>
        <div class="shape"></div>
    </div>
         <div class="container" >
          <div className="form">
        <form  onSubmit={handleSubmit}>
            <h3 className="text-center">Log in</h3>
       
    <label>User Name</label>
   
      <input style={{color:"black"}}
      type="text" 
      class="form-control" 
      id="inputname"
      autoComplete="off"
      placeholder="Enter your name"
      onChange={(e)=>setName(e.target.value)}
      required
      />
   
 
    <label>Email</label>
    
      <input style={{color:"black"}}
      type="email" 
      class="form-control" 
      id="inputEmail3"
      autoComplete="off"
      placeholder="enter your email"
      onChange={(e)=>setEmail(e.target.value)}
      required
      />
    
 
    <label>Password</label>
  
      <input style={{color:"black"}}
      type="password" 
      class="form-control" 
      autoComplete="off"
      id="inputPassword3" 
      placeholder="Enter password"
      onChange={(e)=>setPassword(e.target.value)}
      required
      />
    <div className="button">
 <button type="submit" class="btn btn-primary ">Log In</button>
  <Link to='/signup'><button class="btn btn-primary mx-5">Sign up</button></Link>
  </div>
</form>
</div>
</div>
        </>
    )
}

export default Login;