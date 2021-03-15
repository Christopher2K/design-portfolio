import styled from 'styled-components'
import { Link } from 'gatsby'

import { mobileStyle } from 'styles/responsive'

export const NavLink = styled(Link)`
  font-family: ${({ theme }) => theme.font.title};
  color: ${({ theme }) => theme.color.black};
  font-size: 5rem;
  text-transform: uppercase;

  ${mobileStyle`
    font-size: 2.4rem;
  `}
`
