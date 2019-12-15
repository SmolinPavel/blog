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
  max-width: calc(90rem + 2rem);
  color: #ffffff;
  padding: 0 1rem;
  width: 100%;
`

export const BannerMessage = styled.div`
  width: 60%;
`

export const CallToAction = styled.div`
  background-image: url(${ctaButton});
  width: 341.5px;
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    transform: translateY(-3px);
  }
`
