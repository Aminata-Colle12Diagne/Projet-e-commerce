import React from 'react';
import './Abonne.css'
import mcimquieme from '../assets/img/cimquieme.jpg'
import msixieme from '../assets/img/sixieme.jpg'
import mseptieme from '../assets/img/septieme.jpg'
import mhuitieme from '../assets/img/huitieme.jpg'
function Abonne(props) {
    return (
        <div className='container-fluid'>
            <div className="row text-center text-black premier" style={{marginTop: "10rem"}}>
            <h2 className="classh2 text__center">Bienvenue chez Respire</h2>          
                  <p className='bodyText'>Chez Respire, nous développons des soins naturels haute performance et assurons à la fois une efficacité et une sensorialité. Toutes nos formules sont conçues pour préserver<br/> et renforcer le fonctionnement naturel de votre peau.<br/>
Continuons à préserver notre peau et notre planète, ensemble !</p>
            </div>
            <div className="row deuxieme" style={{backgroundColor: "#faf5ec", height: "20rem"}}>
                <div className="profite ">
                    <div className='profiteText text-center '>
                    <h3>Profitez de -10%</h3>
                    <p>de réduction sur votre 1ère commande en vous abonnant à la newsletter !</p>
                    </div>
                        <div className="formule">
                        <div class="input-group groupeInput mb-3">
  <input type="text" class="form-control" placeholder="Email" aria-label="Recipient's username" aria-describedby="button-addon2"/>
  <button class="btn btn-outline-secondary" type="button" id="button-addon2" style={{background: "#007266", fontSize: 13, color: "white"}}>JE M’INSCRIS</button>
</div>
  
  <div className="mb-3 form-check">
    <input type="radio" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">J’accepte la <strong>politique de confidentialité</strong></label>
  </div>
                        </div>
                </div>
            </div>
            <div className="coup">
                <p>Coups de cœur</p>
            </div>
            {/* row col */}
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

export default Abonne;