
import { useState } from 'react';
import './App.css';

function App() {
  const [sideBar,setSideBar]=useState(false);
  const openSidePanel=()=>{
    setSideBar(true);
    console.log(sideBar);
    
  }
  const closeSidePanel = () => {
    setSideBar(false);
  };
  return (
    <div className="App">
    <div id="header">
      <div className='container'>
        <nav>
          <h1>Aarti</h1>
          <ul>
            <li><a>Home</a></li>
            <li><a>About</a></li>
            <li><a>Services</a></li>
            <li><a>Portfolio</a></li>
            <li><a>Contact</a></li>
          </ul>
          <button onClick={openSidePanel}>☰</button>
        </nav>

        <div className="header-text">
          <p>Frontend Developer</p>
          <h1>Hi,I'm <span>Aarti</span><br></br>from Pune,Maharashtra.</h1>
        </div>
      </div>
    </div>
     
    <div className={`side-panel ${sideBar ? 'open' : ''}`}>
        <button onClick={closeSidePanel}>x</button>
        <nav>
          <ul>
            <li><a>Home</a></li>
            <li><a>About</a></li>
            <li><a>Services</a></li>
            <li><a>Portfolio</a></li>
            <li><a>Contact</a></li>
          </ul>
          </nav>
      </div>

    </div>
  );
}

export default App;
