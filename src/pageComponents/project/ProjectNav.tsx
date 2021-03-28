import React, { FC } from 'react'
import styled from 'styled-components'

import { NavLink } from 'components'
import { mobileStyle } from 'styles/responsive'
import { ProjectArrows } from './ProjectArrows'

const Root = styled.div`
  position: fixed;
  bottom: 0;
  left: 50%;
  width: 100%;
  height: ${({ theme }) => theme.layout.desktopNavHeight};
  transform: translateX(-50%);

  ${mobileStyle`display: none;`}
`

const Wrapper = styled.div`
  width: 50%;
  height: 100%;
  max-width: 1000px;
  background-color: ${({ theme }) => theme.color.grey};
  padding-left: ${({ theme }) => theme.spacing[4]};
`

const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 83.333%;
  height: 100%;
`

interface ProjectNavProps {
  previousUrl: string
  nextUrl: string
}

export const ProjectNav: FC<ProjectNavProps> = ({ previousUrl, nextUrl }) => {
  return (
    <Root>
      <Wrapper>
        <Content>
          <NavLink.GatsbyLink to="/#projects">Projets</NavLink.GatsbyLink>
          <ProjectArrows {...{ previousUrl, nextUrl }} />
        </Content>
      </Wrapper>
    </Root>
  )
}
