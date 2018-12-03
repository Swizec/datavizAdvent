import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
<<<<<<< HEAD
import get from 'lodash/get'
import Layout from '../components/Layout'

=======
import Layout from '../components/layout'
import PostHeader from '../components/PostHeader'
>>>>>>> b67fb2e548c215424d6dfe8feae00a114447ebe7
import MDXRenderer from 'gatsby-mdx/mdx-renderer'
import ReactPlayer from 'react-player'
import styled from 'styled-components'
import Footer from '../components/Footer'

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 960px;
`
const Codesandbox = styled.iframe`
  width: 100%;
  height: 500px;
`

const Lead = styled.p`
  font-size: 1.3em;
`

class BlogPostTemplate extends React.Component {
  render() {
    const { children, data, location, ...props } = this.props,
      { mdx } = data,
      { frontmatter } = mdx

    return (
<<<<<<< HEAD
      <Layout location={this.props.location}>
        <Helmet title={`${post.frontmatter.title} | ${siteTitle}`} />
        
        <h1>{post.frontmatter.title}</h1>
        <div>
          <MDXRenderer scope={this.props.__mdxScope}>
            {post.code.body}
          </MDXRenderer>
        </div>
=======
      <Layout location={location}>
        <Wrapper>
          <Helmet
            title={`${frontmatter.title} | ${data.site.siteMetadata.title}`}
          />
          <PostHeader postdate={frontmatter.date} />
          <h1>{frontmatter.title}</h1>

          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${frontmatter.videoId}`}
          />

          <Lead>{frontmatter.intro}</Lead>

          <h2>Try it out 👇</h2>
          <Codesandbox
            src={`https://codesandbox.io/embed/${frontmatter.codesandboxId}`}
            class="embedded-codesandbox"
            sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
          />

          <div>
            <MDXRenderer scope={this.props.__mdxScope}>
              {mdx.code.body}
            </MDXRenderer>
          </div>
          <Footer />
        </Wrapper>
>>>>>>> b67fb2e548c215424d6dfe8feae00a114447ebe7
      </Layout>
    )
  }
}

export default BlogPostTemplate

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
      }
    }
  }
`
