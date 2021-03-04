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
            data: Model.ProjectData
          }
        }>
      }
    }>
  }
}
