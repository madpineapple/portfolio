import React from 'react';
import restaurant from './pics/restaurant.png';
import store from './pics/cupcake_website.png'

function Project(){
    return(
     <div className="gallery">
         <a href='https://github.com/' class='big'><img  src={restaurant} alt="restaurant"/></a>
         <a href='https://github.com/' class='big'><img  src={store} alt="store"/></a>  
     </div>
    )
}
export default Project;