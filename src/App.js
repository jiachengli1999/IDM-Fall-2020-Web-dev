import React from 'react';
import './App.css';
import ramen from './images/ramen.PNG'
import sunflowers from './images/sunflowers.png'
import meme_mona from './images/meme_mona.PNG'
import mona from './images/mona.PNG'
import rating from './images/rating.PNG'
import mona_pic from './images/mona_pic.PNG'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <title>Jia Li- Week2</title>
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
            I started to feel a bit grim. Since he killed himself after painting this,<br/>
            I couldn't associate the image to joy. <br/> 
            <br/>
            If I played sad music while looking at this image, I'm sure I would've <br/>
            felt the same as when I knew the context. Point is, we are often influenced <br/>
            to feel a certain way when viewing images. We can't truly appreciate <br/>
            the meaning of an image for ourselves if we are seeing it <br/>
            from a secondary source. <br/>
            <br/>
            I believe the expectations set by others takes away value from images. 
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
            that I think of memes when I see the mysterious Mona Lisa. <br/>
            However, I'm not the only one to not be able to appreciate it. <br/>
            Many people go to see the Mona Lisa <br/>
            to take a picture. Walk in, take a picture, then walk out. <br/>
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
            so live in the moment. 
        </p>
      </div>
      
    </div>
  );
}

export default App;
