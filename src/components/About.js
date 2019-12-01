import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
var FontAwesome = require('react-fontawesome');


function About(){
  return( 
    <div className="container" style={{textAlign:"center"}}>
    <div className='row' >
     <div className="col">
         <ScrollAnimation animateIn="bounceInRight">
         <FontAwesome
        className="about-icons"
        name="desktop"
        size="4x"
        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
      />
             <h2>Responsive</h2>
             <p>My websites work on all screen sizes</p>
         </ScrollAnimation>
     </div>
     <div className="col">
         <ScrollAnimation animateIn="bounceInRight">
         <FontAwesome
        className="about-icons"
        name="rocket"
        size="4x"
        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
      />
             <h2>Dynamic</h2>
             <p>My websites all use some form of database</p>
         </ScrollAnimation>
     </div>
     <div className="col">
         <ScrollAnimation animateIn="bounceInRight">
         <FontAwesome
        className="about-icons"
        name="book"
        size="4x"
        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
      />
             <h2>Not just a web developer</h2>
             <p>Knoweldgeable in many languages such as C++</p>
         </ScrollAnimation>
     </div>
    </div>
    </div>)
}

export default About;