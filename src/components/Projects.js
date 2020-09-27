import React from "react"
import Project from "./Project"
const Projects = ({ title, projects }) => {
  return (
    <section className="section">
      <div className="section-title">
        <h2>{title}</h2>
        <div className="underline"></div>
      </div>
      <div className="section-center">
        {projects.map(project => (
          <Project key={project.id} {...project} />
        ))}
      </div>
    </section>
  )
}

export default Projects
