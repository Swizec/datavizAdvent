import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { graphql } from 'gatsby'

import Card from './Card'

const Wrapper = styled.div`
  display: grid;
  grid-gap: 20px;
  align-items: center;
  justify-items: center;
  grid-template-columns: repeat(4, 1fr);
  margin: 0 auto;
  padding: 3rem 0;
  max-width: 1300px;

  @media (max-width: 1100px) {
    display: grid;
    grid-gap: 20px;
    align-items: center;
    justify-items: center;
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (max-width: 940px) {
    display: grid;
    grid-gap: 20px;
    align-items: center;
    justify-items: center;
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 840px) {
    display: grid;
    grid-gap: 20px;
    align-items: center;
    justify-items: center;
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 740px) {
    display: grid;
    grid-gap: 20px;
    align-items: center;
    justify-items: center;
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 640px) {
    display: grid;
    grid-gap: 20px;
    align-items: center;
    justify-items: center;
    grid-template-columns: 1fr;
  }
`

export default ({ posts }) => {
  console.log(posts)
  return (
    <Wrapper>
      {posts.map(({ node }, i) => (
        <Card
          title={
            <Link to={node.fields.slug}>
              Day {i + 1}: {node.frontmatter.title}
            </Link>
          }
          
          cover={<Link to={node.fields.slug}><img src={node.frontmatter.image && node.frontmatter.image.publicURL} alt='datavis'/></Link>}

          key={node.id}
        />
      ))}
    </Wrapper>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      code {
        body
      }
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        videoId
        codesandboxId
        intro
        dataset
        image {
          publicURL
          childImageSharp {
            fluid(maxWidth: 1240) {
              srcSet
            }
          }
        }
      }
    }
  }
`
