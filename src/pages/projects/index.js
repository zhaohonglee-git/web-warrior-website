import { graphql, Link } from 'gatsby'
import React from 'react'
import Layout from '../../components/Layout'
import * as portfolioStyles from '../../styles/projects.module.css'
import Img from "gatsby-image"


export default function Projects({ data }) {
  // console.log(data)
  const projects = data.projects.nodes
  const contact = data.contact.siteMetadata.contact

  return (
    <div className={portfolioStyles.portfolio}>
      
      <Layout>
        <h2>Protfolio</h2>
        <h3>Projects & Websites I've Created</h3>
        <div className={portfolioStyles.projects}>
          {projects.map(project => (
            <Link to={'/projects/' + project.frontmatter.slug} key={project.id}>
              <div>
                <Img fluid = {project.frontmatter.thumb.childImageSharp.fluid} />
                <h3>{project.frontmatter.title}</h3>
                <p>{project.frontmatter.stack}</p>
              </div>
            </Link>
          ))}
        </div>
        <p>Like what you see? Email me at {contact} for a quote!</p>
      </Layout>
    </div>
  )
}


// export page query
export const query = graphql`
query ProjectsPage {
  projects: allMarkdownRemark(sort: {order: DESC, fields: frontmatter___title}) {
    nodes {
      frontmatter {
        slug
        stack
        title
        featuredImg {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        thumb {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      id
    }
  }
  contact: site {
    siteMetadata {
      contact
    }
  }
}
`



