import React from 'react';
import cntcss from './cont.css'
const tnavbar = () => (
    <div>
    <nav class="navbar navbar-expand-lg navbar-light" 
    style={{background:"transparent", paddingTop:"30px",paddingLeft:"20px",paddingBottom:"30px"}}>
    <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a  class="nav-link" aria-current="page" className="catg" href="#">Shop</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" className="catg"  href="#">Read</a>
        </li>
        <li class="nav-item ">
          <a  class="nav-link" className="catg"  href="#">
            Stores
          </a>
          
        </li>
        <li class="nav-item">
          <a class="nav-link" className="catg" href="#">Search</a>
        </li>
      </ul>
    </div>
  </div>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
    <li class="nav-item"><a  class="nav-link" className="catg" href="#">Login</a></li>
    <li class="nav-item"><a  class="nav-link" className="catg" href="#">Cart</a></li>
  </ul>
  </div>
</nav>
    </div>
)
export default tnavbar;