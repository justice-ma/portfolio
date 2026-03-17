import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section
      className={styles.contactSection}
      aria-labelledby="contact-heading"
    >
      <h2 id="contact-heading" className={styles.header}>
        Contact
      </h2>
      <p className={styles.lead}>
        Open to backend and full-stack opportunities. Reach out anytime.
      </p>

      <div className={styles.contactGrid}>
        <a
          className={styles.contactCard}
          href="mailto:justice.mazerolle@gmail.com"
        >
          <span className={styles.label}>Email</span>
          <span className={styles.value}>justice.mazerolle@gmail.com</span>
        </a>

        <a
          className={styles.contactCard}
          href="https://www.linkedin.com/in/justice-mazerolle-119690336/"
          target="_blank"
        >
          <span className={styles.label}>LinkedIn</span>
          <span className={styles.value}>
            linkedin.com/in/justice-mazerolle-119690336
          </span>
        </a>

        <a
          className={styles.contactCard}
          href="https://github.com/justice-ma"
          target="_blank"
        >
          <span className={styles.label}>GitHub</span>
          <span className={styles.value}>github.com/justice-ma</span>
        </a>
      </div>
    </section>
  );
}
