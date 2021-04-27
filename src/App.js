import React,{ Component}from 'react';
import './App.css';
import About from './components/About';
import Reviews from './components/Reviews';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import ScrollAnimation from 'react-animate-on-scroll';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  
  render()
  {
    return (
    
    <div >
      <Navbar/>
      <section className ="section-a" id= "Home">
      <div className='background'></div>
        <div className="foreground">
          <ScrollAnimation animateIn="zoomInUp" >
          <h1 className='greeting-top'>Hello I'm</h1>
          </ScrollAnimation>
          <ScrollAnimation animateIn="zoomInLeft" >
          <h1 className='greeting-middle'>Charles Daoust </h1>
          </ScrollAnimation>
          <ScrollAnimation animateIn="zoomInDown" >
          <h1 className='greeting-bottom'>Software Developer</h1>
          </ScrollAnimation>
          <ScrollAnimation animateIn="bounce">

          <div class="wrapper">
          <btn type="button" class="button" >
              <a className="nav-link" id="work" href="#Work & Personal projects">Check out my work below! ↓</a>
            </btn>
          </div>
          </ScrollAnimation>
          </div>  
        
       
      </section >
      
      <section className="section-b"id= "About">
      <ScrollAnimation animateIn="bounceInLeft">
        <div>
           <h1 className="intro">About Me</h1>
        </div>
    </ScrollAnimation>
        <About/>
        
      </section>
      <section className='section-c' id= "Client Reviews">
      <div>
           <h1 className="intro" >Client Reviews</h1>
        </div>
        <Reviews/>
      </section>
      <section className='section-d' id= "Work & Personal projects">
      <div>
           <h1 className="intro" >Work & Personal projects</h1>
        </div>
        <Projects />
      </section>
    
     </div>
    
  );
    }

}

export default App;
