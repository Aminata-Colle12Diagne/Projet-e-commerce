import React from 'react';
import { Link } from 'react-router-dom';
import mvisage3 from '../assets/img/visage3.jpg'
import mvisage4 from '../assets/img/visage4.jpg'
import mvisage5 from '../assets/img/visage5.jpg'
import mvisage6 from '../assets/img/visage6.jpg'
import mvisage7 from '../assets/img/visage7.jpg'
import mvisage8 from '../assets/img/visage8.jpg'
import mvisage9 from '../assets/img/visage9.jpg'
import mvisage10 from '../assets/img/visage10.jpg'
import mfaq from '../assets/img/faq.webp'

import './Visages.css';

function Visages(props) {
    return (
     
             <div className="container-fluid" id='VISAGE' style={{ marginTop: "7rem" }}>

<div className="row rowVisage" style={{ height: "7rem" }}>
    <div className="naturel" style={{ marginLeft: "3rem", paddingTop: "2rem" }}>
        <h2 className='h2  text-white'>Soins Visage Naturels</h2>
    </div>
</div>

<div className="row" style={{ background: "#b7dbd2", height: "3rem" }}>
                <div className="deoPrincipale d-flex justify-content-center">
                    <div className="solides m-1">
                        <Link to="/" className="nav-link" style={linkStyle}>CRÈMES VISAGE</Link>
                    </div>
                    <div className="rollon m-1">
                        <Link to="/" className="nav-link" style={linkStyle}>NETTOYANT ET DÉMAQUILLANTL</Link>
                    </div>
                    <div className="toutproduit m-1">
                        <Link to="/" className="nav-link" style={linkStyle}>HUILE SÈCHE</Link>
                    </div>
                    <div className="toutproduit m-1">
                        <Link to="/" className="nav-link" style={linkStyle}>TOUS LES PRODUITS</Link>
                    </div>
                   
                </div>
            </div>

            <p className='m-3'><strong>Accueil
- Soins Visage
- Soins Visage Naturels</strong></p>
{/* row1 */}
<div className="row row-cols-md-4 g-3 mb-3">
                    <div className="col-md-3">
                        <div class="card ">
<img src={mvisage3} class="card-img-top" alt="..."/>
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
                  
                    
                    <div className="col-md-3">
                        <div class="card ">
<img src={mvisage4} class="card-img-top" alt="..."/>
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
<Link to="/"className="btn text-white" style={{width: "16.5rem", height: "2.5rem", background: "#007266"}}>Ajouter</Link>
</div>
</div>
                    </div>
                    <div className="col-md-3">
                        <div class="card ">
<img src={mvisage5} class="card-img-top" alt="..."/>
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
<Link to="/"className="btn text-white" style={{width: "16.5rem", height: "2.5rem", background: "#007266"}}>Ajouter</Link>
</div>
</div>
                    </div>
                    <div className="col-md-3">
                        <div class="card ">
<img src={mvisage6} class="card-img-top" alt="..."/>
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
<Link to="/"className="btn text-white" style={{width: "16.5rem", height: "2.5rem", background: "#007266"}}>Ajouter</Link>
</div>
</div>
                    </div>
                </div>

                {/* row2 */}
                <div className="row row-cols-md-4 g-3 mb-3">
                    <div className="col-md-3">
                        <div class="card ">
<img src={mvisage7} class="card-img-top" alt="..."/>
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
                  
                    
                    <div className="col-md-3">
                        <div class="card ">
<img src={mvisage8} class="card-img-top" alt="..."/>
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
<Link to="/"className="btn text-white" style={{width: "16.5rem", height: "2.5rem", background: "#007266"}}>Ajouter</Link>
</div>
</div>
                    </div>
                    <div className="col-md-3">
                        <div class="card ">
<img src={mvisage9} class="card-img-top" alt="..."/>
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
<Link to="/"className="btn text-white" style={{width: "16.5rem", height: "2.5rem", background: "#007266"}}>Ajouter</Link>
</div>
</div>
                    </div>
                    <div className="col-md-3">
                        <div class="card ">
<img src={mvisage10} class="card-img-top" alt="..."/>
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
<Link to="/"className="btn text-white" style={{width: "16.5rem", height: "2.5rem", background: "#007266"}}>Ajouter</Link>
</div>
</div>
                    </div>
                </div>
                {/* row3 */}
                <div className="row row-cols-md-4 g-3 mb-3">
                    <div className="col-md-3">
                        <div class="card ">
<img src={mvisage3} class="card-img-top" alt="..."/>
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
                  
                    
                    <div className="col-md-3">
                        <div class="card ">
<img src={mvisage4} class="card-img-top" alt="..."/>
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
<Link to="/"className="btn text-white" style={{width: "16.5rem", height: "2.5rem", background: "#007266"}}>Ajouter</Link>
</div>
</div>
                    </div>
                    <div className="col-md-3">
                        <div class="card ">
<img src={mvisage5} class="card-img-top" alt="..."/>
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
<Link to="/"className="btn text-white" style={{width: "16.5rem", height: "2.5rem", background: "#007266"}}>Ajouter</Link>
</div>
</div>
                    </div>
                    <div className="col-md-3">
                        <div class="card ">
<img src={mvisage6} class="card-img-top" alt="..."/>
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
<Link to="/"className="btn text-white" style={{width: "16.5rem", height: "2.5rem", background: "#007266"}}>Ajouter</Link>
</div>
</div>
                    </div>
                </div>
                {/* row4 */}
                <div className="row row-cols-md-4 g-3 mb-3">
                    <div className="col-md-3">
                        <div class="card ">
<img src={mvisage7} class="card-img-top" alt="..."/>
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
                  
                    
                    <div className="col-md-3">
                        <div class="card ">
<img src={mvisage8} class="card-img-top" alt="..."/>
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
<Link to="/"className="btn text-white" style={{width: "16.5rem", height: "2.5rem", background: "#007266"}}>Ajouter</Link>
</div>
</div>
                    </div>
                    <div className="col-md-3">
                        <div class="card ">
<img src={mvisage9} class="card-img-top" alt="..."/>
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
<Link to="/"className="btn text-white" style={{width: "16.5rem", height: "2.5rem", background: "#007266"}}>Ajouter</Link>
</div>
</div>
                    </div>
                    <div className="col-md-3">
                        <div class="card ">
<img src={mvisage10} class="card-img-top" alt="..."/>
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
<Link to="/"className="btn text-white" style={{width: "16.5rem", height: "2.5rem", background: "#007266"}}>Ajouter</Link>
</div>
</div>
                    </div>
                </div>
                {/* row5 */}
                <div className="row row-cols-md-4 g-3 mb-6">
                    <div className="col-md-3">
                        <div class="card ">
<img src={mvisage3} class="card-img-top" alt="..."/>
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
                  
                    
                    <div className="col-md-3">
                        <div class="card ">
<img src={mvisage4} class="card-img-top" alt="..."/>
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
<Link to="/"className="btn text-white" style={{width: "16.5rem", height: "2.5rem", background: "#007266"}}>Ajouter</Link>
</div>
</div>
                    </div>
                   
                    
                </div>

                {/* row questions frequents */}
<div className="row">
<div className="frequents">
<h2 class="text-uppercase  text-center">FAQ
</h2>  </div>
<div className="col-md-6 pt-6">
<div className="colimg">
<img src={mfaq} alt="" style={{width: "30rem", height: "25rem",marginLeft: "2rem"}}/>
</div>
</div>
<div className="col-md-6">
{/* question  reponces */}
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
       
    );
}

