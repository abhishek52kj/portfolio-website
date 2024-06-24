import { FC } from 'react';
import { Project } from '../types';

type ProjectsProps = {
  projects: Project[];
};

const Projects: FC<ProjectsProps> = ({ projects }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      <ul>
        {projects.map((project) => (
          <li key={project.url}>
            <h3 className="text-xl font-semibold">
              {project.title} <span>{project.year}</span>
            </h3>
            <p>{project.description}</p>
            <ul className="flex space-x-2">
              {(project.technologies ?? []).map((tech, index) => (
                <li key={`${project.url}-${tech}-${index}`}>{tech}</li>
              ))}
            </ul>
            <a href={project.url} className="text-blue-500 hover:underline">
              View Project
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
