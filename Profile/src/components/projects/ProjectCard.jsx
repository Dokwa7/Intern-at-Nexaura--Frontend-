function ProjectCard({ project }) {
  return (
    <a
      className="project-card"
      href={project.link}
      target={project.link !== "#" ? "_blank" : undefined}
      rel="noreferrer"
    >
      {project.image && (
        <div className="project-card-image">
          <img src={project.image} alt={project.title} />
        </div>
      )}

      <div className="project-card-body">
        <h3>{project.title}</h3>
        {/* <p className="project-tagline">{project.tagline}</p> */}
        <p className="project-description">{project.description}</p>

        {/* <div className="project-tags">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div> */}
      </div>
    </a>
  );
}

export default ProjectCard;
