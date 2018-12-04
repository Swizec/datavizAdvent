import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import './layout.css'


const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: 'ReactViz.Holiday',
              content: 'A new dataviz every day of the Advent. 🎅',
            },
          ]}
        >
          <meta itemprop="name" content="ReactVizHoliday" />
          <meta
            itemprop="description"
            content="A new dataviz every day of the Advent. 🎅"
          />
          <meta
            itemprop="image"
            content="https://reactviz.holiday/reactvizholiday.png"
          />

          <meta property="og:url" content="https://reactviz.holiday" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="ReactViz.Holiday" />
          <meta
            property="og:description"
            content="A new dataviz every day of the Advent. 🎅"
          />
          <meta
            property="og:image"
            content="https://reactviz.holiday/reactvizholiday.png"
          />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="ReactViz.Holiday" />
          <meta
            name="twitter:description"
            content="A new dataviz every day of the Advent. 🎅"
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
          <script async defer src="https://cdn.simpleanalytics.io/hello.js" />
          <noscript>
            {`<img src="https://api.simpleanalytics.io/hello.gif" alt="" />`}
          </noscript>

          <html lang="en" />
        </Helmet>

        {children}
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
