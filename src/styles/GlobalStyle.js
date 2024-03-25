import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';
import BiroScriptPlus from '../assets/fonts/BiroScriptPlus-Bold.ttf';
import RightGrotesk from '../assets/fonts/RightGrotesk-CompactBlack.otf';
import MessinaSansMono from '../assets/fonts/MessinaSansMono-Regular.ttf';

const GlobalStyle = createGlobalStyle`

@font-face {
    font-family: 'BiroScriptPlus';
    src: url(${BiroScriptPlus});
  }

  @font-face {
    font-family: 'RightGrotesk';
    src: url(${RightGrotesk});
  }

  @font-face {
    font-family: 'MessinaSansMono';
    src: url(${MessinaSansMono});
  }

  * {
    scroll-behavior: smooth;
  }


body {
  font-family: "MessinaSansMono", sans-serif;
  font-weight: 400;
  font-style: normal;
  background: ${({ theme }) => theme.colors.black};
  color: #121417;
  height: 100%;
  margin: 0;
}
h1,
h2,
h3,
h4,
h5,
h6,
p {
    margin: 0;
    padding: 0;
}
a {
  text-decoration: none;
}
ul, li {
  list-style: none;
  padding: 0;
  margin: 0;
}
img {
  display: block;
}
button {
  cursor: pointer;
}

`;

export default GlobalStyle;
