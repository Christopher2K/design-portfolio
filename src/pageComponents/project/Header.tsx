import React, { FC } from 'react'
import styled from 'styled-components'
import { desktopStyle, mobileStyle } from 'styles/responsive'
import PlusIcon from 'assets/svg/plus.svg'

const Root = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;

  display: 100%;
  margin-bottom: ${({ theme }) => theme.spacing[6]};

  ${({ theme }) => mobileStyle`
    padding: ${theme.spacing[4]} ${theme.spacing[2]};
    padding-bottom: 0;
  `}
`

const Title = styled.h1`
  width: 100%;
  font-family: ${({ theme }) => theme.font.primary};
  font-size: 1.7rem;
  font-weight: normal;
  line-height: 2.456rem;
  text-transform: uppercase;

  ${mobileStyle`
    font-size: 1.5rem;
    line-height: 2.175rem;
  `}
`

const Subtitle = styled(Title.withComponent('h2'))`
  font-size: 1.6rem;
  line-height: 2.32rem;
  text-transform: none;

  ${mobileStyle`
    font-size: 1.3rem;
    line-height: 1.885rem;
  `}
`

const Left = styled.div`
  flex: 1;
`

const Right = styled.div`
  flex-shrink: 0;
  height: auto;

  ${desktopStyle`
    display: none;
  `}
`

const Button = styled.button`
  display: flex;
  background-color: transparent;
  border: none;
  padding: 0;
  margin: 0;
  font-size: 3rem;
  padding: 3px;

  span {
    display: inline-block;
  }

  .text {
    height: 0;
    margin-top: 3px;
    margin-right: -2px;

    &:active,
    &:focus {
      outline: none;
    }
  }
`

interface HeaderProps {
  name: string
  categoryText: string
  year: string
  className?: string
}

export const Header: FC<HeaderProps> = ({
  name,
  categoryText,
  year,
  className,
}) => {
  return (
    <Root className={className}>
      <Left>
        <Title>{name}</Title>
        <Subtitle>
          {categoryText}, {year}
        </Subtitle>
      </Left>
      <Right>
        <Button type="button">
          <PlusIcon />
        </Button>
      </Right>
    </Root>
  )
}
