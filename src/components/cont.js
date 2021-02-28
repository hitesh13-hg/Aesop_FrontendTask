import React from 'react';
import background from './ezgif.com-gif-maker.jpg';
import Tnavbar from './tnavbar'
import cntcss from "./cont.css"
import Message from './message.jpg'
function cont(){
    return (
        <div style={{ backgroundImage: `url(${background})`,backgroundAttachment:"fixed",
        height: "100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
        }}>
            <Tnavbar />
            <div  class="row" >
                <div >
                <p className="logoaesop">Aēsop</p>
                </div>
                <div >
                <p className="conttext">
                    Treasure the ties that unite
                </p>
                <p className="ltext">
                Wishing strength, prosperity and good fortune to you and yours this Lunar New Year—be they near or far.
                </p>
        
                <button type="button" class="btn btn-outline-light btn-lg rounded-0" 
                style={{float:"left",marginLeft:"110px",marginBottom:"120px",marginTop:"5px"}}>
                    <h6 
                    style={{fontSize:"15px",paddingBottom:"12px",paddingTop:"12px",margin:"0",paddingRight:"10px",paddingLeft:"5px"}}>
                    Explore auspicious gifts  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; →
                    </h6>
                    </button>
                    <a href="#"><img src={Message} className="sticky"></img></a>
                </div>
            </div>
            <div>
                
            </div>
        </div>
    )
}
export default cont;
