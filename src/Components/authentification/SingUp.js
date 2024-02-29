
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import firebase from 'firebase/compat/app';
import './SignUp.css'
function SingUp(props) {

const [name, setName] =useState()
const [email, setEmail] =useState()
const [password, setPassword] =useState()
const submit = async(e) =>{
    e.preventDefault()
    try {
        const user = await firebase.auth().createUserWithEmailAndPassword(email,password) 
        if (user) {
            alert("Account Created successfulely")
        }            
    } catch (error) {
        alert (error)
    }
}

    return (
        <div className="container-fluid">
        <div className='main_container_signup text-center' style={{width: "30rem", marginTop: "5rem", marginBottom: "4rem"}}>
            <div className="header">
                <h2>Création de compte</h2>
                <p ><Link to="/login">Je me Connecte</Link></p>

            </div>
            <div className="box">
                <input type="text" value={name} placeholder='UserName' onChange={(e) =>setName (e.target.value)}/>
            </div>
            <div className="box">
                <input type="text" value={email} placeholder='Email' onChange={(e) =>setEmail (e.target.value)}/>
            </div>
            <div className="box">
                <input type="text" value={password} placeholder='.......' onChange={(e) =>setPassword (e.target.value)}/>
            </div>
            <button onClick={submit} style={{width: "21rem", marginLeft: "4px", background: "#007266"}}>CRÉER UN COMPTE</button>
        </div>
        
        </div>
    );
}

export default SingUp;











































// import React, { useState } from 'react';
// import { auth } from "../../firebase";
// import { Link, useNavigate } from 'react-router-dom';
// import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
// import { toast } from 'react-toastify';

// function SignUp(props) {
// const[email,setEmail]= useState("")
// const[password,setPassword]= useState("")
// const[name,setName]= useState("")

// let navigate = useNavigate()
// const handleSignup = async ()=>{
// try {
//   await createUserWithEmailAndPassword(auth, email, password);
//   updateProfile(auth.currentUser, {displayName: name})
//   navigate("/")
// } catch (error) {
//   toast(error.code, {type: "error"})
// }
// }

//   return (
//     <div>
//       <div className='signup template d-flex justify-content-center align-items-center  vh-100 bg-primary'>
//       <div className='form_container 50-w p-5 rounded bg-white'>
//   <form >
//     <h3 className='text-center'>Sign Up</h3>
//     <div className='mb-2'>
//       <label htmlFor="name">NOM</label>
//       <input type="name" placeholder='Entrer votre Nom ' className='form-control' onChange={(e)=>{ setName(e.target.value)}} />
//     </div>

//     <div className='mb-2'>
//       <label htmlFor="email">Email</label>
//       <input type="email" placeholder='Entrer Email ' className='form-control' onChange={(e)=>{ setEmail(e.target.value)}}/>
//     </div>
//     <div className='mb-2'>
//       <label htmlFor="password">Password</label>
//       <input type="password" placeholder='Entrer Password ' className='form-control' onChange={(e)=>{ setPassword(e.target.value)}}/>
//     </div>
    
//     <div className='d-grid'>
// <button className='btn btn-primary' onClick={handleSignup}>Sign Up</button>
//     </div>
//     <p className='text-end mt-2'>
//       Already Registerd <Link to="/" className='ms-2'>Sign In</Link>  
//     </p>
//       </form>
//       </div>
//     </div>
//     </div>
//   );
// }

// export default SignUp;