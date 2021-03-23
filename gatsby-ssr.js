/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

// You can delete this file if you're not using it
import React from 'react'
import { ThemeProvider } from 'styled-components'

import { Layout } from './src/components'
import { theme } from './src/styles/theme'
import { Global } from './src/styles/global'

export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>
}

export function wrapRootElement({ element }) {
  return (
    <ThemeProvider theme={theme}>
      <Global />
      {element}
    </ThemeProvider>
  )
}