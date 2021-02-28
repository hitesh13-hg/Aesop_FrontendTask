import React from "react";
import Buttoncomp from "./buttoncomp"
import imageone from './image1.jpg'
import Sliderone from './slider1.jpg'
import Slidertwo from './slider2.jpg'
import Sliderthree from './slider3.jpg'
function sectwo(){
    return (
        <div class="row" style={{marginTop:"80px",marginBottom:"75px"}}>
            <div>
            <div style={{fontFamily:"serif",marginBottom:"30px",textAlign:"left",marginLeft:"75px"}}>
                <h2 >
               Store Locator</h2>
            </div>
            <div>
            <p style={{fontSize:"16px",lineHeight:"1.7",width:"365px",
            marginLeft:"75px",textAlign:"left",height:"189px"}}>
           Our consultants are available to host you in-&nbsp; &nbsp; &nbsp; store and provide tailored guidance on &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; gift purchases. </p>
            </div>
            <Buttoncomp 
            content="Find a nearby store &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp; 
            &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; →"
            />
            </div>
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" style={{width:"810px",height:"448px",marginLeft:"112.5px",marginBottom:"20px"}}>
            <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active">
                <img class="d-block w-100" src={Sliderone} alt="First slide"></img>
                <div class="carousel-caption d-none d-md-block">
                <p >Aesop K11 Musea</p>
                </div>
                </div>
                <div class="carousel-item">
                <img class="d-block w-100" src={Slidertwo} alt="Second slide"></img>
                <div class="carousel-caption d-none d-md-block">
                <p >Aesop New Town Plaza</p>
                </div>
                </div>
                <div class="carousel-item">
                <img class="d-block w-100" src={Sliderthree} alt="Third slide"></img>
                <div class="carousel-caption d-none d-md-block">
                <p >Aesop Hollywood Road</p>
                </div>
                </div>
            </div>
            </div>
            <hr style={{backgroundColor:"cream",width:"100%",height:"1px",margin:"36px 50px 0px 50px"}}></hr>
            </div>      
    )
}
export default sectwo;