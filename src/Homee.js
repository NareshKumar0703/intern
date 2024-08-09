import React from 'react';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function Homee() {
  return (
    <div>
        {/* navigation bar */}
        <div class="top" >
        <span><img src='/wtef-logo.png' alt='err' width='300px' height='50px' /> </span>
        <div class='insde'><span>HOME</span><span>ABOUT</span><span>PROGRAM</span><span>DELIGATES</span><span>VIP</span><span>SPONSOR</span><span>CONFERENCE</span><span>NEWS</span><span>CONTACT</span></div>
        </div>

{/* carosol images */}
        <div>
            
        <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="/Banner-1.jpg" class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src="/Banner_2-1.jpg" class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src="/Banner_1-1.jpg" class="d-block w-100" alt="..." />
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        </div>
        <div id='buttons'>
          <button class='twobtn' style={{marginRight:'15px'}}>REGISTERATION FORM</button>
          <button class='twobtn'>EVENT BROCHURE</button>
        </div>
        <div id='pg2'>
          <div id='para'>
            <h2>WELCOME TO 10TH WORLD TAMILS ECONOMIC CONFERENCE AND GLOBAL ECONOMIC SUMMIT 2024, CHENNAI.</h2>
            <p style={{marginTop:'50px'}}>We are happy to invite you to the World Tamils Economic Conference and Global Economic Summit in Chennai, from January 9th to 10 th 2024 at Le Royal Méridien, Chennai.
            </p>
              <p>
              This conference presents an unique, dynamic 2 days forum of not-to-be missed networking experience for socio-economic development. Governmental representatives, ministers, policy makers and global leaders will deliver specialized addresses in the meeting. Participants will include business leaders, entrepreneurs, professionals, academicians, self-employed groups, chambers of commerce, etc.
              </p>
              <p style={{marginTop:'50px'}}>
              The First World Tamils Economic Conference was held in Chennai in 2009, and the Second Conference was held in Dubai, UAE in 2011. The third conference was in Chennai, 2016, Fourth Conference was in Durban, South Africa 2017, Fifth Conference was in Pondicherry in 2018, the Sixth conference was in Chennai, 2019 and Seventh conference was virtual in Chennai 2020, Eighth conference was in Chennai 2021 and Ninth conference was in Dubai 2023, organized by Madras Development Society and World Tamils Economic Foundation under the support of Governmental & Non-Governmental Agencies, Business Leaders, Entrepreneurs, Professionals, Donors, and Community Leaders.
              </p>
              <ul style={{listStyleType:'disc',padding:'50px',marginTop:'-40px'}}>
                <li>Investment And Business opportunities</li>
                <li>Special Speakers</li>
                <li>Plenary Sessions</li>
                <li> Funding,Finance And Venture capital</li>
                <li>Success stories on Business/Professionals</li>
                <li>Awards</li>
                <li>Networking Get-together</li>
                </ul>
                <p style={{marginTop:'-45px'}}>With Warm Regards<br/>Your’s sincerely<br/>DR.V.R.S SAMPATH<br/>Founder And President<br/>Conference Comittee.</p>
              
          </div>
          <div id='pg2img'>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/nN1zxv7c0SU?si=5VpEtllY3xZ-hLhx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          <a href='https://wtefchennai.com/ec-payment/'><img id='limg' src='/WhatsApp-Image-2023-12-01-at-10.53.55-AM.jpeg' alt='....'/></a>

          </div>


        </div>


    </div>
  )
}

export default Homee
