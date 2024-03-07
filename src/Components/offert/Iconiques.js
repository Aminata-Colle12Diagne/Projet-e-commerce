import React from 'react';
import mdeodorants1 from '../assets/img/deodorant1.jpg';
import mdeodorant3 from '../assets/img/deodorant3.jpg';
import './Iconiques.css';
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
import { addDoc, collection, getFirestore } from 'firebase/firestore';



function Deodorant(props) {


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
        imageUrl: mdeuxieme,
        titre: 'Déodorant Solide Certifié Bio efficace 48h Fleur de Coton',
        description: '48h chrono',
        prix: 32.90,
        avis: 3297,
        note: 5,
      },
      {
        imageUrl: mdeuxieme,
        titre: 'Déodorant Roll-on Fraicheur 24h de coton',
        description: 'Efficacite prouvee',
        prix: 10.90,
        avis: 955,
        note: 5,
      },
      {
        imageUrl: mtroixieme,
        titre: 'Soin Nettoyant Visage Solide',
        description: "+27% d' hydratation",
        prix: 10.90,
        avis: 701,
        note: 5,
      },
      {
        imageUrl: mquatrieme,
        titre: 'Soin Exfoliant Corps Solide',
        description: "40 nuances de grains",
        prix: 10.90,
        avis: 701,
        note: 5,
      },
      {
        imageUrl: mcimquieme,
        titre: 'Deodorant Solides Certifie Bio efficase 48h Douceur Monoi',
        description: "Deo et jamais des bas",
        prix: 11.90,
        avis: 255,
        note: 5,
      },
      {
        imageUrl: msixieme,
        titre: '2 Shampionpoind Solide Fraicheur Trropical & Lait Amande',
        description: "Attention ca marche",
        prix: 18.53,
        avis: 2310,
        note: 5,
      },
      {
        imageUrl: mseptieme,
        titre: 'Gel-Greme Visage Hydratant 50ml',
        description: "+48% d'hydaratation immediate",
        prix: 16.90,
        avis: 2615,
        note: 5,
      },
      {
        imageUrl: mhuitieme,
        titre: 'Deodorant Roll-on fraicheur 24h Douceur Monoi',
        description: "Eficacite prouve",
        prix: 10.90,
        avis: 955,
        note: 5,
      },
      {
        imageUrl: mneuvieme,
        titre: 'Les 2 deodorants Solides Certifies Bio, efficacite 48h',
        description: "48h chrono",
        prix: 21.90,
        avis: 3379,
        note: 5,
      },
      {
        imageUrl: mdixieme,
        titre: 'Duo Soin Mains et levres',
        description: "Le duo de choc",
        prix: 12.90,
        avis: 37,
        note: 5,
      },
      // col 11
      {
        imageUrl: monze,
        titre: 'Les 2 deodorants Roll-on Fraicheur 24h',
        description: "Efficacite prouve",
        prix: 18.53,
        avis: 955,
        note: 5,
      },
      // coll 12
      {
        imageUrl: mdoux,
        titre: 'Baune Corps Nourrissant Rechergeable 200ml',
        description: "Du baune au corps",
        prix: 22.90,
        avis: 186,
        note: 5,
      },
      // col 13
      {
        imageUrl: mtroixieme,
        titre: 'Duo Soin Mains et levres',
        description: "Le duo de choc",
        prix: 12.90,
        avis: 37,
        note: 5,
      },
      // col 14
      {
        imageUrl: mimages14,
        titre: 'Les 2 deodorants Solides Certifies efficaite 48h',
        description: "48h chrono",
        prix: 21.90,
        avis: 3379,
        note: 5,
      },
      
    ]
  
  




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
                <div className="row rowIconiques" style={{height: "10rem"}}>
                        <div className="naturel" style={{marginLeft: "3rem", paddingTop: "2rem"}}>
                            <h2 className='h2  text-white'>Nos Iconiques</h2>
                        </div>
                </div>
                {/* les class row */}
            

                {/* mes produits */}

            {/* PREMIERE ROW */}
            <div className="row acceuill premiereRow">
                <p className='m-3'><strong>Accueil- Déodorants Naturels Certifiés Bios</strong></p>
                <div class="row  row-cols-md-4 g-3">
                {produitAjouter.map((produit, index) => (
        <div key={index} className="col-md-3" style={{ position: "relative" }}>
          <div className="card  custom-card">
            <img src={produit.imageUrl} className="card-img-top" alt={produit.titre} style={{ objectFit: "cover", height: "50%" }}/>
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
            </div>
{/* deuXieme ROW */}
           
            {/* TROIXIEME ROW */}

           

            {/* QUATRIME ROW */}
           
            {/* CINQUIEME ROW */}
         

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