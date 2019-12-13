import React from 'react'
import { Link } from 'react-router-dom'

import { NavitionList, NavitionListItem } from './styled'

const Navigation = ({ links }) => (
  <NavitionList>
    {links.map(({ label, to }, idx) => (
      <NavitionListItem key={`${idx}-${label}`}>
        <Link to={to}>{label}</Link>
      </NavitionListItem>
    ))}
  </NavitionList>
)

export default Navigation
