import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Parks from './Parks/Parks'
import Park from './Park/Park'

const App = () => {
  return (
    <Router forceRefresh={true}>
      <Switch>
        <Route exact path="/" component={Parks}/>
        <Route exact path="/parks/:park_code" component={Park}/>
      </Switch>
    </Router>
  )
}

export default App
