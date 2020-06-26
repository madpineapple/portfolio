import React,{ Component}from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import ScrollAnimation from 'react-animate-on-scroll';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  
  render()
  {
    return (
    
    <div >
      <section className ="section-a" id= "section-a">
      <div className="half1">
        <div >
          <ScrollAnimation animateIn="zoomInUp" >
          <h1 className='greeting-top'>Hello I'm</h1>
          </ScrollAnimation>
          <ScrollAnimation animateIn="zoomInLeft" >
          <h1 className='greeting-middle'>Charles Daoust </h1>
          </ScrollAnimation>
          <ScrollAnimation animateIn="zoomInDown" >
          <h1 className='greeting-bottom'>A Software Developer</h1>
          </ScrollAnimation>
          <ScrollAnimation animateIn="bounce">

          <div class="wrapper">
          <btn type="button" class="button" >
              <a className="nav-link" id="work" href="#section-c">Check out my work below! ↓</a>
            </btn>
          </div>
          </ScrollAnimation>
          </div>  
        </div>
       
        <div className="half2">
        </div>
      </section >
      <Navbar/>
      <section className="section-b"id= "section-b">
      <ScrollAnimation animateIn="bounceInLeft">
        <div>
           <h1 className="intro">About</h1>
        </div>
    </ScrollAnimation>
        <About/>
      </section>
      <section className='section-c' id= "section-c">
      <div>
           <h1 className="intro" >Projects</h1>
        </div>
        <Projects />
      </section>
      <footer>Footer</footer>
     </div>
    
  );
    }

}

export default App;
