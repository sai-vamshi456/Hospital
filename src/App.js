import { useState } from 'react';
import Login from './LoginComp/Login';
import Main from './Body/Main';
import { Link } from 'react-router-dom';
import Footer from './FooterComp/Footer'
import {onAuthStateChanged} from "firebase/auth";
import { useStateValue } from "./stateProvider";
import './App.css';
import {auth} from "./firebase";
import { useEffect } from "react";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import {signOut} from "firebase/auth";
import Doctors from "./Side Headings/Doctors";
import DoctorPage from "./DoctorPage";
function App() {
  const [{user},dispatch]=useStateValue();

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
     // User is signed in, see docs for a list of available properties
     console.log("user");
     if(user){
        dispatch({
         type:'SET_USER',
         user:user
        })
     }
     else{
       dispatch({
         type:'SET_USER',
         user:null
        })
     } 
    });
    },[]);
  function handleAuth(){
    if(user)
    {
        
        signOut(auth);

    }
     
   }
  const [sideHead,setSideHead] = useState(false);
  function Nav(){
      return (
        <div className='nav'>
          
          
            <button  name="menu" onClick={handleHeads} class="material-symbols-outlined menu">
              menu
            </button>
            
            <div className='buttons'>
              <Link to="/">
              <button className='home' >Home</button>
              </Link>
              <div className='userName' >
                <span >Hello {user?user.email:"guest"}</span>
                
              </div>
              <Link to={!user && '/login'} >
                <button className='reg' onClick={handleAuth}>{user ? 'signOut':'signIn'}</button>
              </Link>
            
          </div>
        </div>
      );
    }
    
  function handleHeads(event){
    if(event.target.name==='menu'){
      setSideHead(true);
    }
    else if(event.target.name==='close'){
      setSideHead(false);
    }
  }

 

  function Heads(){
    return(
      <div className='sidenav'>
        <button name='close' onClick={handleHeads}className="material-symbols-outlined close">X</button>
        <div className='heading'>
        
          <Link to="/">
              <button  className='sides'>Home</button>
            </Link>
            <Link to="/firstaid">
              <button  className='sides'>First Aid</button>
            </Link>
            <Link to="/">
              <button className='sides'>Medicine Suggestions</button>
            </Link>
            <Link to="/">
              <button  className='sides'>Treatment</button>
            </Link>
            <Link to="/finddoctor">
              <button className='sides'>Find Doctors</button>
            </Link>          
        </div>
      </div>
    )
  }

  
 

  

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element ={[<Nav /> ,sideHead?<Heads/>:"",<Main />,<Footer />]}></Route>
          <Route  path="/login" element={[<Login />]}></Route>
          <Route path="/finddoctor" element={[<Nav />,<Doctors />]}></Route>
          <Route path="/finddoctor/doctorpage" element={[<Nav />,<DoctorPage />]}></Route>
         </Routes>
      </Router>
     
    </div>
  );
}

export default App;
// {}
// {mainHead}
// {footer}