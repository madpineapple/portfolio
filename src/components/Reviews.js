import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
var FontAwesome = require('react-fontawesome');

function Reviews(){
    return(
        <div  className="container" >
           
               <div className="row">
                   <div className="col" style={{maxWidth:'50%'}}> 
                   <ScrollAnimation animateIn="bounceInRight">
               
               <FontAwesome
                   className="about-icons"
                   name="user"
                   size="4x"
                   style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
               />
               
               <h2>Green Mountain Media Blasting &Powder Coating</h2>
                <p>"I was having a hard time building a website for my small business and kept running into issues. When Charles offered to resolve my website issues I took him on his offer and within a few days he had my website up and running! If you are getting frustrated trying to build your website on your own I highly recommend letting Charles have a crack at it!"
                </p>
                
               </ScrollAnimation></div>
               

               <div className="col"style={{maxWidth:'50%'}}> 
                   <ScrollAnimation animateIn="bounceInRight">
               
               <FontAwesome
                   className="about-icons"
                   name="user"
                   size="4x"
                   style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
               />
               
               <h2>Zimmerman Gunworks</h2>
                <p>Waiting on review. Please check in later!
                </p>
                
               </ScrollAnimation></div>
               </div>
            
            </div>
            
       
    )
}

export default Reviews;