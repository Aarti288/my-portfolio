
import { useState } from 'react';
import './App.css';

function App() {
  const [sideBar,openSideBar]=useState(false);
  const openSidePanel=()=>{
    openSideBar(true);
    console.log(sideBar);
    
  }
  return (
    <div className="App">
    <div id="header">
      <div className='container'>
        <nav>
          <h1>Aarti</h1>
          <ul>
            <li><button onClick={openSidePanel}>☰</button></li>
            <li><a>Home</a></li>
            <li><a>About</a></li>
            <li><a>Services</a></li>
            <li><a>Portfolio</a></li>
            <li><a>Contact</a></li>
          </ul>
        </nav>

        <div className="header-text">
          <p>Frontend Developer</p>
          <h1>Hi,I'm <span>Aarti</span><br></br>from Pune,Maharashtra.</h1>
        </div>
      </div>
    </div>
     
     {
      sideBar &&
      (
        <div>Hello</div>
      )
     }

    </div>
  );
}

export default App;
