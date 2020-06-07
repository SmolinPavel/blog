import styled from 'styled-components'

export const Wrapper = styled.header`
  display: flex;
  max-width: 90rem;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 1.1rem;

  @media only screen and (max-width: 800px) {
    flex-direction: column;

    > * {
      width: 100%;
      display: flex;
      justify-content: center;
      margin: 0.3rem 0;
    }
  }

  > * {
    flex: 1;
  }
`
