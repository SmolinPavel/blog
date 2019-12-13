import styled from 'styled-components'

export const Wrapper = styled.section`
  display: flex;
  max-width: 90rem;
  margin: 4.5rem;
`

export const Description = styled.div`
  margin-left: 10%;
  color: ${(props) => props.theme.colors.textColor};
`
