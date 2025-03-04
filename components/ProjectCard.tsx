import { motion } from 'framer-motion';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      className="group relative bg-white dark:bg-awwwards-dark rounded-none overflow-hidden w-full max-w-[400px]"
    >
      <div className="p-6 sm:p-8 border border-gray-100 dark:border-gray-800 hover:border-awwwards-blue 
                    transition-all duration-300 min-h-[300px]">
        <div className="flex justify-between items-start mb-6">
          <h4 className="text-2xl font-mono text-primary dark:text-white">{project.title}</h4>
          <span className="text-xs font-mono text-secondary dark:text-gray-400">
            {new Date().getFullYear()}
          </span>
        </div>
        <p className="text-secondary dark:text-gray-400 mb-6 font-light">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs font-mono border border-gray-200 dark:border-gray-700 
                       text-secondary dark:text-gray-400"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex justify-between items-end">
          <div className="flex gap-4">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-mono text-secondary hover:text-awwwards-blue transition-colors"
            >
              Source →
            </a>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-mono text-awwwards-blue hover:underline"
            >
              Visit Site
            </a>
          </div>
          <motion.div
            whileHover={{ rotate: 90 }}
            className="text-awwwards-blue text-2xl font-mono"
          >
            +
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard; 