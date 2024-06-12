import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer'
function Contact() {
  return (
    <>
    <Navbar/>
<div className='parallax'>
  <h1 style={{textAlign:"center"}}>FOLLOW US ON DIFFERENT SOCIAL MEDIA PLATFORMS</h1>
<div className="d-flex px-5 py-5" style={{justifyContent:"space-evenly"}}> 
<div className="card glassmorphism" style={{width: "18rem"}}>
  <img src=".\images\insta.jpg" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h2 className="card-text">InstaGram</h2>
  </div>
</div>
<div className="card glassmorphism" style={{width: "18rem"}}>
  <img src=".\images\tweet.jpg" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h2 className="card-text">Twiter</h2>
  </div>
</div>
<div className="card glassmorphism" style={{width: "18rem"}}>
  <img src=".\images\google.jpg" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h2 className="card-text">Google</h2>
  </div>
</div>
<div className="card glassmorphism" style={{width: "18rem"}}>
  <img src=".\images\facebook.jpg" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h2 className="card-text">FaceBook</h2>
  </div>
</div>
<div className="card glassmorphism" style={{width: "18rem"}}>
  <img src=".\images\whats.jpg" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h2 className="card-text">WhatsApp</h2>
  </div>
  </div>
  </div>
  </div>

  


    <Footer/>
    
  
    </>
  )
}
export default Contact;