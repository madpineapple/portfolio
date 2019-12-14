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
             <p>Customers and clients visit websites on a wide
               variety of devices, all of which have different
               screen sizes. Fortunatly I design my apps to work
               on all screen sizes!
             </p>
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
             <p>Having a website that can retrieve and store
               information in a database is crucial in many types of 
               websites. All my projects listed below use some form of
               database as a back end.
             </p>
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
             <h2>Always Learning</h2>
             <p>Software development is a vast field and it is 
               importnat for developers to keep learning new technologies
               and to use new tools. Since college I have been devolping 
               apps in a variety of languages ranging from C++ to JavaScript
               to Python! Checkout the project section below for a sample of
                my work.
             </p>
         </ScrollAnimation>
     </div>
     <div className="col">
         <ScrollAnimation animateIn="bounceInRight">
         <FontAwesome
        className="about-icons"
        name="user"
        size="4x"
        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
      />
             <h2>Contact me</h2>
             <p>
               If you have any questions about my current availibilty
               or want to contact me, please feel free to visit my linkedin
               page at:<a href='https://www.linkedin.com/in/charles-daoust-5a043b165/'>https://www.linkedin.com/in/charles-daoust-5a043b165/</a>
             </p>
         </ScrollAnimation>
     </div>
    </div>
    </div>)
}

export default About;