import React, { FC } from 'react'

import styled, { css } from 'styled-components'
import { mobileStyle } from 'styles/responsive'

const Root = styled.main`
  width: 100vw;
  height: 100vh;
  max-width: 100%;
  overflow-y: auto;
  margin: 0 auto;
`

const GlobalLoading = styled.div<{ isHidden: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1000;

  background: ${({ theme }) => theme.color.black};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 1;
  visibility: visible;
  background: ${({ theme }) => theme.color.black};
  transition: opacity 1s linear, visibility 1s linear;

  div {
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 5px;
    background: ${({ theme }) => theme.color.white};
  }

  p {
    text-align: center;
    color: ${({ theme }) => theme.color.white};
    font-size: 2.2rem;
    line-height: 3.41rem;
    font-family: ${({ theme }) => theme.font.primary};

    ${mobileStyle`
      font-size: 1.5rem;
      line-height: 2.325rem;
    `}
  }

  ${props =>
    props.isHidden &&
    css`
      opacity: 0;
      visibility: hidden;
    `}
`

export const Layout: FC = ({ children }) => {
  const [displayWelcomePopup, setDisplayWelcomePopup] = React.useState(true)
  const [loadingBar, setLoadingBar] = React.useState(0)

  React.useEffect(() => {
    if (window) {
      const i = setInterval(() => {
        setLoadingBar(status => status + 1)
      }, 2000 / 100)

      setTimeout(() => {
        setDisplayWelcomePopup(false)
        clearInterval(i)
      }, 2000)
    }
  }, [])

  return (
    <Root id="main">
      <GlobalLoading isHidden={!displayWelcomePopup}>
        <div
          style={{
            width: `${loadingBar}vw`,
          }}
        />
        <p>Eunice Tchitchiama</p>
        <p>Designer graphique & Designer numérique</p>
      </GlobalLoading>
      {children}
    </Root>
  )
}
