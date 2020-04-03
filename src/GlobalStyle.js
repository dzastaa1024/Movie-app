import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
	*,
	*::before,
  *::after {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}

	html {
		font-size: 62.5%;
	}

	body {
		font-size: 1.4rem;
		font-family: "Lato", sans-serif;
		line-height: 1.3;
		background-color: #f6f7f9;
		color: rgb(64, 78, 95);
  }

	a {
		text-decoration: none;
	}

	input,
	textarea {
		font-family: "Lato", sans-serif;
		background-color: transparent;
	}

	.expanded {
		height: 100%;
	}
`;

export default GlobalStyle;
