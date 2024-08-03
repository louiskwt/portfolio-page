import {UilArrowRight, UilFileDownload} from "@iconscout/react-unicons";
import Link from "next/link";
import React from "react";
import Meta from "../components/Meta";
import styles from "../styles/About.module.css";

const META = {
  title: "Louis Tsang - About",
  desc: "A Software Engineer based in Hong Kong specialised in developing web applications and web services. Always strive to deliver code that can bring joy to end users and make a impact.",
  canonical: "https://www.louistsang.me/about",
};

const About = () => {
  return (
    <>
      <Meta title={META.title} desc={META.desc} canonical={META.canonical} />
      {/* Main Container */}
      <main className="main">
        {/* About Section */}
        <section className="section">
          {/* Section headings */}
          <h2 className="section__title">About Me</h2>
          <span className="section__subtitle">My Background</span>
          <div className={`${styles.about__container}` + " container grid"}>
            {/* About data */}
            <div className={styles.about__data}>
              {/* Self-description */}
              <p className={styles.about__description}>
                A software engineer who strives to make an impact with code
                <br />
                <br />
                This page is created by Square One Software Company
              </p>
              {/* About info */}
              <div className={styles.about__info}>
                <div>
                  <span className={styles.about__info__title}>2.5</span>
                  <span className={styles.about__info__name}>
                    Years <br />
                    experience
                  </span>
                </div>
                <div>
                  <span className={styles.about__info__title}>05</span>
                  <span className={styles.about__info__name}>
                    Projects <br />
                    Completed
                  </span>
                </div>
              </div>
              {/* Buttons */}
              <div className={styles.about__buttons}>
                {/* CV Download */}
                <a download href="pdf/Tsang_Ka_Wing_CV.pdf" target="_blank" className="button button__flex">
                  Download my CV <UilFileDownload className="button__icon" />
                </a>
                {/* Link to Portfolio */}
                <Link href="/portfolio">
                  <span className="button__flex button__link about__button">
                    View My Work
                    <UilArrowRight className="button__icon" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default About;
