import './App.css';
import HomeComp from './Components/HomeComp/Home';
import AboutComp from './Components/AboutComp/AboutMe';
import ServiceComp from './Components/ServiceComp/Services';
import ContactMe from './Components/ContactComp/ContactMe';

function App() {
  return (
    <div className="App">
      {/* /* Home section */ }
      <HomeComp/>
     {/* About section */}
     <AboutComp/>
     {/* service */}
     <ServiceComp/>
     <ContactMe/>

   <div className="copyright">
    <p>Copyright @ Made by Me</p>
   </div>




</div>
  );
}

export default App;
