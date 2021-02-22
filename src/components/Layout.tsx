import React, { FC } from 'react'
import styled from 'styled-components'

const Root = styled.main`
  width: 100vw;
  height: 100vh;
  max-width: 100%;
  overflow-y: auto;
`

export const Layout: FC = ({ children }) => {
  return <Root>{children}</Root>
}
