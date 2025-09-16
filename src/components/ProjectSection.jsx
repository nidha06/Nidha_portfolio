

function ProjectSection(){
    return(
        <>
         <section className="section" id="projects">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <div  className="project-image">
                 <h1  style={{'background':'#d80000', 'fontFamily':'Arial Black'}}>FURNIQUE</h1>
              </div>
              <div className="project-content">
                <h3 className="project-title">E-Commerce Platform</h3>
                <div className="project-status">Completed</div>
                <p className="project-description">
                 A luxury furniture e-commerce project, fully functional with admin panel, secure payments, protected routes, and all essential features for a complete shopping experience.
                </p>
                <div className="project-tech">
                  <span className="tech-tag">EJS</span>
                  <span className="tech-tag">Node.js</span>
                  <span className="tech-tag">Express.js</span>
                  <span className="tech-tag">MongoDB</span>
                  <span className="tech-tag">JavaScript</span>
                </div>
              </div>
            </div>
            
            <div className="project-card">
              <div className="project-image"> <h1 style={{'background':'#d80000', 'fontFamily':'Arial Black'}}>EduTrack</h1>
              </div>
              <div className="project-content">
                <h3 className="project-title">React Mini Project</h3>
                <div className="project-status">Completed</div>
                <p className="project-description">
                 The Student Management System is a fully interactive web application built using React.js with Redux for state management. The project demonstrates the power of component-based architecture, modern React hooks, and scalable state handling, ensuring smooth and dynamic user interactions.
                </p>
                <div className="project-tech">
                  <span className="tech-tag">React.js</span>
                  <span className="tech-tag">JavaScript</span>
                  <span className="tech-tag">CSS3</span>
                  <span className="tech-tag">Tailwind</span>
                </div>
              </div>
            </div>
            
            <div className="project-card">
              <div className="project-image">
                 <h1 style={{'background':'#d80000', 'fontFamily':'Arial Black'}}>ORDO</h1>
              </div>
              <div className="project-content">
                <h3 className="project-title">Current Project</h3>
                <div className="project-status working">In Development</div>
                <p className="project-description">
                  Currently developing a collaborative Student Management and Performance Tracking System aimed at enhancing student performance monitoring. The project uses React on the frontend and Express.js, Python, and microservices on the backend, following modern practices for scalability, efficiency, and user experience.
                </p>
                <div className="project-tech">
                  <span className="tech-tag">React.js</span>
                  <span className="tech-tag">TypeScript</span>
                  <span className="tech-tag">Node.js</span>
                  <span className="tech-tag">MongoDB</span>
                  <span className="tech-tag">Express</span>
                  <span className="tech-tag">Microservices</span>
                  <span className="tech-tag">Python</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section></>
    )
}
export default ProjectSection