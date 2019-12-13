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
    link: 'https://www.instagram.com/smolinp/',
  },
  {
    alt: 'linkedin',
    image: <LinkedinIcon />,
    link: 'https://www.linkedin.com/in/pavel-smolin-7887b2155/',
  },
  {
    alt: 'facebook',
    image: <FacebookIcon />,
    link: 'https://www.facebook.com/pavelsmolinpavel',
  },
  {
    alt: 'github',
    image: <GithubIcon />,
    link: 'https://github.com/SmolinPavel',
  },
]

const SocialLinks = () => (
  <List>
    {SOCIAL_LINKS.map(({ alt, image, link }, idx) => (
      <ListItem key={`${alt}-${idx}`}>
        <a href={link}>{image}</a>
      </ListItem>
    ))}
  </List>
)

export default SocialLinks
