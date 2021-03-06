import { Link,graphql } from 'gatsby'
import React from 'react'
import Layout from '../components/Layout'
import * as styles from '../styles/home.module.css'
import Img from "gatsby-image"


// http://localhost:8000/___graphql
// 部署在netlify上，URL为：https://romantic-cori-1f6462.netlify.app

export default function Home({data}) {
  // console.log(data)

  return (
    <Layout>
      <section className={styles.header} >
        <div>
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <p>UX designer & web developer based in Manchester.</p>
          <Link to='/projects' className={styles.btn}>My Portfolio Projects</Link>
        </div>
        {/* <img src="/banner.png" alt="site banner" style={{ maxWidth: "100%" }} /> */}
        {/* <img src={data.file.childImageSharp.fluid.src} alt="home-image" /> */}
        <Img fluid={data.file.childImageSharp.fluid} />

      </section>
    </Layout>
  )
}

export const query = graphql`
  query Banner {
    file(relativePath: {eq: "banner.png"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
