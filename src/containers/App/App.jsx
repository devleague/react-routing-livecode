import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from '../../components/PrivateRoute';

import Header from '../../components/Header';

// import pages
import Login from '../Login';
import Home from '../../components/Home';
import About from '../../components/About';
import Secret from '../../components/Secret';
import Contact from '../../components/Contact';
import NotFound from '../../components/NotFound';

const App = (props) => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/login" component={Login} />
        <Route path="/contact/:id" component={Contact} />
        <PrivateRoute path="/protected" component={Secret} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
};

export default App;
