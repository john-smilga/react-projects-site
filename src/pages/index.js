import React from "react"
import { graphql } from "gatsby"
import Hero from "../components/Hero"
import Projects from "../components/Projects"
import Seo from "../components/seo"
const HomePage = ({ data }) => {
  const {
    allAirtable: { nodes: projects },
  } = data
  const formattedProjects = projects.map((project) => {
    return {
      id: project.id,
      ...project.data,
      image: project.data.image.localFiles[0].childImageSharp.gatsbyImageData,
    }
  })
  const basicProjects = formattedProjects
    .filter((project) => project.type === "basic")
    .sort((a, b) => a.order - b.order)
  const advancedProjects = formattedProjects
    .filter((project) => project.type === "advanced")
    .sort((a, b) => a.order - b.order)
  const finalProjects = formattedProjects
    .filter((p) => p.type === "final")
    .sort((a, b) => a.order - b.order)
  return (
    <>
      <Seo title="React Projects" />
      <Hero />
      <Projects title="basic projects" projects={basicProjects} />
      <Projects title="course exclusive" projects={advancedProjects} />
      <Projects title="large-scale projects" projects={finalProjects} />
    </>
  )
}

export const query = graphql`
  {
    allAirtable(sort: { fields: data___order, order: ASC }) {
      nodes {
        id
        data {
          name
          order
          type
          url
          image {
            localFiles {
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
              }
            }
          }
        }
      }
    }
  }
`

export default HomePage
