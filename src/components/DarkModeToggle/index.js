import React from 'react'

import { LeftEmoji, RightEmoji, Slider, Switch, SwitchInput } from './styled'

const DarkModeToggle = ({ onChange, type, value }) => (
  <Switch>
    <SwitchInput onChange={onChange} type={type} value={value} />
    <Slider />
    <LeftEmoji role="img" aria-label="Sun">
      &#127771;
    </LeftEmoji>
    <RightEmoji role="img" aria-label="Moon">
      &#127774;
    </RightEmoji>
  </Switch>
)

export default DarkModeToggle
