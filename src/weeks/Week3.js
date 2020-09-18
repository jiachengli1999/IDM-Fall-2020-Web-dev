import React, {Component} from 'react';
import '../styles/Common.css'
import '../styles/Week3.css'
import wiki from '../images/wiki.PNG'
import fake_review from '../images/fake_review.PNG'

class Week3 extends Component{
    render(){
        return(
            <html>
                <header className='name'>
                    <h1>Response to "As We May Think" and "Long Live the Web"</h1>
                </header>
                <main>
                    <section className='content-section'>
                        <article className='writing-section'>
                            <p>
                                I found Vannevar Bush’s essay to be a revolutionary take on how to make 
                                managing information more efficient. Bush argues that technology is advancing, 
                                but our way of analyzing and keeping information remains stagnant. It generally 
                                boils down to gathering a large amount of information then connecting them. 
                                This is a very tedious and time consuming approach. Therefore, he proposed a <nobr/>
                                <a href='https://en.wikipedia.org/wiki/Memex' alt='memex info'>memex</a>: 
                                a piece of technology that allows users to link information, add details about them, 
                                and share them. 
                            </p>
                            <figure>
                                <img src='https://i2.wp.com/bestlifeonline.com/wp-content/uploads/2017/11/shutterstock_415721266.jpg?w=1024&ssl=1'
                                    alt='messey desk'
                                />
                                <figcaption>Figure: Too much information</figcaption>
                            </figure>
                            <p>
                                I believe what he was proposing is the internet and the web. Today we can share 
                                information quickly, and connect information by using hyperlinks. In almost every 
                                article I read online, there’s a hyperlink for a term. I’ve taken this feature for 
                                granted, and I can now appreciate how much time it saved me from all those research papers. 
                            </p>
                            <figure>
                                <img src={wiki} alt='wiki hyperlink'/>
                                <figcaption>Figure: Hyperlinks in articles</figcaption>
                            </figure>
                            <p>
                                In order to achieve Bush’s idea, we needed to create a virtual world. However, 
                                the creation of a new world invites new problems as Tim, the creator of the web, 
                                states in his article, “Long Live the Web.” Tim offers many valid points about 
                                the dangers of the internet like fragmentation and spoofing. This is meaningful 
                                because the web isn’t as safe as it seems. I found it interesting that companies 
                                may slow their service to us if we are using their competitors’ services. 
                                I believe some web pages contain bias information that benefits a company. 
                                In worst cases, there may even be fake news. I recently saw a video discussing about 
                                the increase of fake reviews on Amazon. There’s a market out there where people are 
                                buying 5 star reviews for their products as well as 1 star reviews for their competitors.
                            </p>
                            <figure>
                                <img src={fake_review} alt='Fake Amazon Reviews'/>
                                <figcaption>Figure: Fake Amazon Reviews</figcaption>
                            </figure>
                            <p>
                                Hence, the web may have ameliorated our management of information, but we also have 
                                to be wary of all the information we see. Some information may be biased and some may even be fake.  
                            </p>
                        </article>
                    </section>
                </main>
                <footer>
                    <h4>Author: Jia Cheng Li</h4>
                </footer>
            </html>
        )
    }
}

export default Week3;