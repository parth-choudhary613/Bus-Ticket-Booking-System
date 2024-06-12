import React from "react";
import Navbar from "./Navbar";
import { useNavigate} from 'react-router-dom';
import Footer from "./Footer";
import './BusStand.css'
function BusStand(){
    const navigate = useNavigate(); 

  const handleBookNow = () => {
    navigate("/Horray"); 
  }
return(
    <>
    <div className="parrallax">
    <Navbar/>
    <h1 style={{textAlign:"center", color:"white" ,fontWeight:"bolder" , fontSize:"90px"}}>SELECT YOUR BUS</h1>
<div id="deluxbus" className="card glassmorphism" style={{alignItems:"center"}}>
    <div className="card-header">
        DELUX
    </div>
    <div className="card-body" style={{display:"flex",alignItems:"center" }}>
        <img src=".\images\logo2.jpg" className="rounded mx-auto d-block float-start" alt="..." style={{width:"100px"}} />
        <p className="card-text mx-5 px-5" ><b style={{wordSpacing:"40px",fontSize:"200%"}}>  Timing:- 3:30-9:30   Bus-Fare:-₹2000  </b>.</p>
        <button className="btn btn-primary" onClick={handleBookNow}>Book Your Yatra</button>
    </div>
</div>
{/* semi delux bus */}
<div id="sleeperbus" className="card glassmorphism" style={{alignItems:"center"}}>
    <div className="card-header">
        SLEEPER 
    </div>
    <div className="card-body" style={{display:"flex",alignItems:"center" }}>
        <img src=".\images\logo3.jpg" className="rounded mx-auto d-block float-start" alt="..." style={{width:"100px"}} />
        <p className="card-text mx-5 px-5" ><b style={{wordSpacing:"40px",fontSize:"200%"}}>  Timing:- 4:30-9:30   Bus-Fare:-₹1200  </b>.</p>
        <button className="btn btn-primary" onClick={handleBookNow}>Book Your Yatra</button>
    </div>
</div>

{/* sleeper bus */}
<div id="sleeperbus" className="card glassmorphism" style={{alignItems:"center"}}>
    <div className="card-header">
          SLEEPER
    </div>
    <div className="card-body" style={{display:"flex",alignItems:"center" }}>
        <img src=".\images\logo4.jpg" className="rounded mx-auto d-block float-start" alt="..." style={{width:"100px"}} />
        <p className="card-text mx-5 px-5" ><b style={{wordSpacing:"40px",fontSize:"200%"}}>  Timing:- 5:30-11:30   Bus-Fare:-₹2500  </b>.</p>
        <button className="btn btn-primary" onClick={handleBookNow}>Book Your Yatra</button>
    </div>
</div>

{/* super sleeper bus */}
<div id="semisleeperbus" className="card glassmorphism" style={{alignItems:"center"}}>
    <div className="card-header">
        SEMI SLEEPER
    </div>
    <div className="card-body" style={{display:"flex",alignItems:"center" }}>
        <img src=".\images\logo5.jpg" className="rounded mx-auto d-block float-start" alt="..." style={{width:"100px"}} />
        <p className="card-text mx-5 px-5" ><b style={{wordSpacing:"40px",fontSize:"200%"}}>  Timing:- 1:30-10:30   Bus-Fare:-₹1000  </b>.</p>
        <button className="btn btn-primary" onClick={handleBookNow}>Book Your Yatra</button>
    </div>
</div>

{/* volvo bus */}
<div id="volvobus" className="card glassmorphism" style={{alignItems:"center"}}>
    <div className="card-header">
        VOLVO
    </div>
    <div className="card-body" style={{display:"flex",alignItems:"center" }}>
        <img src=".\images\logo6.jpg" className="rounded mx-auto d-block float-start" alt="..." style={{width:"100px"}} />
        <p className="card-text mx-5 px-5" ><b style={{wordSpacing:"40px",fontSize:"200%"}}>  Timing:- 5:30-1:30   Bus-Fare:-₹3500  </b>.</p>
        <button className="btn btn-primary" onClick={handleBookNow}>Book Your Yatra</button>
    </div>
</div>

{/* odrinary bus */}
<div id="ordinarybus" className="card glassmorphism" style={{alignItems:"center"}}>
    <div className="card-header">
       ORDINARY
    </div>
    <div className="card-body" style={{display:"flex",alignItems:"center" }}>
        <img src=".\images\logo1.jpg" className="rounded mx-auto d-block float-start" alt="..." style={{width:"100px"}} />
        <p className="card-text mx-5 px-5" ><b style={{wordSpacing:"40px",fontSize:"200%"}}>  Timing:- 12:30-9:30   Bus-Fare:-₹900  </b>.</p>
        <button className="btn btn-primary" onClick={handleBookNow}>Book Your Yatra</button>
    </div>
</div>

{/* semi sleeper bus */}
<div id="semisleeperbus" className="card glassmorphism" style={{alignItems:"center"}}>
    <div className="card-header">
        SEMI SLEEEPER
    </div>
    <div className="card-body" style={{display:"flex",alignItems:"center" }}>
        <img src=".\images\logo7.jpg" className="rounded mx-auto d-block float-start" alt="..." style={{width:"100px"}} />
        <p className="card-text mx-5 px-5" ><b style={{wordSpacing:"40px",fontSize:"200%"}}>  Timing:- 4:30-12:30   Bus-Fare:-₹1500  </b>.</p>
        <button className="btn btn-primary" onClick={handleBookNow}>Book Your Yatra</button>
    </div>
</div>

{/* delux bus */}
<div id="deluxbus" className="card glassmorphism" style={{alignItems:"center"}}>
    <div className="card-header">
        DELUX
    </div>
    <div className="card-body" style={{display:"flex",alignItems:"center" }}>
        <img src=".\images\logo8.jpg" className="rounded mx-auto d-block float-start" alt="..." style={{width:"100px"}} />
        <p className="card-text mx-5 px-5" ><b style={{wordSpacing:"40px",fontSize:"200%"}}>  Timing:- 3:30-9:30   Bus-Fare:-₹2000  </b>.</p>
        <button className="btn btn-primary" onClick={handleBookNow}>Book Your Yatra</button>
    </div>
</div>

{/* super-delux bus */}
<div id="superdeluxbus" className="card glassmorphism" style={{alignItems:"center"}}>
    <div className="card-header">
        SUPER DELUX
    </div>
    <div className="card-body" style={{display:"flex",alignItems:"center" }}>
        <img src=".\images\logo9.jpg" className="rounded mx-auto d-block float-start" alt="..." style={{width:"100px"}} />
        <p className="card-text mx-5 px-5" ><b style={{wordSpacing:"40px",fontSize:"200%"}}>  Timing:- 7:30-9:30   Bus-Fare:-₹2500  </b>.</p>
        <button className="btn btn-primary" onClick={handleBookNow}>Book Your Yatra</button>
    </div>
</div>
{/* super-sleeper bus */}
<div id="supersleeperbus" className="card glassmorphism" style={{alignItems:"center"}}>
    <div className="card-header">
        SUPER SLEEPER
    </div>
    <div className="card-body" style={{display:"flex",alignItems:"center" }}>
        <img src=".\images\logo10.jpg" className="rounded mx-auto d-block float-start" alt="..." style={{width:"100px"}} />
        <p className="card-text mx-5 px-5" ><b style={{wordSpacing:"40px",fontSize:"200%"}}>  Timing:- 3:30-5:30   Bus-Fare:-₹2000  </b>.</p>
        <button className="btn btn-primary" onClick={handleBookNow}>Book Your Yatra</button>
    </div>
</div>


</div>



<Footer/>
    </>
)

}
export default BusStand