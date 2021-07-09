import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Parks from './Parks/Parks'
import Park from './Park/Park'

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Parks}/>
      <Route exact path="/parks/:park_code" component={Park}/>
    </Switch>
  )
}

export default App
