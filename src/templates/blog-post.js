import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import { Link } from 'gatsby'

import Layout from '../components/Layout'
import PostHeader from '../components/PostHeader'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'
import ReactPlayer from 'react-player'
import styled from 'styled-components'
import Footer from '../components/Footer'
import PostImage from '../components/PostImage'
import DripEmail from '../components/DripEmail'
import SocialShare from '../components/SocialShare'
import Prism from 'prismjs'
import '../components/prism.css'

import SolutionBlock from '../components/SolutionBlock'

const Wrapper = styled.div`
  margin: 0 auto;

  .Middle {
    max-width: 960px;
    margin: 0rem auto;
    padding: 0 2rem;
  }
  .HeadTop {
    text-align: center;
    margin: 0 auto;
    
  }
  .player-wrapper {
    position: relative;
    height: 520px;
  }
  .react-player {
    position: absolute;
    top: 0;
    left: 0;
  }
`
const WrapperNav = styled.div`
  .Prev,
  .Next {
    max-width: 200px;
    text-decoration: none;
    background-color: #420000;
    background-image: linear-gradient(45deg, #a30000 39%, #a30000 100%);
    padding: 20px;
    border-radius: 20px;
    box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.25);
    list-style-type: none;
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  }
  margin: 3rem 1rem;
  display: grid;
  grid-gap: 10px;
  align-items: center;
  justify-items: center;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: 'G1 G2';

  .Prev {
    grid-area: G1;
  }
  .Prev:hover {
    transform: scale(1.1, 1.1);
  }
  .Next {
    grid-area: G2;
  }
  .Next:hover {
    transform: scale(1.1, 1.1);
  }
`
const Codesandbox = styled.iframe`
  width: 100%;
  height: 500px;
  @media (max-width: 940px) {
    height: 200px;
  }
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

    const { previous, next } = this.props.pageContext

      const imageURL =
        (frontmatter.image && frontmatter.image.publicURL) 

    return (
      <Layout location={location}>
        <Wrapper>
        <PostImage 
          cover={<img src={imageURL}/>}
        />
          <div className="Middle">
            <div className="HeadTop">
              <Helmet
                title={`${frontmatter.title} | ${data.site.siteMetadata.title}`}
              >
                <meta
                  itemprop="name"
                  content={`ReactVizHoliday: ${frontmatter.title}`}
                />
                <meta itemprop="description" content={frontmatter.intro} />
                <meta itemprop="image" content={imageURL} />

                <meta property="og:url" content={location} />
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
                <meta property="og:image" content={imageURL} />

                <meta name="twitter:card" content="summary_large_image" />
                <meta
                  name="twitter:title"
                  content={`ReactVizHoliday: ${frontmatter.title}`}
                />
                <meta name="twitter:description" content={frontmatter.intro} />
                <meta name="twitter:image" content={imageURL} />
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
              <div className="player-wrapper">
                <ReactPlayer
                  className="ReactPlayer"
                  width="100%"
                  height="100%"
                  url={`https://www.youtube.com/watch?v=${frontmatter.videoId}`}
                />
              </div>
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
          </div>
            <DripEmail />
            <SocialShare />
          <WrapperNav>
            {previous ? (
              <div className="Prev">
                <Link to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              </div>
            ) : null}
            {next ? (
              <div className="Next">
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </Link>
              </div>
            ) : null}
          </WrapperNav>
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
            fluid(maxWidth: 1240) {
              srcSet
            }
          }
        }
      }
    }
  }
`
