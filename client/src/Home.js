import React from "react";
import Footer from "./Footer.js";
import "./Home.css";
import Navbar from "./Navbar.js";
import BusService from "./BusService.js";

function Home() {
  return (
    <>
      <Navbar />
      <div className="parallax">
    <BusService/>
        <div className="story-section0">
          <div className="container">
            <div className="row">
              <div className="row-sm-12">
                <div className="glassmorphism">
                  <div className="text-contant m-5">
                    <h2 className="h23">
                      <b>What’s on my bucket list? Everywhere.</b>
                    </h2>
                    <p>
                      Twenty years from now you will be more disappointed by the
                      things you didn’t do than by the ones you did do. So throw
                      off the bowlines. Sail away from the safe harbor. Catch
                      the trade winds in your sails. Explore. Dream. Discover.
                      <br></br>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="story-section1">
          <div className="container">
            <div className="row">
              <div className="row-sm-12">
                <div className="glassmorphism">
                  <div className="text-contant m-5">
                    <h1 className="h23" style={{ fontSize: "50px" }}>
                      <b>EXPLORE.DREAM.DISCOVER </b>
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="story-section2">
          <div className="container">
            <div className="row">
              <div className="row-sm-12">
                <div className="glassmorphism">
                  <div className="text-contant m-5">
                    <h2 className="h23">
                      <b>To travel is to live.</b>
                    </h2>
                    <p>
                      “The great glory of travel, to me, is not just what I see
                      that's new to me in countries visited, but that in almost
                      every one of them I change from an outsider looking in to
                      an insider looking out.”.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container" style={{ padding: "50px" }}>
          <div class="row">
            <div class="col-sm-3">
              <img
                src=".\images\image4.jpg"
                class="img-fluid custom-img"
                alt="Imag/e 1"
              />
            </div>
            <div class="col-sm-3">
              <img
                src=".\images\image5.jpg"
                class="img-fluid custom-img"
                alt="Imag/e 2"
              />
            </div>
            <div class="col-sm-3">
              <img
                src=".\images\image8.jpg"
                class="img-fluid custom-img"
                alt="Imag/e 3"
              />
            </div>
            <div class="col-sm-3">
              <img
                src=".\images\image9.jpg"
                class="img-fluid custom-img"
                alt="Imag/e 4"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
