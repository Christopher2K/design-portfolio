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
      prismicProject: {
        uid: string
        data: Model.ProjectData
      }
    }>
  }
}
