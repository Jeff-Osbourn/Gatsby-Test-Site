import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'

import { useStyledDarkMode } from "gatsby-styled-components-dark-mode";
import { useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import { GlobalStyle } from "./theme";

import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle,
} from './layout.module.css'
	
//class Layout extends React.Component {
	
const MainHeading = styled.h2`
  color: rgb(${(props) => props.theme.palette.mainBrand});
`;

export const Layout = (props) => {
  const theme = useContext(ThemeContext);
  const { isDark, toggleDark } = useStyledDarkMode();
	
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
  
  //render () {
  return (
    <div>
	
	<GlobalStyle theme={theme} />
      <header>
        <MainHeading>
          <a href={"#"}>Gatsby Dark Theme</a>
        </MainHeading>
        <div>
          <label>
            <input
              type="checkbox"
              onChange={() => toggleDark()}
              checked={!!isDark}
            />{" "}
            Dark mode
          </label>
        </div>
      </header>
      <main>{props.children}</main>
	  
      <title>{pageTitle} | {data.site.siteMetadata.title}</title>
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
}
//}
export default Layout
