import React from "react"

const Footer = () => (
  <div className="site-footer">
    <div className="text-center">Code Blog</div>
    <p className="text-center">follow us on social media</p>
    <div className="footer-social-links">
      <ul className="social-links-list">
        <li>
          <a
            href="https://www.facebook.com"
            className="facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook fa-2x" />
          </a>
        </li>
        <li>
          <a
            href="https://www.twitter.com"
            className="twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter fa-2x" />
          </a>
        </li>
        <li>
          <a
            href="https://www.google.com"
            className="google"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-google fa-2x" />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com"
            className="instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram fa-2x" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com"
            className="linkedin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin fa-2x" />
          </a>
        </li>
      </ul>
    </div>
  </div>
)

export default Footer
