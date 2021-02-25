import styled from 'styled-components'
import { Link } from 'gatsby'
import React, { FC } from 'react'
import { mobileStyle } from 'styles/responsive'

const Root = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;

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

const StyledLink = styled(Link)`
  font-family: ${({ theme }) => theme.font.title};
  color: ${({ theme }) => theme.color.black};
  font-size: 5rem;
  text-transform: uppercase;

  ${mobileStyle`
    font-size: 2.4rem;
  `}
`

export const Nav: FC = () => {
  return (
    <Root>
      <NavSection>
        <StyledLink to="#">Infos</StyledLink>
      </NavSection>
      <NavSection>
        <StyledLink to="#">Projets</StyledLink>
      </NavSection>
      <NavSection>
        <StyledLink to="#">Blog</StyledLink>
      </NavSection>
    </Root>
  )
}
