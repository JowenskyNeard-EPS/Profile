import { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import Background from '../components/Background';
import FloatingElements from '../components/FloatingElements';
import { Project } from '../types';
import projects from '../data/projects.json';

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      <Background />
      <FloatingElements />
      <div className="bg-white/70 dark:bg-gray-900/90 backdrop-blur-sm transition-colors duration-300">
        <Head>
          <title>Jowensky Neard - Portfolio</title>
          <meta name="description" content="Portfolio showcasing my projects and skills" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <header className="container mx-auto px-4 py-8">
          <nav className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-800 dark:text-yellow-300">Jowensky Neard</h1>
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700"
            >
              {isDarkMode ? '🌞' : '🌙'}
            </button>
          </nav>
        </header>

        <main className="container mx-auto px-4 py-12">
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24"
          >
            <div className="space-y-6">
              <span className="text-xs font-mono text-awwwards-blue dark:text-blue-300">HELLO THERE</span>
              <h2 className="text-4xl md:text-6xl font-bold text-primary dark:text-white">
                I'm SKY
              </h2>
              <p className="text-xl text-gray-900 dark:text-gray-300 font-light">
                A passionate developer building amazing web experiences
              </p>
            </div>
            <div className="space-y-6">
              <h3 className="text-xl font-mono text-primary dark:text-white">About Me</h3>
              <div className="space-y-4 text-secondary dark:text-gray-200 font-light">
                <p>
                  Software developer with a passion for building cool, efficient, and scalable solutions. When I'm not coding, you'll find me hiking new trails, hitting a CrossFit WOD, or exploring new destinations. A tech enthusiast always on the lookout for the latest gadgets to tinker with.
                </p>
                <p>
                  Let's create something awesome! 🚀
                </p>
                <div className="flex gap-4 pt-4">
                  <a 
                    href="https://linkedin.com/in/jowenskyneard" 
                    className="text-sm font-mono text-awwwards-blue dark:text-blue-300 hover:underline"
                  >
                    LinkedIn →
                  </a>
                  <a 
                    href="https://github.com/jowensky" 
                    className="text-sm font-mono text-awwwards-blue dark:text-blue-300 hover:underline"
                  >
                    GitHub →
                  </a>
                  <a 
                    href="/resume.pdf"
                    className="text-sm font-mono text-awwwards-blue dark:text-blue-300 hover:underline"
                  >
                    Resume →
                  </a>
                </div>
              </div>
            </div>
          </motion.section>

          <section className="mb-16">
            <div className="flex items-center gap-4 mb-12">
              <h3 className="text-2xl font-mono text-primary dark:text-white">Selected Work</h3>
              <div className="h-[1px] flex-grow bg-gray-600 dark:bg-gray-700"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project: Project, index) => (
                <ProjectCard key={index} project={project} isFirstCard={index === 0} />
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
} 