import React from "react";
import Footercss from './footersec.css'
import Footersubheading from './footersubheading'
import Hrefcomp from './hrefcomp'
function footersec(){
    return(
        <div className="mainsec">
        <div className="firstsec">    
        <form>
        <div  style={{width:"100%"}}>
        <label class="sr-only" for="colFormLabel">Username</label>
        <div class="input-group mb-2" style={{backgroundColor:"transparent"}}>
        <input style={{backgroundColor:"transparent",color:"white"}} type="email" class="form-control" 
        id="colFormLabel" placeholder="電郵地址" />
        <div class="input-group-append">
          <div style={{backgroundColor:"transparent",color:"white"}} class="input-group-text"><a>➜</a></div>
        </div>
        </div>
        </div>
        </form>
        <p style={{color:"white",textAlign:"left",marginTop:"25px",marginBottom:"131px"}}>Subscribe to receive 
        communications about Aesop products, services, stores, events and matters of cultural interest.</p>
        <Footersubheading 
        cont="Sustainability"/>
        <p style={{color:"white",textAlign:"left"}}>
        All Aesop products are vegan, and we do not 
        test our formulations or ingredients on animals. We are 
        Leaping Bunny approved and a Certified B Corporation. 
        Learn about our rinse and return programme</p>
        </div>
        <div className="secondsec">
        <div>
        <Footersubheading cont="Orders and Support"/>
        <Hrefcomp lname="Contact us↗"/>
        <Hrefcomp lname="FAQs"/>
        <Hrefcomp lname="Delivery and returns↗"/>
        <Hrefcomp lname="Terms and Conditions"/>
        </div>
        <br></br>
        <div>
        <Footersubheading cont="About"/>
        <Hrefcomp lname="Our Story"/>
        <Hrefcomp lname="Foundation↗"/>
        <Hrefcomp lname="Careers"/>
        <Hrefcomp lname="Privacy policy"/>
        <Hrefcomp lname="Accessibility"/>
        </div>
        </div>
        <div className="thirdsec">
        <div>
        <Footersubheading cont="Services"/>
        <Hrefcomp lname="Live assistance"/>
        <Hrefcomp lname="Corporate gifts"/>
        <Hrefcomp lname="Facial appointments"/>
        <Hrefcomp lname="Advisory"/>
        </div>
        <br></br>
        <div>
        <Footersubheading cont="Social Media"/>
        <Hrefcomp lname="Instagram ↗"/>
        <Hrefcomp lname="Twitter↗"/>
        <Hrefcomp lname="LinkedIn↗"/>
        <Hrefcomp lname="Wechat↗"/>
        <Hrefcomp lname="Weibo"/>
        </div>
        </div>
        <div className="fourthsec">
        <div>
        <Footersubheading cont="Location Preferences"/>
        <Hrefcomp lname="Shipping: Hong Kong (S.A.R)"/>
        <Hrefcomp lname="Language: EN"/>
        </div>
        </div>
        <hr style={{backgroundColor:"#fff2ef",width:"100%",height:"1px"}}></hr>
        <p style={{fontSize:"1.2rem",color:"white",textAlign:"left",margin:"25px 30px 0px 30px"}}>©Aesop</p>
        <br></br>
        </div>
    )
}
export default footersec; 