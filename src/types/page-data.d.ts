import type { PageProps } from 'gatsby'

declare global {
  declare namespace PageData {
    type Homepage = PageProps<{
      prismicHomePage: {
        data: {
          full_name: string
          job_name: string
          mail: string
          footer: {
            html: string
          }
        }
      }

      allPrismicProject: {
        edges: Array<{
          node: {
            uid: string
            data: Model.ProjectData
          }
        }>
      }
    }>
    type SingleProjectPage = PageProps<{
      allPrismicProject: {
        nodes: Array<{
          uid: string
          data: {
            number: number
          }
        }>
      }
      prismicProject: {
        uid: string
        data: Model.ProjectData
      }
    }>

    interface InfosPage {
      prismicInformationPage: {
        data: {
          name: string
          email: string
          social_networks: Array<{
            network_name: string
            network_link: Model.Link
          }>
          media: Model.Image
          fr_bio: Model.HTMLString
          fr_domains: string
          fr_publications: {
            fr_publication_date: string
            fr_publication_title: string
            fr_publication_link: Model.HTMLString
          }
          fr_degrees: Array<{
            fr_degree_date: string
            fr_degree_name: string
            fr_degree_school: string
          }>
          fr_exhibits: Array<{
            fr_exhibit_date: string
            fr_exhibit_title: string
            fr_exhibit_place: string
          }>

          en_bio: Model.HTMLString
          en_domains: string
          en_publications: Array<{
            en_publication_date: string
            en_publication_title: string
            en_publication_link: Model.HTMLString
          }>
          en_degrees: Array<{
            en_degree_date: string
            en_degree_name: string
            en_degree_school: string
          }>
          en_exhibits: Array<{
            en_exhibit_date: string
            en_exhibit_title: string
            en_exhibit_place: string
          }>
        }
      }
    }
  }
}
