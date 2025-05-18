'use client';

import { useState } from 'react';
import Skills from './components/Skills';
import TabNavigation from './components/TabNavigation';
import Avatar from './components/Avatar';
import styles from './page.module.css';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  link?: string;
}

export default function Home() {
  const [activeTab, setActiveTab] = useState('about');

  const projects: Project[] = [
    {
      id: 1,
      title: "Modern E-commerce UI",
      description: "A responsive e-commerce interface with advanced animations, cart functionality, and real-time product filtering",
      technologies: ["React", "Next.js", "Framer Motion", "CSS Modules"],
      link: "https://example.com/ecommerce"
    },
    {
      id: 2,
      title: "Dashboard Analytics",
      description: "An interactive dashboard with data visualization, dark mode, and customizable widgets",
      technologies: ["TypeScript", "React", "Chart.js", "Styled Components"],
      link: "https://example.com/dashboard"
    },
    {
      id: 3,
      title: "Social Media App UI",
      description: "A modern social media interface with infinite scroll, story features, and real-time updates",
      technologies: ["Next.js", "TailwindCSS", "React Query", "Socket.io"],
      link: "https://example.com/social"
    }
  ];

  const skills = {
    core: ["HTML5", "CSS3", "JavaScript", "TypeScript", "Responsive Design", "Web Accessibility"],
    frameworks: ["React", "Next.js", "Vue.js", "Gatsby"],
    styling: ["TailwindCSS", "Styled Components", "CSS Modules", "Sass", "CSS-in-JS"],
    tools: ["Git", "Webpack", "Vite", "Figma", "Chrome DevTools", "Jest", "React Testing Library"]
  };

  return (
    <>
      <main className={styles.mainContent}>
        <div className={styles.profileCard}>
          <div className={styles.profileHeader}>
            <div className={styles.avatarContainer}>
              <Avatar className={styles.avatar} size={120} seed="Sangram" />
            </div>
            <div className={styles.profileInfo}>
              <h1 className={styles.profileTitle}>Sangram Neromonk</h1>
              <p className={styles.profileSubtitle}>Frontend Developer</p>
            </div>
          </div>

          <div className={styles.contentSection}>
            <div className={`${styles.aboutContent} ${activeTab === 'about' ? styles.active : ''}`}>
              <p className={styles.aboutText}>
                Hi! I&apos;m a passionate Frontend Developer specializing in creating beautiful, responsive, and user-friendly web applications. 
                With a keen eye for design and a love for clean code, I transform creative concepts into seamless user experiences. 
                I&apos;m particularly enthusiastic about modern JavaScript frameworks, animation techniques, and building accessible interfaces.
              </p>
              <div className={styles.quickInfo}>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>Experience</span>
                  <span className={styles.infoValue}>5+ Years</span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>Projects</span>
                  <span className={styles.infoValue}>20+</span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>Specialty</span>
                  <span className={styles.infoValue}>UI/UX</span>
                </div>
              </div>
            </div>

            <div className={`${styles.skillsContent} ${activeTab === 'skills' ? styles.active : ''}`}>
              <Skills
                core={skills.core}
                frameworks={skills.frameworks}
                styling={skills.styling}
                tools={skills.tools}
              />
            </div>

            <div className={`${styles.projectsContent} ${activeTab === 'projects' ? styles.active : ''}`}>
              {projects.map((project) => (
                <div key={project.id} className={styles.projectCard}>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <p className={styles.projectDescription}>{project.description}</p>
                  <div className={styles.projectTech}>
                    {project.technologies.map((tech) => (
                      <span key={tech} className={styles.techTag}>{tech}</span>
                    ))}
                  </div>
                  {project.link && (
                    <a href={project.link} className={styles.projectLink} target="_blank" rel="noopener noreferrer">
                      View Project
                    </a>
                  )}
                </div>
              ))}
            </div>

            <div className={`${styles.contactContent} ${activeTab === 'contact' ? styles.active : ''}`}>
              <div className={styles.contactInfo}>
                <div className={styles.contactItem}>
                  <span className={styles.contactLabel}>Email</span>
                  <a href="mailto:your.email@example.com" className={styles.contactValue}>
                    your.email@example.com
                  </a>
                </div>
                <div className={styles.contactItem}>
                  <span className={styles.contactLabel}>LinkedIn</span>
                  <a href="https://linkedin.com/in/yourprofile" className={styles.contactValue} target="_blank" rel="noopener noreferrer">
                    linkedin.com/in/yourprofile
                  </a>
                </div>
                <div className={styles.contactItem}>
                  <span className={styles.contactLabel}>CodePen</span>
                  <a href="https://codepen.io/yourusername" className={styles.contactValue} target="_blank" rel="noopener noreferrer">
                    codepen.io/yourusername
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
    </>
  );
}
