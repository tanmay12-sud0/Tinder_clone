import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Header from './Header'
import Tindercard from './Tindercard'
import Swipebutton from './Swipebutton'
import Chats from './Chats'
// import Chatscreen from './chatscreen'
function App() {
  return (
    <div className="App">
    
      <Router>
       <switch>
       {/* <Route  path='/Chats/meet'>
        <Header backbutton = '/Chats'  />
        <br></br>
          <br></br>
          <h3>heyy</h3>
          <Chatscreen />
        </Route> */}
        <Route  path='/Chats'>
        <Header backbutton = '/'  />
        <br></br>
          <br></br>

          <Chats />
        </Route>
        <Route exact path='/'>
        <Header />
          <br></br>
          <br></br>
          <Tindercard />
          <Swipebutton />
        </Route>
       </switch>
      </Router>
    </div>
  );
}

export default App;
