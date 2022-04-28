import React from 'react'
import Meta from '../components/Meta';
import projects from '../public/projects/projects';
import Card from '../components/Card';


const portfolio = () => {
    console.log(projects)
  return (
    <>
        <Meta title={'My Wrok'} />
        {/* Main Frame */}
        <main className="main" id="top">
            {/* Section Begins */}
            <section className="portfolio section">
                {/* Section heading */}
                <h2 className="section__title">
                    My Portfolio
                </h2>
                <span className="section__subtitle">
                    Showcasing the work I have done
                </span>
                {/* Projects container */}
                <div className="projects__container container grid">
                    {/* project content */}
                    {projects.map((project, index) => <Card index={index}  link={project.link} repo={project.repo} technologies={project.technologies} title={project.title} />)}
                </div>
            </section>
        </main>
    </>
  )
}

export default portfolio