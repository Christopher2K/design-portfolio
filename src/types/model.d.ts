declare namespace Model {
  interface Category {
    category: string
  }

  interface Image {
    url: string
  }

  interface Video extends Image {}

  interface HTMLString {
    html: string
  }

  interface Asset {
    type: 'image' | 'video'
    video_link: Video
    image: Image
  }

  interface ProjectData {
    number: number
    name: string
    year: string
    category_list: Category[]
    description_fr: HTMLString
    description_en: HTMLString
    assets: Asset[]
    thumbnail: Image
    carousel_image: Image
  }
}
