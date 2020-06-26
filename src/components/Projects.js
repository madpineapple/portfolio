import React from 'react';
import restaurant from './pics/restaurant.png';
import store from './pics/cupcake_website.png';
import zimGun from './pics/zimGunwork.png';
function Project(){
    return(
    <div className ="container">
     <div className="gallery">
     <div class="box">
        <img id='pic' src={zimGun} alt="zimGun"/> 
         <div class ="text"> 
              <h2> ZimmermanGunworks</h2>
              <p> Borchure style website I created for 
                  a small business called ZimmermanGunworks.
                  I created it using React, Node.js, and NodeMailer.
                </p>
                <a href="http://www.zimmermangunworks.com/">
                    Click here to view  website</a>
              </div>
         </div>

         <div class="box">
              <img id='pic' src={restaurant} alt="restaurant"/>
              <div class ="text"> 
              <h2> Restaurant website</h2>
              <p> Using Django I created a brochure style 
                  website that dynamically displays menu 
                  contents stored in an SQLite database.
                   Visitors can browse the menus on different 
                   screen sizes and if they have questions they 
                   can send an email through the email form on the
                    contact page
                    </p>
              <a href="https://github.com/madpineapple/django_restaurant">
              Click here to view  Github repository</a>
                 
              </div>
         </div>

         <div class="box">
        <img id='pic' src={store} alt="store"/> 
         <div class ="text"> 
              <h2> Simply Cupcakes(E-commerce) Website</h2>
              <p> Using Node.js, Express, and MySQL 
                  this ecommerce website allows visitors 
                  to view the various types of cupcakes
                   Simply Cupcakes has to offer.
                   Visitors can register and login in to 
                   their customer accounts. They can also add 
                   it to their cart and proceed to checkout. 
                   Once at checkout the visitor will confirm 
                   their address and then will complete the 
                   transaction using Stripe checkout. 

                </p>
                <a href="https://github.com/madpineapple/js_store">
                    Click here to view  Github repository</a>
              </div>
         </div>
         
     </div>
     </div>
    )
}
export default Project;
