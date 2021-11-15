import React, { Component } from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import Layout from '../components/layout'

class Post extends Component {
  render() {
    const post = this.props.data.allWpPost
    return (
      <Layout pageTitle="My Blog Posts">
        <div>
          <h1>{post.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
      </Layout>
    )
  }
}

Post.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

export default Post
export const pageQuery = graphql`
    query ($id: String) {
    wpPost(id: {eq : $id}) {
			title
			content
    }
  }
`