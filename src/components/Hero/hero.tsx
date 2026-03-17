import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <div className={styles.heroSection}>
      <div className={styles.head}>
        <h1 className={styles.name}>Justice Mazerolle</h1>
        <h2 className={styles.title}>Full-Stack Engineer</h2>
      </div>
      <img className={styles.heroPicture} src="/hero-picture.png"></img>
      <div>
        <p className={styles.details}>
          Backend-oriented developer focused on{" "}
          <span className={styles.important}>Java </span>backend systems and{" "}
          <span className={styles.important}>data-driven</span> applications
        </p>
      </div>
      <div className={styles.links}>
        <a
          className={styles.link}
          href="https://www.linkedin.com/in/justice-mazerolle-119690336/"
          target="_blank"
        >
          <i className="devicon-linkedin-plain"></i>
        </a>
        <a
          className={styles.link}
          href="https://github.com/justice-ma/"
          target="_blank"
        >
          <i className="devicon-github-original"></i>
        </a>
      </div>
    </div>
  );
}
