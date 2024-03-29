import styled from 'styled-components'

export const Wrapper = styled.section`
  display: flex;
  max-width: calc(90rem + 2rem);
  padding: 1rem;
  margin: 3.5rem 0;

  @media only screen and (max-width: 800px) {
    flex-direction: column;
  }
`

export const Description = styled.div`
  margin-left: 10%;
  color: ${(props) => props.theme.colors.textColor};
  transition: var(--modeTransitionTimeout);
`
