import { bio, skills, interests } from "../../data/about";
import SkillBadge from "./SkillBadge";
import "./About.css";

function About() {
  return (
    <section id="about" className="about">
      <span className="eyebrow">A little about me</span>
      <p className="about-bio">{bio}</p>

      <div className="about-grid">
        <div className="about-block">
          <h3>Skills</h3>
          <div className="badge-row">
            {skills.map((skill) => (
              <SkillBadge key={skill} label={skill} />
            ))}
          </div>
          <div>
            <p className="about-poem">
              Hannah my darling<br></br>
              I will follow you into the sunrise under desert sky<br></br>
              We fly, rise together<br></br>
              With our hearts upon our sleeves for all to see<br></br>
              We two will breathe, aqua queen though vast distance between us<br></br>
              Heart sails with love for you<br></br>
            </p>
          </div>
        </div>

        <div className="interests-card">
          <span className="interests-label">Interests</span>
          <div className="interests-list">
            {interests.map((interest) => (
              <span key={interest} className="interest-item">{interest}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
