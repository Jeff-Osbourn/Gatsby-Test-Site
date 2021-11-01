import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle,
} from './layout.module.css'
	
const Layout = ({ pageTitle, children }) => {
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
    <div className={container} style={{
          backgroundColor: 'var(--bg)',
          color: 'var(--textNormal)',
          transition: 'color 0.2s ease-out, background 0.2s ease-out',
        }}>
      <title>{pageTitle} | {data.site.siteMetadata.title}</title>
      <header className={siteTitle}>{data.site.siteMetadata.title}
		  <ThemeToggler>
			{({ theme, toggleTheme }) => (
			  <h6>
			  Dark Mode
				<input
				  type="checkbox"
				  onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
				  checked={theme === 'dark'}
				/>{' '}
			  </h6>
			)}
		  </ThemeToggler>
	  </header>
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
  )
}

export default Layout
