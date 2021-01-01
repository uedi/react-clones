import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import Amazon from './amazon/Amazon'

const App = () => {
    return (
        <div>
            <Switch>
                <Route path='/amazon'>
                    <Amazon />
                </Route>
                <Route path='/'>
                    <Home />
                </Route>
            </Switch>
        </div>
    )
}

export default App