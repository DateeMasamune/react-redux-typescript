import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { rootReducer } from './reducers'

export const store = createStore(rootReducer,applyMiddleware(thunk)) //стор принимает 1 параметро редюсер 2 мидлвеер