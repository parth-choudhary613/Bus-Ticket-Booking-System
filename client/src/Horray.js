import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { MdCelebration } from "react-icons/md";
function Horray(){
    return(
        <>
        <Navbar/>
<div className="parent" style={{display:"flex",justifyContent:"center", alignItems:"center",height:"1000px", backgroundColor:"#65000b" }}>
    <div className="child" style={{textAlign:"center", color:"black",backgroundColor:"#ffa586"}}>
        <h1><b><MdCelebration /><MdCelebration /><MdCelebration />"HOORRAYYY YOU BOOKED YOUR YATRA"<MdCelebration /><MdCelebration /><MdCelebration /></b></h1>
        <h1><b><MdCelebration /><MdCelebration />"ENJOY YOUR YATRA"<MdCelebration /><MdCelebration /></b></h1><br></br><br></br>
        <h1><b><MdCelebration /><MdCelebration />"आपकी यात्रा शुभ एवं मंगलमय हो"<MdCelebration /><MdCelebration /></b></h1>

    </div>
</div>

        <Footer/>
        </>
    )
}
export default Horray;