import React from 'react';
import {Link } from 'react-router-dom';
import { MdAccountCircle } from 'react-icons/md';
import { SiGmail } from 'react-icons/si';
import { BsFillTelephoneFill } from 'react-icons/bs';
import './Navbar.css'
function Navbar() {


  return (

    <nav style={{backgroundColor:" #65000b"}}>
        
    <div className="container-fluid">
        <div className="container-fluid container-lg p-0">
            <div className="textColor">
                <div className="row justify-content-center align-items-center mx-auto">
                    <div className="col-12 col-lg-3 p-0">
                        <div className="display-3 fw-bold py-2 text-center text-lg-start d-none d-lg-block"> <Link class="navbar-brand" to="#">
    <img src=".\images\logo.png" alt="YATRA" width="200" height="200"/>
    </Link></div>
                         <hr className="d-block d-lg-none"/>
                    </div>
                   
                    <div className="col-4 col-lg-3 sideLine">
                        <div className="d-flex justify-content-center align-items-center">
                    <center> <h3>Hello</h3></center>
                        </div>
                    </div>
                    <div className="col-4 col-lg-3 sideLine">
                        <div className="d-flex justify-content-center align-items-center">
                        
                                <div className="me-3 p-2 py-3"><h3><BsFillTelephoneFill /></h3></div>
                           
                            <div className="d-none d-lg-block"><span className="fw-medium">Call Us</span><br></br> +1-800-123-1234</div>
                        </div>
                    </div>
                    <div className="col-4 col-lg-3">
                        <div className="d-flex justify-content-center align-items-center">
                            
                                <div className="me-3 p-2 py-3"><h3><SiGmail /></h3></div>
                            
                            <div className="d-none d-lg-block"><span className="fw-medium">Email Us</span><br></br>example@emmail.com</div>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="my-0 d-lg-none"/>
            <div className="text-center display-3 fw-bold mb-2 d-lg-none"><img src=".\images\logo.png" alt="YATRA" width="200" height="200"/></div>
            <div className="navbarBgDark" data-bs-theme="dark">
                <nav className="navbar navbar-expand-lg justify-content-center justify-content-lg-between p-0">
    
                    <button className="navbar-toggler m-3 w-100" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        Menu
                    </button>
                    <div className="collapse navbar-collapse justify-content-between" id="navbarNavDropdown">
                        <ul className="navbar-nav text-uppercase ps-3">
                            <li className="nav-item" style={{color:"black"}}>
                                <Link className="nav-link active pe-3" aria-current="page" to="/home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link px-lg-3" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link px-lg-3" to="/contact">Contact</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link px-lg-3" to="/team">Our Team</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="/OtherServices" role="button"
                                    data-bs-toggle="dropdown" >
                                   Other Services
                                </Link>
                                <ul className="dropdown-menu" style={{backgroundColor:"#65000b"}}>
                                   
                                    <li><Link className="dropdown-item" to="#">fly by</Link></li>
                                    <li><Link className="dropdown-item" to="#">book your boggy</Link></li>
                                    <li><Link className="dropdown-item" to="#">Self Drive Cars</Link></li>
                                </ul>
                            </li>
                           
                           
                        </ul>
                        <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="#" role="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    <h1><MdAccountCircle/></h1>
                                </Link>
                                <ul className="dropdown-menu">
                                  <li className="dropdown-item"> <Link to='/' class=" btn btn-primary mt-1 btn-sm">Log Out</Link></li>
                                    
                                </ul>
                            </li>
                    </div>
                  
                </nav>
                </div>
        </div>

                                        </div>

    </nav>
  );
}


export default Navbar;
