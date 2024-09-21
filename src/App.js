import "./App.css";
//"version": "5.3.2"
import "bootstrap/dist/css/bootstrap.css";
import NavScrollExample from "./nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {faFacebook } from '@fortawesome/free-solid-svg-icons';
import {
  faYoutube,
  faLinkedin,
  faInstagram,
  faFacebook,
  faGithub,
  faFontAwesome,
} from "@fortawesome/free-brands-svg-icons";

import imgTag from "./../src/harshali-mankar.png";
import portfolio1 from "./../src/saawree.jpg";
import portfolio2 from "./../src/nike.png";
import portfolio3 from "./../src/akeshya.png";

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
                    Frontend Developer | Building Intuitive Interfaces &
                    Exceptional Digital Experiences | Expert in React, Next.js,
                    Vite, TypeScript & Bootstrap | E-commerce Solutions & Web
                    Development Specialist
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="container">
          <section className="scroll-panel  mt-4" id="about">
            <div className="row">
              <h2 className="text-center title my-5" id="scrollspyHeading2">
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
                {/* <h3 className="text-center title mb-4">A little about me</h3> */}

                <p className="lead">
                  My name is Harshali Shailesh Mankar, a Frontend React
                  Developer.
                </p>

                <p className="lead">
                  Hi, I'm Harshali Shailesh Mankar, a Frontend React Developer
                  with a passion for design and user experience. With expertise
                  in HTML, CSS, JavaScript, and React, I craft responsive and
                  interactive websites.
                </p>

                <p className="lead">
                  As a seasoned educator (10+ years), I excel at conveying
                  complex technical concepts and fostering collaborative
                  learning environments.
                </p>
                <br />
                <p>
                  <h5>Key Strengths:</h5>
                  <ul>
                    <li>Design-driven development</li>
                    <li>Responsive web development</li>
                    <li>Emerging technologies</li>
                    <li>Education & training</li>
                  </ul>
                </p>
                <p>
                  Let's connect and create exceptional digital experiences
                  together!"
                </p>
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
                  <a id="links" href="https://saawree.com" target="_blank">
                    <button className="btn btn-default btn-block">
                      View Project
                    </button>
                  </a>
                </div>
              </div>
              <div className="col-xs-12 col-md-4">
                <div className="thumbnail">
                  <p className="lead text-center">Tailwind Project</p>
                  <img
                    src={portfolio2}
                    alt="Harshali Mankar, Website developer near Vasai-Virar"
                  />
                  <a
                    id="links"
                    href=" https://harshali-mankar.github.io/react-tailwind/"
                    target="_blank"
                  >
                    <button className="btn btn-default btn-block">
                      View Project
                    </button>
                  </a>
                </div>
              </div>
              <div className="col-xs-12 col-md-4">
                <div className="thumbnail">
                  <p className="lead text-center">Akeshya</p>
                  <img
                    src={portfolio3}
                    alt="Harshali Mankar, Website developer near Vasai-Virar"
                  />
                  <a
                    id="links"
                    href=" https://harshali-mankar.github.io/akeshya-assignment/"
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
          <section className="scroll-panel mt-4" id="portfolio">
            <div className="row">
              <h2 className="text-center title my-5" id="scrollspyHeading3">
                Certification Courses
              </h2>
              <div className="text-center">
                <div className="mb-2">
                  <strong>JavaScript:&nbsp;</strong>
                  <a
                    href="https://www.udemy.com/certificate/UC-d335f13a-4008-4d6f-9f2d-636d124914c5"
                    target="_blank"
                  >
                    https://www.udemy.com/certificate/UC-d335f13a-4008-4d6f-9f2d-636d124914c5
                  </a>
                  <br />
                  <a
                    href="https://www.hackerrank.com/certificates/iframe/71fded34684e"
                    target="_blank"
                  >
                    https://www.hackerrank.com/certificates/iframe/71fded34684e
                  </a>
                </div>
                <div className="mb-2">
                  {" "}
                  <strong>Node JS:&nbsp;</strong>
                  <a
                    href="https://www.udemy.com/certificate/UC-c3dae084-d738-4460-9f63-a05aaf6f49dc/"
                    target="_blank"
                  >
                    https://www.udemy.com/certificate/UC-c3dae084-d738-4460-9f63-a05aaf6f49dc/
                  </a>
                </div>
                <div>
                  <strong>React:&nbsp;</strong>{" "}
                  <a
                    href="https://www.hackerrank.com/certificates/iframe/63b74a8aef8b"
                    target="_blank"
                  >
                    https://www.hackerrank.com/certificates/iframe/63b74a8aef8b
                  </a>
                </div>
              </div>
            </div>
          </section>
          <section className="scroll-panel mt-4" id="contact">
            <div className="row ">
              <h2 className="text-center title my-5" id="scrollspyHeading4">
                CONTACT ME
              </h2>
              <div className="w-50 m-auto">
                <div className="col-md-12">
                  <Contact />
                </div>
                <div className=" mt-3">
                  <p className="lead">
                    Wanna get in touch with me? Be it a project idea you wanna
                    develop, to request more info about myself or my experience,
                    to ask for my resume... just feel free to drop me a line
                    anytime. I'll be right there to reply you.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="row social mt-5">
              <div className="text-center">
                <h2>Connect with me</h2>
                <p className="lead">
                  What is life without connection? Let's social-media-connect!
                </p>
              </div>

              <div className="p-4 text-center w-50 m-auto d-flex justify-content-center  gap-3 display-5">
                <a
                  className="facebook"
                  target="_blank"
                  href="https://www.facebook.com/learnreactwithharshali"
                >
                  <FontAwesomeIcon icon={faFacebook} color="#316FF6" />
                </a>

                <a
                  className="youtube"
                  target="_blank"
                  href="http://www.youtube.com/@learnreactwithharshali"
                >
                  <FontAwesomeIcon icon={faYoutube} color="#CD201F" />
                </a>

                <a
                  className="linkedin"
                  target="_blank"
                  href="https://www.linkedin.com/in/harshali-mankar-108258269"
                >
                  <FontAwesomeIcon icon={faLinkedin} color="#0077b5" />
                </a>

                <a
                  className="instagram"
                  target="_blank"
                  href="https://www.instagram.com/learnreactwithharshali"
                >
                  <FontAwesomeIcon icon={faInstagram} color="#fccc63" />
                </a>

                <a
                  className="github"
                  target="_blank"
                  href="https://harshali-mankar.github.io/portfolio"
                >
                  <FontAwesomeIcon icon={faGithub} color="#24292e" />
                </a>
              </div>
            </div>
          </section>
        </div>

        <div className="footer mt-5">
          <p className="text-center">
            Written and coded by{" "}
            <a href="https://harshali-mankar.github.io/portfolio">
              Harshali Mankar
            </a>{" "}
            © 2023 All Rights Reserved
          </p>
        </div>
      </>
    </div>
  );
}

export default App;
