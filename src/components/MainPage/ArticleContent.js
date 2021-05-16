import React, { useEffect } from 'react'
import parse from 'html-react-parser'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { getArticle } from '../../actions/articleActions'
import { addBookmark, deleteBookmark } from '../../actions/bookmarkActions'

const ArticleWrapper = styled.div`
  .inner-article {
    display: grid;
    grid-template: 1fr/ 2fr 1fr;
    figure {
      img {
        width: 350px;
        height: auto;
      }
      figcaption {
        color: grey;
        font-size: 12px;
      }
    }
  }
  #bookmark-btn {
    background: #1b1b65;
    color: white;
    border: none;
    border-radius: 4px;
    padding: 6px 12px;
    text-transform: uppercase;
    margin-bottom: 24px;
  }
`

function ArticleContent(props) {
  const dispatch = useDispatch()
  const articleState = useSelector(state => state.article)
  const bookmarkState = useSelector(state => state.bookmark)
  let path = 'test'
  if(props.location.pathname.startsWith('/article/')) {
    path = props.location.pathname.slice(9)
  }
  useEffect(() => {
      dispatch(getArticle(path))
    }, [dispatch, path])

  function handleBook(i, booked) {
    if(booked) {
      dispatch(deleteBookmark(i.id))
    } else {
      dispatch(addBookmark(i))
    }
  }

  const i = articleState?.response?.content
  if (i) {
    const booked = bookmarkState.booklist.find(item => item.id===i.id)
    const { body, firstPublicationDate, headline, standfirst, main } = i.fields
    return (
      <ArticleWrapper>
        <button id="bookmark-btn" onClick={handleBook.bind(this, i, booked)}>{booked? 'Remove from bookmark':'Add to bookmark'}</button>
        <div>{firstPublicationDate}</div>
        <h2>{headline}</h2>

        {standfirst&&<h4>{parse(standfirst)}</h4>}
        <div className="inner-article">
          <div>{parse(body)}</div>
          {parse(main)}
        </div>
      </ArticleWrapper>
    )
  } return "Loading"
}

export default ArticleContent
