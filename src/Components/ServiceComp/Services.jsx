import "../ServiceComp/style.css";
import { projectData } from "../../store";
export default function ServiceComp()
{
    return(
        <div id="services">
       <div className='container'>
     <h1>My Work</h1>
     <div className="service-list">
     {
        projectData.map((service,index)=>(
           
                <div id ={`service${index}`} className="service">
                    <div className="service-container">
                        <img className="service-img" src={service.img} alt={service.name}/>
                        <div className="service-description-container">
                        <h3>{service.name}</h3>
                        <p>{service.description}</p>
                        <a ><i class="fa fa-code-fork" aria-hidden="true"></i>Github Link 
                        </a>
                        <div><a className="active" href="#">View</a></div>
                        </div>
                    </div>
                    
                        {/* <div className="service-view-container">
                        <a ><i class="fa fa-code-fork" aria-hidden="true"></i>Github Link 
                        </a>
                        <div><a className="active" href="#">View</a></div>
                    </div> */}
                    {/* </div> */}
                </div>
           
            
        ))
     }
      </div>

   {/* <div className="service-list">
      <div id="service1" className="service">
        <div className="service-container">
       <div className="service-image-container">

       </div>
       <div className="service-description-container">Hwello</div>
       <div className="service-view-container">Hello</div>

        </div>
       
        </div>
      <div id="service2" className="service">
      <div className="service-container">
        Service2
        </div>
        </div>
      <div id="service3" className="service">
      <div className="service-container">
        Service3
        </div>
        </div>
   </div> */}
  </div>
  </div>
    )
}