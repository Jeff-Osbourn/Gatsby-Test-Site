import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Navbar from '../components/Navbar/Navbar'

const TestPage = ({ data }) => {
  return (
	<Navbar>
    <Layout pageTitle="Test">
			<div>
				Hello!
			</div>
    </Layout>
	</Navbar>
  )
}

export default TestPage