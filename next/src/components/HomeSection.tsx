"use client";
import Image from "next/image";
import ProjectSection from "@/app/ProjectSection/ProjectSection";

function HomeSection() {
  return (
    <div>
      <section className="firstSection" id="home">
        <div className="left-section">
          <div>
            Hi, my name is <span className="purple">Devansh</span>
          </div>
          <div>and I am a passionate</div>
        </div>
        <div className="right-section">
          <Image src="/bg.webp" width={400} height={300} alt="Background " />
        </div>
      </section>

      <hr className="hr" />

      <section className="secondSection" id="about">
        <h2>Skills</h2>
        <div className="experience">
          <div className="vertical">
            <Image src="/c-.png" width={50} height={50} alt="C++" />
            <div className="vertical-title">C++</div>
          </div>
          <div className="vertical">
            <Image src="/python.png" width={50} height={50} alt="Python" />
            <div className="vertical-title">Python</div>
          </div>
          <div className="vertical">
            <Image src="/html-5.png" width={50} height={50} alt="HTML" />
            <div className="vertical-title">HTML</div>
          </div>
          <div className="vertical">
            <Image src="/css.png" width={50} height={50} alt="CSS" />
            <div className="vertical-title">CSS</div>
          </div>
          <div className="vertical">
            <Image src="/js-file.png" width={50} height={50} alt="JavaScript" />
            <div className="vertical-title">JavaScript</div>
          </div>
          <div className="vertical">
            <Image src="/react.png" width={50} height={50} alt="React JS" />
            <div className="vertical-title">React JS</div>
          </div>
          <div className="vertical">
            <Image src="/node.png" width={50} height={50} alt="Node JS" />
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
        <ProjectSection />
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
    </div>
  );
}

export default HomeSection;
