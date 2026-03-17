import styles from "./Skills.module.css";

type Skill = {
  name: string;
  iconClass?: string;
};

const skills: Skill[] = [
  { name: "Java", iconClass: "devicon-java-plain" },
  { name: "Spring Boot", iconClass: "devicon-spring-plain" },

  { name: "PostgreSQL", iconClass: "devicon-postgresql-plain" },
  { name: "MySQL", iconClass: "devicon-mysql-plain" },
  { name: "React", iconClass: "devicon-react-original" },
  { name: "Next.js", iconClass: "devicon-nextjs-plain" },
  { name: "TypeScript", iconClass: "devicon-typescript-plain" },
  { name: "CSS Modules", iconClass: "devicon-css3-plain" },
  { name: "SQL Data Modeling", iconClass: "devicon-azuresqldatabase-plain" },
  { name: "JUnit", iconClass: "devicon-junit-plain" },

  { name: "Git/GitHub", iconClass: "devicon-git-plain" },
  { name: "Docker", iconClass: "devicon-docker-plain" },
  { name: "Postman", iconClass: "devicon-postman-plain" },
  { name: "REST APIs" },
  { name: "Integration Testing" },
];

export default function Skills() {
  return (
    <section className={styles.skillsSection} aria-labelledby="skills-heading">
      <h2 id="skills-heading" className={styles.header}>
        Skills
      </h2>
      <ul className={styles.skillList}>
        {skills.map((skill) => (
          <li key={skill.name} className={styles.skillItem}>
            {skill.iconClass ? (
              <i className={`${skill.iconClass} ${styles.icon}`}></i>
            ) : (
              <span className={styles.fallbackIcon} aria-hidden="true">
                •
              </span>
            )}
            <span className={styles.skillName}>{skill.name}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
