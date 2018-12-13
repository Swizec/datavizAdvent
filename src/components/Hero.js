import React, { Component } from 'react'
import styled from 'styled-components'
import Advent from '../assets/Advent.png'
import Particles from 'react-particles-js'


const Wrapper = styled.div`
  background-color: #04081f;
background-image: linear-gradient(45deg, #04081f 33%, #0e1842 100%);
  padding: 2rem 0;
  height: 520px;
  .content {
    margin: 0 auto;
    padding: 3rem 3rem;
    text-align: center;
    display: grid;
    align-items: center;
    justify-items: center;
    grid-template-columns: 1fr 1fr;
    @media (max-width: 940px) {
      grid-template-columns: 1fr;
    }
  }
  .SubTitle {
    text-align: center;
    margin: 0;
    padding: 5rem 0;
    padding-bottom: 0;
    color: #fff;
    font-size: 30px;
    font-weight: 900;
  }
  .Title {
    text-align: center;
    margin: 0;
    padding: 5rem 0;
    padding-top: 0;
    color: #fff;
    font-size: 60px;
    font-weight: 900;
  }
  img {
    height: 500px;
  }
  .particles {
    position: absolute;
    height: 605px;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
  }

  .toplayer {
    z-index: 1;
  }
  @media (max-width: 940px) {
    .Title {
      font-size: 40px;
      padding: 0;
    }
    img {
      height: 200px;
    }
    .content {
      margin: 2rem 0;
    }
  }
`

const particlesOptions = {
  particles: {
    number: {
      value: 800,
      density: {
        enable: true,
        value_area: 789.1476416322727,
      },
    },
    color: {
      value: '#ffffff',
    },
    shape: {
      type: 'circle',
      stroke: {
        width: 0,
        color: '#000000',
      },
      polygon: {
        nb_sides: 5,
      },
      image: {
        src: 'img/github.svg',
        width: 100,
        height: 100,
      },
    },
    opacity: {
      value: 0.8,
      random: false,
      anim: {
        enable: true,
        speed: 0.2,
        opacity_min: 0,
        sync: false,
      },
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: true,
        speed: 3,
        size_min: 0,
        sync: false,
      },
    },
    line_linked: {
      enable: false,
      distance: 150,
      color: '#ffffff',
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 0.2,
      direction: 'bottom',
      random: true,
      straight: false,
      out_mode: 'out',
      bounce: false,
      attract: {
        enable: false,
        rotateX: 565,
        rotateY: 2000,
      },
    },
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: {
        enable: false,
        mode: 'bubble',
      },
      onclick: {
        enable: true,
        mode: 'push',
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 83.91608391608392,
        size: 1,
        duration: 3,
        opacity: 3,
        speed: 3,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
}

export default class Hero extends Component {
  render() {
    return (
      <Wrapper className="toplayer">
        <div className="content">
          <div>
            <h2 className="SubTitle">ReactViz.Holiday</h2>
            <h1 className="Title">A new Dataviz every day of the Advent 🎅</h1>
          </div>
          <img src={Advent} alt="tree" />
        </div>
        <Particles
          className="particles"
          params={particlesOptions}
          width="100%"
          height="565px"
        />
      </Wrapper>
    )
  }
}
