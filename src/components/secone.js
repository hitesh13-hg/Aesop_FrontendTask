import React from "react";
import imageone from './image1.jpg'
import Buttoncomp from "./buttoncomp"
function secone(){
    return (
        <div class="row" style={{marginTop:"80px"}}>
            <div>
            <div style={{fontFamily:"serif",marginBottom:"30px",textAlign:"left",marginLeft:"75px"}}>
                <h2 >
                For your convenience</h2>
            </div>
            <div>
            <p style={{fontSize:"16px",lineHeight:"1.7",width:"365px",
            marginLeft:"75px",textAlign:"left",height:"189px"}}>
            For personalised advice, you are welcome to arrange a 
            video consultation with a trained Aesop consultant; 
            or to use our live assistance for guidance while browsing online.</p>
            </div>
            <Buttoncomp 
            content="Discover our Services &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp; 
            &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; →"
            />
            </div>
            <div>
            <img src={imageone} style={{width:"810px",height:"448px",marginLeft:"112.5px",marginBottom:"20px"}}></img>
            </div>
            </div>
            
    )
}
export default secone;