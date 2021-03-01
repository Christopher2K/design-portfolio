declare namespace Model {
  interface Category {
    category: string
  }

  interface Image {
    url: string
  }

  interface ProjectData {
    name: string
    category_list: Category[]
    thumbnail: Image
    carousel_image: Image
  }
}
