import React from "react"
import styled from "styled-components"
import heroImg1 from "../assets/hero-1.svg"

const Hero = () => {
  return (
    <Wrapper>
      <div className="hero-center">
        <div className="hero-title">
          <h1>React Projects</h1>
          <p>
            Projects are the most practical way to learn any language, and
            <span> React </span> is no exception. Solidify your knowledge of
            React by creating these cool projects.
          </p>
          <a
            href="https://www.udemy.com/course/react-tutorial-and-projects-course/?referralCode=FEE6A921AF07E2563CEF"
            target="_blank"
            rel="noreferrer"
            className="btn hero-btn"
          >
            join the course
          </a>
        </div>
        <img src={heroImg1} alt="web development" className="img" />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  min-height: 40vh;
  background: var(--white);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5rem 0;
  img {
    display: none;
  }
  .hero-center {
    width: 90vw;
    max-width: var(--max-width);
  }
  @media (min-width: 992px) {
    min-height: 60vh;

    .hero-center {
      display: grid;
      grid-template-columns: 1fr 1fr;
      place-items: center;
      gap: 2rem;
    }
    img {
      display: block;
    }
  }
  .hero-title h1 {
    color: var(--black-design);
    margin: 0;
  }
  .hero-title p {
    margin: 2rem 0;
    color: var(--grey-900);
    font-size: 1.25rem;
  }
  .hero-title span {
    letter-spacing: 5px;
    border-bottom: 2px solid var(--primary-design);
    margin: 0 0.5rem;
    text-align: center;
    display: inline-block;
    text-align: center;
    line-height: 1.25;
    font-style: italic;
    font-weight: 900;
  }
  .hero-btn {
    display: inline-block;
    background: var(--primary-design);
    color: var(--black-design);
    font-weight: 500;
    text-transform: uppercase;
    padding: 0.75rem 1.25rem;
    box-shadow: var(--shadow-1);
    animation: bounce 2s infinite;
  }
  .hero-btn:hover {
    background: var(--yellow-dark);
    box-shadow: var(--shadow-2);
    color: var(--primary-design);
  }
`

export default Hero
