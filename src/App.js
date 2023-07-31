import { useState } from 'react';
import Login from './Login';
import Register from './Register';
import logo from "./logo.webp";
import Main from './Main';
import Doctors from './Doctors';
import './App.css';

function App() {

  const [sideHead,setSideHead] = useState(<Nav/>);
  const [icon,setIcon] =useState("close");
  const [mainHead,setMainHead] = useState(<Main/>);

  function handleHeads(event){
    if(event.target.name=='menu'){
      setSideHead(<Heads/>);
    }
    else if(event.target.name=='close'){
      setSideHead(<Nav/>);
    }
  }

  function handleLogin(){
    setMainHead(<Login/>);
  }

  function handleRegister(){
    setMainHead(<Register/>)
  }

  function Nav(){
    return (
      <nav className='nav'>
        {/* <img src={logo} className='image' /> */}
        <div className='navi'>
          <button onClick={handleHeads} name="menu" class="material-symbols-outlined menu">
            menu
          </button>
          <button className='log' onClick={handleLogin}>Login</button>
          <button className='reg' onClick={handleRegister}>Register</button>
        </div>
      </nav>
    );
  }

  function handleDoctors(){
    setSideHead(<Nav/>);
    setMainHead(<Doctors/>);
  }


  function Heads(){
    return(
      <div className='HeadMain'>
        <button onClick={handleHeads} name='close' className="material-symbols-outlined close">{icon}</button>
        <div className='heading'>
          <button onClick={handleDoctors} className='sides'>Find Doctors</button>
          <button className='sides'>Video Conference</button>
          <button className='sides'>Medicines</button>
          <button className='sides'>Health Checkup</button>
          <button className='sides'>Operations</button>
        </div>
      </div>
    )
  }


  return (
    <div className="App">
      <nav>
        {sideHead}
      </nav>
      {mainHead}
    </div>
  );
}

export default App;
