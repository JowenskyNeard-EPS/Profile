import { motion } from 'framer-motion';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  isFirstCard?: boolean;
}

const ProjectCard = ({ project, isFirstCard }: ProjectCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      className="group relative bg-white dark:bg-awwwards-dark rounded-none overflow-hidden w-full max-w-[400px]"
    >
      <div className="p-6 sm:p-8 bg-white dark:bg-awwwards-dark rounded-none overflow-hidden w-full max-w-[400px]">
        <div className="flex flex-col h-full">
          <div className={`flex-grow ${isFirstCard ? 'min-h-[270px]' : 'min-h-[250px]'}`}>
            <div className="flex justify-between items-start mb-4">
              <h4 className="text-2xl font-mono text-primary dark:text-white">{project.title}</h4>
              <span className="text-xs font-mono text-secondary dark:text-gray-400">
                {new Date().getFullYear()}
              </span>
            </div>
            <p className="text-secondary dark:text-gray-400 mb-4 font-light">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
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
          </div>
          <div className="flex justify-between items-center mt-2">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-mono text-secondary hover:text-awwwards-blue transition-colors"
            >
              Source →
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard; 