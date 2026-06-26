import './App.css'
import { CustomCursor } from './components/CustomCursor'

const SKILLS = [
  'Node.js',
  'Express',
  'DOM',
  'Figma',
  'HTML',
  'CSS',
  'JavaScript',
  'Data Structures',
  'Python',
]

const SOCIAL = [
  { label: 'GitHub', href: 'https://github.com/Manideeppolepally' },
  { label: 'LinkedIn', href: 'https://in.linkedin.com/in/manideep-polepally-349620386' },
  { label: 'X', href: 'https://x.com/POLEPALLYM91945' },
]

function App() {
  return (
    <>
      <CustomCursor />

      <div className="site">
        <header className="header">
          <a href="#home" className="logo interactive">MP</a>
          <nav>
            <ul className="nav">
              <li><a href="#home" className="interactive">Home</a></li>
              <li><a href="#about" className="interactive">About</a></li>
              <li><a href="#skills" className="interactive">Skills</a></li>
              <li><a href="#contact" className="interactive">Contact</a></li>
            </ul>
          </nav>
        </header>

        <main>
          <section id="home" className="hero">
            <h1 className="hero-title">
              Manideep
              <br />
              Polepally
            </h1>
            <p className="hero-sub">Computer Science Undergraduate</p>
            <div className="hero-line" />
          </section>

          <section id="about" className="section">
            <p className="section-label">About</p>
            <h2 className="section-heading">Who I Am</h2>
            <p className="section-text">
              I am Manideep Polepally, currently pursuing my undergraduate degree
              in Computer Science at CMR Technical Campus.
            </p>
            <p className="section-text">
              I build on the web with a focus on clean structure, purposeful design,
              and solid fundamentals — from the DOM to the server.
            </p>
          </section>

          <section id="skills" className="section">
            <p className="section-label">Skills</p>
            <h2 className="section-heading">What I Work With</h2>
            <div className="skills-grid">
              {SKILLS.map((skill) => (
                <div key={skill} className="skill-item interactive">{skill}</div>
              ))}
            </div>
          </section>

          <section id="contact" className="section">
            <p className="section-label">Contact</p>
            <h2 className="section-heading">Get In Touch</h2>
            <div className="contact-block">
              <div className="contact-email">
                <p className="contact-email-label">Email</p>
                <a
                  href="mailto:manideeppolepally19@gmail.com"
                  className="contact-email-link interactive"
                >
                  manideeppolepally19@gmail.com
                </a>
              </div>
              <div className="contact-links">
                {SOCIAL.map(({ label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-link interactive"
                  >
                    {label}
                    <span className="contact-link-arrow">→</span>
                  </a>
                ))}
              </div>
            </div>
          </section>
        </main>

        <footer className="footer">
          <span>Manideep Polepally</span>
          <span>CMR Technical Campus · CSE</span>
        </footer>
      </div>
    </>
  )
}

export default App
