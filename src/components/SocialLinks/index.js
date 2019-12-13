import React from 'react'

import { List, ListItem } from './styled'

import { ReactComponent as InstaIcon } from 'assets/instagram.svg'
import { ReactComponent as LinkedinIcon } from 'assets/linkedin.svg'
import { ReactComponent as FacebookIcon } from 'assets/facebook.svg'
import { ReactComponent as GithubIcon } from 'assets/github.svg'

const SOCIAL_LINKS = [
  {
    alt: 'instagram',
    image: <InstaIcon />,
  },
  {
    alt: 'linkedin',
    image: <LinkedinIcon />,
  },
  {
    alt: 'facebook',
    image: <FacebookIcon />,
  },
  {
    alt: 'github',
    image: <GithubIcon />,
  },
]

const SocialLinks = () => (
  <List>
    {SOCIAL_LINKS.map(({ alt, image }, idx) => (
      <ListItem key={`${alt}-${idx}`}>{image}</ListItem>
    ))}
  </List>
)

export default SocialLinks
