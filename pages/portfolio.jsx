import React from 'react'
import Meta from '../components/Meta';
import projects from '../public/projects/projects';
import Card from '../components/Card';
import styles from '../styles/Portfolio.module.css'

const META = {
  "title": "Louis Tsang - Portfolio",
  "desc": "A Software Engineer based in Hong Kong specialised in developing web applications and web services. Always strive to deliver code that can bring joy to end users and make a impact.",
  "canonical": 'https://www.louistsang.me/portfolio'
}

const portfolio = () => {
    
  return (
    <>
        <Meta title={META.title} desc={META.desc} canonical={META.canonical} />
        {/* Main Frame */}
        <main className="main" id="top">
            {/* Section Begins */}
            <section className="section">
                {/* Section heading */}
                <h2 className="section__title">
                    My Portfolio
                </h2>
                <span className="section__subtitle">
                    Showcasing the work I have done
                </span>
                {/* Projects container */}
                  <div className={`${styles.projects__container}` + " container grid"}>
                    {/* project content */}
                    {projects.map((project, index) => <Card index={index}  link={project.link} repo={project.repo} technologies={project.technologies} title={project.title} />)}
                </div>
            </section>
        </main>
    </>
  )
}

export default portfolio