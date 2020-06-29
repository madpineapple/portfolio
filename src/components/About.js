import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
var FontAwesome = require('react-fontawesome');


function About(){
  return( 
    <div className="container" style={{textAlign:"center"}}>
    <div className='row' >
    <p style={{fontSize:'20px'}}>
                 Do you need a software developer to develop a custom web, desktop, or mobile application for your small business? If so, I'd be more than happy to develop your app for you! 
                </p>
     <div className="col">
         <ScrollAnimation animateIn="bounceInRight">
         <FontAwesome
        className="about-icons"
        name="desktop"
        size="4x"
        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
      />
             <h2>Front End Development</h2>
             <p>I have experience with multiple front end languages and tools to include HTML, CSS,
               Javascript, Node.js, and React.
             </p>
         </ScrollAnimation>
     </div>
     <div className="col">
         <ScrollAnimation animateIn="bounceInRight">
         <FontAwesome
        className="about-icons"
        name="code"
        size="4x"
        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
      />
             <h2>Back End Development</h2>
             <p>As part of my studies at Champlain College I got a ceritficate in C++. Furthermore I have studied other back end languages such as Python, C#, and SQL.
             </p>
         </ScrollAnimation>
     </div>
     <div className="col">
         <ScrollAnimation animateIn="bounceInRight">
         <FontAwesome
        className="about-icons"
        name="wrench"
        size="4x"
        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
      />
             <h2>App Repair</h2>
             <p>Have you already started creating your own website or app and found that you're in over your head?
               No worries, I'd be happy to look at your project and work with you to make your application run like a charm!
             </p>
         </ScrollAnimation>
     </div>
   
    </div>
    </div>)
}

export default About;