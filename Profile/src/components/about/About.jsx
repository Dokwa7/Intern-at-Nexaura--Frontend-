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
        </div>

        <div className="interests-card">
          <span className="interests-label">INTERESTS</span>
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
