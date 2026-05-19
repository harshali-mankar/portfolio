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
} from "@fortawesome/free-brands-svg-icons";

import imgTag from "./../src/harshali-mankar.png";
import portfolio1 from "./../src/saawree.jpg";
import portfolio2 from "./../src/nike.png";
import portfolio3 from "./../src/akeshya.png";
import portfolio4 from "./../src/trainx.png";
import portfolio5 from "./../src/flyX.jpeg";
import portfolio6 from "./../src/vims.jpeg";


function App() {
  return (
    // https://getbootstrap.com/docs/5.1/components/scrollspy/#scrollspyHeading2
    <div data-bs-spy="scroll">
      {/* Animated Background with Tech Icons */}
      <div className="animated-background">
        <div className="floating-icon">⚛️</div> {/* React */}
        <div className="floating-icon">⚡</div> {/* Next.js */}
        <div className="floating-icon">🎨</div> {/* CSS */}
        <div className="floating-icon">🌐</div> {/* HTML */}
        <div className="floating-icon">📦</div> {/* Git */}
        <div className="floating-icon">🎨</div> {/* Figma */}
        <div className="floating-icon">🔧</div> {/* jQuery */}
        <div className="floating-icon">🟢</div> {/* Node.js */}
        <div className="floating-icon">🚀</div> {/* Express */}
        <div className="floating-icon">🅰️</div> {/* Angular */}
        <div className="floating-icon">⚙️</div> {/* C++ */}
        <div className="floating-icon">🎯</div> {/* Bootstrap */}
        <div className="floating-icon">💨</div> {/* Tailwind */}
        <div className="floating-icon">🧩</div> {/* MUI */}
        <div className="floating-icon">🖼️</div> {/* Photoshop */}
        <div className="floating-icon">🐘</div> {/* PostgreSQL */}
      </div>

      <>
        {/* https://react-bootstrap.netlify.app/docs/components/navbar/# */}
        <NavScrollExample />
        <section className="scroll-panel " id="home">
          <div className="banner">
            <div className="container">
              <div className="row d-flex justify-content-center align-items-center">
                <div className="col-xs-12 col-md-4 text-center mb-4 mb-md-0">
                  <img
                    src={imgTag}
                    alt="Harshali Mankar, Full-Stack Developer"
                    style={{
                      width: "200px",
                      height: "200px",
                      borderRadius: "50%",
                      border: "4px solid #007bff",
                      boxShadow: "0 6px 12px rgba(0,0,0,0.15)",
                    }}
                    className="img-fluid"
                  />
                </div>
                <div className="col-xs-12 col-md-8" id="banner">
                  <h1 id="banner-name scrollspyHeading1">
                    Full-Stack Developer
                  </h1>
                  <p className="lead">

                    <strong>Full-Stack Developer with 3 years of experience</strong> building{" "}
                    <strong>scalable and high-performance web applications</strong> using modern technologies like{" "}
                    <strong>React, Next.js, Angular, and Node.js</strong>.

                    <br /><br />

                    Currently expanding expertise into <strong>Flutter</strong> for mobile application development.
                    Hands-on experience with <strong>PostgreSQL and MongoDB</strong> through project-based learning and technical assignments,
                    with a strong focus on <strong>clean architecture and continuous skill growth</strong>.

                  </p>

                  {/* Resume Download and Video Introduction Section */}
                  <div className="row mt-4">
                    <div className="col-12 mb-3 d-flex gap-3 justify-content-center">
                      <a
                        href="https://drive.google.com/file/d/1FQ7hiKG7n-zZ0f76tVSYemRx7XF5H6c6/view"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary btn-sm"
                      >
                        <i className="fas fa-download me-2"></i>
                        Download Resume
                      </a>
                      <a
                        href="https://www.youtube.com/watch?v=p6oKKv6beFs"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-danger btn-sm"
                      >
                        <i className="fab fa-youtube me-2"></i>
                        Watch Video Introduction
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="container">
          <section className="scroll-panel mt-3" id="about">
            <div className="row">
              <h2 className="text-center title my-2" id="scrollspyHeading2">
                ABOUT ME
              </h2>
              <div className="col-12" id="about_col">
                <p className="lead mb-2">
                  My name is Harshali Mankar, a Full-Stack Developer with
                  expertise in both frontend and backend development.
                </p>

                <p className="lead mb-2">
                  I have worked on diverse domains such as e-commerce,
                  product-based solutions, and admin panel development. My
                  strengths lie in developing robust frontends and backends
                  using modern technologies like React, Next.js, Angular,
                  Node.js, and styling frameworks like TailwindCSS and
                  Bootstrap.
                </p>

                <p className="lead mb-2">
                  I specialize in integrating REST APIs efficiently and writing
                  clean, maintainable code using JavaScript, TypeScript, and
                  HTML/CSS. My ability to handle both UI/UX and server-side
                  logic makes me a valuable asset to any development team.
                </p>

                <p className="lead mb-3">
                  Experienced in conveying complex technical concepts and fostering collaborative learning environments. Delivered lectures on core IT subjects and guided students in programming (Java, Python, C++, MySQL).

                </p>

                <div className="row">
                  <div className="col-md-8">
                    <h5 className="mb-2">Key Strengths:</h5>
                    <ul className="mb-3">
                      <li>Full-stack development (Frontend & Backend)</li>
                      <li>Responsive web development</li>
                      <li>REST API integration</li>
                      <li>Teaching & mentoring</li>
                      <li>Problem-solving & debugging</li>
                    </ul>
                  </div>
                  <div className="col-md-4">
                    <div className="contact-info">
                      <strong>Location:</strong> Mumbai, Maharashtra, Dist.
                      Palghar - 401202
                      <br />
                      <strong>Phone:</strong> +91 7666524825
                      <br />
                      <strong>Email:</strong> harshalimankar8@gmail.com
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="scroll-panel mt-4" id="experience">
            <div className="row">
              <h2 className="text-center title mb-3" id="scrollspyHeading3">
                EXPERIENCE
              </h2>

              <div className="col-12 mb-4">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">
                      KraftNexus TECH LLP, Mumbai - Full-stack Developer
                    </h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                      Oct 2024 - Present · 1 year 8 months
                    </h6>
                    <p className="card-text">
                      <ul>
                        <li>
                          <strong>Angular Experience:</strong> Worked on an Angular-based project for ~2 months after joining, contributing to frontend development and understanding enterprise workflows.
                        </li>
                        <li>
                          <strong>Frontend Development:</strong> Currently building scalable applications using React, Next.js, and TypeScript.
                        </li>
                        <li>
                          <strong>Domain Expertise:</strong> Developing DGCA-compliant aviation crew management systems.
                        </li>
                        <li>
                          <strong>Module Development:</strong> Built modules for flight duty tracking, training management, and fleet data handling.
                        </li>
                        <li>
                          <strong>Admin Panels:</strong> Designed and implemented admin panels with validations, reporting, and secure authentication.
                        </li>
                        <li>
                          <strong>API Integration:</strong> Integrated APIs using Swagger/OpenAPI for seamless frontend-backend communication.
                        </li>
                        <li>
                          <strong>Hiring & Mentorship:</strong> Conducted interviews for interns, evaluated candidates, and onboarded suitable talent.
                        </li>
                        <li>
                          <strong>Code Review:</strong> Reviewed and improved interns' project code to ensure code quality, best practices, and performance optimization.
                        </li>
                        <li>
                          <strong>Client Interaction:</strong> Participated in client meetings (office and on-site), gathered requirements, and contributed to solution discussions.
                        </li>
                        <li>
                          <strong>Collaboration:</strong> Worked closely with cross-functional teams and clients to deliver features aligned with business goals.
                        </li>
                      </ul>

                      <h4><strong>Skill Enhancement & Learning</strong></h4>

                      <ul>
                        <li>
                          <strong>Databases:</strong> Hands-on with MongoDB and PostgreSQL.
                        </li>
                        <li>
                          <strong>Mobile Development:</strong> Exploring Flutter for cross-platform apps.
                        </li>
                        <li>
                          <strong>Cloud:</strong> Preparing for AWS Certification (learning cloud architecture & services).
                        </li>
                      </ul>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 mb-4">
                <div className="card">
                  <div className="card-body">
                    <h3 className="text-center mb-4">
                      <strong>PERSONAL PROJECTS</strong>
                    </h3>

                    {/* CodingKeeda Project */}
                    <h5 className="card-title">
                      <a href="https://www.codingkeeda.com" target="_blank">www.codingkeeda.com</a> — Modern Frontend & SEO Learning Platform
                    </h5>

                    <h6 className="card-subtitle mb-2 text-muted">
                      Jan 2026 – Present
                    </h6>

                    <p className="mb-2">
                      <strong>Tech Stack:</strong> React, PHP, Next.js, Tailwind CSS, JSON,
                      Shared Hosting
                    </p>

                    <ul>
                      <li>
                        Built a custom hybrid frontend solution using React + PHP with
                        server-side rendering concepts for improved SEO and performance.
                      </li>

                      <li>
                        Designed and developed the platform mainly for research,
                        experimentation, portfolio showcasing, and modern frontend skill
                        improvement.
                      </li>

                      <li>
                        Avoided heavy WordPress plugins and created a lightweight custom
                        architecture optimized for low-budget shared hosting environments.
                      </li>

                      <li>
                        Developed a fully custom admin panel to manage:
                        <ul>
                          <li>SEO meta tags</li>
                          <li>Dynamic page creation</li>
                          <li>Menu management</li>
                          <li>Custom slugs and title updates</li>
                          <li>Content organization and navigation controls</li>
                        </ul>
                      </li>

                      <li>
                        Focused on performance optimization, clean UI structure,
                        scalability, and SEO-friendly rendering strategies.
                      </li>

                      <li>
                        Created reusable frontend components, animation demos, and modern
                        CSS experiments for learning and educational purposes.
                      </li>
                    </ul>

                    <hr className="my-4" />

                    {/* VasaiVirar Project */}
                    <h5 className="card-title">
                      <a href="https://www.vasaivirar.org" target="_blank">www.vasaivirar.org</a> — Community Engagement Platform
                    </h5>

                    <h6 className="card-subtitle mb-2 text-muted">
                      Jan 2025 – Present
                    </h6>

                    <p className="mb-2">
                      <strong>Tech Stack:</strong> WordPress (Fully Custom), PHP,
                      JavaScript, AI-assisted Development
                    </p>

                    <ul>
                      <li>
                        Developed a fully customized WordPress-based local community
                        platform without using pre-built themes or heavy plugins.
                      </li>

                      <li>
                        Built with AI-assisted development workflows to speed up
                        customization and experimentation.
                      </li>

                      <li>
                        Created features focused on improving local community engagement,
                        including:
                        <ul>
                          <li>Local information sharing</li>
                          <li>Property listings</li>
                          <li>Job posting and job search</li>
                          <li>Buy & Sell marketplace functionality</li>
                        </ul>
                      </li>

                      <li>
                        Customized the frontend and backend architecture to maintain
                        flexibility, lightweight performance, and easy content management.
                      </li>

                      <li>
                        Designed the platform to support user interaction, local discovery,
                        and community-driven content.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-12 mb-4">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">
                      Binate IT Services Pvt Ltd, Mumbai - Junior Frontend React
                      Developer
                    </h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                      Jun, 2023 - Aug, 2024 [1.3 years]
                    </h6>
                    <p className="card-text">
                      <strong>E-commerce "Saawree" Website:</strong> Developed
                      an inventory-based system using ReactJs and web APIs.
                      <br />
                      <strong>Website:</strong>{" "}
                      <a
                        href="https://www.saawree.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        www.saawree.com
                      </a>
                      <br />
                      <strong>Details:</strong> Built with React, Next.js, Web
                      API, and SQL Server, this web application delivers a
                      dynamic user interface, efficient data processing, and
                      secure data storage.
                    </p>
                    <p className="card-text">
                      <strong>Betting Website:</strong> Completed the sports
                      section for a Nigerian client's betting platform.
                      <br />
                      <strong>Website:</strong>{" "}
                      <a
                        href="https://www.real-bet.xyz"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        www.real-bet.xyz
                      </a>
                      <br />
                      <strong>Details:</strong> Developed a user-friendly
                      betting website exclusively for Nigerian users, providing
                      a seamless and secure experience. Utilizing React JS, Next
                      JS, Bootstrap and SQL Server.
                    </p>
                    <p className="card-text">
                      <strong>ETX Project:</strong> A document
                      verification-based project.
                    </p>
                  </div>
                </div>
              </div>


            </div>
          </section>
          <section className="scroll-panel mt-4" id="portfolio">
            <div className="row">
              <h2 className="text-center title mb-3" id="scrollspyHeading4">
                PORTFOLIO PROJECTS
              </h2>

              <div className="col-12">
                <div
                  id="portfolioCarousel"
                  className="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-indicators">
                    <button
                      type="button"
                      data-bs-target="#portfolioCarousel"
                      data-bs-slide-to="0"
                      className="active"
                      aria-current="true"
                      aria-label="Slide 1"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#portfolioCarousel"
                      data-bs-slide-to="1"
                      aria-label="Slide 2"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#portfolioCarousel"
                      data-bs-slide-to="2"
                      aria-label="Slide 3"
                    ></button>
                  </div>

                  <div className="carousel-inner">
                    {/* Slide 1 - 3 Aviation Projects */}
                    <div className="carousel-item">
                      <div className="row">
                        <div className="col-md-4 mb-4">
                          <div className="card h-100 shadow-sm border-warning">
                            <div className="card-header bg-warning text-dark text-center">
                              <h5 className="mb-0">📱 Trainx | Web App</h5>
                            </div>
                            <div className="card-body p-0">
                              <img
                                src={portfolio4}
                                alt="Task Management App"
                                className="card-img-top"
                                style={{ height: "200px", objectFit: "cover" }}
                              />
                              <div className="p-3">
                                <h5 className="card-title text-warning">
                                  Task Management App Aviation Crew Management /
                                  Compliance Dashboard
                                </h5>
                                <p className="card-text text-muted">
                                  AeroDutyPro is an aviation crew management. It
                                  tracks training assignments, license renewals,
                                  and flight crew certifications. The dashboard
                                  offers real-time insights for planners, flight
                                  ops, and training teams.
                                </p>
                                <div className="d-flex flex-wrap gap-1 mb-3">
                                  <span className="badge bg-light text-dark border">
                                    React Native
                                  </span>
                                  <span className="badge bg-light text-dark border">
                                    Firebase
                                  </span>
                                  <span className="badge bg-light text-dark border">
                                    Redux
                                  </span>
                                  <span className="badge bg-light text-dark border">
                                    Offline Sync
                                  </span>
                                </div>
                                <div className="d-grid">
                                  <a
                                    target="_blank"
                                    href="https://trainx.aerodutypro.in/"
                                    className="btn btn-outline-warning" rel="noreferrer"
                                  >
                                    <i className="fas fa-external-link-alt me-2"></i>
                                    View Project
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="col-md-4 mb-4">
                          <div className="card h-100 shadow-sm border-danger">
                            <div className="card-header bg-danger text-white text-center">
                              <h5 className="mb-0">📱 FlyX | Web App</h5>
                            </div>
                            <div className="card-body p-0">
                              <img
                                src={portfolio5}
                                alt="Gaming Platform"
                                className="card-img-top"
                                style={{ height: "200px", objectFit: "cover" }}
                              />
                              <div className="p-3">
                                <h5 className="card-title text-danger">
                                  Crew Flight Duty Monitoring
                                </h5>
                                <p className="card-text text-muted">
                                  This module provides a detailed view of
                                  individual crew duty and flying hours. It
                                  tracks flight, ground, and office duty periods
                                  with clear calendar activity and compliance
                                  insights. The dashboard helps flight ops
                                  monitor workload limits and ensure DGCA/FAA
                                  duty compliance.
                                </p>
                                <div className="d-flex flex-wrap gap-1 mb-3">
                                  <span className="badge bg-light text-dark border">
                                    Socket.io
                                  </span>
                                  <span className="badge bg-light text-dark border">
                                    Node.js
                                  </span>
                                  <span className="badge bg-light text-dark border">
                                    MongoDB
                                  </span>
                                  <span className="badge bg-light text-dark border">
                                    Real-time
                                  </span>
                                </div>
                                <div className="d-grid">
                                  <a
                                    href="#portfolio"
                                    className="btn btn-outline-danger"
                                  >
                                    <i className="fas fa-external-link-alt me-2"></i>
                                    View Project
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="col-md-4 mb-4">
                          <div className="card h-100 shadow-sm border-secondary">
                            <div className="card-header bg-secondary text-white text-center">
                              <h5 className="mb-0">
                                📱 vims-ui.kraftnexus | Web App
                              </h5>
                            </div>
                            <div className="card-body p-0">
                              <img
                                src={portfolio6}
                                alt="Analytics Dashboard"
                                className="card-img-top"
                                style={{ height: "200px", objectFit: "cover" }}
                              />
                              <div className="p-3">
                                <h5 className="card-title text-secondary">
                                  Daily Flying Log – VIMS (Vendor Integrated
                                  Management System)
                                </h5>
                                <p className="card-text text-muted">
                                  This module tracks and manages daily flying
                                  records across fleets and vendors. It captures
                                  scheduled vs actual departures, pilot
                                  assignments, and operational delays. The
                                  system supports flight analytics, regulatory
                                  reporting, and mission planning workflows.
                                </p>
                                <div className="d-flex flex-wrap gap-1 mb-3">
                                  <span className="badge bg-light text-dark border">
                                    Angular
                                  </span>
                                  <span className="badge bg-light text-dark border">
                                    Chart.js
                                  </span>
                                  <span className="badge bg-light text-dark border">
                                    REST API
                                  </span>
                                  <span className="badge bg-light text-dark border">
                                    Data Viz
                                  </span>
                                </div>
                                <div className="d-grid">
                                  <a
                                    target="_blank"
                                    href="https://vims-ui.kraftnexus.in/"
                                    className="btn btn-outline-secondary" rel="noreferrer"
                                  >
                                    <i className="fas fa-external-link-alt me-2"></i>
                                    View Project
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Slide 2 - Original 3 Projects */}
                    <div className="carousel-item active">
                      <div className="row">

                        <div className="col-md-4 mb-4">
                          <div className="card h-100 shadow-sm border-info">
                            <div className="card-header bg-info text-white text-center">
                              <h5 className="mb-0">📋 Assignment Project</h5>
                            </div>
                            <div className="card-body p-0">
                              <img
                                src={portfolio3}
                                alt="Akeshya Assignment Project"
                                className="card-img-top"
                                style={{ height: "200px", objectFit: "cover" }}
                              />
                              <div className="p-3">
                                <h5 className="card-title text-info">
                                  Akeshya Assignment
                                </h5>
                                <p className="card-text text-muted">
                                  A comprehensive assignment project
                                  demonstrating full-stack development skills
                                  and modern web technologies.
                                </p>
                                <div className="d-flex flex-wrap gap-1 mb-3">
                                  <span className="badge bg-light text-dark border">
                                    Full-Stack
                                  </span>
                                  <span className="badge bg-light text-dark border">
                                    Modern Web
                                  </span>
                                  <span className="badge bg-light text-dark border">
                                    Responsive
                                  </span>
                                  <span className="badge bg-light text-dark border">
                                    Interactive
                                  </span>
                                </div>
                                <div className="d-grid">
                                  <a
                                    href="https://harshali-mankar.github.io/akeshya-assignment/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-outline-info"
                                  >
                                    <i className="fas fa-external-link-alt me-2"></i>
                                    View Live Project
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 mb-4">
                          <div className="card h-100 shadow-sm border-primary">
                            <div className="card-header bg-primary text-white text-center">
                              <h5 className="mb-0">🛒 E-commerce Platform</h5>
                            </div>
                            <div className="card-body p-0">
                              <img
                                src={portfolio1}
                                alt="Saawree E-commerce Website"
                                className="card-img-top"
                                style={{ height: "200px", objectFit: "cover" }}
                              />
                              <div className="p-3">
                                <h5 className="card-title text-primary">
                                  Saawree E-commerce
                                </h5>
                                <p className="card-text text-muted">
                                  A comprehensive e-commerce platform with
                                  inventory management, user authentication, and
                                  payment processing.
                                </p>
                                <div className="d-flex flex-wrap gap-1 mb-3">
                                  <span className="badge bg-light text-dark border">
                                    React
                                  </span>
                                  <span className="badge bg-light text-dark border">
                                    Next.js
                                  </span>
                                  <span className="badge bg-light text-dark border">
                                    SQL Server
                                  </span>
                                  <span className="badge bg-light text-dark border">
                                    Web API
                                  </span>
                                </div>
                                <div className="d-grid">
                                  <a
                                    href="https://saawree.com/readystock/jewellery/revas-ad"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-outline-primary"
                                  >
                                    <i className="fas fa-external-link-alt me-2"></i>
                                    View Live Project
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>





                        <div className="col-md-4 mb-4">
                          <div className="card h-100 shadow-sm border-success">
                            <div className="card-header bg-success text-white text-center">
                              <h5 className="mb-0">⚡ React Application</h5>
                            </div>
                            <div className="card-body p-0">
                              <img
                                src={portfolio2}
                                alt="React Tailwind Project"
                                className="card-img-top"
                                style={{ height: "200px", objectFit: "cover" }}
                              />
                              <div className="p-3">
                                <h5 className="card-title text-success">
                                  React Tailwind Project
                                </h5>
                                <p className="card-text text-muted">
                                  Modern React application built with
                                  TailwindCSS for responsive design and optimal
                                  user experience.
                                </p>
                                <div className="d-flex flex-wrap gap-1 mb-3">
                                  <span className="badge bg-light text-dark border">
                                    React
                                  </span>
                                  <span className="badge bg-light text-dark border">
                                    TailwindCSS
                                  </span>
                                  <span className="badge bg-light text-dark border">
                                    JavaScript
                                  </span>
                                  <span className="badge bg-light text-dark border">
                                    Responsive
                                  </span>
                                </div>
                                <div className="d-grid">
                                  <a
                                    href="https://harshali-mankar.github.io/react-tailwind/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-outline-success"
                                  >
                                    <i className="fas fa-external-link-alt me-2"></i>
                                    View Live Project
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>


                      </div>
                    </div>




                  </div>

                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#portfolioCarousel"
                    data-bs-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#portfolioCarousel"
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>
          </section>
          <section className="scroll-panel mt-3" id="skills">
            <div className="row">
              <h2 className="text-center title my-2">TECHNICAL SKILLS</h2>

              <div className="col-md-6 mb-3">
                <div className="card h-100 shadow-sm">
                  <div className="card-header bg-primary text-white py-2">
                    <h6 className="mb-0">💻 Languages & Scripting</h6>
                  </div>
                  <div className="card-body py-2">
                    <div className="d-flex flex-wrap gap-1">
                      <span className="badge bg-light text-dark border">
                        JavaScript
                      </span>
                      <span className="badge bg-light text-dark border">
                        TypeScript
                      </span>
                      <span className="badge bg-light text-dark border">
                        Java
                      </span>
                      <span className="badge bg-light text-dark border">
                        Python
                      </span>
                      <span className="badge bg-light text-dark border">
                        C++
                      </span>
                      <span className="badge bg-light text-dark border">
                        HTML5
                      </span>
                      <span className="badge bg-light text-dark border">
                        CSS3
                      </span>
                      <span className="badge bg-light text-dark border">
                        SASS
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-6 mb-3">
                <div className="card h-100 shadow-sm">
                  <div className="card-header bg-success text-white py-2">
                    <h6 className="mb-0">🎨 Frontend Development</h6>
                  </div>
                  <div className="card-body py-2">
                    <div className="d-flex flex-wrap gap-1">
                      <span className="badge bg-light text-dark border">
                        React.js
                      </span>
                      <span className="badge bg-light text-dark border">
                        Next.js
                      </span>
                      <span className="badge bg-light text-dark border">
                        Angular
                      </span>
                      <span className="badge bg-light text-dark border">
                        jQuery
                      </span>
                      <span className="badge bg-light text-dark border">
                        Bootstrap
                      </span>
                      <span className="badge bg-light text-dark border">
                        CoreUI
                      </span>
                      <span className="badge bg-light text-dark border">
                        Material-UI
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-6 mb-3">
                <div className="card h-100 shadow-sm">
                  <div className="card-header bg-info text-white py-2">
                    <h6 className="mb-0">⚙️ Backend & Database</h6>
                  </div>
                  <div className="card-body py-2">
                    <div className="d-flex flex-wrap gap-1">
                      <span className="badge bg-light text-dark border">
                        Node.js
                      </span>
                      <span className="badge bg-light text-dark border">
                        Express.js
                      </span>
                      <span className="badge bg-light text-dark border">
                        MySQL
                      </span>
                      <span className="badge bg-light text-dark border">
                        PostgreSQL
                      </span>
                      <span className="badge bg-light text-dark border">
                        SQL Server
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-6 mb-3">
                <div className="card h-100 shadow-sm">
                  <div className="card-header bg-warning text-dark py-2">
                    <h6 className="mb-0">🔧 Tools & Platforms</h6>
                  </div>
                  <div className="card-body py-2">
                    <div className="d-flex flex-wrap gap-1">
                      <span className="badge bg-light text-dark border">
                        Git
                      </span>
                      <span className="badge bg-light text-dark border">
                        GitHub
                      </span>
                      <span className="badge bg-light text-dark border">
                        Postman
                      </span>
                      <span className="badge bg-light text-dark border">
                        VS Code
                      </span>
                      <span className="badge bg-light text-dark border">
                        npm
                      </span>
                      <span className="badge bg-light text-dark border">
                        Yarn
                      </span>
                      <span className="badge bg-light text-dark border">
                        Figma
                      </span>
                      <span className="badge bg-light text-dark border">
                        Photoshop
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-6 mb-3">
                <div className="card h-100 shadow-sm">
                  <div className="card-header bg-secondary text-white py-2">
                    <h6 className="mb-0">🔗 API & Integrations</h6>
                  </div>
                  <div className="card-body py-2">
                    <div className="d-flex flex-wrap gap-1">
                      <span className="badge bg-light text-dark border">
                        REST APIs
                      </span>
                      <span className="badge bg-light text-dark border">
                        Third-party APIs
                      </span>
                      <span className="badge bg-light text-dark border">
                        Power BI
                      </span>
                      <span className="badge bg-light text-dark border">
                        Payment Gateways
                      </span>
                      <span className="badge bg-light text-dark border">
                        Swagger
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-6 mb-3">
                <div className="card h-100 shadow-sm">
                  <div className="card-header bg-dark text-white py-2">
                    <h6 className="mb-0">📚 Core Concepts</h6>
                  </div>
                  <div className="card-body py-2">
                    <div className="d-flex flex-wrap gap-1">
                      <span className="badge bg-light text-dark border">
                        Responsive Design
                      </span>
                      <span className="badge bg-light text-dark border">
                        CRUD Operations
                      </span>
                      <span className="badge bg-light text-dark border">
                        Authentication
                      </span>
                      <span className="badge bg-light text-dark border">
                        Authorization
                      </span>
                      <span className="badge bg-light text-dark border">
                        Session Management
                      </span>
                      <span className="badge bg-light text-dark border">
                        MVC Architecture
                      </span>
                      <span className="badge bg-light text-dark border">
                        SaaS Multi-Tenant
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="scroll-panel mt-4" id="certifications">
            <div className="row">
              <h2 className="text-center title my-3">CERTIFICATION COURSES</h2>
              <div className="col-md-4 mb-4">
                <div className="card h-100 shadow-sm border-primary">
                  <div className="card-header bg-primary text-white text-center">
                    <h5 className="mb-0">📜 JavaScript</h5>
                  </div>
                  <div className="card-body text-center">
                    <div className="mb-3">
                      <i
                        className="fas fa-certificate text-primary mb-2"
                        style={{ fontSize: "2rem" }}
                      ></i>
                    </div>
                    <div className="d-grid gap-2">
                      <a
                        href="https://www.udemy.com/certificate/UC-d335f13a-4008-4d6f-9f2d-636d124914c5"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline-primary btn-sm"
                      >
                        <i className="fab fa-udemy me-2"></i>Udemy Certificate
                      </a>
                      <a
                        href="https://www.hackerrank.com/certificates/iframe/71fded34684e"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline-success btn-sm"
                      >
                        <i className="fas fa-code me-2"></i>HackerRank
                        Certificate
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-4 mb-4">
                <div className="card h-100 shadow-sm border-success">
                  <div className="card-header bg-success text-white text-center">
                    <h5 className="mb-0">⚡ Node.js</h5>
                  </div>
                  <div className="card-body text-center">
                    <div className="mb-3">
                      <i
                        className="fab fa-node-js text-success mb-2"
                        style={{ fontSize: "2rem" }}
                      ></i>
                    </div>
                    <div className="d-grid gap-2">
                      <a
                        href="https://www.udemy.com/certificate/UC-c3dae084-d738-4460-9f63-a05aaf6f49dc/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline-success btn-sm"
                      >
                        <i className="fab fa-udemy me-2"></i>Udemy Certificate
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-4 mb-4">
                <div className="card h-100 shadow-sm border-info">
                  <div className="card-header bg-info text-white text-center">
                    <h5 className="mb-0">⚛️ React</h5>
                  </div>
                  <div className="card-body text-center">
                    <div className="mb-3">
                      <i
                        className="fab fa-react text-info mb-2"
                        style={{ fontSize: "2rem" }}
                      ></i>
                    </div>
                    <div className="d-grid gap-2">
                      <a
                        href="https://www.hackerrank.com/certificates/iframe/63b74a8aef8b"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline-info btn-sm"
                      >
                        <i className="fas fa-code me-2"></i>HackerRank
                        Certificate
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="scroll-panel mt-4" id="education">
            <div className="row">
              <h2 className="text-center title my-3">EDUCATION</h2>
              <div className="col-md-6 mb-4">
                <div className="card h-100 shadow-sm border-warning">
                  <div className="card-header bg-warning text-dark text-center">
                    <h5 className="mb-0">🎓 Master's Degree</h5>
                  </div>
                  <div className="card-body text-center">
                    <div className="mb-3">
                      <i
                        className="fas fa-graduation-cap text-warning mb-2"
                        style={{ fontSize: "2.5rem" }}
                      ></i>
                    </div>
                    <h4 className="card-title text-primary">
                      MCA (Master of Computer Applications)
                    </h4>
                    <p className="card-text text-muted">2011 - 2012</p>
                    <div className="mt-3">
                      <span className="badge bg-light text-dark border">
                        <i className="fas fa-university me-1"></i>Sikkim Manipal
                        University
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-6 mb-4">
                <div className="card h-100 shadow-sm border-info">
                  <div className="card-header bg-info text-white text-center">
                    <h5 className="mb-0">📚 Bachelor's Degree</h5>
                  </div>
                  <div className="card-body text-center">
                    <div className="mb-3">
                      <i
                        className="fas fa-book text-info mb-2"
                        style={{ fontSize: "2.5rem" }}
                      ></i>
                    </div>
                    <h4 className="card-title text-primary">
                      BSc IT (Bachelor of Science in Information Technology)
                    </h4>
                    <p className="card-text text-muted">2008 - 2009</p>
                    <div className="mt-3">
                      <span className="badge bg-light text-dark border">
                        <i className="fas fa-university me-1"></i>Manipal
                        University
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="contact">
            <div className="row social mt-5">
              <div className="text-center">
                <h2>Contact</h2>
                <p className="lead">
                  What is life without connection? Let's social-media-connect!
                </p>
              </div>

              <div className="p-4 text-center w-50 m-auto d-flex justify-content-center  gap-3 display-5">
                <a
                  className="facebook"
                  target="_blank"
                  href="https://www.facebook.com/learnreactwithharshali"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faFacebook} color="#316FF6" />
                </a>

                <a
                  className="youtube"
                  target="_blank"
                  href="http://www.youtube.com/@learnreactwithharshali"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faYoutube} color="#CD201F" />
                </a>

                <a
                  className="linkedin"
                  target="_blank"
                  href="https://www.linkedin.com/in/harshali-mankar-108258269"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faLinkedin} color="#0077b5" />
                </a>

                <a
                  className="instagram"
                  target="_blank"
                  href="https://www.instagram.com/learnreactwithharshali"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faInstagram} color="#fccc63" />
                </a>

                <a
                  className="github"
                  target="_blank"
                  href="https://harshali-mankar.github.io/portfolio"
                  rel="noopener noreferrer"
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
            © 2025 All Rights Reserved
          </p>
        </div>
      </>
    </div >
  );
}

export default App;
