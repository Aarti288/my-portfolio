
import { useState } from 'react';
import aboutMe from "../src/Assets/aboutme.jpg";
import './App.css';

function App() {
  const [sideBar,setSideBar]=useState(false);
  const [tab,activeTab]=useState('skills');
  const openSidePanel=()=>{
    setSideBar(true);
    console.log(sideBar);
    
  }
  const closeSidePanel = () => {
    setSideBar(false);
  };
  const handleTabClick=(tab)=>{
    console.log(tab);
    activeTab(tab)

  }
  return (
    <div className="App">
      {/* /* Home section */ }
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


     {/* About section */}

      <div id="about">
      <div className='container'>
        <div className='row'>
          <div className='about-col-1'>
            <img src={aboutMe} alt="my-image"/>
          </div>
          <div className='about-col-2'>
           <span>About Me</span> 

           <p>Skilled Front-End Developer with 2 years of experience specializing in building responsive, interactive web applications using ReactJS, Redux, Hooks, and Context API. Proficient in leveraging modern UI frameworks like Material-UI and Tailwind CSS to create seamless user experiences. Strong command of core web technologies including HTML, CSS, JavaScript, and TypeScript. Experienced in data management with MySQL, ensuring robust and efficient data handling within applications.</p>

           <div className='tab-titles'>
            <p className={`tab-link ${tab==='skills'?'active-link':''}`} onClick={()=>handleTabClick('skills')}>Skills</p>
            <p className={`tab-link ${tab==='experience'?'active-link':''}`} onClick={()=>handleTabClick('experience')}>Experience</p>
            <p className={`tab-link ${tab==='education'?'active-link':''}`} onClick={()=>handleTabClick('education')}>Education</p>
           </div>

           <div className={`tab-content ${tab==='skills'? 'active-tab':''}`}>
          
              <p>Javascript Framework:ReactJS,React-Native,Redux,AngularJS,NextJS</p>
              <p>Web Technology:HTML,CSS,JavaScript,TypeScript</p>
              <p>Unit Testing:JEST</p>
              <p>Server:MySQL,MongoDB</p>
           
           </div>



           <div className={`tab-content ${tab==='experience'? 'active-tab':''}`}>
              <p>Intangles Labs,Pune
                <h4>19 june,2023 - 31 May,2024</h4>
              </p>
              <p>Perennial Systems,Pune
              <h4>19 january,2022 - 28 Dec,2022</h4>
              </p>
             
           
           </div>


           <div className={`tab-content ${tab==='education'? 'active-tab':''}`}>
          
              <p>K K wagh Institute,Nashik:Bachelors Degree(BE),Computer Engineering : 2019 - 2022</p>
              <p>K K wagh Women's Polytechnic,Nashik: Diploma,Computer Engineering : 2016 - 2019</p>

              
           </div>
          </div>
        </div>
        </div>
      </div>


{/* service */}

<div id="services">
  <div className='container'>
   <h1>My Services</h1>
   <div className="service-list">
    
   </div>
  </div>
  </div>
</div>
  );
}

export default App;
