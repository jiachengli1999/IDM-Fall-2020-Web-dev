import React, {Component} from 'react';
import './App.css';
import Week2 from './weeks/Week2.js'

class App extends Component{
  constructor(){
    super()
    this.state = {}
  }

  render(){
    return(
      <div>
        <h1>Hello</h1>
        <div className='assignments'>
          <Week2/>

        </div>
      </div>
    )
  }
}

export default App;