import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers';

const loggerMiddleware = createLogger();

export const store = createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    )
);
export const API_KEY = 'd4bf6b55-b6fd-467f-879d-c11bfed09bb5'
export function apiCallUrl(path) {
  return `https://content.guardianapis.com/${path}`
}
