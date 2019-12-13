import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  max-width: 90rem;
`

export const Description = styled.div`
  margin-left: 5rem;
  color: ${(props) => props.theme.colors.textColor};
`
