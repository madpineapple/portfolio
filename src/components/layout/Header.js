import React from 'react';
import ParticleComponent from "./ParticleComponent";

 function Header() {
    
    return ( 
        
    <div style={divStyle}>
    <header style ={headerStyle}>
            <h1 style={greeting}>Hi I am Charles Daoust
            and I'm a Software Developer</h1>
            
        </header>
    </div>
        
       
    )
}

const headerStyle={
    padding: '50px',
}

const divStyle={
    backgroundColor:'#694b4b',
}

const element =<ParticleComponent/>

const greeting ={
          fontSize:"500%",
          //position: "absolute",
          

}
export default Header;