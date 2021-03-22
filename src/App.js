import React from 'react'
import Dashboard from "./components/Dashboard/Dashboard";
import FigmaPage from './components/FigmaPage/FigmaPage'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import PostForm from "./components/Dashboard/PostForm";



function App() {
  return (
      <Router>
        <div>
            <Route path='/' exact component={FigmaPage}/>
            <Route path='/main' component={Dashboard}/>
            <Route path='/form' component={Dashboard}/>
        </div>
      </Router>
  );
}

export default App;
