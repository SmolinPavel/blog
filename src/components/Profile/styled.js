import styled from 'styled-components'

import { ReactComponent as Pavel } from 'assets/pavel.svg'
import { ReactComponent as ProfileArrow } from 'assets/profileArrow.svg'

export const Wrapper = styled.aside`
  position: relative;
`

export const Image = styled(Pavel)`
  border-radius: 50%;
  width: 10rem;
  height: 10rem;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    -webkit-filter: contrast(140%);
    filter: contrast(140%);
  }
`

export const Arrow = styled(ProfileArrow)`
  position: absolute;
  top: -95px;
  right: -52px;

  path {
    stroke: ${(props) => (props.theme.isDark ? '#C4C4C4' : '#000000')};
  }
`
