import React from 'react';
function footersubheading(props){
    return(
        <div>
            <p style={{color:"white",textAlign:"left"}}>
            {props.cont}
            </p>
            <hr style={{backgroundColor:"white",width:"100%",height:"1px",margin:"16px 0"}}></hr>
            
        </div>
    )
}
export default footersubheading;