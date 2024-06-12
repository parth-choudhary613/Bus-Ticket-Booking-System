import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer"
function About() {
  return (
    <>
      <Navbar />
      <div className="parallax">
        <h1 style={{ textAlign: "center" }}>OUR MISSION</h1>
        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          data-bs-ride="carousel"
          >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
              ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
              ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
              ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src=".\images\image13.jpg"
                className="rounded mx-auto d-block w-50"
                alt="..."
              />
              <div
                className="carousel-caption d-none d-md-block glassmorphism"
                style={{ color: "black" }}
                >
                <h1>
                  <b>Customer-centricity:</b>
                </h1>
                <p>
                  <b>
                    {" "}
                    Prioritize customer satisfaction by offering user-friendly
                    interfaces, transparent pricing, and reliable customer
                    support, ensuring a hassle-free booking experience.
                  </b>
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src=".\images\image10.jpg"
                className="rounded mx-auto d-block w-50"
                alt="..."
                />
              <div className="carousel-caption d-none d-md-block glassmorphism" style={{ color: "black" }}>
                <h1>
                  <b>Empowerment</b>
                </h1>
                <p>
                  <b>
                    Empower travelers with comprehensive information, including
                    real-time updates on routes, schedules, and safety measures,
                    empowering them to make informed decisions and travel with
                    confidence.
                  </b>
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src=".\images\image11.jpg"
                className="rounded mx-auto d-block w-50"
                alt="..."
                />
              <div className="carousel-caption d-none d-md-block glassmorphism" style={{ color: "black" }} >
                <h1>
                  <b>Community engagement</b>
                </h1>
                <p>
                  <b>
                    Engage with the travel community through social media,
                    blogs, and forums to gather feedback, foster a sense of
                    belonging, and continuously improve our services.
                  </b>
                </p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
            >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div style={{fontSize:"30px"}}>
        <div className="card text-center glassmorphism" style={{backgroundColor:"transparent",margin:"20px"}}>
 
  <div className="card-body">
    <h2 className="card-title"><b>YOUR COMFORT, OUR RESPONSIBILITY</b></h2>
    </div>
 
</div>
<div className="card text-center glassmorphism" style={{backgroundColor:"transparent",margin:"20px"}}>
  
  <div className="card-body">
    <h2 className="card-title"><b>OUR DRIVERS ARE PROFESSIONALY TRAINED</b></h2>
     </div>
  
</div>
<div className="card text-center  glassmorphism" style={{backgroundColor:"transparent",margin:"20px"}}>
  
  <div className="card-body">
    <h2 className="card-title"><b>WE WILL GIVE YOU HOME LIKE TREATMENT</b></h2>
    </div>
</div>
</div>
<div className="d-flex px-5 py-5" style={{justifyContent:"space-evenly"}}> 
<div className="card" style={{width: "18rem"}}>
  <img src=".\images\image10.jpg" className="card-img-top" alt="..."/>
  <div className="card-body">
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
<div className="card" style={{width: "18rem"}}>
  <img src=".\images\image14.jpg" className="card-img-top" alt="..."/>
  <div className="card-body">
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
<div className="card" style={{width: "18rem"}}>
  <img src=".\images\image15.jpg" className="card-img-top" alt="..."/>
  <div className="card-body">
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
<div className="card" style={{width: "18rem"}}>
  <img src=".\images\image16.jpg" className="card-img-top" alt="..."/>
  <div className="card-body">
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
<div className="card" style={{width: "18rem"}}>
  <img src=".\images\image17.jpg" className="card-img-top" alt="..."/>
  <div className="card-body">
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
</div>
      </div>
<Footer/>
    </>
  );
}
export default About;
