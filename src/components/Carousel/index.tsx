import React, { FC } from 'react'
import styled from 'styled-components'
import { mobileStyle } from 'styles/responsive'

const Root = styled.div`
  width: 100%;
  height: calc(100% - ${({ theme }) => theme.layout.desktopNavHeight});
  background-color: teal; /* TODO: Fix this later */
  flex-shrink: 0;
  margin-bottom: ${props => props.theme.spacing[6]};

  ${mobileStyle`
    display: none;
  `}
`

export const Carousel: FC = () => {
  return <Root />
}
