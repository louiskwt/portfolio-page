import {UilGithubAlt, UilLinkedinAlt, UilTwitterAlt} from "@iconscout/react-unicons";
import Meta from "../components/Meta";
import styles from "../styles/Home.module.css";

const META = {
  title: "Louis Tsang - Software Engineer",
  desc: "A Professional Software Engineer based in Hong Kong specialised in developing web applications and web services. Always strive to deliver code that can bring joy to end users and make a impact.",
  canonical: "https://www.louistsang.me/",
};

export default function Home() {
  return (
    <>
      <Meta title={META.title} desc={META.desc} canonical={META.canonical} />
      <main className="main">
        {/* Home Seciton */}
        <section className="section" id="home">
          <div className={`${styles.home__content}` + " container flex"}>
            {/* Social Links */}
            <div className={styles.home__social}>
              <a href="https://www.linkedin.com/in/ka-wing-tsang-689344153/" target="_blank" className={styles.home__social__icon}>
                <UilLinkedinAlt size="40" />
              </a>
              <a href="https://github.com/louiskwt" target="_blank" className={styles.home__social__icon}>
                <UilGithubAlt size="40" />
              </a>
              <a href="https://x.com/kawingt2" target="_blank" className={styles.home__social__icon}>
                <UilTwitterAlt size="40" />
              </a>
            </div>
            <div className={styles.home__data}>
              <h1 className={styles.home__title}>Hi, this's Louis</h1>
              <h3>A developer based in Hong Knog</h3>
              <p className={styles.home__description}>
                I'm passionate about learning computer science, teaching, and building things with technology. My current goal is to level up my skills and knowledge so that I can work on building large scale systems to tackle meaningful problems in real life.
                <br />
                <br />
                Right now, I'm fully committed to dive deeper into computer science and catch up with the current trend of AI and ML. If you want to connect feel free to find me on social media or check my github as well. I'm also open to work on a project if I'm a good fit and the problems that you or your team is trying to solve interest me.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
