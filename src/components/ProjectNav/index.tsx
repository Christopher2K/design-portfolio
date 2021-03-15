import React, { FC } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import { NavLink } from 'components'
import { mobileStyle } from 'styles/responsive'

const Root = styled.div`
  position: fixed;
  bottom: 0;
  left: 50%;
  width: 100%;
  height: ${({ theme }) => theme.layout.desktopNavHeight};
  max-width: ${({ theme }) => theme.layout.maxWidth}px;
  transform: translateX(-50%);

  ${mobileStyle`display: none;`}
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 50%;
  height: 100%;
  background-color: ${({ theme }) => theme.color.grey};
  padding-left: ${({ theme }) => theme.spacing[4]};
`

const ArrowContainer = styled.div``

const SiblingProjectLink = styled(Link)``

interface ProjectNavProps {}

export const ProjectNav: FC<ProjectNavProps> = () => {
  return (
    <Root>
      <Wrapper>
        <NavLink to="/">Projets</NavLink>
        <ArrowContainer>
          <SiblingProjectLink to="#"></SiblingProjectLink>
          <SiblingProjectLink to="#"></SiblingProjectLink>
        </ArrowContainer>
      </Wrapper>
    </Root>
  )
}
