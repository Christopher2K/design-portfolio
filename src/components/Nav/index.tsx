import React, { FC, useCallback } from 'react'
import type { WindowLocation } from 'reach__router'
import styled from 'styled-components'

import { NavLink } from 'components'
import { mobileStyle } from 'styles/responsive'

const Root = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;

  z-index: 50;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: ${({ theme }) => theme.layout.desktopNavHeight};

  background-color: ${({ theme }) => theme.color.grey};

  ${({ theme }) => mobileStyle`
    padding: 0 ${theme.spacing[2]};
  `}
`

const NavSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  flex-grow: 1;
  flex-shrink: 1;

  height: 100%;
  padding: 0 5.5rem;

  &:first-of-type {
    justify-content: flex-start;
  }

  &:last-of-type {
    justify-content: flex-end;
  }

  ${mobileStyle`
    padding: 0;
  `}
`

interface NavProps {
  homepageProjectHeaderId?: string
  location?: WindowLocation
  className?: string
}

export const Nav: FC<NavProps> = ({
  homepageProjectHeaderId,
  location,
  className,
}) => {
  const scrollToProjects = useCallback(function scrollToProjets(
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) {
    if (location && homepageProjectHeaderId && location.pathname === '/') {
      e.preventDefault()
      const projectHeaderElm = document.getElementById(homepageProjectHeaderId)
      const scrollingContainer = document.getElementById('main')

      if (projectHeaderElm && scrollingContainer) {
        // ScrollTo
        scrollingContainer.scrollTo({
          top: projectHeaderElm.offsetTop,
          behavior: 'smooth',
        })
      }
    }
  },
  [])

  return (
    <Root className={className}>
      <NavSection>
        <NavLink to="/infos">Infos</NavLink>
      </NavSection>
      <NavSection>
        <NavLink to="/" onClick={scrollToProjects}>
          Projets
        </NavLink>
      </NavSection>
      <NavSection>
        <NavLink target="_blank" to="https://twenitweni.fr">
          Blog
        </NavLink>
      </NavSection>
    </Root>
  )
}
