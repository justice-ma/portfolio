import styles from "./About.module.css";

export default function About() {
  return (
    <div className={styles.aboutSection}>
      <div className={styles.heading}>
        <h2 className={styles.header}>About Me</h2>
        <p className={styles.lead}>
          Backend-focused developer building data-driven and
          performance-oriented systems.
        </p>
      </div>
      <div className={styles.about}>
        <div className={styles.left}>
          <p>
            I’m currently wrapping up a Software Development diploma at SAIT.
            Most recently, I’ve been developing a{" "}
            <span className={styles.accent}>
              RuneScape ability damage calculator and rotation builder
            </span>
            , designed around a modular calculation pipeline to handle complex
            combat mechanics and layered modifiers.
          </p>
        </div>

        <div className={styles.right}>
          <p>
            The project focuses heavily on clean architecture, maintainability,
            and accurate simulation of real-world systems. I’m particularly
            interested in system design, data modeling, and building tools that
            require both technical depth and thoughtful structure.
          </p>
        </div>
      </div>
    </div>
  );
}
