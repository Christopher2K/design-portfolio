import React, { FC } from 'react'
import styled from 'styled-components'

import { mobileStyle } from 'styles/responsive'

const Root = styled.div`
  display: none;

  ${mobileStyle`
    display: flex;
  `}
`

export const InfoNav: FC = () => {
  return <Root>Hello</Root>
}
