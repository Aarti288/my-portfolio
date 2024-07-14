import { useState,useEffect } from "react";
import "../HomeComp/style.css";
export default function HomeComp(){
  const [sideBar,setSideBar]=useState(false);
  const [Developer,setDeveloper]=useState('Frontend Developer');
  const openSidePanel=()=>{
    setSideBar(true);
    console.log(sideBar);
    
  }
  const closeSidePanel = () => {
    setSideBar(false);
  };
  const scrollView=(id)=>{
    console.log("id is:",id);
    // document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    
  }
  useEffect(()=>{
    // let character=Developer.split("");
    console.log("length is:",Developer.length);
     const interval=setInterval(()=>{
        if(Developer.length>0)
          {
               setDeveloper(prevDeveloper=>prevDeveloper.slice(0,-1))
          }else{
            console.log("length is in:",Developer.length)
            clearInterval(interval);
            setTimeout(() => {
              setDeveloper('Web Developer'); 
              setTimeout(() => {
                setDeveloper('Frontend Developer');
              }, 1000);
            }, 1000);
          }

     },1000);
     return(()=> clearInterval(interval))
  },[Developer])
    return(
        <div id="header">
        <div className='container'>
          <nav>
            <h1>AARTI.</h1>
            <ul>
              <li><a onClick={scrollView('header')}>Home</a></li>
              <li><a  onClick={scrollView('about')}>About</a></li>
              <li><a>Services</a></li>
              <li><a>Portfolio</a></li>
              <li><a>Contact</a></li>
            </ul>
            <button onClick={openSidePanel}>☰</button>
          </nav>
  
          <div className="header-text">
            <p>WELCOME TO MY WORLD</p>
            <h1>Hi,I'm <span>Aarti Tak</span><br></br><span>a</span>&nbsp;<span id="last-words">{Developer}</span></h1>
          </div>
        </div>

          {/* Side bar panel */}
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
    )




}
