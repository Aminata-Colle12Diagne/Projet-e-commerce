import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import Panier from '../pagne/Panier';
import { useEffect } from 'react';
import { Firestore, collection, getDocs, getFirestore } from 'firebase/firestore';


function Navbar(props) {
const dbFirestore = getFirestore()

const [panierProduits, setPanierProduits] = useState([]);

useEffect(() => {
  const fetchPanierProduits = async () => {
    const panierRef = collection(dbFirestore, 'Panier');
    const panierSnapshot = await getDocs(panierRef);
    const produits = [];

    panierSnapshot.forEach((doc) => {
      produits.push({ id: doc.id, ...doc.data() });
    });

    setPanierProduits(produits);
  };

  fetchPanierProduits();
}, [dbFirestore]);



    return (
        <div className='header fixed-top '>
            <nav class="navbar navbar-expand-lg navbar-light bg-light ">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <div className="nav-item">
        <Link  to="/abonne"type="button" className="btn text-white" style={{background: "#007266"}}> <i class="fa-solid fa-envelope"></i>  Je m'abonne</Link>
        </div>
        <li class="nav-item  partenaire">
        <button type="button text-white" className="btn buttonPartenaire" >Devenir Partenaire</button>
        </li>
        <li class="nav-item">
        <Link class="nav-link" to="/propos" style={{color: "#007266"}}>A Propos</Link>
        </li>
        
        <li className="nav-item respire" style={{marginLeft: "10rem"}}>
        <a className="nav-link m-auto" style={{ fontWeight: 'bold', color: "black"}}>respire</a>
        </li>
      </ul>
     
      <div className='lesIconsNavbar d-flex justify-content-end ml-2'>
    <div className="search m-2">
        <Link to="/search" className="nav-link"><i className="fa-solid fa-magnifying-glass" style={{color: "#007266"}}></i></Link>
    </div>
    <div className="search m-2">
    <Link to="/hepl" className="nav-link"><i class="fa-regular fa-circle-question" style={{color: "#007266"}}></i></Link>
    </div>
    <div className="search m-2">
        <Link to="/connexion" className="nav-link"><i className="fa-solid fa-user-large" style={{color: "#007266"}}></i></Link>
    </div>
    <div className="search m-2">
    <Link to="/panier" className="nav-link position-relative">
        <i className="fa-solid fa-cart-shopping" style={{ color: "#007266" }}>
          ({panierProduits.length})
        </i>
      </Link> 
     </div>
</div>
{/* <Panier/> */}


   
    </div>
  </div>
</nav>
<div className='row linkproduit bg-white'>
  <nav className="nav nav-pills navpricipale nav-fill">
    <Link to="/" className="nav-link" onMouseOver={(e) => e.target.style.borderBottom = "1px solid #248332"} onMouseOut={(e) => e.target.style.borderBottom = "1px solid transparent"}>TOUS LES PRODUITS</Link>
    <Link to="/DEODORANTS" className="nav-link" onMouseOver={(e) => e.target.style.borderBottom = "1px solid #248332"} onMouseOut={(e) => e.target.style.borderBottom = "1px solid transparent"}>DEODORANTS</Link>
    <Link to="/CHEVEUX" className="nav-link" onMouseOver={(e) => e.target.style.borderBottom = "2px solid #248332"} onMouseOut={(e) => e.target.style.borderBottom = "2px solid transparent"}>CHEVEUX</Link>
    <Link to="/DENTIFRICES" className="nav-link" onMouseOver={(e) => e.target.style.borderBottom = "2px solid #248332"} onMouseOut={(e) => e.target.style.borderBottom = "2px solid transparent"}>DENTIFRICES</Link>
    <Link to="/VISAGE" className="nav-link" onMouseOver={(e) => e.target.style.borderBottom = "2px solid #248332"} onMouseOut={(e) => e.target.style.borderBottom = "2px solid transparent"}>VISAGE</Link>
    <Link to="/CORPS" className="nav-link" onMouseOver={(e) => e.target.style.borderBottom = "2px solid #248332"} onMouseOut={(e) => e.target.style.borderBottom = "2px solid transparent"}>CORPS</Link>
    <Link to="/PARRAINAGE" className="nav-link" onMouseOver={(e) => e.target.style.borderBottom = "2px solid #248332"} onMouseOut={(e) => e.target.style.borderBottom = "2px solid transparent"}>PARRAINAGE</Link>
    <Link to="/iconic" className="nav-link" style={{ background: "#ffc451", height: "2rem", borderBottom: "2px solid transparent", borderBottomWidth: "1px" }} onMouseOver={(e) => e.target.style.borderBottom = "2px solid #ffc451"} onMouseOut={(e) => e.target.style.borderBottom = "2px solid transparent"}>ICONIQUES</Link>
  </nav>
  <hr />
</div>


        </div>
    );
}

export default Navbar;