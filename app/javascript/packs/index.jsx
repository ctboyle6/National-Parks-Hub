// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import App from '../components/App'
import { BrowserRouter as Router, Route } from 'react-router-dom'

// Redux
import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import userReducer from '../reducers/user_reducer'
import parksReducer  from '../reducers/parks_reducer'
import parkReducer from '../reducers/park_reducer'
import reviewsReducer from '../reducers/reviews_reducer'
import { logger } from 'redux-logger'
import reduxPromise from 'redux-promise'
import thunk from 'redux-thunk'

const reducers = combineReducers({
  user: userReducer,
  parks: parksReducer,
  park: parkReducer,
  reviews: reviewsReducer
})

const middlewares = applyMiddleware(logger, reduxPromise, thunk);

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={createStore(reducers, {}, middlewares)}>
      <Router>
        <Route path="/" component={App}/>
      </Router>
    </Provider>,
    document.getElementById('root'),
  )
})
