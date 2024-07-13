import './App.css';
import HomeComp from './Components/HomeComp/Home';
import AboutComp from './Components/AboutComp/AboutMe';
import ServiceComp from './Components/ServiceComp/Services';

function App() {
  return (
    <div className="App">
      {/* /* Home section */ }
      <HomeComp/>
     {/* About section */}
     <AboutComp/>
     {/* service */}
     <ServiceComp/>

</div>
  );
}

export default App;
