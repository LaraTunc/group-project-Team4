import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
html,
body,
div,
span {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
}

*,
*:before,
*:after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    font-family: 'Manrope', sans-serif;
}

html, body {
    max-width: 100vw;
}

h1 {
font-size: 36px;
}

h2 {
font-size: 32px;
}

h3 {
font-size: 24px;
margin-bottom: 1em;
}

h4 {
font-size: 20px;
}

p,
li,
a,
blockquote,
span, 
div, 
textarea, 
input 
{
font-size: 17px;
font-weight: 400;
line-height: 1.5em;
margin: 0px;
}

button {
    outline:none;
    border:none;
    margin: 0;
    padding: 0;
    font-size: 17px;
}
`;