import React, { FC } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Container = styled.article`
  width: 100%;
`

const LinkWrapper = styled(Link)`
  display: block;
  width: 100%;
`

const ThumbnailImage = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: ${({ theme }) => theme.spacing[2]};
`

const Footer = styled.footer`
  width: 100%;
`

const Title = styled.h3`
  font-family: ${({ theme }) => theme.font.primary};
  font-size: 1.7rem;
  font-weight: normal;
  color: ${({ theme }) => theme.color.black};
`

const Category = styled.p`
  font-family: ${({ theme }) => theme.font.secondary};
  font-size: 2.7rem;
  color: ${({ theme }) => theme.color.black};
`

interface ProjectTileProps {
  data: Model.ProjectData
  link: string
}

export const ProjectTile: FC<ProjectTileProps> = ({ data, link }) => {
  const categoryToString = data.category_list
    .map(({ category }) => category)
    .join(', ')

  return (
    <Container>
      <LinkWrapper to={link}>
        <ThumbnailImage src={data.thumbnail.url} alt={data.name} />
        <Footer>
          <Title>{data.name}</Title>
          <Category>{categoryToString}</Category>
        </Footer>
      </LinkWrapper>
    </Container>
  )
}
