import React from 'react';
import './Dentifrice.css';
import mdent1 from '../assets/img/dent 1.jpg'
import mdent2 from '../assets/img/dent 2.jpg'
import mdent3 from '../assets/img/dent 3.jpg'
import mdent4 from '../assets/img/dent 4.jpg'
import mdent5 from '../assets/img/dent 5.jpg'
import mdent6 from '../assets/img/dent 6.jpg'
import mdent7 from '../assets/img/dent 7.jpg'
import mdent8 from '../assets/img/dent 8.jpg'
import mdent9 from '../assets/img/dent 9.jpg'
import mdent10 from '../assets/img/dent 10.jpg'
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { addDoc, collection, doc, getFirestore, runTransaction } from 'firebase/firestore';
import db from '../../firebaseConfig';
// import fireBd from '../firebaseConfig'
// import auth from '../firebaseConfig';




function TousProduits(props) {

// const db = getFirestore();


// // ... (votre code existant)

const firestore = getFirestore();

  const ajouterProduit = async (produit) => {
    try {
      const docRef = await addDoc(collection(firestore, 'MesProduits'), produit);
      console.log('Document written with ID: ', docRef.id);

      const panierRef = collection(firestore, 'Panier');
      const panierDocRef = doc(panierRef, docRef.id);

      await runTransaction(firestore, async (transaction) => {
        const panierDocSnapshot = await transaction.get(panierDocRef);
        const quantiteActuelle = panierDocSnapshot.exists() ? panierDocSnapshot.data().quantite : 0;

        transaction.set(panierDocRef, { quantite: quantiteActuelle + 1 });
      });

    } catch (e) {
      console.error('Error adding document: ', e);
    }
  }

  const handleAddProductClick = (produit) => {
    ajouterProduit(produit);
  };



  const produitAjouter = [
    {
      imageUrl: mdent1,
      titre: 'Déodorant Solide Certifié Bio efficace 48h Fleur de Coton',
      description: '48h chrono',
      prix: 32.90,
      avis: 329,
      note: 5,
    },
    {
      imageUrl: mdent2,
      titre: 'Déodorant Roll-on Fraicheur 24h de coton',
      description: 'Efficacite prouvee',
      prix: 10.90,
      avis: 955,
      note: 5,
    },
    {
      imageUrl: mdent3,
      titre: 'Soin Nettoyant Visage Solide Soin',
      description: "+27% d' hydratation",
      prix: 10.90,
      avis: 701,
      note: 5,
    },
    {
      imageUrl: mdent4,
      titre: 'Soin Exfoliant Corps Solide Exfoliant ',
      description: "40 nuances de grains",
      prix: 10.90,
      avis: 701,
      note: 5,
    },
    {
      imageUrl: mdent5,
      titre: 'Deodorant Solides Certifie Bio efficase 48h Douceur Monoi',
      description: "Deo et jamais des bas",
      prix: 11.90,
      avis: 255,
      note: 5,
    },
    {
      imageUrl: mdent6,
      titre: '2 Shampionpoind Solide Fraicheur Trropical & Lait ',
      description: "Attention ca marche",
      prix: 18.53,
      avis: 231,
      note: 5,
    },
    {
      imageUrl: mdent7,
      titre: 'Gel-Greme Visage Hydratant 50ml',
      description: "+48% d'hydaratation imediate",
      prix: 16.90,
      avis: 2611,
      note: 5,
    },
    {
      imageUrl: mdent8,
      titre: 'Deodorant Roll-on fraicheur 24h Douceur Monoi',
      description: "Eficacite prouve",
      prix: 10.90,
      avis: 955,
      note: 5,
    },
    {
      imageUrl: mdent9,
      titre: 'Les 2 deodorants Solides Certifies Bio, efficacite 48h',
      description: "48h chrono",
      prix: 21.90,
      avis: 3379,
      note: 5,
    },
    {
      imageUrl: mdent10,
      titre: 'Duo Soin Mains et levres Mains soins',
      description: "Le duo de choc",
      prix: 12.90,
      avis: 370,
      note: 5,
    },
    // col 11
    {
      imageUrl: mdent4,
      titre: 'Les 2 deodorants Roll-on Fraicheur 24h',
      description: "Efficacite prouve",
      prix: 18.53,
      avis: 955,
      note: 5,
    },
    // coll 12
    {
      imageUrl: mdent5,
      titre: 'Baune Corps Nourrissant Rechergeable 200ml',
      description: "Du baune au corps",
      prix: 22.90,
      avis: 186,
      note: 5,
    },
    // col 13
    {
      imageUrl: mdent3,
      titre: 'Duo Soin Mains et levres Naturels',
      description: "Le duo de choc",
      prix: 12.90,
      avis: 370,
      note: 5,
    },
    // col 14
    {
      imageUrl: mdent8,
      titre: 'Les 2 deodorants Solides Certifies efficaite 48h',
      description: "48h chrono",
      prix: 21.90,
      avis: 3379,
      note: 5,
    },
    // col 15

    
  ]





    return (
        <div className='container-fluid produit fixed' id='DENTIFRICE'>

<div className="row rowDentifrice" style={{marginTop: "10%"}}>
<div className='tous' style={{ marginTop: "2rem"}}>
   <h2 className='text-white'>Dentifrices Naturels</h2>
   </div>
</div>
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



onMouseOver={(e) => e.target.style.borderBottom = "2px solid #248332"} onMouseOut={(e) => e.target.style.borderBottom = "2px solid transparent"}>DENTIFRICE SOLIDE</Link>

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

onMouseOver={(e) => e.target.style.borderBottom = "2px solid #248332"} onMouseOut={(e) => e.target.style.borderBottom = "1px solid transparent"}>DENTIFRICE GEL</Link>

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

            
            {/* PREMIERE ROW */}
            <div className="row acceuill premiereRow">
                <p><strong>Accueil- Tous Les Produits</strong></p>
                <div className="row">
      {produitAjouter.map((produit, index) => (
        <div key={index} className="col-md-3" style={{ position: "relative" }}>
    <div className="card custom-card" style={{ height: "100%" }}>
            <img src={produit.imageUrl} className="card-img-top" alt={produit.titre} style={{ objectFit: "cover", height: "40%" }}/>
            <div className="satisfaite" style={{ background: "#c5e0d9", position: "absolute" }}>
        <p >Satisfait ou rembourse</p>
      </div>
            <div className="card-body">
              <p className="card-title" >{produit.titre}</p>
              <p className="card-text" >{produit.description}</p>
              <div className='best d-flex'>
              <p className="card-text monet"> {produit.prix} €</p>
              <p className="card-text avis"> {produit.avis}</p>
              <p className="card-text">{Array.from({ length: produit.note }).map((_, index) => (
    <i key={index} className="fa-solid fa-star" style={{ fontSize: "13px"}}></i>
  ))}
  </p>
              </div>
              <button
                type="button"
                className="btn text-white bouton"
                style={{ width: "15rem", height: "2.5rem", background: "#007266", 
              }}
                onClick={() => handleAddProductClick(produit)}
              >
                Ajouter
              </button>
            </div>
          </div>
        </div>
        
      ))}
    </div>
  

   
  </div>

{/* row pagination */}
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






  <div className="row">
<div className="frequents">
<h2 class="text-uppercase  text-center">Questions Fréquentes
</h2>  </div>
<div className="col-md-6 pt-6">
<div className="colimg">
<img src={mdent4} alt="" style={{width: "30rem", height: "25rem",marginLeft: "2rem"}}/>
</div>
</div>
<div className="col-md-6">
{/* question  reponces */}
</div>
</div>

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

export default TousProduits;