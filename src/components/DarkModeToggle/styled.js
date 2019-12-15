import styled from 'styled-components'

const sliderOffset = '3px'
const sliderSide = '20px'

export const Switch = styled.label`
  align-self: flex-start;
  margin: 0.2rem 1.1rem;
  position: relative;
  display: inline-block;
  flex-basis: 50px;
  flex-shrink: 0;
  height: 26px;
  cursor: pointer;
`

export const SwitchInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
  transition: var(--modeTransitionTimeout);

  &:focus + span:before {
    box-shadow: 0 0 10px ${(props) => props.theme.colors.typographyColor};
  }

  &:checked + span:before {
    transform: translateX(24px);
  }
`

export const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${(props) => props.theme.colors.sliderBackground};
  transition: var(--modeTransitionTimeout);
  border-radius: 2rem;

  &:before {
    position: absolute;
    z-index: 1;
    content: '';
    height: ${sliderSide};
    width: ${sliderSide};
    left: ${sliderOffset};
    bottom: ${sliderOffset};
    background-color: ${(props) => (props.theme.isDark ? 'white' : '#FFFB90;')};
    transition: var(--modeTransitionTimeout);
    border-radius: 50%;
  }
`

const Emoji = styled.span`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1rem;
`

export const LeftEmoji = styled(Emoji)`
  left: ${sliderOffset};
`

export const RightEmoji = styled(Emoji)`
  right: ${sliderOffset};
`
