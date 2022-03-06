
import { createGlobalStyle } from 'styled-components';
import { Header_Four_FontSize, Header_One_FontSize, Header_Three_FontSize, Header_Two_FontSize } from './utils/constants';

const GlobalStyle = createGlobalStyle`
  :root {
   --primary-color: #fff;
   --primary-bg-color: #fff;
   --primary-button-bg-color: transparent;
   --accent-color: #5b6cdf;
   --accent-color-light: #e7e9f7;
   --secondary-button-bg-color: #d7d7d8;
   --secondary-button-bg-hover: #bdbdbd;
   --default-border-radius: 0.5rem;
   --default-font-color: #3a3a3a;
   --default-font-color-light: #717171;
   --secondary-card-color: #fafafa;
   --badge-bg-color: #f7d565;
   --badge-font-color: #834a1e;
   --border-color-grey: #e5e5e5;
   --grey-color-light-hover: #f6f6f6;
   --h1-size: ${Header_One_FontSize};
   --h2-size: ${Header_Two_FontSize};
   --h3-size: ${Header_Three_FontSize};
   --h4-size: ${Header_Four_FontSize};
   --font-szie-sm: 0.9rem;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
  }

  html, body {
    height: 100%;
    color: var(--default-font-color);
    background-color: #f6f6f6;
  }

  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }

  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }

  input, button, textarea, select {
    font: inherit;
  }

  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }

  #root, #__next {
    isolation: isolate;
  }

  ul{
      padding: 0;
  }
  h3{
      font-size: var(--h3-size);
  }

  h4{
        font-size: var(--h4-size)
  }
`
export default GlobalStyle