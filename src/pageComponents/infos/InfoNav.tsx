import React, { FC } from 'react'
import styled from 'styled-components'

import { NavLink } from 'components'
import { mobileStyle } from 'styles/responsive'

const Root = styled.div`
  position: fixed;
  bottom: 0;
  left: 50%;
  width: 100%;
  height: ${({ theme }) => theme.layout.desktopNavHeight};
  transform: translateX(-50%);

  ${mobileStyle`
    left: 0;
    transform: translateX(0);
  `}
`

const Wrapper = styled.div`
  width: 50%;
  height: 100%;
  padding-left: ${({ theme }) => theme.spacing[4]};

  ${({ theme }) => mobileStyle`
    width: 100%;
    padding-left: ${theme.spacing[2]};
  `}
`

const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 83.333%;
  height: 100%;

  a {
    color: ${({ theme }) => theme.color.grey};
  }
`

interface InfoNavProps {
  customBackground: string
}

export const InfoNav: FC<InfoNavProps> = ({ customBackground }) => {
  return (
    <Root>
      <Wrapper style={{ backgroundColor: customBackground }}>
        <Content>
          <NavLink.GatsbyLink to="/#projects">Close</NavLink.GatsbyLink>
        </Content>
      </Wrapper>
    </Root>
  )
}
