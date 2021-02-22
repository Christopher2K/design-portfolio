import { createGlobalStyle } from 'styled-components'

import { reset } from './reset'
import RomieTRIALRegularWoff from 'assets/fonts/RomieTRIAL-Regular.woff'
import RomieTRIALRegularWoff2 from 'assets/fonts/RomieTRIAL-Regular.woff2'

export const Global = createGlobalStyle`
  ${reset}

  /* TODO: Change this */
  @font-face {
    font-family: 'Romie TRIAL';
    src: url(${RomieTRIALRegularWoff}) format('woff2'),
      url(${RomieTRIALRegularWoff2}) format('woff');

    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  html,
  body {
    font-size: 10px;
    overflow-y: hidden;

    background-color: ${({ theme }) => theme.color.grey};
  }
`
