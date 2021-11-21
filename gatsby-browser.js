import { createGlobalStyle, ThemeProvider } from "styled-components"
import { themeList } from "./src/components/themes/themes.js"
import React from "react"

const GlobalStyles = createGlobalStyle`
	* {
		box-sizing: border-box;
		margin: 10;
		padding: 10;
	}

	body, html {
		font-family: ${props => props.theme.fonts.defualt};
		height: 100%;
		background-color: ${props => props.theme.colors.lightMain};

	}
`

export const wrapRootElement = ({ element }) => (
	<ThemeProvider theme = {themeList}> 
	<GlobalStyles />
	{element} </ThemeProvider>
)