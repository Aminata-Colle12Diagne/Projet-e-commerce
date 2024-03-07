


import React from 'react';
import { Link } from 'react-router-dom';
import mcorps1 from '../assets/img/corps1.jpg'
import mcorps2 from '../assets/img/corps2.jpg'
import mcorps3 from '../assets/img/corps3.webp'
import mcorps4 from '../assets/img/corps4.webp'
import mcorps5 from '../assets/img/corps5.webp'
import mcorps6 from '../assets/img/corps6.webp'
import mcorps7 from '../assets/img/corps7.webp'
import mcorps8 from '../assets/img/corps8.webp'
import mcorps9 from '../assets/img/corps9.webp'
import mcorps10 from '../assets/img/corps10.webp'
import { NavLink } from 'react-router-dom';
import { addDoc, collection, getFirestore } from 'firebase/firestore';

import mfaq from '../assets/img/faq.webp'

import './Corps.css';

function Visages(props) {

    const db = getFirestore();
    const ajouterProduit = async(produit) =>{
    try {
      const docRef = await addDoc(collection(db, 'MesProduits'), produit);
      console.log('Document written with ID: ', docRef.id);
    
    } catch (e) {
      console.error('Error adding document: ', e);
    
    }
    }
    
    const handleAddProductClick = (produit) => {
      ajouterProduit(produit);
    };
    
      const produitAjouter = [
        {
          imageUrl: mcorps1,
          titre: 'Shanpoing Solide Naturel Peche du Verger',
          description: 'Attention ca mousse',
          prix: 10.90,
          avis: 267,
          note: 5,
        },
        {
          imageUrl: mcorps2,
          titre: 'Déodorant Roll-on Fraicheur 24h de coton',
          description: 'Efficacite prouvee',
          prix: 10.90,
          avis: 955,
          note: 5,
        },
        {
          imageUrl: mcorps3,
          titre: '2 Shampoing Solide Peche du verger & Liat amande',
          description: "huiles vegetales nutrives",
          prix: 19.90,
          avis: 2311,
          note: 5,
        },
        {
          imageUrl: mcorps4,
          titre: '3 Shanpiong Solde Naturels Cheveux Normaux',
          description: "Attention ca mousse",
          prix: 27.90,
          avis: 2311,
          note: 5,
        },
        {
          imageUrl: mcorps5,
          titre: 'Shampiong Solide Purfaint-Cheveux gras',
          description: "La detox des cheveux gras",
          prix: 10.90,
          avis: 174,
          note: 5,
        },
        {
          imageUrl: mcorps6,
          titre: 'Shampiong Purifiant Certifie Bio- Chaveux normaux a gras',
          description: "La detox des cheveux gras",
          prix: 10.90,
          avis: 137,
          note: 5,
        },
        {
          imageUrl: mcorps7,
          titre: 'Shampiong certifier Bio -Cheveux normaux a secs',
          description: "Fini les cheveux de paille",
          prix: 10.90,
          avis: 120,
          note: 5,
        },
        {
          imageUrl: mcorps8,
          titre: 'Routine solide - cheveux gras + porte savon x3',
          description: "La detox des cheveux gras",
          prix: 38.90,
          avis: 174,
          note: 5,
        },
        {
          imageUrl: mcorps9,
          titre: 'Shampiong Solide Naturel Fraicheur Tropicale',
          description: "Attention ca mousse",
          prix: 10.90,
          avis: 32311,
          note: 5,
        },
        {
          imageUrl: mcorps10,
          titre: 'Apres Shampiong solide certifie Bio',
          description: "Pour une criniere de reve",
          prix: 12.90,
          avis: 262,
          note: 5,
        },
        {
            imageUrl: mcorps1,
            titre: 'Apres Shampiong solide certifie Bio',
            description: "Pour une criniere de reve",
            prix: 12.90,
            avis: 262,
            note: 5,
          },
          {
            imageUrl: mcorps6,
            titre: 'Apres Shampiong solide certifie Bio',
            description: "Pour une criniere de reve",
            prix: 12.90,
            avis: 262,
            note: 5,
          },
          {
            imageUrl: mcorps4,
            titre: 'Apres Shampiong solide certifie Bio',
            description: "Pour une criniere de reve",
            prix: 12.90,
            avis: 262,
            note: 5,
          },
          {
            imageUrl: mcorps8,
            titre: 'Apres Shampiong solide certifie Bio',
            description: "Pour une criniere de reve",
            prix: 12.90,
            avis: 262,
            note: 5,
          },
    ]


    return (
     
             <div className="container-fluid" id='CORPS' style={{ marginTop: "7rem" }}>

<div className="row rowCorps" style={{ height: "7rem" }}>
    <div className="naturel" style={{paddingTop: "2rem" }}>
        <h2 className='h2  text-white'>Soins du Corps Naturels</h2>
    </div>
</div>

<div className="row" style={{ background: "#b7dbd2", height: "3rem" }}>
                <div className="deoPrincipale d-flex justify-content-center">
                    <div className="solides m-1">
                        <Link to="/" className="nav-link" style={linkStyle}>SAVONS ET EXFOLIANT</Link>
                    </div>
                    <div className="rollon m-1">
                        <Link to="/" className="nav-link" style={linkStyle}>CRÈME MAINS</Link>
                    </div>
                    <div className="toutproduit m-1">
                        <Link to="/" className="nav-link" style={linkStyle}>SOLAIRE</Link>
                    </div>
                    <div className="toutproduit m-1">
                        <Link to="/" className="nav-link" style={linkStyle}>GEL DOUCHE</Link>
                    </div>
                   
                </div>
            </div>

            <p className='m-3'><strong>Accueil
- Soins Du Corps Naturels</strong></p>
{/* row1 */}
<div class="row  row-cols-md-4 g-2">
                {produitAjouter.map((produit, index) => (
        <div key={index} className="col-md-3" style={{ position: "relative" }}>
          <div className="card  custom-card">
            <img src={produit.imageUrl} className="card-img-top" alt={produit.titre} style={{ height: "40%" }}/>
            <div className="satisfaite" style={{ background: "#c5e0d9", position: "absolute" }}>
        <p >Satisfait ou rembourse</p>
      </div>
            <div className="card-body">
              <hp className="card-title">{produit.titre}</hp>
              <p className="card-text">{produit.description}</p>
              <div className='best d-flex'>
              <p className="card-text monet"> {produit.prix} €</p>
              <p className="card-text avis"> {produit.avis}</p>
              <p className="card-text">{Array.from({ length: produit.note }).map((_, index) => (
    <i key={index} className="fa-solid fa-star"></i>
  ))}
  </p>
              </div>
              <button
                type="button"
                className="btn text-white"
                style={{ width: "16.5rem", height: "2.5rem", background: "#007266" }}
                onClick={() => handleAddProductClick(produit)}
              >
                Ajouter
              </button>
            </div>
          </div>
        </div>
      ))}
</div>

{/* ROW PAGINATION */}

<nav aria-label="Page navigation example" className="text-center">
  <ul className="pagination text-center">
    <li className="page-item">
      <NavLink className="page-link" to="/CHEVEUX" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </NavLink>
    </li>
    <li className="page-item"><NavLink className="page-link" to="/VISAGE">1</NavLink></li>
    <li className="page-item"><NavLink className="page-link" to="/PARRAINAGE">2</NavLink></li>
    <li className="page-item"><NavLink className="page-link" to="/CORPS">3</NavLink></li>
    <li className="page-item">
      <NavLink className="page-link" to="/DENTIFRICE" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
      </NavLink>
    </li>
  </ul>
</nav>


               

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
// import mcorps1 from '../assets/img/corps1.jpg'
// import mcorps2 from '../assets/img/corps2.jpg'
// function Corps(props) {
//     return (
//         <div>
//             <div className="container" id='CORPS' style={{marginTop: "9rem"}}>
//                 <div className="row">
//                     <div className="col-md-3">
//                         <div className="seclection">
//                             <h4 className='h4selection' style={{color: "#007266"}}>Sélection</h4>
//                             <p>Savons et Exfoliant</p>
// <p>Solaire</p>
// <p>Gels douche</p>
// <p>Tous les produits</p>
//                         </div>
//                     </div>
//                     <div className="col-md-4">
//                         <div className='imgdeodorant' >
//                             <img src={mcorps1} alt="" style={{width: "20rem", height: "15rem"}}/>
//                         </div>
//                         <div className='pdeodorant'>
//                             <p className='premierp'>Découvrez les</p>
//                             <p className='solides'>Baume corps Nourrissant</p>
//                         </div>
//                     </div>

//                     <div className="col-md-4 ml-4" style={{marginLeft:15}}>
//                         <div className='imgdeodorant' >
//                             <img src={mcorps2} alt="" style={{width: "20rem", height: "15rem"}}/>
//                         </div>
//                         <div className='pdeodorant'>
//                             <p className='premierp'>Découvrez les</p>
//                             <p className='solides'>Duo Soins Mains & Lèvres</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Corps;