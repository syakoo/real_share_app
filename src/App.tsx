import React from 'react'
import { Route, Switch } from 'react-router'
import { HashRouter } from 'react-router-dom'

import { pages } from './components/pages'
// ____________________________________________________________________________
//
export const App: React.FC = () => {
  return (
    <HashRouter>
      <Switch>
        {pages.map((page) => (
          <Route
            exact
            key={`PAGE-${page.name}`}
            path={page.path}
            component={page.component}
          />
        ))}
      </Switch>
    </HashRouter>
  )
}

export default App
