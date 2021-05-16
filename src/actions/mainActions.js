import { mainConstants } from '../constants/mainConstants.js'
import axios from 'axios'
import {apiCallUrl, API_KEY} from '../helpers'

const { GETDATA_REQUEST, GETDATA_FAILURE, GETDATA_SUCCESS } = mainConstants

export const getNews = () => async dispatch => {
  dispatch( {type: GETDATA_REQUEST,})
    try{
        const res = await axios.get(apiCallUrl("search"),{
          params: {
            'api-key':API_KEY,
            'show-fields': 'all',
            'page-size': 11,
          }
        })
        dispatch( {
            type: GETDATA_SUCCESS,
            payload: res.data
        })
    }
    catch(error){
        dispatch( {
            type: GETDATA_FAILURE,
            payload: error,
        })
    }

}

export const searchByText = text => async dispatch => {
  dispatch({type: 'SEARCHDATA_REQUEST'})
  try {
      const params = {
        'api-key':API_KEY,
        'show-fields': 'all',
        'page-size': 11,
      }
      if(text){
        params.q = text
      }
      const res = await axios.get(apiCallUrl("search"),{params})
      dispatch( {
          type: 'SEARCHDATA_SUCCESS',
          payload: res.data
      })
  } catch (e) {
      dispatch( {
          type: 'SEARCHDATA_FAILURE',
          payload: e,
      })
  }
}

export const orderBy = type => async dispatch => {
  dispatch({type: 'ORDERBY_REQUEST'})
  try {
    const params = {
      'api-key':API_KEY,
      'show-fields': 'all',
      'page-size': 11,
      'order-by': type
    }
    const res = await axios.get(apiCallUrl("search"),{params})
    dispatch( {
        type: 'ORDERBY_SUCCESS',
        payload: res.data
    })
  } catch (e) {
      dispatch( {
          type: 'ORDERBY_FAILURE',
          payload: e,
      })
  }
}
