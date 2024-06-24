"use client";

import { Project } from '../types'; // Import the Project type

type ProjectsProps = {
  projects: Project[];
};

const Projects = ({ projects }: ProjectsProps) => {
  return (
    <section id="projects" className="projects">
      <h1>Projects</h1>
      <ul>
        {projects.map((project) => (
          <li key={project.title}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <ul>
              {project.technologies.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
            <a href={project.url}>View Project</a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
