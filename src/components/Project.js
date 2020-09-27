import React from "react"
import Image from "gatsby-image"
const Project = ({ id, name, image, url }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="project">
      <article>
        <Image fluid={image} />
        <footer>
          <h4>{name}</h4>
        </footer>
      </article>
    </a>
  )
}

export default Project
