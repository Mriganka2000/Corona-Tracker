import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Advice from './components/advice';
import Data from './components/data';

class App extends React.Component {
    render() {
      return (
        <div>
          <Router>
            <Route path="/" exact component={Advice}/>
            <Route path="/data" component={Data}/>
          </Router>
        </div>
      );
    }
  }
  
  export default App;