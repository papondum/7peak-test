const initialState = {
    response: {},
    loading:false
}

export default function(state = initialState, action){
    switch(action.type){
      case 'GETARTICLE_REQUEST':
        return {
          ...state,
          loading:true
      }
        case 'GETARTICLE_SUCCESS':
          return {
            ...state,
            response:action.payload.response,
            loading:false
        }
        case 'GETARTICLE_FAIL':
          return {
              loading: false,
              error: action.payload
            }
        default: return state
    }
}
