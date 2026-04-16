import './App.css'

function App() {
  return (
    <>
      <nav className="navbar">
        <h2>Ashley's Portfolio</h2>
        
        <div>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          <a href="#blog">Blog</a>
        </div>
      </nav>

      <section className="hero">
        <p className="hero-note">Digital diary of a developer ✿</p>
        
        <div className="hero-image">  
          <img src="/my-portfolio/profile.jpg" alt="profile" />
        </div>

        <div className="hero-content">
          <h1>Hi, I’m Ashley Flores</h1>
          <p>
            Computer science student interested in web development, UI design,
            and building creative projects with code.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn-primary">View Projects</a>
            <a href="#contact" className="btn-outline">Contact Me</a>
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <h2>About Me</h2>
        <div className="card">
          <p>
            I am a student learning modern web development with React,
            JavaScript, Node.js, and Express. I enjoy creating projects that
            combine design and functionality, and I am continuing to grow my
            skills through coursework and hands-on projects.
          </p>
        </div>
      </section>

      <section id="projects" className="section">
        <h2>Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <h3>Journal Web App</h3>
            <p>
              A journaling website with a clean dashboard where users can create,
              organize, and review entries by date.
            </p>
          </div>

          <div className="project-card">
            <h3>Socket Programming RPG Game</h3>
            <p>
              A client-server game where players send fight requests and the
              server tracks health, potions, shields, and game data.
            </p>
          </div>

          <div className="project-card">
            <h3>Portfolio Website</h3>
            <p>
              A React portfolio site with responsive design, custom styling, and
              a blog page documenting my spring break.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="section">
        <h2>Contact</h2>
        <div className="card">
          <p>Email: flore861@csusm.edu</p>
          <p>
            GitHub:{' '}
            <a href="https://github.com/xhley" target="_blank" rel="noreferrer">
              github.com/xhley
            </a>
          </p>
        </div>
      </section>

      <section id="blog" className="section">
        <h2>Spring Break Blog</h2>

        <div className="card blog-card">
          <div className="blog-gallery">
            <img src="/my-portfolio/beach.jpg" alt="Puerto Rico beach" />
            <img src="/my-portfolio/old-san-juan.jpg" alt="Old San Juan" />
          </div>

          <p>
            This spring break was extra special for me because it wasn’t my first
            time in Puerto Rico. The first time I visited was for Bad Bunny’s
            concert, and I instantly fell in love with the energy, the people,
            and the overall vibe of the island.
          </p>

          <p>
            Going back felt completely different in the best way. This time, I was
            able to slow down and really take everything in. I spent time exploring
            beaches, trying different foods, and just enjoying the beauty of the island.
          </p>

          <p>
            What made the trip even more special was being able to compare both
            experiences. I came back feeling recharged, inspired, and already
            thinking about when I can go again.
          </p>
        </div>
      </section>

      <footer className="footer">
        <p>Made with ♡ by Ashley Flores</p>
      </footer>
    </>
  )
}

export default App