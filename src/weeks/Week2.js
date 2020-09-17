import React, {Component} from 'react';
import '../styles/Week2.css';
import sunflowers from '../images/sunflowers.png'
import mona from '../images/mona.PNG'
import rating from '../images/rating.PNG'
import mona_pic from '../images/mona_pic.PNG'
import scene from '../images/scene.PNG'

class Week2 extends Component {
    constructor(){
      super()
      this.state={
        num: 0
      }
      this.handleChange = this.handleChange.bind(this)
    }
  
    handleChange(event) {
      const { value } = event.target;
      console.log(this.state.num, value)
      this.setState({ num : value === 'yes' ? 0 : value === 'kinda' ? 1 : 2 });
    }
  
    render(){
      return (
        <div className="App">
          <header className="App-header">
            <title>Jia Li- Week2 hw</title>
          </header>
    
          <div className='start'>
            <div className='start-text'>
              <h1>Ways of Seeing</h1>
              <h2>Jia Cheng Li (Jia Li)</h2>
            </div>
          </div>
    
          <div className='response-page'>
            <p>What resonated with me from this film is that our environments and experiences  <br/>
                can affect how we perceive an image. The creator of an image <br/>
                may have a different intention when capturing or making an image. <br/>
                However, using our experiences, we are able to find a <br/>
                different meaning that connects to us. Let me demonstrate. <br/>
                Take some time and look at the next image. 
            </p>
          </div>
    
          <div className='response-page'>
            <img src={sunflowers}/>
          </div>
    
          <div className='image-text-border'>
            <div className='image-section'>
              <img src={rating}/>
            </div>
            <div className='text-section'>
              <p>On a scale of 1-10 how did you feel?</p>
            </div>
          </div>
    
          <div className='response-page'>
            <p>Now let me give some context:  <br/>
                "This is the last painting Van Gogh painted before he killed himself" <br/>
            </p>
          </div>
    
          <div className='response-page'>
            <img src={sunflowers}/>
          </div>
    
          <div className='response-page'>
            <p>
                On a scale of 1-10, how do you feel now? <br/>
                When I first saw the sunflower image without context, I felt <br/>
                a slight sense of joy in the image. Perhaps, this was because <br/>
                the scenary was nice, and it was full of nature. I associated those <br/>
                elements with peace. However, when John Berger gave context to the image, <br/>
                I started to feel a bit grim. Since the painter killed himself after painting this,<br/>
                I couldn't associate the image to joy. <br/> 
                <br/>
                If I played sad music while looking at this image, I'm sure I would've <br/>
                felt the same as when I knew the context. Point is, we are often influenced <br/>
                to feel a certain way when viewing images. We can't truly appreciate <br/>
                the meaning of an image for ourselves if we are seeing it <br/>
                from a secondary source. <br/>
                <br/>
            </p>
          </div>
    
          <div className='response-page2'>
            <p>
              I want to demonstrate the powerful 
              of music on an image. <br/>
              How do you feel when you hear this 
              while looking at the image below? <br/>
              <a href='https://www.youtube.com/watch?v=wF6Bg-vMZ4o' target="_blank">Music1</a> <br/>
              How about this? <br/>
              <a href='https://www.youtube.com/watch?v=tnLR_smptFA' target="_blank">Music2</a>
            </p>
          </div>
    
          <div className='response-page'>
            <img src={scene}/>
          </div>
    
          <div className='response-page'>
            <p>
                I intended to bring a joyful mood with the first music <br/>
                and a nostalgic mood with the second music. <br/>
                If this didn't work, then perhaps it's because I have experienced <br/>
                something joyful when I first heard the first music, and vice versa. <br/>
                <br/>
                Though technology can do bring many new meanings to images, <br/>
                I do feel that it has ruined some images for me. 
                {/* I believe the expectations set by others takes away value from images.  */}
            </p>
          </div>
    
          <div className='image-text-border'>
            <div className='image-section'>
              <img src={mona}/>
            </div>
            <div className='text-section'>
              <p>
                Take the Mona Lisa, for example. 
                Some may find this picture intriguing, but when I look at it, 
                I am reminded of the next image. 
              </p>
            </div>
          </div>
    
          <div className='meme_mona'></div>
    
          <div className='response-page'>
            <p>
                Memes of the Mona Lisa. I've seen countless memes of this image <br/>
                that I think of memes whenever I see the mysterious Mona Lisa. <br/>
                However, I'm not the only one to not be able to appreciate it. <br/>
                Many people go to see the Mona Lisa to take a picture.<br/>
                Walk in, take a picture, then walk out. <br/>
            </p>
          </div>
    
          <div className='response-page'>
            <img src={mona_pic}/>
          </div>
    
          <div className='response-page'>
            <p>
                The pictures we take are only worth as much as our experience <br/>
                of them. Stop and experience it, before deciding the <br/>
                need to take a picture of something. You took time to get there, <br/>
                so live in the moment. <br/>
                <br/>
                The same can be said of music. Try to experience the image before <br/>
                letting music or other factors influence our experience. 
            </p>
          </div>
          
          <div className='feedback-section'>
            <div className='feedback'>
              <h1>Was this Interesting?</h1>
            </div>
            
            <div className='feedback-btns'>
              <label className='btns'>
                <input type="radio" id="0" value="yes" 
                checked={this.state.num === 0} onChange={this.handleChange} />
                Yes
              </label>
              <label className='btns'>
                <input type="radio" id="1" value="kinda" 
                checked={this.state.num === 1} onChange={this.handleChange} />
                Kinda
              </label>
              <label className='btns'>
                <input type="radio" id="2" value="no" 
                checked={this.state.num === 2} onChange={this.handleChange} />
                No
              </label>
            </div>
    
            <div className='feedback-submit'>
              <input type="submit" value="Send Request"/>
            </div>
          </div>
        </div>
      )
    }
  }
  
  export default Week2;