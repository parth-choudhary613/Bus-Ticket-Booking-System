import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
function Team(){

    return(
<>
<Navbar/>

<section class="bg-light py-3 py-md-5 py-xl-8">
  <div class="container">
    <div class="row justify-content-md-center">
      <div class="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
        <h2 class="mb-4 display-5 text-center">Our Team</h2>
        {/* <p class="text-secondary mb-5 text-center lead fs-4">We are a group of innovative, experienced, and proficient teams. You will love to collaborate with us.</p>
        <hr class="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle"/> */}
      </div>
    </div>
  </div>

  <div class="container overflow-hidden" style={{display:"flex"}}>
    <div class="row gy-4 gy-lg-0 gx-xxl-5">
      <div class="col-12 col-md-8 col-lg-6">
        <div class="card border-0 border-bottom border-primary shadow-sm overflow-hidden">
          <div class="card-body p-0">
            <figure class="m-0 p-0">
              <img class="img-fluid" loading="lazy" src=".\images\person4.jpg" alt=""/>
              <figcaption class="m-0 p-4">
                <h4 class="mb-1">Flora Nyra</h4>
                <p class="text-secondary mb-0">Product Manager</p>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-8 col-lg-6">
        <div class="card border-0 border-bottom border-primary shadow-sm overflow-hidden">
          <div class="card-body p-0">
            <figure class="m-0 p-0">
              <img class="img-fluid" loading="lazy" src=".\images\person3.jpg" alt="..."/>
              <figcaption class="m-0 p-4">
                <h4 class="mb-1">Evander Mac</h4>
                <p class="text-secondary mb-0">Art Director</p>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-8 col-lg-6">
        <div class="card border-0 border-bottom border-primary shadow-sm overflow-hidden">
          <div class="card-body p-0">
            <figure class="m-0 p-0">
              <img class="img-fluid" loading="lazy" src=".\images\person2.jpg" alt=".."/>
              <figcaption class="m-0 p-4">
                <h4 class="mb-1">Taytum Elia</h4>
                <p class="text-secondary mb-0">Investment Planner</p>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
      <div class="col-8 col-md-6 col-lg-6">
        <div class="card border-0 border-bottom border-primary shadow-sm overflow-hidden">
          <div class="card-body p-0">
            <figure class="m-0 p-0">
              <img class="img-fluid" loading="lazy" src=".\images\person1.jpg" alt="..."/>
              <figcaption class="m-0 p-4">
                <h4 class="mb-1">Wylder Elio</h4>
                <p class="text-secondary mb-0">Financial Analyst</p>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<Footer/>
</>

    )
}
export default Team;