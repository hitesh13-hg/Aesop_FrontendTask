import React from 'react';
function hrefcomp(props){
    return (
        <div >
            <p style={{color:"white",textAlign:"left",marginTop:"5px"}}>
            <a  href="#">
                {props.lname}
            </a>
            </p>
        </div>
    )
}
export default hrefcomp;