import { projects } from "../../data/projects";
import ProjectCard from "./ProjectCard";
import "./Project.css";

function Projects() {
  return (
    <section id="projects" className="projects">
      <span className="eyebrow">Things I've built</span>
      <div className="projects-list">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
