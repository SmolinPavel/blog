import styled from 'styled-components'

import ctaButton from 'assets/ctaButton.svg'

export const Wrapper = styled.section`
  background: linear-gradient(
    270deg,
    rgba(48, 205, 167, 0.7) 11.71%,
    rgba(81, 72, 220, 0.546) 76.49%
  );
  width: 100vw;
  padding: 3rem 0;
  display: flex;
  justify-content: center;
`

export const InnerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: calc(90rem + 2rem);
  color: #ffffff;
  padding: 0 1rem;
  width: 100%;

  @media only screen and (max-width: 800px) {
    justify-content: center;
  }
`

export const BannerMessage = styled.div`
  width: 60%;

  @media only screen and (max-width: 800px) {
    width: 100%;
    margin-bottom: 2rem;
  }
`

export const CallToAction = styled.button`
  border: none;
  background-color: transparent;
  color: inherit;
  background-image: url(${ctaButton});
  width: 341.5px;
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: 0.3s;
  backface-visibility: hidden;
  outline: none;

  &:hover {
    box-shadow: 0 5px 10px rgba(255, 255, 255, 0.2);
  }
`
