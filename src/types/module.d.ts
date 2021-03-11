import type { ComponentType, DetailedHTMLProps } from 'react'

declare namespace global {
  declare module '*.woff'
  declare module '*.woff2'

  declare module '*.svg' {
    const content: ComponentType<DetailedHTMLProps<HTMLOrSVGElement>>
    export default content
  }
}
