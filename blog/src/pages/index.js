import GlobalStyle from './GlobalStyle'
export default GlobalStyle

import  React from "react";
import { graphql, Link } from "gatsby";


import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = (data) => (
  <Layout>
    <SEO title="Home" />
    <ul>
    {
data.allContentfulBlogPost.edges.map(edges=>(
  <li>
  <Link to={edges.node.slug} key = {edges.node.id}>{edges.node.title}</Link>
  <div>
  <img src={edges.node.heroImage.fluid.src} alt="hero image"/>
  </div>
  <div>{edge.node.body.childMarkdownRemark.excerpt}</div>
  </li>

))
    }
    </ul>
    </Layout>
)
export default IndexPage


export const query = graphql`
{
  allContentfulBlogPost{
    edges{
      node{
        id
        title
        slug
        heroImage{
          fluid(maxWidth: 300) {
            src
          }
        }
        body{
          childMarkdownRemark{
            excerpt
          }
        }
      }
    }

  }
}
`
