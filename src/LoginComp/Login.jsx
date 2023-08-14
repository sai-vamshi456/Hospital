import "./Register.css";
import {createUserWithEmailAndPassword ,signInWithEmailAndPassword} from "firebase/auth";
import {auth} from "../firebase";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
export default function Register(){

   const [email,updateEmail]=useState('');
   const [password,updatePassword]=useState('');
   const history = useNavigate();  
  function signin(event){
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
    .then((auth) => {
      // Signed in 
      
      if(auth){
        history("/");
      }
    })
    .catch((error) => {
      const errorMessage = error.message;
      alert("Please sign up before logging in");
    });
   
  }
  function Register(event){
    event.preventDefault();
    createUserWithEmailAndPassword(auth,email, password)
    .then((auth) => {
      // Signed in 
       if(auth) {
        
        history("/");
       }
    })
    .catch((error) => {
       alert(error.message);
      
      
    });
  }
    return (
       <div className="register">
          
       <form >
       <div className="details">
           <label>Email : </label><br/>
           <input type="text" value={email} onChange={e=>updateEmail(e.target.value)}/><br/>
       </div>
       <div className="details">
           <label>Password : </label><br/>
           <input type="password" value={password} onChange={e=>updatePassword(e.target.value)}/><br/>
       </div>
       <button type="submit" onClick={signin}>Sign in</button>
      </form>
      <p>
       By signing-in you agree to the heal-well  Conditions . Please
       see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
       </p>
       <button className='registerbtn'  onClick={Register}>Create Your heal-well Account</button>
       </div>
    )
}

