import { graphql } from 'gatsby'
import React, { FC } from 'react'

const IndexPage: FC<PageData.Homepage> = ({ data }) => {
  return (
    <>
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <footer
        dangerouslySetInnerHTML={{
          __html: data.prismicHomePage.data.footer.html,
        }}
      />
    </>
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
