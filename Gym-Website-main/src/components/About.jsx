import React from 'react';
import therockimage from '../images/therock.jpg';

function About() {
  return (
    <div id='about'>
    <div className='about-image'>
    <img src={therockimage} alt=' ' />
    </div>
    <div className='about-text'>
    <h1> Learn More About Us</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae sunt qui vitae ipsam distinctio maxime quasi, nisi pariatur in deserunt, neque culpa fugit tempore dicta saepe repellat nihil. Quis omnis fugiat harum est nostrum.
    </p><button>Read More</button>
      
    </div>
    
    </div>
  )
}

export default About
