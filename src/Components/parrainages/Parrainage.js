import React from 'react';
import mImgParrainage from '../assets/img/image parrainage.jpg.png'
import './Parrainage.css';
function Parrainage(props) {
    return (
        <div className='container-fluid ' id='PARRAINAGE' style={{marginTop: "10rem"}}>
            <div className="row text-center">
                <div className="clasImage">
                    <img src={mImgParrainage} alt="" />
                </div>
                <div className="clasH3 mt-4">
                    <h3 className='text-title mt-1.5rem'>Parrainez vos amis et recevez un code promo de <br/>10€ !</h3>
                </div>
                <div className="classPara">
                    <p className='text-center'>Remplissez les informations ci-dessous pour obtenir votre lien personnalisé. Offrez à vos <br/>amis 10€ sur leur première commande et recevez 10€ une fois leur achat effectué.</p>
                </div>
            </div>
            <div className="row rowform ">
            <form className='form ' style={{paddingLeft: "24rem"}}>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label" style={{color: "#c4c6c7"}}>Email </label>
    <div id="emailHelp" class="form-text">Les informations de parrainage et les mises à jour <br/>seront envoyées à votre adresse e-mail</div>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  placeholder='ami@exemple.fr'    style={{width: "20rem", height: "4rem"}}/>
  </div>
  <div class="mb-3">
    <div id="emailHelp" class="form-text">Votre nom (optionnel) <br/>
Votre lien sera personnalisé</div>
<input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"   placeholder='ami'  style={{width: "20rem", height: "4rem"}}/>
  </div>
  <button type="submit" class="btn text-center"style={{width: "20rem", height: "4rem", background: "black", color: "white"}}>Recevoir mon lien</button>
</form>
            </div>


            <div className="row marche " style={{background: "#f8f8f8", marginTop: "3rem"}}>
                <div className="machePara pt-6" style={{paddingTop: "2rem"}}>
                    <h3 className='text-title mt-1.5rem text-center'>Comment ça marche</h3>
                </div>
               <div className="toutlescolons  " style={{paddingLeft: "6rem"}}>
             <div className="princ d-flex m-5 text-center ">
             <div className="colon1" style={{marginLeft: "2rem"}}>
                    <div className="clasicons">
                    <i class="fa-solid fa-store"></i>
                    </div>
                    <p>Partagez votre lien</p>
                </div>
                <div className="colon2"style={{marginLeft: "5rem"}}>
                    <div className="clasicons">
                    <i class="fa-solid fa-store"></i>
                    </div>
                    <p>Votre ami passe une commende <br/>(superieur a 35E)</p>
                </div>
                <div className="colon3" style={{marginLeft: "5rem"}}>
                    <div className="clasicons">
                    <i class="fa-solid fa-gift"></i>
                    </div>
                    <p>Vous recevez un code de <br/>réduction de 10€ sur votre <br/>prochaine commande</p>
                </div>
             </div>
               </div>
            </div>
            <p className='text-center' style={{fontSize: "10px"}}>This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</p>
<div className="instagramm text-center" style={{marginTop: "10rem"}}>
    <h5 className='nous' style={{fontSize: "14px"}}>SUIVEZ-NOUS SUR INSTAGRAM</h5>
    <p className='dernierpara' style={{color: "#007266"}}>@respirenature</p>
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

export default Parrainage;