import React from 'react'
function buttoncomp(props){
    return(
        <div>
        <button type="button" class="btn btn-outline-dark btn-lg rounded-0" 
        style={{marginLeft:"20px",marginBottom:"120px",marginTop:"5px",width:"298px"}}>
        <h6 
        style={{fontSize:"15px",paddingBottom:"12px",paddingTop:"12px",margin:"0",
        paddingRight:"10px",paddingLeft:"5px"}}>
        {props.content}
        </h6>
        </button>
        </div>
    )
}
export default buttoncomp;