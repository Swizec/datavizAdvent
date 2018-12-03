import React, { Component } from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import CardList from '../components/CardList'
import DripEmail from '../components/DripEmail'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { graphql } from 'gatsby'

export default class index extends Component {
  render() {
    const { data } = this.props

    return (
      <Layout>
        <Header />
        <Hero />
        <DripEmail />
        <CardList posts={data.allMdx.edges} />
        <Footer />
      </Layout>
    )
  }
}

export const query = graphql`
  {
    allMdx(sort: { fields: [frontmatter___date], order: ASC }, limit: 1000) {
      edges {
        node {
          id
          code {
            scope
          }
          fields {
            slug
          }
          frontmatter {
            title
            date
            videoId
            codesandboxId
          }
        }
      }
    }
  }
`
