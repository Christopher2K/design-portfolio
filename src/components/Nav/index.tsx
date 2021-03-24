import React, { FC } from 'react'
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
  onProjectsClicked?: (e: React.MouseEvent<HTMLAnchorElement>) => void
  className?: string
}

export const Nav: FC<NavProps> = ({ onProjectsClicked, className }) => {
  return (
    <Root className={className}>
      <NavSection>
        <NavLink.GatsbyLink to="/infos">Infos</NavLink.GatsbyLink>
      </NavSection>
      <NavSection>
        <NavLink.GatsbyLink to="/#projets" onClick={onProjectsClicked}>
          Projets
        </NavLink.GatsbyLink>
      </NavSection>
      <NavSection>
        <NavLink.BaseLink
          target="_blank"
          rel="noreferrer"
          href="https://twenitweni.fr"
        >
          Blog
        </NavLink.BaseLink>
      </NavSection>
    </Root>
  )
}
