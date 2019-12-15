import React from 'react'
import styled from 'styled-components'

const Typography = ({ children, size, tag, weight }) => {
  const Tag = styled(tag)`
    color: ${(props) => props.theme.colors.typographyColor};
    font-size: ${size};
    font-weight: ${weight};
    margin-bottom: 1rem;
    transition: var(--modeTransitionTimeout);
  `
  return <Tag>{children}</Tag>
}

Typography.defaultProps = {
  size: '25px',
  tag: 'h1',
  weight: 'bold',
}

export default Typography
