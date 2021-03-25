/* eslint-disable @typescript-eslint/naming-convention */
import { graphql } from 'gatsby'
import React, { FC } from 'react'
import styled from 'styled-components'

import { mobileStyle } from 'styles/responsive'
import { InfoNav } from 'pageComponents/infos/InfoNav'

const Root = styled.div<{ customBackground: string }>`
  width: 100%;
  height: 100%;
  background-color: ${({ customBackground }) => customBackground};

  ${mobileStyle`
    overflow-y: auto;
    height: auto;
  `}
`

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 36px;

  display: grid;
  grid-template-columns: minmax(0, 2fr) minmax(0, 2fr) minmax(0, 4fr);
  grid-column-gap: ${({ theme }) => theme.spacing[2]};

  ${({ theme }) => mobileStyle`
    display: block;
    padding: ${theme.spacing[4]} ${theme.spacing[2]};
  `}
`

const IdentityColumn = styled.div`
  grid-column-start: 1;
  grid-column-end: 1;
  width: 100%;
  color: ${({ theme }) => theme.color.white};
  max-width: 400px;

  h1,
  p,
  li,
  a {
    font-weight: 300;
    font-family: ${({ theme }) => theme.font.primary};
    font-size: 1.9rem;
    line-height: 2.755rem;
    color: inherit;
  }

  h1,
  div {
    margin-bottom: ${({ theme }) => theme.spacing[4]};
  }

  img {
    width: 100%;
    height: auto;
  }
  ${mobileStyle`
    display: none;
  `}
`

const Informations = styled.div`
  grid-column-start: 3;
  grid-column-end: 3;
  width: 100%;
  height: 100%;
  overflow-y: auto;

  ${mobileStyle`
    overflow-y: initial;
    height: auto;
  `}
`

const Scrollable = styled.div`
  color: ${({ theme }) => theme.color.white};

  display: grid;
  grid-template-columns: 30px minmax(0, 1fr);
  grid-column-gap: ${({ theme }) => theme.spacing[1]};

  .lang {
    font-size: 1.8rem;
    line-height: 2.61rem;
  }

  .bio {
    color: inherit;
    font-size: 1.8rem;
    line-height: 2.61rem;
    margin-bottom: ${({ theme }) => theme.spacing[4]};

    ${mobileStyle`
      font-size: 1.5rem;
      line-height: 2.175rem;
    `}
  }

  .domains {
    color: inherit;
    font-family: ${({ theme }) => theme.font.title};

    font-size: 3rem;
    line-height: 4.35rem;
    margin-bottom: ${({ theme }) => theme.spacing[6]};

    ${mobileStyle`
      font-size: 1.4rem;
      line-height: 2.03rem;
    `}
  }

  div {
    margin-bottom: ${({ theme }) => theme.spacing[6]};
    color: inherit;

    h3 {
      text-transform: uppercase;
      font-size: 2.1rem;
      line-height: 3.045rem;
      font-weight: 300;
      color: inherit;

      ${mobileStyle`
      font-size: 1.5rem;
      line-height: 2.175rem;
    `}
    }

    ul {
      li {
        font-size: 1.8rem;
        line-height: 2.61rem;
        color: inherit;

        ${mobileStyle`
      font-size: 1.5rem;
      line-height: 2.175rem;
    `}

        span {
          display: inline;
          p {
            display: inline;

            a {
              color: inherit;
              text-decoration: underline;
            }
          }
        }
      }
    }
  }
