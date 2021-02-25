import {
  css,
  SimpleInterpolation,
  FlattenSimpleInterpolation,
} from 'styled-components'

export const breakpoint = {
  toDesktop: 768,
}

export type Breakpoint = typeof breakpoint

export const mobileMediaQuery =
  'max-width: ' + breakpoint.toDesktop.toString() + 'px'
export const desktopMediaQuery =
  'min-width:' + (breakpoint.toDesktop + 1).toString() + 'px'

export function mobileStyle(
  template: TemplateStringsArray,
  ...args: SimpleInterpolation[]
): FlattenSimpleInterpolation {
  return css`
    @media screen and (${mobileMediaQuery}) {
      ${css(template, ...args)}
    }
  `
}

export function desktopStyle(
  template: TemplateStringsArray,
  ...args: SimpleInterpolation[]
): FlattenSimpleInterpolation {
  return css`
    @media screen and (${desktopMediaQuery}) {
      ${css(template, ...args)}
    }
  `
}
