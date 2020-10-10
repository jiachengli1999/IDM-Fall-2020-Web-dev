import React, { Component } from 'react'
import '../styles/Common.css'
import '../styles/Week6.css'
import art from '../images/abstract_art.PNG'

class Week6 extends Component{
    constructor(){
        super()
        this.state = {
            curr_index: 0,
            pics: ['flower', 'house', 'white'],
            current_color: 'white',
            house: [
                ['white', 'white', 'white', 'white', 'white', 'white', '#000000', 'white', 'white', 'white'],
                ['white', 'white', 'white', '#cc3300', '#cc3300', '#cc3300', '#cc3300', '#cc3300', 'white', 'white'],
                ['white', 'white', '#cc3300', '#cc3300', '#00cccc', '#00cccc', '#00cccc', '#cc3300', '#cc3300', 'white'],
                ['white', '#cc3300', '#cc3300', '#cc3300', '#cc3300', '#cc3300', '#cc3300', '#cc3300', '#cc3300', '#cc3300'],
                ['white', 'white', '#ff8000', '#ff8000', '#ff8000', '#ff8000', '#ff8000', '#ff8000', '#ff8000', 'white'],
                ['white', 'white', '#ff8000', '#00cccc', '#00cccc', '#ff8000', '#66cc00', '#66cc00', '#ff8000', 'white'],
                ['white', 'white', '#ff8000', '#00cccc', '#00cccc', '#ff8000', '#00cccc', '#66cc00', '#ff8000', 'white'],
                ['white', 'white', '#ff8000', '#ff8000', '#ff8000', '#ff8000', '#66cc00', '#66cc00', '#ff8000', 'white'],
                ['white', 'white', '#ff8000', '#ff8000', '#ff8000', '#ff8000', '#66cc00', '#66cc00', '#ff8000', 'white'],
                ['white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white']
            ],
            flower: [
                ['white', 'white', 'white', 'white', '#ff0066', '#ff3399', '#ff0066', 'white', 'white', 'white'],
                ['white', 'white', 'white', '#ff0066', '#ff3399', '#ff3399', '#ff3399', '#ff0066', 'white', 'white'],
                ['white', 'white', 'white', '#ff3399', '#ff3399', '#ffff66', '#ff3399', '#ff3399', 'white', 'white'],
                ['white', 'white', 'white', '#ff0066', '#ff3399', '#ff3399', '#ff3399', '#ff0066', 'white', 'white'],
                ['white', 'white', 'white', 'white', '#ff0066', '#ff3399', '#ff0066', 'white', 'white', 'white'],
                ['white', 'white', 'white', 'white', 'white', '#ccff33', 'white', '#ccff33', '#ff6699', 'white'],
                ['white', 'white', '#ff6699', '#ccff33', 'white', '#ccff33', 'white', '#ccff33', '#ccff33', 'white'],
                ['white', 'white', '#ccff33', '#ccff33', 'white', '#ccff33', '#ccff33', 'white', 'white', 'white'],
                ['white', 'white', 'white', 'white', '#ccff33', '#ccff33', 'white', 'white', 'white', 'white'],
                ['white', 'white', 'white', 'white', 'white', '#ccff33', 'white', 'white', 'white', 'white']
            ],
            white: [
                ['white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white'],
                ['white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white'],
                ['white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white'],
                ['white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white'],
                ['white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white'],
                ['white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white'],
                ['white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white'],
                ['white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white'],
                ['white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white'],
                ['white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white']
            ],
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        if (this.state.curr_index === this.state.pics.length-1){
            this.setState({curr_index: 0})
        }
        else{ this.setState({curr_index: this.state.curr_index+1})}
    }

    assignColor = (color) =>{
        this.setState({current_color: color})
    }

    changeCellColor = (index1, index2, color) => {
        let name = this.state.pics[this.state.curr_index]
        if (name === 'flower'){ 
            let new_pic = this.state.flower
            new_pic[index1][index2] = color
            this.setState({flower: new_pic})
        }
        else if (name === 'house'){ 
            let new_pic = this.state.house
            new_pic[index1][index2] = color
            this.setState({house: new_pic})
        }
        else{
            let new_pic = this.state.white
            new_pic[index1][index2] = color
            this.setState({white: new_pic})
        }

    }

    render(){
        let pic = null
        if (this.state.curr_index === 0){ pic = this.state.flower }
        else if (this.state.curr_index === 1){ pic = this.state.house }
        else{ pic = this.state.white }

        return(
            <div>
                <div className='landing-page'>
                    <div className='title-flex'>Pixel Art</div>
                    <div className='pixels'>
                        <div className='pixel one'></div>
                        <div className='pixel two'></div>
                        <div className='pixel three'></div>
                        <div className='pixel four'></div>
                        <div className='pixel five'></div>
                    </div>
                </div>
                <div className='abstract-art-page'>
                    <h2>Abstract Art</h2>
                    <div className='art-flex'> 
                        <img src={art}/>
                        <div className='art-context'>
                            Theo Van Doesburg Composition VII (The Three Graces)
                        </div>
                    </div>
                    <div class="art-grid">
                        <div class="box1"></div>
                        <div class="box2"></div>
                        <div class="box3"></div>  
                        <div class="box4"></div>
                        <div class="box5"></div>
                        <div class="box6"></div>
                        <div class="box7"></div>
                        <div class="box8"></div>
                        <div class="box9"></div>
                        <div class="box10"></div>
                        <div class="box11"></div>
                        <div class="box12"></div>
                        <div class="box13"></div>
                        <div class="box14"></div>
                        <div class="box15"></div>
                    </div>
                </div>

                <div className='flexbox-container pagex'>
                    <div className='flexbox-item item1'>
                        <h1>Current Color: {this.state.current_color}</h1>
                        <div className='colors'>
                            <label className='red' value='red' style={{background:'red'}} 
                                onClick={()=>this.assignColor('red')}></label>
                            <label className='white' value='white' style={{background:'white'}} 
                                onClick={()=>this.assignColor('white')}></label>
                            <label className='blue' value='blue' style={{background:'blue'}} 
                                onClick={()=>this.assignColor('blue')}></label>
                            <label className='yellow' value='yellow' style={{background:'yellow'}} 
                                onClick={()=>this.assignColor('yellow')}></label>
                            <label className='green' value='green' style={{background:'green'}} 
                                onClick={()=>this.assignColor('green')}></label>
                        </div>
                        <label className='changeColor-btn'
                        onClick={this.handleClick}>
                            Click Me!
                        </label>
                    </div>
                    <div className='item2'>
                        <div className='gridbox-container'>
                            {
                                pic.map((row, index) =>(
                                    row.map((cell, index2) => (
                                        <div key={'block'+index+index2} 
                                        style={{background: cell,
                                                border: '1px solid black',
                                                }}
                                        className='gridcells'
                                        onClick={()=>this.changeCellColor(index, index2, this.state.current_color)}>
                                        </div>
                                    ))
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Week6