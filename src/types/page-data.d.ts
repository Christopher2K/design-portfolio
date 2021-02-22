interface Category {
  category: string
}

interface Image {
  url: string
}

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
        edges: {
          node: {
            data: {
              name: string
              category_list: Category[]
              thumbnail: Image
            }
          }
        }
      }
    }
  }
}
