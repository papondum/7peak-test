// import { mainConstants } from '../constants/mainConstants.js'
import axios from 'axios'
import {apiCallUrl, API_KEY} from '../helpers'
// const { GETDATA_REQUEST, GETDATA_FAILURE, GETDATA_SUCCESS } = mainConstants

export const getArticle = (url) => async dispatch => {
  dispatch( {type: 'GETARTICLE_REQUEST',})
    try{
        const res = await axios.get(apiCallUrl(url),{
          params: {
            'api-key':API_KEY,
            'show-fields': 'all'
          }
        })
        dispatch( {
            type: 'GETARTICLE_SUCCESS',
            payload: res.data
        })
    }
    catch(error){
        dispatch( {
            type: 'GETARTICLE_FAIL',
            payload: error,
        })
    }

}