const linkStyle = {
    borderBottom: "2px solid transparent",
    display: "inline-block",
    textDecoration: "none",
    padding: "10px",
    margin: "0 auto",
    color: "#007266"
};

export default Visages;






















// import React from 'react';
// import mvisage1 from '../assets/img/visage1.jpg';
// import mvisage2 from '../assets/img/visage2.jpg';
// function Visages(props) {
//     return (
//         <div>
//             <div className="container" id='VISAGE' style={{marginTop: "9rem"}}>
//                 <div className="row">
//                     <div className="col-md-3">
//                         <div className="seclection">
//                             <h4 className='h4selection' style={{color: "#007266"}}>Sélection</h4>
//                            <p> Crèmes Visages</p>
//                             <p>Nettoyants et Démaquillants</p>
// <p>Tous les produits</p>
//                         </div>
//                     </div>
//                     <div className="col-md-4">
//                         <div className='imgdeodorant' >
//                             <img src={mvisage1} alt="" style={{width: "20rem", height: "15rem"}}/>
//                         </div>
//                         <div className='pdeodorant'>
//                             <p className='premierp'>Découvrez les</p>
//                             <p className='solides'>Gamme visage</p>
//                         </div>
//                     </div>

//                     <div className="col-md-4 ml-4" style={{marginLeft:15}}>
//                         <div className='imgdeodorant' >
//                             <img src={mvisage2} alt="" style={{width: "20rem", height: "15rem"}}/>
//                         </div>
//                         <div className='pdeodorant'>
//                             <p className='premierp'>Découvrez les</p>
//                             <p className='solides'>Nettoyants et démaquillants</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Visages;