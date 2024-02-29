import React from 'react';
import mdeodorants1 from '../assets/img/deodorant1.jpg';
import mdeodorant3 from '../assets/img/deodorant3.jpg';
import './Deodorant.css';
import { Link } from 'react-router-dom';
import mdeuxieme from '../assets/img/deuxieme.jpg'
import mtroixieme from '../assets/img/troixieme.jpg'
import mquatrieme from '../assets/img/quartrieme.jpg'
import mcimquieme from '../assets/img/cimquieme.jpg'
import msixieme from '../assets/img/sixieme.jpg'
import mseptieme from '../assets/img/septieme.jpg'
import mhuitieme from '../assets/img/huitieme.jpg'
import mneuvieme from '../assets/img/neuvieme.jpg'
import mdixieme from '../assets/img/dixieme.jpg'
import monze from '../assets/img/onze.jpg'
import mdoux from '../assets/img/doux.jpg'
import mimages14 from '../assets/img/image14.jpg'
import mimages15 from '../assets/img/images15.jpg'


function Deodorant(props) {
    return (
        <div>
            <div className="container-fluid" id='DEODORANTS' style={{marginTop: "7rem"}}>
                {/* le hover */}
                {/* <div className="row">
                    <div className="col-md-3">
                        <div className="seclection">
                            <h4 className='h4selection' style={{color: "#007266"}}>Sélection</h4>
                            <p>Deodorants Solides</p>
                            <p>Deodorants Roll-on</p>
                            <p>Tous les produits</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className='imgdeodorant' >
                            <img src={mdeodorants1} alt="" style={{width: "20rem", height: "14rem"}}/>
                        </div>
                        <div className='pdeodorant'>
                            <p className='premierp'>Découvrez les</p>
                            <p className='solides'>Solides Efficacite 48H</p>
                        </div>
                    </div>

                    <div className="col-md-4 ml-4" style={{marginLeft:15}}>
                        <div className='imgdeodorant' >
                            <img src={mdeodorants1} alt="" style={{width: "20rem", height: "14rem"}}/>
                        </div>
                        <div className='pdeodorant'>
                            <p className='premierp'>Découvrez les</p>
                            <p className='solides'>Nouveaux Roll-on Fraicheur 24h</p>
                        </div>
                    </div>
                </div> */}
                <div className="row rowNaturel" style={{height: "10rem"}}>
                        <div className="naturel" style={{marginLeft: "3rem", paddingTop: "2rem"}}>
                            <h2 className='h2  text-white'>Déodorants Naturels</h2>
                        </div>
                </div>
                {/* les class row */}
                <div className="row" style={{background: "#b7dbd2", height: "3rem"}}>
        <div className="deoPrincipale d-flex justify-content-center">
<div className="solides m-1">
<Link to="/" className="nav-link"

style={{
borderBottom: "2px solid transparent", // Bordure initiale
display: "inline-block", // Permet de définir une largeur et centrer
textDecoration: "none", // Supprimer la soulignement du texte
padding: "10px", // Ajouter un peu de marge intérieure
margin: "0 auto", // Centrer horizontalement
color: "#007266"
}}



onMouseOver={(e) => e.target.style.borderBottom = "2px solid #248332"} onMouseOut={(e) => e.target.style.borderBottom = "2px solid transparent"}>DÉODORANTS SOLIDES</Link>

</div>
<div className="rollon m-1">
<Link to="/" className="nav-link" 
style={{
borderBottom: "2px solid transparent", // Bordure initiale
display: "inline-block", // Permet de définir une largeur et centrer
textDecoration: "none", // Supprimer la soulignement du texte
padding: "10px", // Ajouter un peu de marge intérieure
margin: "0 auto", // Centrer horizontalement
color: "#007266"
}}

onMouseOver={(e) => e.target.style.borderBottom = "2px solid #248332"} onMouseOut={(e) => e.target.style.borderBottom = "1px solid transparent"}>DÉODORANTS ROLL-ON</Link>

</div>
<div className="toutproduit m-1">
<Link to="/" className="nav-link" 

style={{
borderBottom: "2px solid transparent", // Bordure initiale
display: "inline-block", // Permet de définir une largeur et centrer
textDecoration: "none", // Supprimer la soulignement du texte
padding: "10px", // Ajouter un peu de marge intérieure
margin: "0 auto", // Centrer horizontalement
color: "#007266"
}}

onMouseOver={(e) => e.target.style.borderBottom = "2px solid #248332"} onMouseOut={(e) => e.target.style.borderBottom = "2px solid transparent"}>TOUS LES PRODUITS</Link>
</div>
</div>

        </div>

                {/* mes produits */}

            {/* PREMIERE ROW */}
            <div className="row acceuill premiereRow">
                <p className='m-3'><strong>Accueil- Déodorants Naturels Certifiés Bios</strong></p>
                <div class="row  row-cols-md-4 g-3">

                <div class="col-md-3" style={{position: "relative"}}>
    <div class="card ">
      <img src={mdeuxieme} class="card-img-top" alt="..."/>
      <div className="satisfaite" style={{ background: "#c5e0d9", position: "absolute" }}>
        <p className='rem'>Satisfait ou rembourse</p>
      </div>
      <div class="card-body">
        <h5 class="card-title">Déodorant Solide Certifie Bio efficase 48h Fleur de Coton</h5>
        <p class="card-text"><span>Best-seller</span></p>
      </div>
      <div className='best d-flex'>
        <div className="monet ">
            <p>11,80£</p>
        </div>
        <div className="avis">
            <p>2630 avis <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></p>
        </div>
      </div>
      <div class="">
      <button type="button" className="btn text-white" style={{width: "16.5rem", height: "2.5rem", background: "#007266"}}>Ajouter</button>
      </div>
    </div>
  </div>

  <div class="col-md-3">
    <div class="card ">
      <img src={mdeuxieme} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Déodorant Roll-on Fraicheur 24h Fleur de coton</h5>
        <p class="card-text"><span>Efficacite prouve</span></p>
      </div>
      <div className='best d-flex'>
        <div className="monet ">
            <p>10,90£</p>
        </div>
        <div className="avis">
            <p>902 avis <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></p>
        </div>
      </div>
      <div class="">
      <button type="button" className="btn text-white" style={{width: "16.5rem", height: "2.5rem", background: "#007266"}}>Ajouter</button>
      </div>
    </div>
  </div>
  <div class="col-md-3">
    <div class="card h-100">
      <img src={mtroixieme} class="card-img-top" alt="..."/>
    
      <div class="card-body">
        <h5 class="card-title">Soin Nettoyant Visage solide</h5>
        <p class="card-text"><span>+27% d'hydratation</span></p>
      </div>
      <div className='best d-flex'>
        <div className="monet ">
            <p>10,90£</p>
        </div>
        <div className="avis">
            <p>898 avis <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></p>
        </div>
      </div>
      <div class="">
      <button type="button" className="btn text-white" style={{width: "16.5rem", height: "2.5rem", background: "#007266"}}>Ajouter</button>
      </div>
    </div>
  </div>
  
  <div class="col-md-3" style={{position: "relative"}}>
    <div class="card  h-100 quatriemeimage">
      <img src={mquatrieme} classN="card-img-top " alt="..."/>
      <div className="satisfaite" style={{ background: "#c5e0d9", position: "absolute" }}>
        <p className='rem' >Satisfait ou rembourse</p>
      </div>
      <div class="card-body">
        <h5 class="card-title">Soin Exfoliant Corps Solide</h5>
        <p class="card-text"><span>40 nuances de grains</span></p>
      </div>
      <div className='best d-flex'>
        <div className="monet ">
            <p>10,90£</p>
        </div>
        <div className="avis">
            <p>701 avis <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></p>
        </div>
      </div>
      <div class="">
      <button type="button" className="btn text-white" style={{width: "16.5rem", height: "2.5rem", background: "#007266"}}>Ajouter</button>
      </div>
    </div>
  </div>
  
 
  
</div>
            </div>
{/* deuXieme ROW */}
            <div className="row acceuill deuxiemeRow">
                <div class="row  row-cols-md-4 g-3">

  <div class="col-md-3" style={{ position: "relative" }}>
    <div class="card  h-100 cinquiemeimage">
      <img src={mcimquieme} class="card-img-top" alt="..."/>
      <div className="satisfaite" style={{ background: "#c5e0d9", position: "absolute" }}>
        <p >Satisfait ou rembourse</p>
      </div>
      <div class="card-body">
        <h5 class="card-title">Les 3 Deodorants Solides Certifies, efficacite 48h</h5>
        <p class="card-text"><span>Deo et jamais des bas</span></p>
      </div>
      <div className='best d-flex'>
        <div className="monet ">
            <p>33,90£</p>
        </div>
        <div className="avis">
            <p>3297 avis <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></p>
        </div>
      </div>
      <div class="">
      <button type="button" className="btn text-white" style={{width: "16.5rem", height: "2.5rem", background: "#007266"}}>Ajouter</button>
      </div>
    </div>
  </div>

  <div class="col-md-3" style={{ position: "relative" }}>
    <div class="card h-100">
      <img src={msixieme} class="card-img-top" alt="..." style={{ background: "#faf5ec"}}/>
      <div className="satisfaite" style={{ background: "#c5e0d9", position: "absolute" }}>
        <p >Satisfait ou rembourse</p>
      </div>
      <div class="card-body">
        <h5 class="card-title">Déodorant Solide Certifie Bio efficase 48h Douceur Monoi</h5>
        <p class="card-text"><span>Deodorant jamais des bas</span></p>
      </div>
      <div className='best d-flex'>
        <div className="monet ">
            <p>11,90£</p>
        </div>
        <div className="avis">
            <p>240 avis <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></p>
        </div>
      </div>
      <div class="">
      <button type="button" className="btn text-white" style={{width: "16.5rem", height: "2.5rem", background: "#007266"}}>Ajouter</button>
      </div>
    </div>
  </div>
  <div class="col-md-3" style={{ position: "relative" }}>
    <div class="card ">
      <img src={mseptieme} class="card-img-top" alt="..."/>
      <div className="satisfaite" style={{ background: "#c5e0d9", position: "absolute" }}>
        <p >Victoire de la Beaute</p>
      </div>
      <div class="card-body">
        <h5 class="card-title">2 Shampoings Solides Fraicheur Tropiacale & Lait d'Amande</h5>
        <p class="card-text"><span>Attention ca mouse</span></p>
      </div>
      <div className='best d-flex'>
        <div className="monet ">
            <p>18,53£</p>
        </div>
        <div className="avis">
            <p>2306 avis <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></p>
        </div>
      </div>
      <div class="">
      <button type="button" className="btn text-white" style={{width: "16.5rem", height: "2.5rem", background: "#007266"}}>Ajouter</button>
      </div>
    </div>
  </div>
  <div class="col-md-3">
    <div class="card h-100 quatriemeimage">
      <img src={mhuitieme} classN="card-img-top " alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Gel-Creme Visage Hydratant 50ml</h5>
        <p class="card-text"><span>+48% d'hydratation immediate</span></p>
      </div>
      <div className='best d-flex'>
        <div className="monet ">
            <p>16,90£</p>
        </div>
        <div className="avis">
            <p>2610 avis <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></p>
        </div>
      </div>
      <div class="">
      <button type="button" className="btn text-white" style={{width: "16.5rem", height: "2.5rem", background: "#007266"}}>Ajouter</button>
      </div>
    </div>
  </div>
  
 
  
            </div>
            </div>
            {/* TROIXIEME ROW */}

            <div className="row acceuill troixiemRow">
                <div class="row  row-cols-md-4 g-3">

  <div class="col-md-3">
    <div class="card ">
      <img src={mneuvieme} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Déodorant Roll-on Fraicheur 24h Douceur Monoi</h5>
        <p class="card-text"><span>Eficacitee prouve</span></p>
      </div>
      <div className='best d-flex'>
        <div className="monet ">
            <p>10,90£</p>
        </div>
        <div className="avis">
            <p>902 avis <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></p>
        </div>
      </div>
      <div class="">
      <button type="button" className="btn text-white" style={{width: "16.5rem", height: "2.5rem", background: "#007266"}}>Ajouter</button>
      </div>
    </div>
  </div>

  <div class="col-md-3" style={{ position: "relative" }}>
    <div class="card">
      <img src={mdixieme} class="card-img-top" alt="..."/>
      <div className="satisfaite" style={{ background: "#c5e0d9", position: "absolute" }}>
        <p >Satisfait ou rembourse</p>
      </div>
      <div class="card-body">
        <h5 class="card-title">Les deux Deodoorants Solides Certifies Bio, efficacite 48h</h5>
        <p class="card-text"><span>48 chrono</span></p>
      </div>
      <div className='best d-flex'>
        <div className="monet ">
            <p>21,90</p>
        </div>
        <div className="avis">
            <p>3297 avis <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></p>
        </div>
      </div>
      <div class="">
      <button type="button" className="btn text-white" style={{width: "16.5rem", height: "2.5rem", background: "#007266"}}>Ajouter</button>
      </div>
    </div>
  </div>
  <div class="col-md-3" style={{ position: "relative" }}>
    <div class="card h-100">
      <img src={monze} class="card-img-top" alt="..."/>
      <div className="satisfaite" style={{ background: "#c5e0d9", position: "absolute" }}>
        <p >Nouveaute</p>
      </div>
      <div class="card-body">
        <h5 class="card-title">Duo Soin Mains et Levres</h5>
        <p class="card-text"><span>Le duo de choc</span></p>
      </div>
      <div className='best d-flex'>
        <div className="monet ">
            <p>12,90£</p>
        </div>
        <div className="avis">
            <p>29 avis <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></p>
        </div>
      </div>
      <div class="">
      <button type="button" className="btn text-white" style={{width: "16.5rem", height: "2.5rem", background: "#007266"}}>Ajouter</button>
      </div>
    </div>
  </div>
  <div class="col-md-3" style={{ position: "relative" }}>
    <div class="card h-100">
      <img src={mdoux} class="card-img-top" alt="..."/>
      <div className="satisfaite" style={{ background: "#c5e0d9", position: "absolute" }}>
        <p >Edition limite</p>
      </div>
      <div class="card-body">
        <h5 class="card-title">Les 5 deodorants Solides Certifies bio efficacite 48h</h5>
        <p class="card-text"><span>1 ans et demi de deodorant</span></p>
      </div>
      <div className='best d-flex'>
        <div className="monet ">
            <p>14,60£</p>
        </div>
        <div className="avis">
            <p>3297 avis <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></p>
        </div>
      </div>
      <div class="">
      <button type="button" className="btn text-white" style={{width: "16.5rem", height: "2.5rem", background: "#007266"}}>Ajouter</button>
      </div>
    </div>
  </div>
  
 
  
</div>
            </div>

            {/* QUATRIME ROW */}
            <div className="row acceuill quatriemeRow">
                <div class="row  row-cols-md-4 g-3">

                <div class="col-md-3" style={{ position: "relative" }}>
    <div class="card ">
      <img src={mneuvieme} class="card-img-top" alt="..."/>
      <div className="satisfaite" style={{ background: "#c5e0d9", position: "absolute" }}>
        <p >+15</p>
      </div>
      <div class="card-body">
        <h5 class="card-title">Les 2 deodorants Roll-on Fraicheur 24h</h5>
        <p class="card-text"><span>Efficacite prouvee</span></p>
      </div>
      <div className='best d-flex'>
        <div className="monet ">
            <p>18,53£</p>
        </div>
        <div className="avis">
            <p>902 avis <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></p>
        </div>
      </div>
      <div class="">
      <button type="button" className="btn text-white" style={{width: "16.5rem", height: "2.5rem", background: "#007266"}}>Ajouter</button>
      </div>
    </div>
  </div>

  <div class="col-md-3">
    <div class="card ">
      <img src={mimages14} class="card-img-top" alt="..."/>
     
      <div class="card-body">
        <h5 class="card-title">Baume Corps Nourrissant Rechargeable 200ml</h5>
        <p class="card-text"><span>Du baume au corps</span></p>
      </div>
      <div className='best d-flex'>
        <div className="monet ">
            <p>22,90£</p>
        </div>
        <div className="avis">
            <p>182avis <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></p>
        </div>
      </div>
      <div class="">
      <button type="button" className="btn text-white" style={{width: "16.5rem", height: "2.5rem", background: "#007266"}}>Ajouter</button>
      </div>
    </div>
  </div>
  <div class="col-md-3" style={{ position: "relative" }}>
    <div class="card h-100">
      <img src={mneuvieme} class="card-img-top" alt="..."/>
      <div className="satisfaite" style={{ background: "#c5e0d9", position: "absolute" }}>
        <p >New</p>
      </div>
      <div class="card-body">
        <h5 class="card-title">Les 2 Deodorants Solides Certifies efficacite 48h</h5>
        <p class="card-text"><span>48h chrono</span></p>
      </div>
      <div className='best d-flex'>
        <div className="monet ">
            <p>21,90£</p>
        </div>
        <div className="avis">
            <p>3297 avis <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></p>
        </div>
      </div>
      <div class="">
      <button type="button" className="btn text-white" style={{width: "16.5rem", height: "2.5rem", background: "#007266"}}>Ajouter</button>
      </div>
    </div>
  </div>
  <div class="col-md-3" style={{ position: "relative" }}>
    <div class="card ">
      <img src={mimages15} class="card-img-top" alt="..."/>
      <div className="satisfaite" style={{ background: "#c5e0d9", position: "absolute" }}>
        <p >New</p>
      </div>
      <div class="card-body">
        <h5 class="card-title">Baume Levres Nourrissant Naturel</h5>
        <p class="card-text"><span>Un petit nouveau</span></p>
      </div>
      <div className='best d-flex'>
        <div className="monet ">
            <p>15,90£</p>
        </div>
        <div className="avis">
            <p>297 avis <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></p>
        </div>
      </div>
      <div class="">
      <button type="button" className="btn text-white" style={{width: "16.5rem", height: "2.5rem", background: "#007266"}}>Ajouter</button>
      </div>
    </div>
  </div>
  
 
  
</div>
            </div>
            {/* CINQUIEME ROW */}
            <div className="row acceuill cinquiemeRow">
                <div class="row  row-cols-md-4 g-3">

                <div class="col-md-3" style={{ position: "relative" }}>
    <div class="card ">
      <img src={mneuvieme} class="card-img-top" alt="..."/>
      <div className="satisfaite" style={{ background: "#c5e0d9", position: "absolute" }}>
        <p >Satisfait ou rembourse</p>
      </div>
      <div class="card-body">
        <h5 class="card-title">Déodorant Solide Certifie Bio efficase 48h Fleur de Coton</h5>
        <p class="card-text"><span>48h chrono</span></p>
      </div>
      <div className='best d-flex'>
        <div className="monet ">
            <p>21,90£</p>
        </div>
        <div className="avis">
            <p>3297 avis <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></p>
        </div>
      </div>
      <div class="">
      <button type="button" className="btn text-white" style={{width: "16.5rem", height: "2.5rem", background: "#007266"}}>Ajouter</button>
      </div>
    </div>
  </div>

  <div class="col-md-3">
    <div class="card h-100">
      <img src={mseptieme} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Les 2 Savons Surgras</h5>
        <p class="card-text"><span>Duo (tres) solide</span></p>
      </div>
      <div className='best d-flex'>
        <div className="monet ">
            <p>10,90£</p>
        </div>
        <div className="avis">
            <p>674 avis <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></p>
        </div>
      </div>
      <div class="">
      <button type="button" className="btn text-white" style={{width: "16.5rem", height: "2.5rem", background: "#007266"}}>Ajouter</button>
      </div>
    </div>
  </div>
 
  
  
 
  
</div>
            </div>

            {/* row pagination 
            
            
            */}
            {/* row formules */}
            <div className="row formules">
                <div className="col-md-6">
                    <h5 className='h5-body'>Des formules<br/> efficaces et <br/> approuvées !</h5>
                    <p>L'efficacité 48h de notre déodorant solide a été approuvée par un laboratoire indépendant et plus de 400 volontaires ont testé et approuvé la formule de notre déodorant solide à 100% d'origine naturelle et zéro plastique ! Et pour ceux qui préfèrent le format roll-on au format stick : nous avons renforcé l'efficacité de nos déodorants roll-on grâce à 3 nouveaux actifs qui neutralisent les mauvaises odeurs, absorbent l'humidité, et éliminent les "mauvaises bactéries" à l'origine des mauvaises odeurs. Et la formule reste à 98% d'origine naturelle <strong>! Objectif zéro plastique !</strong></p>
                    <p>Vous voulez faire un pas de plus vers le zéro déchet dans votre salle de bain ? Ça tombe bien, nous avons développé un déodorant solide avec un emballage 100% carton particulièrement apprécié car pratique à transporter et surtout zéro déchet plastique ! Quand à notre déodorant roll-on, il est rechargeable grâce à une éco-recharge 150ml en plastique 100% recyclé et recyclable.</p>
                </div>
                <div className="col-md-6">
                <img src={mdeodorants1} alt="" style={{width: "20em", height: "27em", marginLeft: "5em"}}/>

                </div>
            </div>

{/* row questions frequents */}
<div className="row">
  <div className="frequents">
  <h2 class="text-uppercase  text-center">Questions Fréquentes
</h2>  </div>
  <div className="col-md-6 pt-6">
    <div className="colimg">
      <img src={mdeodorant3} alt="" style={{width: "30rem", height: "25rem",marginLeft: "2rem"}}/>
    </div>
  </div>
  <div className="col-md-6">
 
  </div>
</div>


{/* footerRow */}


<div className="row avantdrenier">
              <div className="suivi text-center" style={{marginTop: "7rem"}}>
                <p className='psuivi' style={{fontSize: "13px"}}>SUIVEZ-NOUS SUR INSTAGRAM</p>
                <p className='deusuivi'  style={{color: "#007266"}}>@respirenaturel</p>
              </div>
            </div>

            <div className="row dernier" style={{background: "#b7dbd2", paddingTop: "4rem", paddingLeft: "3rem", height: "35rem"}}>
  
          <div className="col-md-2">
                <h4>NOS PRODUITS</h4>
                <p>Tous les produits</p>
                <p>Déodorants</p>
                <p>Cheveaux</p>
                <p>Dentifrices</p>
                <p>Soins Corps</p>
                <p>Archives</p>
              </div>

              <div className="col-md-2">
                <h4>AIDE</h4>
                <p>Nous contacter</p>
                <p>Suiver mon colis</p>
                <p>Livraison & Retours</p>
                <p>FAQ</p>
                <p>Où nous trouver ?</p>
                <p>Plan du site</p>
              </div>

              <div className="col-md-2">
                <h4>RESPIRE</h4>
                <p>Avis Respire</p>
                <p>S'abonner</p>
                <p>Parrainage</p>
                <p>Devenir pharmatie partenaire</p>
                <p>Recrutement</p>
                <p>CGV</p>
                <p>Politique de confidentialite</p>
                <p>Conseils</p>
                <div className='iconme d-flex'>
                      <div className="instagram">
                      <i class="fa-brands fa-instagram"></i>
                      </div>
                      <div className="facebook">
                      <i class="fa-brands fa-facebook-f"></i>
                                            </div>
                      <div className="link">
                      <i class="fa-brands fa-linkedin-in"></i>
                      </div>
                </div>
              </div>
              <div className="col-md-6"  style={{background: "#faf5ec", width: "25rem", height: "18rem", marginLeft: "3rem"}}>
                      <div className='colprincip'>
                      <div className='abonne'>
                          <h4>Abonnez-vous</h4>
                      </div>
                      <div className="newsletter">
<p>                      A la newsletter et soyez au courant des nouveautés, recevez des conseils et des offres !
</p>                      </div>
                      <form>
  <div class="mb-3 ">
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='email'/>
  </div>
  
  <div className="mb-3 form-check">
    <input type="radio" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">J’accepte la <strong>politique de confidentialité</strong></label>
  </div>
  <button type="submit" class="btn  text-white" style={{background: "#007266", fontSize: 13,}}>JE M'INSCRIS</button>
</form>
                      </div>
              </div>
          </div>

          <div className="row footer mt-4">
                <div className="foot text-center "style={{color: "#007266", fontSize: "10px"}}>
<p>                © 2023 - TOUS DROITS RÉSERVÉS - DESIGN & DÉVELOPPEMENT AGENCE PM
</p>                </div>
          </div>

            </div>
        </div>
    );
}

export default Deodorant;