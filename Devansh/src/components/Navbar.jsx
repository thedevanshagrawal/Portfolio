import React from "react";

function Navbar() {
  return (
    <>
      <header>
        <nav role="navigation">
          <div className="left">Devansh's Portfolio</div>
          <div className="right">
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#project">Projects</a>
              </li>
              <li>
                <a href="#contact-page">Contact Me</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
