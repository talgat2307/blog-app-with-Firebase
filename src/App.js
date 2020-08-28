import React from 'react';
import './App.css';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import Home from './containers/Home/Home';
import Add from './containers/Add/Add';
import About from './containers/About/About';
import Contacts from './containers/Contacts/Contacts';
import Header from './containers/Header';
import SinglePost from './containers/SinglePost/SinglePost';
import Edit from './containers/Edit/Edit';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/posts/add' component={Add}/>
          <Route path='/about' component={About} />
          <Route path='/contacts' component={Contacts} />
          <Route path='/posts/:id/edit' component={Edit} />
          <Route path='/posts/:id' component={SinglePost} />
          <Route path='/posts' component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
