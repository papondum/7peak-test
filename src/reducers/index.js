import { combineReducers } from 'redux'

import mainReducer from './mainReducer'
import articleReducer from './articleReducer'
import bookmarkReducer from './boomarkReducer'
// import searchReducer from './features/filters/filtersSlice'

const rootReducer = combineReducers({
  main: mainReducer,
  article: articleReducer,
  bookmark: bookmarkReducer,
  // search: filtersReducer
})

export default rootReducer
