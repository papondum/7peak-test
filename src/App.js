import React, {useState} from 'react'
import { Router, Route, Link } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { useDispatch } from 'react-redux'
import searchIcon from './assets/search-icon@2x.svg'
import { Wrapper, Container, Header, SearchInput } from './styles.js'
import MainPage from './components/MainPage'
import { searchByText } from './actions/mainActions.js'
import logoIcon from './assets/Logo-white.png'

const history = createBrowserHistory();
function App() {
  const dispatch = useDispatch()
  function search(el) {
    if(el.key === 'Enter') {
      if(history.location.pathname!=='/') {
        history.push('/')
        dispatch(searchByText(el.target.value))
      } else {
        dispatch(searchByText(el.target.value))
      }
    }
  }
  function handdleToggle() {
    setToggle(!toggle)
  }

  function handdleLeave(el) {
    setToggle(!toggle)
  }
  const [toggle, setToggle] = useState(false)
  return (
    <Wrapper className="App">
      <Router history={history}>
        <Header>
          <div className="inner-header">
          <Link to="/"><img src={logoIcon} alt=""/></Link>
          <span>
            <SearchInput toggle={toggle} placeHolder="search" type="text" onBlur={handdleLeave.bind(this)} onKeyDown={search.bind(this)}/>
            <img id="search-icon"onClick={handdleToggle.bind(this)} src={searchIcon} alt=""/></span>
          </div>
        </Header>
        <Container>
          <Route path="/" component={MainPage} />
        </Container>
      </Router>
    </Wrapper>
  )
}

export default App;
