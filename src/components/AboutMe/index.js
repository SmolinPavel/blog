import React from 'react'

import { Description, Wrapper } from './styled'
import Profile from 'components/Profile'
import Typography from 'components/Typography'

const AboutMe = () => (
  <Wrapper>
    <Profile />
    <Description>
      <Typography>Кто я такой и зачем вам читать все это?</Typography>
      <p>
        Думаю не стоит уходить глубоко в обсуждения всяких разных аспектов.
        Самое важно все равно будет написано и почитано в первых 3-ех
        предложениях этого самого текстового абзаца - объяснения. Но! Разумется
        может найтись и та редкая птица которая дочитает до этого предложения.
        Или до этого. Хм...тогда пожалуй все таки придется ответить на пару
        вопросов. О том кто я той, зачем я все это пишу...
      </p>
    </Description>
  </Wrapper>
)

export default AboutMe
