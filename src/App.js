import { useState } from 'react';
import Login from './LoginComp/Login';
import Register from './RegisterComp/Register';
import Main from './Body/Main';
import First from './Side Headings/FirstAidComp/First';
import Med from "./Side Headings/MedComp/Medicine";
import Treat from "./Side Headings/TreatMentComp/Treat";
import Doc from "./Side Headings/DoctorComp/Doctors";
import Footer from './FooterComp/Footer';
import './App.css';

function App() {

  const [sideHead,setSideHead] = useState(false);
  const [icon,setIcon] =useState("close");
  const [mainHead,setMainHead] = useState(<Main/>);
  const [footer,setFoot] = useState(<Footer/>);

  function handleHeads(event){
    if(event.target.name=='menu'){
      setSideHead(true);
    }
    else if(event.target.name=='close'){
      setSideHead(false);
    }
  }

  function handleLogin(){
    setMainHead(<Login/>);
    setSideHead(false);
  }

  function handleRegister(){
    setMainHead(<Register/>);
    setSideHead(false);
  }

  function handleMain(){
    setMainHead(<Main/>);
    setSideHead(false);
  }

  function handleAid(){
    setMainHead(<First/>);
    setSideHead(false);
  }

  function handleMed(){
    setMainHead(<Med/>);
    setSideHead(false);
  }

  function handleTreat(){
    setMainHead(<Treat/>);
    setSideHead(false);
  }

  function handleDoc(){
    setMainHead(<Doc/>);
    setSideHead(false);
  }


  function Heads(){
    return(
      <div className='sidenav'>
        <button onClick={handleHeads} name='close' className="material-symbols-outlined close">{icon}</button>
        <div className='heading'>
          <button onClick={handleMain} className='sides'>Home</button>
          <button onClick={handleAid} className='sides'>First Aid</button>
          <button onClick={handleMed} className='sides'>Medicine Suggestions</button>
          <button onClick={handleTreat} className='sides'>Treatment</button>
          <button onClick={handleDoc} className='sides'>Find Doctors</button>
        </div>
      </div>
    )
  }

  function handleHome(){
    setMainHead(<Main/>);
  }

  function handleNormal(){}

  function Nav(){
    return (
      <div className='nav'>
        {/* <img src={logo} className='image' /> */}
        <div className='navi'>
          <button onClick={handleHeads} name="menu" class="material-symbols-outlined menu">
            menu
          </button>
          <div className='buttons'>
            <button className='home' onClick={handleHome}>Home</button>
            <button className='log' onClick={handleLogin}>Register</button>
            <button className='reg' onClick={handleRegister}>Login</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      <Nav/>
      {sideHead ? <Heads/> :""}
      {mainHead}
      {footer}
    </div>
  );
}

export default App;
