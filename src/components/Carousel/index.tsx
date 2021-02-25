import styled from 'styled-components'

export const Carousel = styled.div`
  width: 100%;
  height: calc(100% - ${({ theme }) => theme.layout.desktopNavHeight});
  background-color: teal; /* TODO: Fix this later */
  flex-shrink: 0;
  margin-bottom: ${props => props.theme.spacing[6]};
`
