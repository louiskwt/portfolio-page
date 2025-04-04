import React from "react";
import Card from "../components/Card";
import Meta from "../components/Meta";
import projects from "../public/projects/projects";
import styles from "../styles/Portfolio.module.css";

const META = {
  title: "Louis Tsang - Portfolio",
  desc: "Louis's home on the internet.",
  canonical: "https://www.louistsang.me/portfolio",
};

const portfolio = () => {
  return (
    <>
      <Meta title={META.title} desc={META.desc} canonical={META.canonical} />
      {/* Main Frame */}
      <main className="main" id="top">
        {/* Section Begins */}
        <section className="section">
          {/* Section heading */}
          <h2 className="section__title">My Portfolio</h2>
          <span className="section__subtitle">The works I have created so far...</span>
          {/* Projects container */}
          <div className={`${styles.projects__container}` + " container grid"}>
            {/* project content */}
            {projects
              .sort((a, b) => {
                return b.id - a.id;
              })
              .map((project, index) => (
                <Card key={index} link={project.link} repo={project.repo} technologies={project.technologies} title={project.title} />
              ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default portfolio;
