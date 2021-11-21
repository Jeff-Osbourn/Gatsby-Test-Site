import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

const BlogPage = ({ data }) => {
  
  return (
    <Layout pageTitle="My Blog Posts" style={{
          backgroundColor: 'var(--bg)',
          color: 'var(--textNormal)',
          transition: 'color 0.2s ease-out, background 0.2s ease-out',
        }}>
      <ul>
      {
        data.allFile.nodes.map(node => (
          <li key={node.name}>
            {node.name}
          </li>
        ))
      }
      </ul>
    </Layout>
  )
}

export const query = graphql`
  query {
    allFile {
        nodes {
          name
        }
    }
  }
`

export default BlogPage