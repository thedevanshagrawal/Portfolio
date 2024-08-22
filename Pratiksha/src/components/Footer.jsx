import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer id="contact-page">
        <div className="footer">
          <div>Made by Pratiksha Maurya</div>
          <div className="Contact">
            <div className="Contact-details">
              <Link
                to="https://www.linkedin.com/in/pratiksha-maurya-b9045727b/"
                target="_blank"
              >
                <img src="/linkedin.png" alt="LinkedIn" />
              </Link>
            </div>
            <div className="Contact-details">
              {/* <Link
                to="https://www.instagram.com/the.devanshagrawal/"
                target="_blank"
              >
                <img src="/instagram.png" alt="Instagram" />
              </Link> */}
              <img src="/instagram.png" alt="Instagram" />
            </div>
            <div className="Contact-details">
              {/* <Link to="https://github.com/thedevanshagrawal" target="_blank">
                <img src="/github.png" alt="github" />
              </Link> */}
              <img src="/github.png" alt="github" />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
