import React from 'react';
import mImagePropos from '../assets/img/imagePropos.webp'
import mImagePropos2 from '../assets/img/imagePropos2.webp'
import mImagePropos3 from '../assets/img/imagePropos3.webp'
import mImagePropos4 from '../assets/img/imagePropos4.webp'
import mdeodorants1 from '../assets/img/deodorant1.jpg';
import mdeodorant3 from '../assets/img/deodorant3.jpg';
// import './Deodorant.css';
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
import './Propos.css';
import { addDoc, collection, getFirestore } from 'firebase/firestore';

function Propos(props) {


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
        <div className='container-fluid'  style={{marginTop: "10rem"}}>
            {/* row1 */}
            <div class="row  row-cols-md-4 " >
            <div class="col-md-6 imagePropos">
                    <img src={mImagePropos} alt="" />
                </div>
                <div className="col-md-6">
                    <div className='naissance'>
                        <h3>Notre naissance</h3>
                        <p>En 2017, on me détecte une tumeur bénigne à la poitrine, un événement qui me fait prendre conscience de l’importance de prendre soin de moi. Je bouscule mes habitudes de vie: sport, alimentation et produits que j’applique sur ma peau. J’ai cherché une marque de soins pour m’accompagner dans cette nouvelle étape; je ne l’ai pas trouvée alors, entourée d’experts de la peau je l’ai créée.</p>
                        <p>Justine Hutteau, Fondatrice de Respire.

</p>
                    </div>
                </div>
            </div>
            {/* row2 */}
            <div class="row  row-cols-md-4 g-4"style={{marginTop: "2rem"}}>
            <div className="col-md-6">
                    <div className='naissance'>
                        <h3>Notre démarche</h3>
                        <p>Chez Respire, nous croyons que notre peau est le meilleur laboratoire : elle endosse à elle seule le rôle de bouclier, de pansement, de thermorégulateur ou encore d’hydratant. Elle a inventé l’acide hyaluronique et est programmée pour se renouveler entièrement tous les 28 jours.
</p>
                        <p>Véritable technologie de pointe, nous nous sommes inspirés de ses pouvoirs extraordinaires pour développer nos soins mimétiques naturels : des soins qui boostent les actifs et mécanismes naturellement présents dans la peau, et préservent son fonctionnement naturel. Parfaitement compatibles, ils garantissent une performance décuplée et une peau en meilleure santé.

</p>
                    </div>
                </div>

            <div class="col-md-6 imagePropos">
                    <img src={mImagePropos2} alt="" />
                </div>
                
            </div>
            {/* row3 */}
            <div class="row  row-cols-md-4 g-4"style={{marginTop: "2rem"}}>
            <div class="col-md-6 imagePropos">
                    <img src={mImagePropos3} alt="" />
                </div>
                <div className="col-md-6">
                    <div className='naissance'>
                        <h3>Notre histoire</h3>
                        <p>Notre premier soin, le déodorant, a été conçu pour respecter le processus naturel de régulation de votre température corporel, sans boucher les pores de la peau. 100% naturel , il est reconnu par des millions de clients à travers l’Europe comme le déodorant naturel le plus efficace du marché</p>
                        <p>Depuis, entourés d’un comité scientifique composé de dermatologues et d’un réseau de 1500 pharmaciens partenaires, nous travaillons chaque jour pour vous offrir des soins naturels haute performance.

</p>
                    </div>
                </div>
            </div>
            {/* row4 */}
            <div class="row  row-cols-md-4 g-4" style={{marginTop: "2rem"}}>
                <div className="col-md-6">
                    <div className='naissance'>
                        <h3>Notre mission</h3>
                        <p>Nous existons pour faire rayonner le pouvoir de la peau car nous croyons fermement qu'une peau en bonne santé est le signe d’un quotidien épanoui.</p>
                        <p>Notre démarche est globale: à travers les soins que nous développons et le style de vie sain, actif et positif que nous promouvons, nous vous donnons les clés pour améliorer la santé de votre peau et vous épanouir chaque jour.</p>
                    </div>
                </div>
                <div class="col-md-6 imagePropos">
                    <img src={mImagePropos4} alt="" />
                </div>
                
            </div>
            {/* row5 */}
            
            <div className='nosionic'>
                <h3>Nos iconiques</h3>
            </div>
       
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

         

            {/* row pagination 
            
            
            */}
            {/* row formules */}
          

{/* row questions frequents */}



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

export default Propos;