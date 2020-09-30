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
                    <Link to="/week2" className='left week2 link fast top'>Week 2</Link>
                    <Link to="/week3" className='right week3 link slow'>Week 3</Link>
                    {/* <Link to="/week4" className='left week4 link'>Week 4</Link> */}
                    <a href="https://github.com/IDMNYU/webDev_C_Fall2020/wiki/Week-04" className='left week4 link'>Week 4</a>
                    {/* <Link to="/week5" className='right week5 link slow'>Week 5</Link> */}
                    <a href="https://jiachengli1999.github.io/Hayao_Miyazaki/" className='right week5 link slow'>Week 5</a>
                    <Link to="/week6" className='left week6 link fast'>Week 6</Link>
                    <Link to="/week7" className='right week7 link'>Week 7</Link>
                    <Link to="/week8" className='left week8 link fast bot'>Week 8</Link>
                </div>
            </div>
        )
    }
}

export default Home