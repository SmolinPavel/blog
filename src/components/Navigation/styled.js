import styled from 'styled-components'

import linkUnderline from 'assets/underline.svg'
import linkUnderlineDark from 'assets/underlineDark.svg'

export const NavitionList = styled.ul`
  display: flex;
  align-items: center;
`

export const NavitionListItem = styled.li`
  list-style-type: none;

  a {
    color: ${(props) => props.theme.colors.textColor};
    padding: 0 1rem 4px;
    display: inline-block;
    text-decoration: none;
  }

  &:hover {
    background-image: url(${(props) =>
      props.theme.isDark ? linkUnderlineDark : linkUnderline});
    background-repeat: no-repeat;
    background-position: center bottom;
    background-size: contain;
  }
`
