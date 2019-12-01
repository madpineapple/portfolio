import React,{ Component}from 'react';
import './App.css';
import About from './components/About';
import Projects from './components/Projects';
import ParticleComponent from "./components/layout/ParticleComponent";
import ScrollAnimation from 'react-animate-on-scroll';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  
  render()
  {
    return (
    
    <div >
      <section className ="section-a">
      <div className="container ">
        <div >
          <h1 className='greeting'>Charles Daoust
          software Developer</h1>
          <div className="particles">< ParticleComponent /></div>
          </div>
        </div>
      </section >
      <section className="section-b">
      <ScrollAnimation animateIn="bounceInLeft">
        <div>
           <h1 className="intro">About</h1>
        </div>
    </ScrollAnimation>
        <About/>
      </section>
      <section className='section-c'>
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
