import styles from "./ProjectCard.module.css";

export default function ProjectCard() {
  return (
    <div className={styles.projectBrowser}>
      <h1 className={styles.header}>Projects</h1>
      <div className={styles.projectCards}>
        <a
          className={`${styles.link} ${styles.projectCard}`}
          href="https://www.rotdb.com/"
          target="_blank"
        >
          <div className={styles.heading}>
            <div>
              <h2 className={styles.title}>Runescape Damage Simulator</h2>
              <p className={styles.description}>Modular Calculation Pipeline</p>
            </div>
            <svg
              className={styles.icon}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 25 25"
            >
              <path
                fill="#f1f1f1"
                d="M18.92 6.05a.75.75 0 0 0-.598-.297L9.327 5.75a.75.75 0 1 0 0 1.5l7.19.002l-10.72 10.72a.75.75 0 0 0 1.061 1.06L17.573 8.318l.002 7.177a.75.75 0 0 0 1.5-.001l-.003-8.933a.75.75 0 0 0-.152-.51"
              />
            </svg>
          </div>

          <div className={styles.icons}>
            <div className={styles.techStack}>
              <i className={`devicon-java-plain ${styles.icon}`}></i>
              <i className={`devicon-spring-plain ${styles.icon}`}></i>
              <i className={`devicon-react-plain ${styles.icon}`}></i>
              <i className={`devicon-postgresql-plain ${styles.icon}`}></i>
            </div>
            <a
              className={styles.link}
              href="https://github.com/justice-ma/rotdb"
              target="_blank"
            >
              <i className={`devicon-github-plain ${styles.icon}`}></i>
            </a>
          </div>
        </a>
        <a
          className={`${styles.link} ${styles.projectCard}`}
          href="https://github.com/Syruphie/Capstone-project"
          target="_blank"
        >
          <div className={styles.heading}>
            <div>
              <h2 className={styles.title}>Capstone Project</h2>
              <p className={styles.description}>
                Laboratory Order Management System
              </p>
            </div>
            <svg
              className={styles.icon}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 25 25"
            >
              <path
                fill="#f1f1f1"
                d="M18.92 6.05a.75.75 0 0 0-.598-.297L9.327 5.75a.75.75 0 1 0 0 1.5l7.19.002l-10.72 10.72a.75.75 0 0 0 1.061 1.06L17.573 8.318l.002 7.177a.75.75 0 0 0 1.5-.001l-.003-8.933a.75.75 0 0 0-.152-.51"
              />
            </svg>
          </div>

          <div className={styles.icons}>
            <div className={styles.techStack}>
              <i className={`devicon-php-plain ${styles.icon}`}></i>
              <i className={`devicon-javascript-plain ${styles.icon}`}></i>
              <i className={`devicon-mysql-plain ${styles.icon}`}></i>
            </div>
            <a
              className={styles.link}
              href="https://github.com/Syruphie/Capstone-project"
              target="_blank"
            >
              <i className={`devicon-github-plain ${styles.icon}`}></i>
            </a>
          </div>
        </a>
      </div>
    </div>
  );
}
