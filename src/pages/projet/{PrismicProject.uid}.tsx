import { graphql } from 'gatsby'
import React, { FC } from 'react'
import styled, { css } from 'styled-components'
import { desktopStyle, mobileStyle } from 'styles/responsive'
import { Header } from 'pageComponents/project/Header'

const Root = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;

  width: 100%;
  height: 100%;
  margin: auto;
  max-width: ${({ theme }) => theme.layout.maxWidth}px;
`

const ScrollableWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: auto;
`

const sideStyle = css`
  position: relative;
  overflow-y: auto;
  flex-basis: 50%;
  flex-shrink: 0;
  flex-grow: 1;
  height: 100%;
`

const Left = styled.section`
  ${sideStyle};
  ${mobileStyle`
    display: none;
  `}
`

const MobileHeader = styled(Header)`
  ${desktopStyle`
    display: none;
  `}
`

const Right = styled.section`
  ${sideStyle}
`

const LeftScrollableWrapper = styled(ScrollableWrapper)`
  padding-top: ${({ theme }) => theme.spacing[4]};
  padding-left: ${({ theme }) => theme.spacing[4]};
`

const Content = styled.div`
  width: 70%;
  font-family: ${({ theme }) => theme.font.primary};
  font-size: 1.7rem;
  line-height: 2.465rem;
  margin-bottom: ${({ theme }) => theme.spacing[4]};
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

const SingleProjectPage: FC<PageData.SingleProjectPage> = ({ data }) => {
  const {
    name,
    category_list: categoryList,
    year,
    description_en: { html: descriptionEn },
    description_fr: { html: descriptionFr },
    assets,
  } = data.prismicProject.data

  const categoryText = categoryList.map(c => c.category).join(', ')

  return (
    <Root>
      <Left>
        <LeftScrollableWrapper>
          <Header name={name} categoryText={categoryText} year={year} />
          <Content>
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
        </LeftScrollableWrapper>
      </Left>
      <Right>
        <ScrollableWrapper>
          <MobileHeader name={name} categoryText={categoryText} year={year} />
          {assets.map(asset => {
            if (asset.type === 'image') {
              return (
                <ProjectImage
                  key={asset.image.url}
                  src={asset.image.url}
                  alt={''}
                />
              ) // TODO: Check si c'est pas possible d'en mettre un prismic
            } else {
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
            }
          })}
        </ScrollableWrapper>
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
        carousel_image {
          url
        }
      }
    }
  }
`
