import React from 'react'
import styled from 'styled-components'

const Typography = ({ children, size, tag }) => {
  const Tag = styled(tag)`
    color: ${(props) => props.theme.colors.typographyColor};
    font-size: ${size};
    font-weight: bold;
    margin-bottom: 1rem;
  `
  return <Tag>{children}</Tag>
}

Typography.defaultProps = {
  size: '25px',
  tag: 'h1',
}

export default Typography
