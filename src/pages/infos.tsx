import { graphql } from 'gatsby'
import React, { FC } from 'react'
import styled from 'styled-components'

const Root = styled.div`
  width: 100%;
  height: 100%;
`

const InfosPage: FC<PageData.InfosPage> = () => {
  return <Root>InfosPage</Root>
}

export default InfosPage

export const query = graphql`
  query InformationPageQuery {
    prismicInformationPage {
      data {
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
