import { createGlobalStyle } from 'styled-components'

import { reset } from './reset'
import RomieTRIALRegularWoff from 'assets/fonts/RomieTRIAL-Regular.woff'
import RomieTRIALRegularWoff2 from 'assets/fonts/RomieTRIAL-Regular.woff2'
import EdwardianScriptITCWoff from 'assets/fonts/EdwardianScriptITC.woff'
import EdwardianScriptITCWoff2 from 'assets/fonts/EdwardianScriptITC.woff2'
import Lausanne300Woff from 'assets/fonts/Lausanne-300.woff'
import Lausanne300Woff2 from 'assets/fonts/Lausanne-300.woff2'

export const Global = createGlobalStyle`
  ${reset}

  /* TODO: Change this */
  @font-face {
    font-family: 'Romie TRIAL';
    src: url(${RomieTRIALRegularWoff}) format('woff'),
      url(${RomieTRIALRegularWoff2}) format('woff2');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Edwardian Script ITC';
    src: url(${EdwardianScriptITCWoff}) format('woff'),
        url(${EdwardianScriptITCWoff2}) format('woff2');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Lausanne';
    src: url(${Lausanne300Woff}) format('woff'),
        url(${Lausanne300Woff2}) format('woff2');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }


  html,
  body {
    font-size: 10px;
    overflow-y: hidden;
    font-family: 'Lausanne', sans-serif;

    background-color: ${({ theme }) => theme.color.grey};
  }
`
