import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import NewContact from './Pages/NewContact';
import Edit from './Pages/EditContact';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/new" component={NewContact} />
      <Route path="/edit/:id " component={Edit} />
    </Switch>
  );
}
