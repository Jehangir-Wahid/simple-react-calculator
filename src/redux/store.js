import { createStore, applyMiddleware } from "redux"
import { composeWithDevTools } from 'redux-devtools-extension'
import reducers from './reducers'
import thunk from "redux-thunk"

export default createStore(
    reducers,
    composeWithDevTools(applyMiddleware(thunk))
)
