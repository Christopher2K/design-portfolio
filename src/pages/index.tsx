import styled, { css } from 'styled-components'
import { graphql } from 'gatsby'
import React, { FC, useCallback, useEffect, useMemo } from 'react'
import { Carousel, Nav, ProjectTile } from 'components'
import { mobileStyle } from 'styles/responsive'

const sidePadding = css`
  padding-left: ${({ theme }) => theme.spacing[3]};
  padding-right: ${({ theme }) => theme.spacing[3]};
  ${({ theme }) => mobileStyle`
    padding-left: ${theme.spacing[2]};
    padding-right: ${theme.spacing[2]};
  `}
`

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
  flex-shrink: 0;

  ${sidePadding}
  margin-bottom: ${({ theme }) => theme.spacing[3]};

  ${({ theme }) => mobileStyle`
    padding-top: ${theme.spacing[4]};
  `}
`

const Titles = styled.div``

const Title = styled.h1`
  display: inline-block;
  margin-right: ${({ theme }) => theme.spacing[1]};

  font-size: 1.8rem;
  font-weight: 400;
  font-family: ${({ theme }) => theme.font.title};
  text-transform: uppercase;

  ${({ theme }) => mobileStyle`
    display: block;
    margin-bottom: ${theme.spacing[2]}
  `}
`

const Subtitle = styled.h2`
  display: inline-block;
  font-size: 1.7rem;
  font-family: ${({ theme }) => theme.font.primary};
  font-weight: normal;

  ${mobileStyle`
    display: block;
  `}
`

const ContactLink = styled.a`
  font-size: 1.8rem;
  font-family: ${({ theme }) => theme.font.primary};
  color: ${({ theme }) => theme.color.black};

  ${mobileStyle`
    display: none;
  `}
`

const ProjectGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: ${({ theme }) => theme.spacing[2]};
  row-gap: ${({ theme }) => theme.spacing[4]};

  width: 100%;

  ${sidePadding}
  margin-bottom: ${({ theme }) => theme.spacing[6]};

  ${mobileStyle`
    grid-template-columns: 1fr;
  `}
`

const Footer = styled.footer`
  ${sidePadding}
  width: 100%;
  max-width: ${({ theme }) => theme.layout.maxWidth}px;
  padding-bottom: calc(${({ theme }) => theme.layout.desktopNavHeight} + 120px);

  ${({ theme }) => mobileStyle`
    padding-bottom: calc(${theme.layout.desktopNavHeight} + 160px);
  `}

  p {
    text-align: center;
    font-size: 1.4rem;
    width: 100%;
  }
`

const IndexPage: FC<PageData.Homepage> = ({ data, location }) => {
  const projectHeaderId = useMemo(() => 'projects', [])

  const carouselData = data.prismicHomePage.data.carousel_items.map(item => {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const { image, title, text_background } = item

    return {
      label: title,
      url: image.url,
      textBackground: text_background,
    }
  })

  const scrollToProjects = useCallback(function scrollToProjects() {
    const projectHeaderElm = document.getElementById(projectHeaderId)
    const scrollingContainer = document.getElementById('main')
    const isMobile = window.innerWidth < 768

    if (projectHeaderElm && scrollingContainer && !isMobile) {
      // ScrollTo
      scrollingContainer.scrollTo({
        top: window.innerHeight - 50,
        behavior: 'smooth',
      })
    }
  }, [])

  const scrollToProjectsOnClick = useCallback(
    function scrollToProjectsOnClick(
      e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    ) {
      e.preventDefault()
      scrollToProjects()
    },
    [scrollToProjects],
  )

  useEffect(() => {
    if (location.hash === '#scroll') {
      scrollToProjects()
      window.location.hash = ''
    }
  }, [])

  return (
    <Root>
      <Nav onProjectsClicked={scrollToProjectsOnClick} />
      <Carousel items={carouselData} onEnd={scrollToProjects} />
      <Header id={projectHeaderId}>
        <Titles>
          <Title>{data.prismicHomePage.data.full_name}</Title>
          <Subtitle>{data.prismicHomePage.data.job_name}</Subtitle>
        </Titles>
        <ContactLink href="#">Contact</ContactLink>
      </Header>

      <ProjectGrid>
        {data.allPrismicProject.edges.map(project => {
          const { data, uid } = project.node
          return (
            <ProjectTile key={data.name} data={data} link={`/projet/${uid}`} />
          )
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
        carousel_items {
          title
          image {
            url
          }
          text_background
        }
      }
    }

    allPrismicProject(sort: { fields: data___number, order: DESC }) {
      edges {
        node {
          uid
          data {
            number
            name
            year
            description_fr {
              html
            }
            description_en {
              html
            }
            assets {
              type
              video_link {
                url
              }
              image {
                url
              }
            }
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
