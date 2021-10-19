import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Landing from './Landing';
import Search from './Search';

function App() {
  return (
    <Router>
        <Switch>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/">
            <Landing />
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
