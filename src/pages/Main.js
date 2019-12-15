import React from 'react'

import PageLayout from 'components/PageLayout'
import AboutMe from 'components/AboutMe'
import Banner from 'components/Banner'
import ArticleList from 'components/ArticleList'

const Main = () => (
  <PageLayout>
    <AboutMe />
    <Banner>
      Тут могла бы быть реклама чудесных курсов или потрясающего приложения, но
      пока видимо таких еще не придумали...
    </Banner>
    <ArticleList />
  </PageLayout>
)

export default Main
