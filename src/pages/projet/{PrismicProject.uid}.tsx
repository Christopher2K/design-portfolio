import { graphql } from 'gatsby'
import React, { FC, useCallback, useState } from 'react'
import styled, { css } from 'styled-components'

import { Header } from 'pageComponents/project/Header'
import { ProjectNav } from 'pageComponents/project/ProjectNav'
import { ProjectArrows } from 'pageComponents/project/ProjectArrows'
import { BaseButton, Nav } from 'components'
import CloseIcon from 'assets/svg/close.svg'
import { mobileStyle } from 'styles/responsive'

const Root = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;

  width: 100%;
  height: 100%;
  margin: auto;
`

const MobileNav = styled(Nav)`
  display: none;

  ${mobileStyle`
    display: flex;
  `}
`

const scrollableWrapperStyle = css`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: auto;
`

const RightScrollableWrapper = styled.div`
  ${scrollableWrapperStyle}
  padding-bottom: calc(
    ${({ theme }) => `${theme.spacing[4]} + ${theme.layout.desktopNavHeight}`}
  );
`

const sideStyle = css`
  position: relative;
  overflow-y: auto;
  flex-basis: 50%;
  flex-shrink: 0;
  flex-grow: 1;
  height: 100%;
`

interface LeftProps {
  descriptionPopupOpen: boolean
}

const Left = styled.section<LeftProps>`
  position: relative;
  max-width: 1000px;
  ${sideStyle};

  ${({ theme, descriptionPopupOpen }) => mobileStyle`
    display: ${descriptionPopupOpen ? 'block' : 'none'};
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;

    width: 100%;

    background-color: ${theme.color.grey};
  `}
`

const MobileHeader = styled(Header)`
  display: none;

  ${mobileStyle`
    display: flex;
  `}
`

const DesktopHeader = styled(Header)`
  display: block;

  ${mobileStyle`
    display: none;
  `}
`

const Right = styled.section`
  ${sideStyle}
`

const LeftScrollableWrapper = styled.div`
  ${scrollableWrapperStyle}
  padding-top: ${({ theme }) => theme.spacing[4]};
  padding-left: ${({ theme }) => theme.spacing[4]};

  ${({ theme }) => mobileStyle`
    padding: ${theme.spacing[3]} ${theme.spacing[2]};
  `}
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  width: 83.333%;
  font-family: ${({ theme }) => theme.font.primary};
  font-size: 1.7rem;
  line-height: 2.465rem;
  margin-bottom: calc(
    ${({ theme }) => `${theme.spacing[4]} + ${theme.layout.desktopNavHeight}`}
  );

  ${mobileStyle`
    width: 100%;
    margin-top: 8rem;

  `}
`

const CloseButton = styled(BaseButton)`
  display: none;
  ${({ theme }) => mobileStyle`
    display: block;
    position: fixed;
    top: 40px;
    right: 20px;
  `};
`

const Description = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;

  span {
    display: block;
    flex-shrink: 0;
    width: 25px;
    margin-right: ${({ theme }) => theme.spacing[2]};
  }

  &:first-of-type {
    margin-bottom: ${({ theme }) => theme.spacing[4]};
  }
`

const DescriptionContent = styled.div`
  flex: 1;
  width: 100%;
`

const ProjectImage = styled.img`
  width: 100%;
  height: auto;
`

const IframeContainer = styled.div`
  width: 100%;
  max-width: 100%;

  div {
    position: relative;
    height: 0;
    padding-bottom: 56.25%;
  }

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`

const MobileProjectArrows = styled(ProjectArrows)`
  display: none;

  ${mobileStyle`
    display: flex;
  `}
`

const SingleProjectPage: FC<PageData.SingleProjectPage> = ({ data }) => {
  const {
    name,
    category_list: categoryList,
    year,
    description_en: { html: descriptionEn },
    description_fr: { html: descriptionFr },
    assets,
    number: currentProjectNumber,
  } = data.prismicProject.data

  // States
  const [descriptionPopupOpen, setDescriptionPopupOpen] = useState<boolean>(
    false,
  )

  // Computed
  const categoryText = categoryList.map(c => c.category).join(', ')
  const projects = data.allPrismicProject.nodes.map(project => ({
    uid: project.uid,
    number: project.data.number,
  }))
  const nextProjectUrl = `/projet/${
    (
      projects.find(p => currentProjectNumber - 1 === p.number) ??
      projects[projects.length - 1]
    ).uid
  }`
  const previousProjectUrl = `/projet/${
    (projects.find(p => currentProjectNumber + 1 === p.number) ?? projects[0])
      .uid
  }`

  // Callbacks
  const openDescriptionPopup = useCallback(function openDescriptionPopup(
    event: React.MouseEvent,
  ) {
    event.stopPropagation()
    setDescriptionPopupOpen(true)
  },
  [])

  const closeDescriptionPopup = useCallback(function closeDescriptionPopup(
    event: React.MouseEvent,
  ) {
    event.stopPropagation()
    setDescriptionPopupOpen(false)
  },
  [])

  return (
    <Root>
      <MobileNav />
      <Left descriptionPopupOpen={descriptionPopupOpen}>
        <LeftScrollableWrapper>
          <DesktopHeader name={name} categoryText={categoryText} year={year} />
          <Content>
            {descriptionPopupOpen && (
              <CloseButton type="button" onClick={closeDescriptionPopup}>
                <CloseIcon />
              </CloseButton>
            )}
            <Description>
              <span>FR</span>
              <DescriptionContent
                dangerouslySetInnerHTML={{ __html: descriptionFr }}
              />
            </Description>
            <Description>
              <span>EN</span>
              <DescriptionContent
                dangerouslySetInnerHTML={{ __html: descriptionEn }}
              />
            </Description>
          </Content>
          <ProjectNav
            previousUrl={previousProjectUrl}
            nextUrl={nextProjectUrl}
          />
        </LeftScrollableWrapper>
      </Left>
      <Right>
        <RightScrollableWrapper>
          <MobileHeader
            name={name}
            categoryText={categoryText}
            year={year}
            plusVisible={!descriptionPopupOpen}
            onPlusIconClick={openDescriptionPopup}
          />
          {assets.map(asset => {
            if (asset.type === 'image') {
              return (
                <ProjectImage
                  key={asset.image.url}
                  src={asset.image.url}
                  alt={''}
                />
              ) // TODO: Check si c'est pas possible d'en mettre un prismic
            } else if (asset.type === 'video') {
              return (
                <IframeContainer key={asset.video_link.url}>
                  <div>
                    <iframe
                      src={asset.video_link.url}
                      frameBorder="0"
                      allow="autoplay; fullscreen; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </IframeContainer>
              )
            } else {
              return null
            }
          })}
          <MobileProjectArrows
            nextUrl={nextProjectUrl}
            previousUrl={previousProjectUrl}
          />
        </RightScrollableWrapper>
      </Right>
    </Root>
  )
}

export default SingleProjectPage

export const pageQuery = graphql`
  query($uid: String) {
    prismicProject(uid: { eq: $uid }) {
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

    allPrismicProject(sort: { fields: data___number, order: ASC }) {
      nodes {
        uid
        data {
          number
        }
      }
    }
  }
`
