import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './styles/Home.css'

class Home extends Component{
    constructor(){
        super()
        this.state = {}
    }

    render(){
        return(
            <div>
                <div className='home-name'>
                    <h1>Intro to Web Dev Fall 2020</h1>
                </div>
                {/* Navbar */}
                <div className='nav'>
                    {/* <Link to="/" className='home link'>Home </Link> */}
                    <Link to="/week2" className='week2 link'>Week 2</Link>
                    <Link to="/week3" className='week3 link'>Week 3</Link>
                    <Link to="/week4" className='week4 link'>Week 4</Link>
                    <Link to="/week5" className='week5 link'>Week 5</Link>
                    <Link to="/week6" className='week6 link'>Week 6</Link>
                    <Link to="/week7" className='week7 link'>Week 7</Link>
                    <Link to="/week8" className='week8 link'>Week 8</Link>
                </div>
            </div>
        )
    }
}

export default Home