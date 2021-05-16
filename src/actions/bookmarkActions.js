export const addBookmark = (obj) => async dispatch => {
  dispatch( {type: 'ADDBOOKMARK',payload: obj})
}

export const deleteBookmark = (obj) => async dispatch => {
  dispatch( {type: 'DELETEBOOKMARK',payload: obj})
}
