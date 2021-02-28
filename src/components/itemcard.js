import React from 'react';
import cardone from './card1.jpg'
import cntcss from "./cont.css"
function itemcard(props){
    return(
        <div class="card-transparent" style={{width: "399px",marginTop:"2rem"}}>
        <img class="card-img-top" src={props.imgsrc} alt="Card image cap" 
        style={{width:"399px",height:"390px"}}></img>
        <div class="card-body" style={{padding:"0 12px 0 12px",height:"70px"}}>
        <p style={{margin:"10px 0px 10px 0px"}}>
        <a style={{color:"black",fontSize:"14px",
        color:"#333",fontFamily:"sans-serif",fontWeight:"550"}} 
        href="#">{props.ftext}</a></p>
        
        <p style={{margin:"0px"}} 
        style={{color:"black",fontSize:"14px",color:"#333",fontFamily:"sans-serif"}} >
            {props.stext}</p>
        </div>
        </div>
    )
}
export default itemcard;