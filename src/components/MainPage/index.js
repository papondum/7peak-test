import React from 'react'
import { Route, Switch } from 'react-router-dom'
import GridContent from './GridContent'
import ArticleContent from './ArticleContent'
import Bookmark from './Bookmark'
import { Footer } from '../../styles.js'
function MainPage() {
  return (
    <>
      <div className='inner-container'>
        <Switch>
          <Route exact path="/" component={GridContent} />
          <Route path="/article/:url" component={ArticleContent} />
          <Route path="/bookmark" component={Bookmark} /> 
        </Switch>
      </div>
      <Footer>Footer</Footer>
    </>
  )
}
export default MainPage


//<Route path="/article" component={ArticlePage} />
