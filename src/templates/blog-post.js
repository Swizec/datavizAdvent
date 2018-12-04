import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import PostHeader from '../components/PostHeader'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'
import ReactPlayer from 'react-player'
import styled from 'styled-components'
import Footer from '../components/Footer'
import Header from '../components/Header'
import DripEmail from '../components/DripEmail'
import SocialShare from '../components/SocialShare'
import Prism from 'prismjs'
import '../components/prism.css'

import SolutionBlock from '../components/SolutionBlock'

const Wrapper = styled.div`
  margin: 0 auto;

  .Middle {
    max-width: 960px;
    margin: 12rem auto;
    padding: 0 2rem;
  }
  .HeadTop {
    text-align: center;
  }
`
const Codesandbox = styled.iframe`
  width: 100%;
  height: 500px;
`

const Lead = styled.p`
  font-size: 1.3em;
`

class BlogPostTemplate extends React.Component {
  componentDidMount() {
    Prism.highlightAll()
  }
  render() {
    const { children, data, location, ...props } = this.props,
      { mdx } = data,
      { frontmatter } = mdx

    const gotVideo = frontmatter.videoId !== 'NA',
      gotSandbox = frontmatter.codesandboxId !== 'NA'

    return (
      <Layout location={location}>
        <Wrapper>
          <Header />
          <div className="Middle">
            <div className="HeadTop">
              <Helmet
                title={`${frontmatter.title} | ${data.site.siteMetadata.title}`}
              >
                <meta itemprop="name" content={`${frontmatter.title}`} />
                <meta
                  itemprop="description"
                  content={`${frontmatter.title} | ${
                    data.site.siteMetadata.title
                  }`}
                />
                <meta
                  itemprop="image"
                  content="https://reactviz.holiday/reactvizholiday.png"
                />

                <meta
                  property="og:url"
                  content={`${frontmatter.title} | ${
                    data.site.siteMetadata.title
                  }`}
                />
                <meta property="og:type" content="website" />
                <meta
                  property={`${frontmatter.title} | ${
                    data.site.siteMetadata.title
                  }`}
                />
                <meta
                  property="og:description"
                  content={`${frontmatter.title} | ${
                    data.site.siteMetadata.title
                  }`}
                />
                <meta
                  property="og:image"
                  content="https://reactviz.holiday/reactvizholiday.png"
                />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={`${frontmatter.title}`} />
                <meta
                  name="twitter:description"
                  content={`${frontmatter.title} | ${
                    data.site.siteMetadata.title
                  }`}
                />
                <meta
                  name="twitter:image"
                  content="https://reactviz.holiday/reactvizholiday.png"
                />
                <script type="text/javascript">{`
                  var _dcq = _dcq || [];
                  var _dcs = _dcs || {};
                  _dcs.account = '4947882';

                  (function() {
                      var dc = document.createElement('script');
                      dc.type = 'text/javascript'; dc.async = true;
                      dc.src = '//tag.getdrip.com/4947882.js';
                      var s = document.getElementsByTagName('script')[0];
                      s.parentNode.insertBefore(dc, s);
                  })();
                  `}</script>
                <script
                  async
                  defer
                  src="https://cdn.simpleanalytics.io/hello.js"
                />
                <noscript>
                  {`<img src="https://api.simpleanalytics.io/hello.gif" alt="" />`}
                </noscript>

                <html lang="en" />
              </Helmet>
              <PostHeader postdate={frontmatter.date} />
              <h1>{frontmatter.title}</h1>
            </div>

            {gotVideo ? (
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${frontmatter.videoId}`}
              />
            ) : null}

            <Lead>{frontmatter.intro}</Lead>

            <Lead>
              <strong>Dataset:</strong>{' '}
              <a href={`/datasets/${frontmatter.dataset}`}>
                Download dataset 🗳{' '}
              </a>
            </Lead>

            {gotSandbox ? (
              <React.Fragment>
                <h2>My solution 👇</h2>
                <Codesandbox
                  src={`https://codesandbox.io/embed/${
                    frontmatter.codesandboxId
                  }`}
                  class="embedded-codesandbox"
                  sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
                />
              </React.Fragment>
            ) : null}

            {!gotSandbox ? <SolutionBlock date={frontmatter.date} /> : null}

            <div>
              <h2>How it works ⚙️</h2>
              <MDXRenderer scope={this.props.__mdxScope}>
                {mdx.code.body}
              </MDXRenderer>
            </div>
            <hr />
            <DripEmail />
            <SocialShare />
          </div>
          <Footer />
        </Wrapper>
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
        dataset
        image {
          publicURL
          childImageSharp {
            sizes(maxWidth: 1240) {
              srcSet
            }
          }
        }
      }
    }
  }
`