`

const IdentityColumnMobile = styled.div`
  display: none;
  ${({ theme }) => mobileStyle`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;

    width: 100%;
    margin-bottom: ${theme.spacing[5]};

    h1,
    a,
    ul > li {
      color: ${theme.color.white};
      font-size: 1.5rem;
      line-height: 2.175rem;
    }
`}
`

const InfosPage: FC<PageData.InfosPage> = ({ data }) => {
  const {
    prismicInformationPage: { data: pageData },
  } = data

  return (
    <Root customBackground={pageData.color}>
      <InfoNav customBackground={pageData.color} />
      <Wrapper>
        <IdentityColumn>
          <h1>{pageData.name}</h1>
          <div>
            <p>Contact</p>
            <a href={`mailto:${pageData.email}`}>{pageData.email}</a>
          </div>
          <div>
            <p>Follow</p>
            <ul>
              {pageData.social_networks.map(
                ({ network_link, network_name }) => (
                  <li key={network_link.url}>
                    <a target="_blank" rel="noreferrer" href={network_link.url}>
                      {network_name}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>
          {pageData.media && (
            <img src={pageData.media.url} alt={pageData.name} />
          )}
        </IdentityColumn>

        <Informations>
          <IdentityColumnMobile>
            <div>
              <h1>{pageData.name}</h1>
              <a href={`mailto:${pageData.email}`}>{pageData.email}</a>
            </div>
            <ul>
              {pageData.social_networks.map(
                ({ network_link, network_name }) => (
                  <li key={network_link.url}>
                    <a target="_blank" rel="noreferrer" href={network_link.url}>
                      {network_name}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </IdentityColumnMobile>
          <Scrollable>
            <div className="lang">FR</div>
            <section>
              <p
                className="bio"
                dangerouslySetInnerHTML={{ __html: pageData.fr_bio.html }}
              />
              <p className="domains">{pageData.en_domains.toUpperCase()}</p>
              <div>
                <h3>Publications</h3>
                <ul>
                  {pageData.fr_publications.map(
                    ({
                      fr_publication_date,
                      fr_publication_link,
                      fr_publication_title,
                    }) => (
                      <li key={fr_publication_title}>
                        {fr_publication_date} - {fr_publication_title},{' '}
                        <span
                          dangerouslySetInnerHTML={{
                            __html: fr_publication_link.html,
                          }}
                        />
                      </li>
                    ),
                  )}
                </ul>
              </div>
              <div>
                <h3>Expositions & conférences</h3>
                <ul>
                  {pageData.fr_exhibits.map(
                    ({
                      fr_exhibit_date,
                      fr_exhibit_title,
                      fr_exhibit_place,
                    }) => (
                      <li key={fr_exhibit_title}>
                        {fr_exhibit_date} - {fr_exhibit_title},{' '}
                        {fr_exhibit_place}
                      </li>
                    ),
                  )}
                </ul>
              </div>
              <div>
                <h3>Diplômes</h3>
                <ul>
                  {pageData.fr_degrees.map(
                    ({ fr_degree_school, fr_degree_date, fr_degree_name }) => (
                      <li key={fr_degree_name}>
                        {fr_degree_date} - {fr_degree_name}, {fr_degree_school}
                      </li>
                    ),
                  )}
                </ul>
              </div>
            </section>
            {/* ANGLAIS */}
            <div className="lang">EN</div>
            <section>
              <p
                className="bio"
                dangerouslySetInnerHTML={{ __html: pageData.en_bio.html }}
              />
              <p className="domains">{pageData.en_domains.toUpperCase()}</p>
              <div>
                <h3>Publications</h3>
                <ul>
                  {pageData.en_publications.map(
                    ({
                      en_publication_date,
                      en_publication_link,
                      en_publication_title,
                    }) => (
                      <li key={en_publication_title}>
                        {en_publication_date} - {en_publication_title},{' '}
                        <span
                          dangerouslySetInnerHTML={{
                            __html: en_publication_link.html,
                          }}
                        />
                      </li>
                    ),
                  )}
                </ul>
              </div>
              <div>
                <h3>Exhibitions & talks</h3>
                <ul>
                  {pageData.en_exhibits.map(
                    ({
                      en_exhibit_date,
                      en_exhibit_title,
                      en_exhibit_place,
                    }) => (
                      <li key={en_exhibit_title}>
                        {en_exhibit_date} - {en_exhibit_title},{' '}
                        {en_exhibit_place}
                      </li>
                    ),
                  )}
                </ul>
              </div>
              <div>
                <h3>Degrees</h3>
                <ul>
                  {pageData.en_degrees.map(
                    ({ en_degree_school, en_degree_date, en_degree_name }) => (
                      <li key={en_degree_name}>
                        {en_degree_date} - {en_degree_name}, {en_degree_school}
                      </li>
                    ),
                  )}
                </ul>
              </div>
            </section>
          </Scrollable>
        </Informations>
      </Wrapper>
    </Root>
  )
}

export default InfosPage

export const query = graphql`
  query InformationPageQuery {
    prismicInformationPage {
      data {
        color
        name
        email
        social_networks {
          network_name
          network_link {
            url
          }
        }
        media {
          url
        }
        fr_bio {
          html
        }
        fr_domains
        fr_publications {
          fr_publication_date
          fr_publication_title
          fr_publication_link {
            html
          }
        }
        fr_degrees {
          fr_degree_date
          fr_degree_name
          fr_degree_school
        }
        fr_exhibits {
          fr_exhibit_date
          fr_exhibit_title
          fr_exhibit_place
        }

        en_bio {
          html
        }
        en_domains
        en_publications {
          en_publication_date
          en_publication_title
          en_publication_link {
            html
          }
        }
        en_degrees {
          en_degree_date
          en_degree_name
          en_degree_school
        }
        en_exhibits {
          en_exhibit_date
          en_exhibit_title
          en_exhibit_place
        }
      }
    }
  }
`
