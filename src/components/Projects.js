import React from 'react';

function Project(){
    return(
    <div className ="container">
     <div className="gallery">
     <div class="box">
         <div class ="text"> 
              <h2>School Admin Projet</h2>
              <p> A CRUD style website created with ASP.Net and SQl that allows a school adminstrator to create, update, and delete data on students, staff, and classes. The admin can login using identity framework, view and later data, and view a graph detailing student progress.
                </p>
                <a href="https://github.com/madpineapple/schoolAdminProject">
                    Click here to view  Github repository</a>
              </div>
         </div>

     <div class="box">
         <div class ="text"> 
              <h2> ZimmermanGunworks</h2>
              <p> Borchure style website I created for 
                  a small business called ZimmermanGunworks.
                  I created it using React, Node.js, and NodeMailer.
                  Unfortunatly the owner decided he didn't need a business so the website was shutdown
                </p>
              </div>
         </div>

         <div class="box">
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
