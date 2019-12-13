import React from 'react'

const Toggle = ({ onChange, type, value }) => (
  <input onChange={onChange} type={type} value={value} />
)

export default Toggle
