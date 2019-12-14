import React from 'react';


function About(){
    return(
        
        <nav className="navbar sticky-top navbar-expand-lg " style={style}>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#section-a">Home <span class="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#section-b">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#section-c">Projects</a>
            </li>
           
          </ul>
          
        </div>
       

      </nav>
    )
}

const style={
    paddingLeft:'100px',
    fontSize:'200%',
    textAlign: 'center',
    textColor:'#FF4500',
    textDecoration:'underline',
    backgroundColor:'#3A2B2B',
    borderBottom:'10px solid #FF4500'   
}
export default About;