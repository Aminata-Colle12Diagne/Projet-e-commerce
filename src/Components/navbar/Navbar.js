import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
function Navbar(props) {
    return (
        <div className='header fixed-top'>
            <nav class="navbar navbar-expand-lg navbar-light bg-light ">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <div className="nav-item">
        <button type="button" className="btn text-white" style={{background: "#007266"}}> <i class="fa-solid fa-envelope"></i>  Je m'abonne</button>
        </div>
        <li class="nav-item  partenaire">
        <button type="button text-white" className="btn buttonPartenaire" >Devenir Partenaire</button>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="#" style={{color: "#007266"}}>A Propos</a>
        </li>
        
        <li className="nav-item respire" style={{marginLeft: "10rem"}}>
        <a className="nav-link m-auto" style={{ fontWeight: 'bold', color: "black"}}>respire</a>
        </li>
      </ul>
     
      <div className='lesIconsNavbar d-flex justify-content-end ml-2'>
    <div className="search m-2">
        <Link to="" className="nav-link"><i className="fa-solid fa-magnifying-glass"></i></Link>
    </div>
    <div className="search m-2">
    <Link to="" className="nav-link"><i class="fa-regular fa-circle-question"></i></Link>
    </div>
    <div className="search m-2">
        <Link to="" className="nav-link"><i className="fa-solid fa-user-large"></i></Link>
    </div>
    <div className="search m-2">
      <Link to="" className="nav-link">    <i class="fa-solid fa-cart-shopping"></i>  </Link>
     </div>
</div>



   
    </div>
  </div>
</nav>
<div className='row linkproduit'>
  <nav className="nav nav-pills navpricipale nav-fill">
    <Link to="/" className="nav-link" onMouseOver={(e) => e.target.style.borderBottom = "1px solid #248332"} onMouseOut={(e) => e.target.style.borderBottom = "1px solid transparent"}>TOUS LES PRODUITS</Link>
    <Link to="/DEODORANTS" className="nav-link" onMouseOver={(e) => e.target.style.borderBottom = "1px solid #248332"} onMouseOut={(e) => e.target.style.borderBottom = "1px solid transparent"}>DEODORANTS</Link>
    <Link to="/CHEVEUX" className="nav-link" onMouseOver={(e) => e.target.style.borderBottom = "2px solid #248332"} onMouseOut={(e) => e.target.style.borderBottom = "2px solid transparent"}>CHEVEUX</Link>
    <Link to="/DENTIFRICES" className="nav-link" onMouseOver={(e) => e.target.style.borderBottom = "2px solid #248332"} onMouseOut={(e) => e.target.style.borderBottom = "2px solid transparent"}>DENTIFRICES</Link>
    <Link to="/VISAGE" className="nav-link" onMouseOver={(e) => e.target.style.borderBottom = "2px solid #248332"} onMouseOut={(e) => e.target.style.borderBottom = "2px solid transparent"}>VISAGE</Link>
    <Link to="/CORPS" className="nav-link" onMouseOver={(e) => e.target.style.borderBottom = "2px solid #248332"} onMouseOut={(e) => e.target.style.borderBottom = "2px solid transparent"}>CORPS</Link>
    <Link to="/PARRAINAGE" className="nav-link" onMouseOver={(e) => e.target.style.borderBottom = "2px solid #248332"} onMouseOut={(e) => e.target.style.borderBottom = "2px solid transparent"}>PARRAINAGE</Link>
    <Link to="/A_OFFRIR" className="nav-link" style={{ background: "#ffc451", height: "2rem", borderBottom: "2px solid transparent", borderBottomWidth: "1px" }} onMouseOver={(e) => e.target.style.borderBottom = "2px solid #ffc451"} onMouseOut={(e) => e.target.style.borderBottom = "2px solid transparent"}>A OFFRIR</Link>
  </nav>
  <hr />
</div>


        </div>
    );
}

export default Navbar;