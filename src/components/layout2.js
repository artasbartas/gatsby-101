import React from "react"
import propTypes from "prop-types"
import { StaticQuery, Link, graphql } from "gatsby"
import Image from "gatsby-image"

const ListLink = props => (
    <li style={{
        display: `inline-block`,
        marginRight: `1rem`,
    }}>
        <Link to={props.to}>{props.children}</Link>
    </li>
)

const Layout2 = ({children}) => (
    <StaticQuery
        query={graphql`
            query {
                site {
                    siteMetadata {
                        title
                    }
                }
                file(relativePath: {
                    regex: "/blog-header/"
                    }) {
                      childImageSharp {
                        fluid(maxWidth: 1000) {
                          ...GatsbyImageSharpFluid_tracedSVG
                        }
                      }
                    }
                }
        `}
        render={data => (
            <div>
            <Image style={{maxHeight: "40vh"}} fluid={data.file.childImageSharp.fluid} />
                <div style={{
                    margin: `0 auto`,
                    maxWidth: `650px`,
                    padding: `0 1rem`,
                }}>
                    <header style={{ marginBottom: `1.5rem`}}>
                        <h3 style={{ display: `inLine`}}>{data.site.siteMetadata.title}</h3>
                    
                        <ul style={{
                            listStyle: `none`,
                            float: `right`,
                            padding: `0 1.75rem`,
                        }}>
                            <ListLink to="/">Home</ListLink>
                            <ListLink to="/blog">Blog</ListLink>
                            <ListLink to="/page-2">Page 2</ListLink>
                            <ListLink to="/info/about">About</ListLink>
                        </ul>
            
                    </header>
                    {children}
                </div>
            </div>
        )}
    />               
)

Layout2.propTypes = {
    children: propTypes.node.isRequired,
}

export default Layout2