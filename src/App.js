import "./App.css";
//"version": "5.3.2"
import "bootstrap/dist/css/bootstrap.css";
import NavScrollExample from "./nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {faFacebook } from '@fortawesome/free-solid-svg-icons';
import { faYoutube, faLinkedin, faInstagram, faFacebook, faGithub, faFontAwesome } from '@fortawesome/free-brands-svg-icons'


import imgTag from "./../src/harshali-mankar.png";
import portfolio1 from "./../src/saawree.jpg";
import Contact from "./contact-from";


function App() {
  return (
    // https://getbootstrap.com/docs/5.1/components/scrollspy/#scrollspyHeading2
    <div data-bs-spy="scroll">
      <>
        {/* https://react-bootstrap.netlify.app/docs/components/navbar/# */}
        <NavScrollExample />
        <section className="scroll-panel mt-md-4" id="home">
          <div className="banner">
            <div className="container">
              <div className="row d-flex justify-content-center">
                <div className="col-xs-12 col-md-8 " id="banner">
                  <h1 id="banner-name scrollspyHeading1">Frontend Developer</h1>
                  <p className="lead">

                  I am a <strong>Frontend React Developer</strong> in Binate IT Services Pvt Ltd. Currently, <strong>sworking on e-commerce website. It is based on react JS, typescript, and bootstrap frameworks.</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="container">
          <section className="scroll-panel  mt-4" id="about">
            <div className="row">
              <h2 className="text-center title mb-4" id="scrollspyHeading2">
                ABOUT ME
              </h2>
              <div className="col-xs-12 col-md-6">
                <img
                  src={imgTag}
                  alt="Harshali Mankar, Website developer near Vasai-Virar"
                />

                {/* <p className="lead text-center">
                  @ Elegushi Beach, Lekki, Lagos - March 2016
                </p> */}
              </div>
              <div className="col-xs-12 col-md-6" id="about_col">
                <h3 className="text-center title mb-4">A little about me</h3>

                <p className="lead">My name is Harshali Shailesh Mankar, a Frontend React Developer.</p>


                <p className="lead">With a keen eye for design and a passion for creating seamless user experiences, I bring a blend of creativity and technical expertise to every project. Proficient in HTML, CSS, and JavaScript, I thrive on translating design concepts into responsive and interactive websites. Constantly staying abreast of emerging technologies, I am dedicated to delivering cutting-edge solutions that elevate the overall user engagement and satisfaction.</p>

                <p className="lead">In addition to my Frontend development skills, I bring a decade of teaching experience in the field. My extensive background in education has allowed me to effectively convey complex technical concepts to learners, fostering a collaborative and engaging learning environment.</p>

              </div>
            </div>
            <div className="row">
              <h3 className="text-center title mb-4">My Skills</h3>
              <div className="col-xs-12 col-md-6">
                <p className="lead text-center">HTML</p>
                <div className="progress">
                  <div
                    className="progress-bar bg-primary progress-bar-animated progress-bar-striped active"
                    role="progressbar"
                    aria-valuenow={45}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ width: "99%" }}
                  >
                    <span className="sr-only">HTML 99%</span>
                  </div>
                </div>
                <p className="lead text-center">CSS</p>
                <div className="progress">
                  <div
                    className="progress-bar progress-bar-animated bg-success progress-bar-striped active"
                    role="progressbar"
                    aria-valuenow={45}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ width: "90%" }}
                  >
                    <span className="sr-only">CSS 90%</span>
                  </div>
                </div>
                <p className="lead text-center">JavaScript</p>
                <div className="progress">
                  <div
                    className="progress-bar progress-bar-animated bg-warning progress-bar-striped active"
                    role="progressbar"
                    aria-valuenow={45}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ width: "85%" }}
                  >
                    <span className="sr-only">JavaScript 85%</span>
                  </div>
                </div>

              </div>
              <div className="col-xs-12 col-md-6">

                <p className="lead text-center">Node.js</p>
                <div className="progress">
                  <div
                    className="progress-bar bg-warning progress-bar-animated progress-bar-striped active"
                    role="progressbar"
                    aria-valuenow={45}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ width: "80%" }}
                  >
                    <span className="sr-only">Node.js 80%</span>
                  </div>
                </div>

                <p className="lead text-center">React.js</p>
                <div className="progress">
                  <div
                    className="progress-bar bg-primary progress-bar-animated progress-bar-striped active"
                    role="progressbar"
                    aria-valuenow={45}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ width: "80%" }}
                  >
                    <span className="sr-only">React.js 80%</span>
                  </div>
                </div>
                <p className="lead text-center">jQuery</p>
                <div className="progress">
                  <div
                    className="progress-bar progress-bar-animated bg-danger progress-bar-striped active"
                    role="progressbar"
                    aria-valuenow={45}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ width: "90%" }}
                  >
                    <span className="sr-only">jQuery 90%</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="scroll-panel mt-4" id="portfolio">
            <div className="row">
              <h2 className="text-center title mb-4" id="scrollspyHeading3">
                PORTFOLIO
              </h2>
              
              <div className="col-xs-12 col-md-4">
                <div className="thumbnail">
                  <p className="lead text-center">Saawree</p>
                  <img
                  src={portfolio1}
                  alt="Harshali Mankar, Website developer near Vasai-Virar"
                />
                  <a
                    id="links"
                    href="https://saawree.com"
                    target="_blank"
                  >
                    <button className="btn btn-default btn-block">
                      View Project
                    </button>
                  </a>
                </div>
              </div>
            </div>

          </section>
          <section className="scroll-panel mt-4" id="contact">
            <div className="row">
              <h2 className="text-center title mb-4" id="scrollspyHeading4">
                CONTACT ME
              </h2>
              
              <div className="col-xs-12 col-md-8">

                <Contact/>
              </div>
              <div className="col-xs-12 col-md-4 mt-3 mt-md-0">
                <p className="lead">
                  Wanna get in touch with me? Be it a project idea you wanna
                  develop, to request more info about myself or my experience,
                  to ask for my resume... just feel free to drop me a line
                  anytime. I'll be right there to reply you.
                </p>
              </div>
            </div>
          </section>
          
          <div className="row social mt-5">
            <div className="col-xs-12 col-md-6">
              <h2>Connect with me</h2>
              <p className="lead">
                What is life without connection? Let's social-media-connect!
              </p>
            </div>
        
       
              <div className="p-4 text-center w-100 d-flex justify-content-center justify-content-md-start gap-3 display-5">
              
                  <a className="facebook"
                    target="_blank"
                    href="https://www.facebook.com/learnreactwithharshali"
                  >
                    <FontAwesomeIcon icon={faFacebook} color="#316FF6" />
                    
                  </a>
         
                  <a className="youtube" target="_blank" href="http://www.youtube.com/@learnreactwithharshali">
                  <FontAwesomeIcon icon={faYoutube} color="#CD201F" />
                  </a>
               
                  <a className="linkedin" target="_blank" href="https://www.linkedin.com/in/harshali-mankar-108258269">
                  <FontAwesomeIcon icon={faLinkedin} color="#0077b5" />
                  </a>
              
               
                  <a className="instagram" target="_blank" href="https://www.instagram.com/learnreactwithharshali">
                  <FontAwesomeIcon icon={faInstagram} color="#fccc63"/>
                  </a>
        
                  <a className="github" target="_blank" href="https://harshali-mankar.github.io/portfolio">
                  <FontAwesomeIcon icon={faGithub} color="#24292e"/>
                  </a>
             

              </div>
              
          </div>
        </div>
        
        <div className="footer mt-5">
          <p className="text-center">
            Written and coded by <a href="https://harshali-mankar.github.io/portfolio">Harshali Mankar</a> © 2023 All
            Rights Reserved
          </p>
        </div>
      </>
    </div>
  );
}

export default App;
