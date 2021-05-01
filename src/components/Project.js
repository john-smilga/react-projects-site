import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"
const Project = ({ name, image, url }) => {
  return (
    <Wrapper
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="project"
    >
      <GatsbyImage image={image} alt={name} className="img" />
      <footer>
        <h5>{name}</h5>
      </footer>
    </Wrapper>
  )
}

const Wrapper = styled.a`
  border-radius: var(--borderRadius);
  background: var(--white);
  box-shadow: var(--shadow-1);
  transition: var(--transition);

  &:hover {
    transform: scale(1.05);
    box-shadow: var(--shadow-2);
  }
  .img {
    width: 100%;
    display: block;
    border-top-left-radius: var(--borderRadius);
    border-top-right-radius: var(--borderRadius);
    height: 15rem;
    object-fit: cover;
  }

  footer {
    text-align: center;
    padding: 1rem 1.25rem;
    background: var(--white);
    border-bottom-left-radius: var(--borderRadius);
    border-bottom-right-radius: var(--borderRadius);
  }
  footer h5 {
    margin-bottom: 0;
    color: var(--grey-900);
    font-weight: 500;
  }
`

export default Project
