import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { graphql } from 'gatsby'

import Card from './Card'
import Rectangle from '../assets/Rectangle.png'

const Wrapper = styled.div`
  display: grid;
  grid-gap: 20px;
  align-items: center;
  justify-items: center;
  grid-template-columns: repeat(5, 1fr);
  margin: 0 auto;
  padding: 3rem 0;
  max-width: 1200px;

  @media (max-width: 1100px) {
    display: grid;
    grid-gap: 20px;
    align-items: center;
    justify-items: center;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  @media (max-width: 940px) {
    display: grid;
    grid-gap: 20px;
    align-items: center;
    justify-items: center;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  @media (max-width: 840px) {
    display: grid;
    grid-gap: 20px;
    align-items: center;
    justify-items: center;
    grid-template-columns: 1fr 1fr 1fr;
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
  return (
    <Wrapper>
      {posts.map(({ node }, i) => (
        <Card
          title={
            <Link to={node.fields.slug}>
              Day {i + 1}: {node.frontmatter.title}
            </Link>
          }
          image={Rectangle}
          key={node.id}
        />
      ))}
    </Wrapper>
  )
}
