import React from "react"
import Layout from "../components/layout"
import Projects from "../components/Projects"
import SEO from "../components/seo"
import { graphql } from "gatsby"
const url =
  "https://www.udemy.com/course/react-tutorial-and-projects-course/?couponCode=REACT-SEPT-2020"
const IndexPage = ({
  data: {
    allAirtable: { nodes: projects },
  },
}) => {
  const formattedProjects = projects.map(project => {
    return {
      id: project.id,
      ...project.data,
      image: project.data.image.localFiles[0].childImageSharp.fluid,
    }
  })
  const basicProjects = formattedProjects.filter(
    project => project.type === "basic"
  )
  return (
    <Layout>
      <SEO title="React Projects"></SEO>
      <header className="hero">
        <h1>react projects</h1>
      </header>
      <div className="course-link">
        <a href={url} target="_blank" rel="noopener noreferrer">
          start course
        </a>
      </div>
      <Projects title="basic projects" projects={basicProjects} />
    </Layout>
  )
}

export const query = graphql`
  {
    allAirtable(sort: { fields: data___order, order: ASC }) {
      nodes {
        data {
          url
          type
          order
          name
          image {
            localFiles {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        id
      }
    }
  }
`

export default IndexPage
