import { createGlobalStyle, ThemeProvider } from "styled-components"
import Theme from "./src/components/themes/themes.js"
import React from "react"

const GlobalStyles = createGlobalStyle`
	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}

	body, html {
		font-family: ${props => props.themes.fonts.defualt};
		height: 100%;
		background-color: ${props => props.themes.colors.lightMain};
		
	}
`

export const wrapRootElement = ({ element }) => (
	<ThemeProvider theme = {Theme}> 
	<GlobalStyles />
	{element} </ThemeProvider>
)