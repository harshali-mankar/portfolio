import "./App.css";
//"version": "5.3.2"
import "bootstrap/dist/css/bootstrap.css";
import NavScrollExample from "./nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import imgTag from "./../src/harshali-mankar.png";
function App() {
  return (
    // https://getbootstrap.com/docs/5.1/components/scrollspy/#scrollspyHeading2
    <div data-bs-spy="scroll">
      <>
        {/* https://react-bootstrap.netlify.app/docs/components/navbar/# */}
        <NavScrollExample />
        <section className="scroll-panel" id="home">
          <div className="banner">
            <div className="container">
              <div className="row d-flex justify-content-center">
                <div className="col-xs-12 col-md-8 " id="banner">
                  <h1 id="banner-name scrollspyHeading1">Frontend Developer</h1>
                  <p className="lead">
                    I am a full-stack{" "}
                    <strong>
                      frontend developer in Binate IT Services Pvt Ltd.
                    </strong>{" "}
                    Currently, I am{" "}
                    <strong>building an e-commerce website</strong> and have
                    more experience in making more <strong>API calls.</strong>{" "}
                    Its frontend development is based on{" "}
                    <strong>
                      react, typescript, and bootstrap frameworks.
                    </strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="container">
          <section className="scroll-panel" id="about">
            <div className="row">
              <h2 className="text-center title" id="scrollspyHeading2">
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
                <h3 className="text-center title">A little about me</h3>
                <p className="lead">
                  My name is <strong>Harshali Mankar,</strong> a front-end web
                  developer. Am interested in making surfing fun by creating
                  engaging user interfaces and responsive websites.
                </p>

                <p className="lead">
                  Before this, I had a teaching role in IT subject for 10 years.
                  Here a bit about my skills:
                </p>
              </div>
            </div>
            <div className="row">
              <h3 className="text-center title">My Skills</h3>
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
              <div className="col-xs-12 col-md-6">
                <p className="lead text-center">AJAX</p>
                <div className="progress">
                  <div
                    className="progress-bar bg-danger progress-bar-animated progress-bar-striped active"
                    role="progressbar"
                    aria-valuenow={45}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ width: "80%" }}
                  >
                    <span className="sr-only">AJAX 80%</span>
                  </div>
                </div>
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
                <p className="lead text-center">Express.js</p>
                <div className="progress">
                  <div
                    className="progress-bar bg-success progress-bar-animated progress-bar-striped active"
                    role="progressbar"
                    aria-valuenow={45}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ width: "80%" }}
                  >
                    <span className="sr-only">Express.js 80%</span>
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
              </div>
            </div>
          </section>
          <section className="scroll-panel" id="portfolio">
            <div className="row">
              <h2 className="text-center title" id="scrollspyHeading3">
                PORTFOLIO
              </h2>
              <div className="space" />
              <div className="col-xs-12 col-md-4">
                <div className="thumbnail">
                  <p className="lead text-center">Tribute Page</p>
                  <img
                    src="https://preview.ibb.co/m6eUMk/steve_jobs_new_zpsm86aps6x.jpg"
                    className="images"
                  />
                  <a
                    id="links"
                    href="https://codepen.io/kingisaac95/full/VjbpQA/"
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
                  <p className="lead text-center">My Portfolio</p>
                  <img
                    src="https://preview.ibb.co/cgrb1k/portfolio_zpszpddezkz.png"
                    className="images"
                  />
                  <a
                    id="links"
                    href="https://codepen.io/kingisaac95/full/AXrpVr/"
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
                  <p className="lead text-center">Calladom Solutions Ltd.</p>
                  <img
                    src="https://preview.ibb.co/e3CKnQ/calladom.png"
                    className="images"
                  />
                  <a
                    id="links"
                    href="https://kingisaac95.github.io/calladom/"
                    target="_blank"
                  >
                    <button className="btn btn-default btn-block">
                      View Project
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 col-md-4">
                <div className="thumbnail">
                  <p className="lead text-center">Simple Login Page</p>
                  <img
                    src="https://preview.ibb.co/jp0Qu5/login_zpsibwapeh8.png"
                    className="images"
                  />
                  <a
                    id="links"
                    href="https://codepen.io/kingisaac95/full/mEGbGv/"
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
                  <p className="lead text-center">Random Quote Machine</p>
                  <img
                    src="https://preview.ibb.co/gvh5u5/random_quote_zpshghdcmqx.png"
                    className="images"
                  />
                  <a
                    id="links"
                    href="https://codepen.io/kingisaac95/full/ZBXQmo/"
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
          <section className="scroll-panel" id="contact">
            <div className="row">
              <h2 className="text-center title" id="scrollspyHeading4">
                CONTACT ME
              </h2>
              <div className="space" />
              <div className="col-xs-12 col-md-8">
                <form role="form">
                  <div className="form-group has-feedback">
                    <label className="sr-only" htmlFor="name2">
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name2"
                      placeholder="Name"
                      name="name2"
                      required=""
                    />
                    <i className="fa fa-user form-control-feedback" />
                  </div>
                  <div className="form-group has-feedback">
                    <label className="sr-only" htmlFor="email2">
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email2"
                      placeholder="Enter email"
                      name="email2"
                      required=""
                    />
                    <i className="fa fa-envelope form-control-feedback" />
                  </div>
                  <div className="form-group has-feedback">
                    <label className="sr-only" htmlFor="message2">
                      Message
                    </label>
                    <textarea
                      className="form-control"
                      rows={8}
                      id="message2"
                      placeholder="Describe your project"
                      name="message2"
                      required=""
                      defaultValue={""}
                    />
                    <i className="fa fa-pencil form-control-feedback" />
                  </div>
                  <input
                    type="submit"
                    defaultValue="Send"
                    className="btn btn-default btn-block"
                  />
                </form>
              </div>
              <div className="col-xs-12 col-md-4">
                <p className="lead">
                  Wanna get in touch with me? Be it a project idea you wanna
                  develop, to request more info about myself or my experience,
                  to ask for my resume... just feel free to drop me a line
                  anytime. I'll be right there to reply you.
                </p>
              </div>
            </div>
          </section>
          <div className="space" />
          <div className="row social">
            <div className="col-xs-12 col-md-6">
              <h2>Connect with me</h2>
              <p className="lead">
                What is life without connection? Let's social-media-connect!
              </p>
            </div>
            <div className="col-xs-12 col-md-6">
              <ul className="social-links">
                <li className="facebook">
                  <a
                    target="_blank"
                    href="https://www.facebook.com/learnreactwithharshali"
                  >
                    <i className="fa fa-facebook" />
                  </a>
                </li>
                <li className="youtube">
                  <a target="_blank" href="#">
                    <i className="fa fa-youtube" />
                  </a>
                </li>
                {/* <li className="googleplus">
                  <a target="_blank" href="#">
                    <i className="fa fa-google-plus" />
                  </a>
                </li> */}
                <li className="instagram">
                  <a target="_blank" href="#">
                    <i className="fa fa-instagram" />
                  </a>
                </li>
                <li className="linkedin">
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/harshali-mankar-108258269"
                  >
                    <FontAwesomeIcon icon={["fab", "github"]} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="space" />
        <div className="footer">
          <p className="text-center">
            Written and coded by <a href="#">Harshali Mankar</a> © 2023 All
            Rights Reserved
          </p>
        </div>
      </>
    </div>
  );
}

export default App;
