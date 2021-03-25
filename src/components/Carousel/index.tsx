import React, { FC, useCallback, useState, useRef } from 'react'
import styled from 'styled-components'
import { mobileStyle } from 'styles/responsive'
import ArrowIcon from 'assets/svg/arrow.svg'

const Root = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: nowrap;

  overflow-x: hidden;
  width: 100%;
  height: calc(100% - ${({ theme }) => theme.layout.desktopNavHeight});
  flex-shrink: 0;
  margin-bottom: ${props => props.theme.spacing[6]};

  ${mobileStyle`
    display: none;
  `}
`

interface WrapperProps {
  index: number
}

const Wrapper = styled.div<WrapperProps>`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: nowrap;

  min-width: 100%;
  height: 100%;

  transform: translateX(-${({ index }) => index * 100}%);

  transition: transform 200ms ease-out;
`

interface ItemProps {
  backgroundUrl: string
}
const Item = styled.div<ItemProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  flex-shrink: 0;

  position: relative;
  width: 100%;
  height: 100%;

  background-image: url('${props => props.backgroundUrl}');
  background-position: center center;
  background-size: cover;
`

interface ImageLabelProps {
  background: 'light' | 'dark'
}
const ImageLabel = styled.p<ImageLabelProps>`
  position: absolute;
  top: ${({ theme }) => theme.spacing[4]};
  left: 50%;
  transform: translateX(-50%);
  font-size: 1.8rem;
  padding: ${({ theme }) => `${theme.spacing[1]}`};
  background-color: ${({ background }) =>
    background === 'dark' ? '#000000' : '#FFFFFF'};
  color: ${({ background }) =>
    background === 'light' ? '#000000' : '#FFFFFF'};
`

interface OverlayButtonProps {
  side: 'left' | 'right'
}

const OverlayButton = styled.button<OverlayButtonProps>`
  position: absolute;
  display: block;
  height: 100%;
  width: 50%;

  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  margin: 0;
  padding: 0;

  ${({ side }) => side}: 0px;
  z-index: 10;
`

const CursorIndicator = styled.div`
  position: fixed;
  z-index: 1000;

  user-select: none;
`

interface StyledArrowIconProps {
  rotate: boolean
}
const StyledArrowIcon = styled(ArrowIcon)<StyledArrowIconProps>`
  transform: rotate(${props => (props.rotate ? '180deg' : '0')});
`

interface CarouselProps {
  items: Array<{
    label: string
    url: string
    textBackground: 'light' | 'dark'
  }>
  onEnd: () => void
}

export const Carousel: FC<CarouselProps> = ({ items, onEnd }) => {
  const cursorIndicatorRef = useRef<HTMLDivElement>(null)

  const [currentImage, setCurrentImage] = useState(0)
  const [coords, setCoords] = useState({ top: 0, left: 0 })
  const [cursorArrow, setCursorArrow] = useState<'left' | 'right' | undefined>(
    undefined,
  )

  const updateIndicatorPosition = useCallback(function updateIndicatorPosition(
    event: React.MouseEvent<HTMLButtonElement>,
  ) {
    setCoords({
      top: event.nativeEvent.clientY,
      left: event.nativeEvent.clientX,
    })
  },
  [])

  const goToNextImage = useCallback(function goToNextImage() {
    setCurrentImage(current => {
      if (current === items.length - 1) {
        onEnd()
        return current
      }

      return current + 1
    })
  }, [])

  const goToPrevImage = useCallback(function goToNextImage() {
    setCurrentImage(current => {
      if (current === 0) {
        return current
      }

      return current - 1
    })
  }, [])

  return (
    <Root>
      <OverlayButton
        side="left"
        onClick={goToPrevImage}
        onMouseEnter={() => setCursorArrow('left')}
        onMouseLeave={() => setCursorArrow(undefined)}
        onMouseMove={updateIndicatorPosition}
      />
      <Wrapper index={currentImage}>
        {items.map((item, index) => (
          <Item key={item.label} backgroundUrl={item.url}>
            <ImageLabel background={item.textBackground}>
              {item.label} [{index + 1}/{items.length}]
            </ImageLabel>
          </Item>
        ))}
      </Wrapper>
      <OverlayButton
        side="right"
        onClick={goToNextImage}
        onMouseEnter={() => setCursorArrow('right')}
        onMouseLeave={() => setCursorArrow(undefined)}
        onMouseMove={updateIndicatorPosition}
      />
      {cursorArrow !== undefined && (
        <CursorIndicator
          ref={cursorIndicatorRef}
          style={{
            top: coords.top + 15,
            left: coords.left + 15,
          }}
        >
          <StyledArrowIcon rotate={cursorArrow === 'left'} />
        </CursorIndicator>
      )}
    </Root>
  )
}
