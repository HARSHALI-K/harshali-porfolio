import styles from './Skills.module.css';

interface SkillsProps {
  core: string[];
  frameworks: string[];
  styling: string[];
  tools: string[];
}

export default function Skills({ core, frameworks, styling, tools }: SkillsProps) {
  return (
    <div className={styles.skillsContainer}>
      <div className={styles.skillsGroup}>
        <h3 className={styles.skillsTitle}>Core Technologies</h3>
        <div className={styles.skillsList}>
          {core.map((skill) => (
            <span key={skill} className={styles.skillTag}>{skill}</span>
          ))}
        </div>
      </div>
      
      <div className={styles.skillsGroup}>
        <h3 className={styles.skillsTitle}>Frameworks & Libraries</h3>
        <div className={styles.skillsList}>
          {frameworks.map((skill) => (
            <span key={skill} className={styles.skillTag}>{skill}</span>
          ))}
        </div>
      </div>
      
      <div className={styles.skillsGroup}>
        <h3 className={styles.skillsTitle}>Styling & Design</h3>
        <div className={styles.skillsList}>
          {styling.map((skill) => (
            <span key={skill} className={styles.skillTag}>{skill}</span>
          ))}
        </div>
      </div>

      <div className={styles.skillsGroup}>
        <h3 className={styles.skillsTitle}>Tools & Testing</h3>
        <div className={styles.skillsList}>
          {tools.map((skill) => (
            <span key={skill} className={styles.skillTag}>{skill}</span>
          ))}
        </div>
      </div>
    </div>
  );
} 