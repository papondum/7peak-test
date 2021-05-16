import { mainConstants } from '../constants/mainConstants.js';

const initialState = {
    response: {},
    actionText: 'Top stories',
    loading:false
}

export default function(state = initialState, action){
    switch(action.type){
      case mainConstants.GETDATA_REQUEST:
        return {
          ...state,
          loading:true,
          actionText: 'Top stories'
      }
        case mainConstants.GETDATA_SUCCESS:
          return {
            ...state,
            response:action.payload.response,
            loading:false
        }
        case mainConstants.GETDATA_FAILURE:
          return {
              loading: false,
              error: action.payload
            }
        case 'SEARCHDATA_REQUEST':
          return {
            ...state,
            loading:true
        }
        case 'SEARCHDATA_SUCCESS':
          return {
            ...state,
            response:action.payload.response,
            loading:false,
            actionText: 'Search result'
        }
        case 'SEARCHDATA_FAILURE':
          return {
              loading: false,
              error: action.payload
            }

        case 'ORDERBY_REQUEST':
          return {
            ...state,
            loading:true
        }
        case 'ORDERBY_SUCCESS':
          return {
            ...state,
            response:action.payload.response,
            loading:false,
            actionText: 'Top stories'
        }
        default: return state
    }
}
