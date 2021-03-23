import styled from 'styled-components'
import { Link } from 'gatsby'

import { mobileStyle } from 'styles/responsive'

const _NavLink = styled(Link)`
  font-family: ${({ theme }) => theme.font.title};
  color: ${({ theme }) => theme.color.black};
  font-size: 5rem;
  text-transform: uppercase;

  ${mobileStyle`
    font-size: 2.4rem;
  `}
`

const _BaseLink = styled.a`
  font-family: ${({ theme }) => theme.font.title};
  color: ${({ theme }) => theme.color.black};
  font-size: 5rem;
  text-transform: uppercase;

  ${mobileStyle`
    font-size: 2.4rem;
  `}
`

export const NavLink = {
  GatsbyLink: _NavLink,
  BaseLink: _BaseLink,
}
