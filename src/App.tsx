import React from 'react'
import { Route, Switch } from 'react-router'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import { pages } from './components/pages'
import { store } from './store'
// ____________________________________________________________________________
//
export const App: React.FC = () => {
  return (
    <Provider store={store}>
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
    </Provider>
  )
}

export default App
