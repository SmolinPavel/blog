import styled from 'styled-components'

export const List = styled.ul`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`
export const ListItem = styled.li`
  list-style-type: none;

  svg path {
    fill: ${(props) => props.theme.colors.typographyColor};
  }
`
