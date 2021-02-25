declare namespace PageData {
  interface Homepage {
    data: {
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
    }
  }
}
