module.exports = {
    siteMetadata: {
        title: 'React Dataviz Holiday',
        author: 'Swizec Teller',
        description: 'A new tiny data visualization for every day of the 2018 Advent',
        siteUrl: 'https://gatsbyjs.github.io/gatsby-starter-blog/',
    },
    pathPrefix: '/gatsby-starter-blog',
    plugins: [{
            resolve: `gatsby-plugin-styled-components`,
            options: {
                // Add any options here
            },
        },
       
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-mdx`,
            options: {
            gatsbyRemarkPlugins: [
            {
                resolve: "gatsby-remark-images",
                options: {
                maxWidth: 1035,
                sizeByPixelDensity: true
                }
            }
            ]
            }
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
            path: `${__dirname}/src/content`
            }
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    
                    {
                        resolve: `gatsby-remark-responsive-iframe`,
                        options: {
                            wrapperStyle: `margin-bottom: 1.0725rem`,
                        },
                    },
                    'gatsby-remark-prismjs',
                    'gatsby-remark-copy-linked-files',
                    'gatsby-remark-smartypants',
                ],
            },
        },
        `gatsby-transformer-sharp`,
        

        //`gatsby-plugin-feed`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `ReactViz.Holiday`,
                short_name: `ReactViz`,
                start_url: `/`,
                background_color: `#ffffff`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/assets/favicon.png`,
            },
        },
        `gatsby-plugin-offline`,
        `gatsby-plugin-react-helmet`,
    ],
}
