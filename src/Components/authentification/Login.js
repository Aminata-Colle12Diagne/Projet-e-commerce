import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import firebase from 'firebase/compat/app';
import { signInWithEmailAndPassword } from 'firebase/auth';
// import auth from '../../firebaseConfig';

import './Login.css';

function Login(props) {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await firebase.auth().signInWithEmailAndPassword(email, password);
      const user = userCredential.user;

      if (user) {
        navigate('/TousProduits');
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="container-fluid " style={{marginTop: "10rem"}}>
     <div className='signup'>
     <div className='main_container_signup text-center' style={{ width: "30rem", paddingtop: "20rem" }}>
        <div className="header">
          <h2>Création de compte</h2>
          <p><Link to="/">JE CRÉE MON COMPTE</Link></p>
        </div>

        <div className="box">
          <input type="text" value={email} placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="box">
          <input type="text" value={password} placeholder='.......' onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button onClick={submit} style={{ width: "21rem", marginLeft: "4px", background: "#007266" }}>CRÉER UN COMPTE</button>
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

export default Login;






































// import React, { useState } from 'react';
// import { auth } from '../../firebase';
// import { createUserWithEmailAndPassword } from 'firebase/auth';
// import { Link, useNavigate } from 'react-router-dom';

// function Login(props) {

// const navigate= useNavigate();
// const [email, setEmail]= useState("");
// const [password, setPassword]= useState("");
// const [confirmPassword, setConfirmPassword]= useState("");
// const [notice, setNotice]= useState("");

// const signupWithUsernameAndPassword = async (e) =>{
//     e.preventDefault();
//     if(password === confirmPassword ){
//         try {
//             await createUserWithEmailAndPassword (auth,  email, password);
//             navigate("/")
//         } catch {
//             setNotice("desolee il y'a une erreur survenue ");
//         }
//     } else{
//         setNotice(" Email ou mot de pass incorect");
//     }
// }

//     return (
//         <div className="container">
//     <div className="login template d-flex justify-content-center align-items-center  vh-100 bg-primary">
//         <div className=' 50-w p-5 p-5 rounded bg-white'>         
//           <form className="">
//             {"" !== notice && (
//               <div className="alert alert-warning" role="alert">
//                 {notice}
//               </div>
//             )}
//             <div className="form-floating mb-3">
//               <input
//                 id="signupEmail"
//                 type="email"
//                 className="form-control"
//                 aria-describedby="emailHelp"
//                 placeholder="name@example.com"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               ></input>
//               <label htmlFor="signupEmail" className="form-label">
//                 email
//               </label>
//             </div>
//             <div className="form-floating mb-3">
//               <input
//                 id="signupPassword"
//                 type="password"
//                 className="form-control"
//                 placeholder="Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               ></input>
//               <label htmlFor="signupPassword" className="form-label">
//                 Password
//               </label>
//             </div>
//             <div className="form-floating mb-3">
//               <input
//                 id="confirmPassword"
//                 type="password"
//                 className="form-control"
//                 placeholder="Confirm Password"
//                 value={confirmPassword}
//                 onChange={(e) => setConfirmPassword(e.target.value)}
//               ></input>
//               <label htmlFor="confirmPassword" className="form-label">
//                 Confirmer Password
//               </label>
//             </div>
//             <div className="d-grid">
//               <button
//                 type="submit"
//                 className="btn btn-primary pt-3 pb-3"
//                 onClick={(e) => signupWithUsernameAndPassword(e)}
//               >
//                 Signup
//               </button>
//             </div>
//             <div className="mt-3 text-center">
//               <span>
//                 vous avez un compte ? <Link to="/">se connecter.</Link>
//               </span>
//             </div>
//           </form>
//         </div>
//         </div> 
//       </div>
//     );
// }

// export default Login; 