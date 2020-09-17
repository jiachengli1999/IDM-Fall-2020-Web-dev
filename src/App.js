import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home.js'
import Week2 from './weeks/Week2.js'
import Week3 from './weeks/Week3.js'
import Week4 from './weeks/Week4.js'
import Week5 from './weeks/Week5.js'


class App extends Component{
  constructor(){
    super()
    this.state = {}
  }

  render(){
    return(
      <div>
        <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/week2" component={Week2} />
            <Route path="/week3" component={Week3} />
            <Route path="/week4" component={Week4} />
            <Route path="/week5" component={Week5} />
            <Route component={Error} />
        </Switch>
      </div>
    )
  }
}

export default App;