import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { ThemeProvider } from "styled-components"
//import {lightTheme, darkTheme} from "../components/themes/themes.js"
import {themeList} from "../components/themes/themes.js"
import { useState } from 'react'

import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle,
} from './layout.module.css'



//class Test extends React.Component {
  const Layout = ({ pageTitle, children }) => {

    const [currentTheme, toggleTheme] = useState(false)

    const checkTheme = () => {
      currentTheme === false ? toggleTheme(true) : toggleTheme(false)
    }

    const data = useStaticQuery(graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `)

      return (
        <ThemeProvider theme = {currentTheme === false ? themeList.darkTheme : themeList.lightTheme}>
        <div style={{
            transition: 'color 0.2s ease-out, background 0.2s ease-out',
          }}>  
    
        <header>
          <title>{pageTitle} | {data.site.siteMetadata.title}</title>
        </header>
        
        <button onClick={checkTheme}>
        Dark Mode</button>
        
        <nav>
          <ul className={navLinks}>
            <li className={navLinkItem}>
              <Link to="/" className={navLinkText}>
                Home
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link to="/about" className={navLinkText}>
                About
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link to="/blog" className={navLinkText}>
                Blog
              </Link>
            </li>
        <li className={navLinkItem}>
              <Link to="/Pokemon" className={navLinkText}>
                Pokemon
              </Link>
            </li>
        <li className={navLinkItem}>
              <Link to="/TestPage" className={navLinkText}>
                TestPage
              </Link>
            </li>
          </ul>
        </nav>
        <main>
          <h1 className={heading}>{pageTitle}</h1>
          {children}
        </main>
      </div>
      </ThemeProvider>
      
      )
    }
  //}
//}

export default Layout
