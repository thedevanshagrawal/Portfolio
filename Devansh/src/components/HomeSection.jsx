import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import { Link } from "react-router-dom";

function HomeSection() {
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Web Developer", "Programmer", "Creator"],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <>
      <main>
        <section className="firstSection" id="home">
          <div className="left-section">
            <div>
              Hi, my name is <span className="purple">Devansh</span>
            </div>
            <div>and I am a passionate</div>
            <span ref={el} />
          </div>
          <div className="right-section">
            <img src="/bg.webp" alt="Background " />
          </div>
        </section>

        <hr className="hr" />

        <section className="secondSection" id="about">
          <h2>Skills</h2>
          <div className="experience">
            <div className="vertical">
              <img src="/c-.png" alt="C++" />
              <div className="vertical-title">C++</div>
            </div>
            <div className="vertical">
              <img src="/python.png" alt="Python" />
              <div className="vertical-title">Python</div>
            </div>
            <div className="vertical">
              <img src="/html-5.png" alt="HTML" />
              <div className="vertical-title">HTML</div>
            </div>
            <div className="vertical">
              <img src="/css.png" alt="CSS" />
              <div className="vertical-title">CSS</div>
            </div>
            <div className="vertical">
              <img src="/js-file.png" alt="JavaScript" />
              <div className="vertical-title">JavaScript</div>
            </div>
            <div className="vertical">
              <img src="/react.png" alt="React JS" />
              <div className="vertical-title">React JS</div>
            </div>
            <div className="vertical">
              <img src="/node.png" alt="Node JS" />
              <div className="vertical-title">Node JS</div>
            </div>
          </div>
        </section>

        <hr className="third-hr" />

        <section className="thirdSection">
          <h2>Education</h2>
          <div className="Education">
            <div className="education-box">
              <div className="education-title">
                ❖ B.Tech (CSE) | The ICFAI University, Raipur
              </div>
              <div className="education-desc">7.69 | (Aug ’22 – Present)</div>
            </div>
            <div className="education-box">
              <div className="education-title">
                ❖ XII (CGBSE) | Saraswati Shishu Mandir, Raipur
              </div>
              <div className="education-desc">88.8% | 2021</div>
            </div>
          </div>
        </section>

        <hr className="hr" />

        <section id="project" className="thirdSection">
          <h2>Projects</h2>
          <div className="Education">
            <Link
              to="https://temple-gray.vercel.app/"
              className="education-box"
            >
              <div className="education-title">
                <span>❖ Temple – 12 Jyotirlinga and 4 Dham Temple</span>
              </div>
            </Link>

            <Link
              to="https://copypaste-knhm.onrender.com/"
              className="education-box"
            >
              <div className="education-title">❖ Copy Paste Website</div>
            </Link>
            <Link
              to="https://studywithus.vercel.app/"
              className="education-box"
            >
              <div className="education-title">❖ Study with us</div>
            </Link>
          </div>
        </section>

        <hr className="hr" />

        <section className="thirdSection last-section">
          <h2>Achievements / Hobbies</h2>
          <div className="Education">
            <div className="education-box">
              <div className="education-title">
                ❖ Tech Treasure Hunt | The ICFAI University
              </div>
              <div className="education-desc">
                1<sup>st</sup> Position (Sept ’2023)
              </div>
            </div>
            <div className="education-box">
              <div className="education-title">
                ❖ Web Designing Competition | The ICFAI University
              </div>
              <div className="education-desc">
                1<sup>st</sup> Position (March ’2023)
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default HomeSection;
