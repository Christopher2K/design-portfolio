import 'styled-components'
import type { Theme as AppTheme } from 'styles/theme'

declare module 'styled-components' {
  export interface DefaultTheme extends AppTheme {}
}
