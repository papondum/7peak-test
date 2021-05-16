import React, { useEffect } from 'react'
import parse from 'html-react-parser'
import { useHistory } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { getNews, orderBy } from '../../actions/mainActions'
import { ArticleWrapper, ActionWrapper, GridWrapper, Card, } from './styles'


function GridContent() {
  let history = useHistory();
  const dispatch = useDispatch()
  const mainState = useSelector(state => state.main)
  const { response, actionText } = mainState
  function redirect(url) { return history.push(`article/${url}`) }
  function redirectBookmark() { return history.push('bookmark') }

  function handleChange(el) {
    dispatch(orderBy(el.target.value))
  }

  useEffect(() => {
      dispatch(getNews())
    }, [dispatch])
  const result = response.results? response.results.map((i, index) =>
    <Card index={index} onClick={redirect.bind(this, i.id)} key={i.id} value={i.webUrl}>
      <ArticleWrapper>
          <img src={i.fields.thumbnail} alt="" />
          <div className="text">{i.webTitle}</div>
          <div className="text">{parse(i.fields.trailText)}</div>
      </ArticleWrapper>
    </Card>
  ): 'Loading'

  return (
    <>
      <ActionWrapper>
        <h2>{actionText}</h2>
        <div style={{display: 'flex', height: '30px', alignSelf: 'flex-end', padding: '12px'}}>
          <button id="bookmark-btn" onClick={redirectBookmark.bind(this)}>VIEW BOOKMARK</button>
          <select onChange={handleChange.bind(this)}>
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
          </select>
        </div>
      </ActionWrapper>
      <GridWrapper>{result}</GridWrapper>
    </>
  )
}

export default GridContent
