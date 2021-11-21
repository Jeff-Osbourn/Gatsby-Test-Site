import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {

  return (
    <Layout pageTitle="Home Page" style={{
          backgroundColor: 'var(--bg)',
          color: 'var(--textNormal)',
          transition: 'color 0.2s ease-out, background 0.2s ease-out',
        }}>
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="Destiny 2 Wallpaper"
        src="../images/destiny2_Wallopaper2.jpg"
      />
    </Layout>
  )
}

export default IndexPage

