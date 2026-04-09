function Home() {
  const projects = [
    {
      title: 'Journal Web App',
      desc: 'A journaling website with a clean dashboard where users can create, organize, and review journal entries by date.',
    },
    {
      title: 'Socket Programming RPG Game',
      desc: 'A client-server game where players send fight requests and the server tracks health, potions, shields, and other game data.',
    },
    {
      title: 'Portfolio Website',
      desc: 'A React portfolio site with routing, responsive design, custom styling, and a spring break travel blog page.',
    },
  ]

  return (
    <main>
      <section className="hero">
        <h1>Hi, I’m Ashley Flores</h1>
        <p>
          Computer science student interested in web development, UI design,
          and building creative projects with code.
        </p>
      </section>

      <section id="about" className="section">
        <h2>About Me</h2>
        <p>
          I am a student learning modern web development with React,
          JavaScript, Node.js, and Express. I enjoy creating projects that
          combine design and functionality, and I am continuing to grow my
          skills through coursework and hands-on projects.
        </p>
      </section>

      <section id="projects" className="section">
        <h2>Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={index} title={project.title} desc={project.desc} />
          ))}
        </div>
      </section>

      <section id="contact" className="section">
        <h2>Contact</h2>
        <p>Email: ashleyflores@example.com</p>
        <p>GitHub: github.com/xhley</p>
      </section>
    </main>
  )
}

function ProjectCard({ title, desc }) {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  )
}

export default Home