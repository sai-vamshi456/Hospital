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
import AOS from 'aos';
import 'aos/dist/aos.css';
function App() {

  useEffect(()=>{
      AOS.init({duration:2000});
  },[])

  const [sideHead,setSideHead] = useState(false);
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
  function handleHeads(event){
    if(event.target.name=='menu' || event.target.name=='sideheading'){
      setSideHead(true);
    }
    else if(event.target.name=='close'){
      setSideHead(false);
    }
  }

  function handleSideHeads(event){
    setSideHead(!sideHead);
  }


  function Heads(){
    return(
      <div className='sidenav' data-aos="zoom">
        <Link to="/">
          <button onClick={handleHeads} data-aos="fade-down" name='close' className="material-symbols-outlined close">close</button>
        </Link>
        <div className='heading' data-aos="fade-up">
          <Link to="/">
            <button onClick={handleSideHeads} name='sideheading' className='sides'>Home</button>
          </Link>
          <Link to="/firstaid">
            <button onClick={handleSideHeads} name='sideheading' className='sides'>First Aid</button>
          </Link>
          <Link to="/medicine">
            <button onClick={handleSideHeads} name='sideheading' className='sides'>Medicine Suggestions</button>
          </Link>
          <Link to="/treatment">
            <button onClick={handleSideHeads} name='sideheading' className='sides'>Treatment</button>
          </Link>
          <Link to="/finddoctor">
            <button onClick={handleSideHeads} name='sideheading' className='sides'>Find Doctors</button>
          </Link>
          
        </div>
      </div>
    )
  }

  const [icon,setIcon]= useState("light_mode");

  function handleModes(){
    if(icon==="light_mode"){
      setIcon("dark_mode");
    }
    else{
      setIcon("light_mode");
    }
  }

  function Nav(){
    return (
      <div className='nav'>
        <div className='navi'>
          <Link to="/heads">
            <button onClick={handleHeads} name="menu" class="material-symbols-outlined menu">
              menu
            </button>
          </Link>
          <div className='buttons'>
          
             <span >Hello {user?user.email:"guest"}</span>
          
         
              
            
            <Link to={!user && '/login'} >
               <button className='reg' onClick={handleAuth}>{user ? 'signOut':'signIn'}</button>
            </Link>
            <span onClick={handleModes} class="material-symbols-outlined theme">{icon}</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route>
            <Route path="/" element ={[<Nav /> ,sideHead?<Heads/>:"", <Main />, <Footer />]}></Route>
            <Route path="/login" element={[<Login />]}></Route>
           
            <Route path='/heads' element={[<Nav /> ,sideHead?<Heads/>:""]}></Route>
            <Route path="/finddoctor" element={[<Nav />,<Doctors />]}></Route>
             <Route path="/finddoctor/doctorpage" element={[<Nav />,<DoctorPage />]}></Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
