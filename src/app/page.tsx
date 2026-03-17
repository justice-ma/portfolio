import About from "@/components/About/about";
import Hero from "@/components/Hero/hero";
import ProjectCard from "@/components/ProjectCard/projectCard";
import Skills from "@/components/Skills/skills";
import styles from "./Page.module.css";

export default function Home() {
  return (
    <main>
      <div className={styles.displayColumns}>
        <div className={styles.hero}>
          <Hero />
        </div>
        <div>
          <About />
          <ProjectCard />
          <Skills />
        </div>
      </div>
    </main>
  );
}
