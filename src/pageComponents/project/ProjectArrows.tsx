import React, { FC } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import { mobileStyle } from 'styles/responsive'

const ArrowContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 2.6rem;
  margin-top: 3rem;

  ${({ theme }) => mobileStyle`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0 ${theme.spacing[2]};
  `}
`

const SiblingProjectLink = styled(Link)`
  font-family: ${({ theme }) => theme.font.primary};
  color: ${({ theme }) => theme.color.black};
  font-size: 1.6rem;
`

interface ProjectArrowsProps {
  className?: string
  previousUrl: string
  nextUrl: string
}
export const ProjectArrows: FC<ProjectArrowsProps> = ({
  className,
  previousUrl,
  nextUrl,
}) => {
  return (
    <ArrowContainer className={className}>
      <SiblingProjectLink to={previousUrl}>← Préc.</SiblingProjectLink>
      <SiblingProjectLink to={nextUrl}>Suiv. →</SiblingProjectLink>
    </ArrowContainer>
  )
}
