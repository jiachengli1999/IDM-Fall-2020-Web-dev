import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home.js'
import Week2 from './weeks/Week2.js'
import Week3 from './weeks/Week3.js'
import Week6 from './weeks/Week6.js'
import ComingSoon from './weeks/ComingSoon.js'


class App extends Component{
  componentDidMount(){
    document.title = 'Fall 2020 Web Dev'
  }
  
  render(){
    return(
      <div>
        <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/week2" component={Week2} />
            <Route path="/week3" component={Week3} />
            <Route path="/week4" component={ComingSoon} />
            <Route path="/week5" component={ComingSoon} />
            <Route path="/week6" component={Week6} />
            <Route path="/week7" component={ComingSoon} />
            <Route path="/week8" component={ComingSoon} />
            <Route component={Error} />
        </Switch>
      </div>
    )
  }
}

export default App;