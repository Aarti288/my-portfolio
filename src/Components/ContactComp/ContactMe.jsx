import "../ContactComp/style.css";
import cvPdf from "../../Assets/Aarti-Tak-UI-Developer.pdf"
export default function ContactMe()
{
    return(
        <div id="contact" className="contact">
            <div className="container">
            <h1 className="sub-title">Contact Me</h1>
                <div className="row">
    
                    <div className="contact-left">
                        <a href="mailto:takaarti10@gmail.com"><p><i class="fa fa-envelope" aria-hidden="true"></i>takaarti10@gmail.com</p></a>
                        <div className="social-icons">
                            <p>Connect with me on:</p>
                            <a href="https://github.com/Aarti288"><i class="fa fa-code-fork" aria-hidden="true"></i>Github</a>
                            <a href="https://www.linkedin.com/in/aarti-tak-a92b35165/"><i class="fab fa-linkedin" aria-hidden="true"></i>Linkdin</a>
                            <a href="#"><i class="fa fa-code" aria-hidden="true"></i>Leetcode</a>

                        </div>
                    </div>
                    <div className="contact-right">
                       <button><a href={cvPdf} download>Download CV</a></button>
                    </div>
                </div>
            </div>
        </div>
    )
}