const initialState = {
    booklist: [],
}

export default function(state = initialState, action){
    switch(action.type){
      case 'ADDBOOKMARK':
        return {
          ...state,
          booklist: [...state.booklist, action.payload]
      }
        case 'DELETEBOOKMARK':
          return {
            ...state,
            booklist: state.booklist.filter(item => item.id !== action.payload)
        }
        default: return state
    }
}
