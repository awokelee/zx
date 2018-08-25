import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import App from '@/App'
import Admin from '@/admin';
import Login from '@/pages/login';

class IRouter extends React.Component {
  render() {
    return (
      <HashRouter>
        <App>
          <Switch>
            <Route path="/" exact render={()=>
              <Admin>
                <Route path="/login" component={Login} />
              </Admin>
            } />
          </Switch>
        </App>
      </HashRouter>
    )
  }
}

export default IRouter