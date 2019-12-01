import React from 'react';
import Particles from 'react-particles-js';


export default ()=> (
    <div
    style={{
      position:'absolute',
      left:'0',
      top:'0',
      height:'50%',
      width:'90%',
      zIndex: '-1'
    }}

  >
    <Particles
      params={{
        particles: {
          number: {
            value: 50,
            density: {
              enable: true,
              value_area: 800
            }
          },
          color: {
              value: "#ffffff"
            },
              line_linked: {
                enable: false,
                distance: 200,
                color: "#ffffff",
                opacity: 0.3687847739990702,
                width: 0.6413648243462091
              },
                shape: {
                  type: "circle",
                  stroke: {
                    width: 2,
                    color: "#000000"
                  },
                  polygon: {
                    nb_sides: 4
                  },
                  // image: {
                  //   src: "img/github.svg",
                  //   width: 100,
                  //   height: 100
                  // }
                },
                opacity: {
                  value: 0.8,
                  random: false,
                  anim: {
                    enable: false,
                    speed: 10,
                    opacity_min: 0.1,
                    sync: false
                  }
                },
                size: {
                  value: 5,
                  random: false,
                  anim: {
                    enable: true,
                    speed: 10,
                    size_min: 0.1,
                    sync: false
                  }
                },

                move: {
                  enable: true,
                  speed: 5,
                  direction: "bottom-right",
                  random: false,
                  straight: true,
                  out_mode: "out",
                  bounce: true,
                  attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200
                  }
                }
              },
              interactivity: {
                events: {
                  onhover: {
                    enable: true,
                    mode: "repulse"
                  },
                  onclick: {
                    enable: true,
                    mode: "bubble"
                  },
                  resize: true
                },
                modes: {
                  grab: {
                    distance: 400,
                    line_linked: {
                      opacity: 1
                    }
                  },
                  bubble: {
                    distance: 100,
                    size: 10,
                    duration: 2,
                    opacity: 8,
                    speed: 3
                  },
                  repulse: {
                    distance: 100,
                    duration: 0.4
                  },
                  push: {
                    particles_nb: 4
                  },
                  remove: {
                    particles_nb: 2
                  }
                }
              },
              retina_detect: true
            }}





    />
  </div>
);
