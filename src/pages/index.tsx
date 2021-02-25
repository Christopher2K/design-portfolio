import styled from 'styled-components'
import { graphql } from 'gatsby'
import React, { FC } from 'react'
import { Carousel, Nav, ProjectTile } from 'components'

const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  width: 100%;
  height: 100%;
`

const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1440px;
  margin-bottom: ${({ theme }) => theme.spacing[3]};
`

const Titles = styled.div``

const Title = styled.h1`
  display: inline-block;
  margin-right: ${({ theme }) => theme.spacing[1]};

  font-size: 1.8rem;
  font-weight: 400;
  font-family: ${({ theme }) => theme.font.title};
  text-transform: uppercase;
`

const Subtitle = styled.h2`
  display: inline-block;
  font-size: 1.7rem;
  font-family: ${({ theme }) => theme.font.primary};
  font-weight: normal;
`

const ContactLink = styled.a`
  font-size: 1.8rem;
  font-family: ${({ theme }) => theme.font.primary};
  color: ${({ theme }) => theme.color.black};
`

const ProjectGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: ${({ theme }) => theme.spacing[2]};
  row-gap: ${({ theme }) => theme.spacing[4]};
  max-width: 1440px;
  width: 100%;
  margin-bottom: ${({ theme }) => theme.spacing[6]};
`

const Footer = styled.footer`
  width: 100%;
  padding-bottom: calc(${({ theme }) => theme.layout.desktopNavHeight} + 120px);

  p {
    text-align: center;
    font-size: 1.4rem;
    width: 100%;
  }
`

const IndexPage: FC<PageData.Homepage> = ({ data }) => {
  return (
    <Root>
      <Nav />
      <Carousel />
      <Header>
        <Titles>
          <Title>{data.prismicHomePage.data.full_name}</Title>
          <Subtitle>{data.prismicHomePage.data.job_name}</Subtitle>
        </Titles>
        <ContactLink href="#">Contact</ContactLink>
      </Header>

      <ProjectGrid>
        {data.allPrismicProject.edges.map(project => {
          const { data } = project.node
          return <ProjectTile key={data.name} data={data} />
        })}
      </ProjectGrid>

      <Footer
        dangerouslySetInnerHTML={{
          __html: data.prismicHomePage.data.footer.html,
        }}
      />
    </Root>
  )
}

export const query = graphql`
  query HomepageQuery {
    prismicHomePage {
      data {
        full_name
        job_name
        mail
        footer {
          html
        }
      }
    }
    allPrismicProject {
      edges {
        node {
          data {
            name
            category_list {
              category
            }
            thumbnail {
              url
            }
          }
        }
      }
    }
  }
`

export default IndexPage
