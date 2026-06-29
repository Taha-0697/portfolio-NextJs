import {
  FaGithub,
  FaLinkedin,
  FaEnvelope
} from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="social-links">
        <a href="https://github.com/Taha-0697" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>

        <a href="https://www.linkedin.com/in/taha-chaghtai" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>

        <a href="mailto:taha.chaghtai.dev@gmail.com">
          <FaEnvelope />
        </a>
      </div>

      <p>© 2026 Taha Dev. All rights reserved.</p>

      <p className="footer-tagline">
        Let&apos;s build something amazing together! ⭐
      </p>
    </footer>
  )
}