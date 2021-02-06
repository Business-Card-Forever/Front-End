import React from "react";
import './aboutus.scss';

import { Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Header from '../header/header.js';
import omar from "../../img/omar.jpg";
import dana from "../../img/dana.jpg";
import hadeel from "../../img/hadeel.jpg";
import aghyad from "../../img/aghyad.jpg";
import momayaz from "../../img/momayaz.jpg";
import Footer from '../footer/footer';

import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';


const About = props => {
  return (
    <>
      <Header />
      <div class="w-100" id="fixed-nav">

      </div>

      <Col className='aboutus-pHead'>
        <p className="aboutus-intro">Our Team Members</p>
      </Col>

      <figure className='bigfigure'>
        <div className='empty1'>.</div>
        <figure className='figure1'>

          <div className="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img className="omar" src={aghyad} alt="" />
                <h2 className="omar2">Aghead Albalkhe</h2>
              </div>
              <div class="flip-card-back">
                <p className='aboutp'>my name is Mohammed Aghead Albalkhe, I'm a Web Developer | Freelancer | Entrepreneur | Technical Mentor| Blockchain Developer.</p>
                <a href="https://www.linkedin.com/in/magheadalbalkhe/" target='_blank' rel="noopener noreferrer" className="linkedIn a-social"> <FontAwesomeIcon icon={faLinkedin} size="2x" /></a>
                <a href="https://github.com/aghyadalbalkhi-ASAC" target='_blank' rel="noopener noreferrer" className="github a-social"> <FontAwesomeIcon icon={faGithub} size="2x" /></a>
              </div>
            </div>
          </div>





          <div className="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img className="omar" src={omar} alt="" />
                <h2 className="omar2">Omar Zain</h2>
              </div>
              <div class="flip-card-back">
                <p className='aboutp'>My name is Omar Zain. I'm a Civil Engineering gradutae and I'm a Full-Stack Developer.</p>
                <a href="https://www.linkedin.com/in/omar-zain/" target='_blank' rel="noopener noreferrer" className="linkedIn a-social"> <FontAwesomeIcon icon={faLinkedin} size="2x" /></a>
                <a href="https://github.com/omarXzain" target='_blank' rel="noopener noreferrer" className="github a-social"> <FontAwesomeIcon icon={faGithub} size="2x" /></a>
              </div>
            </div>
          </div>


          <div className="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img className="omar" src={momayaz} alt="" />
                <h2 className="omar2">Momayaz Aldoos</h2>
              </div>
              <div class="flip-card-back">
                <p className='aboutp'>Hello all my name is Momayaz Aldoos I'm a Software Developer, And a translator.</p>
                <a href="https://www.linkedin.com/in/momayaz-al-doos-8b37051b5/" target='_blank' rel="noopener noreferrer" className="linkedIn a-social"> <FontAwesomeIcon icon={faLinkedin} size="2x" /></a>
                <a href="https://github.com/Momayaz" target='_blank' rel="noopener noreferrer" className="github a-social"> <FontAwesomeIcon icon={faGithub} size="2x" /></a>
              </div>
            </div>
          </div>



        </figure>

        <figure className='figure2'>
          <div className="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img className="omar" src={hadeel} alt="" />
                <h2 className="omar2">Hadeel Hussam</h2>
              </div>
              <div class="flip-card-back">
                <p className='aboutp'>my name is Hadeel Hussam and i'm a Full Stack Developer with a Software-engineering background</p>
                <a href="https://www.linkedin.com/in/hadeel-hhawajreh98/" target='_blank' rel="noopener noreferrer" className="linkedIn a-social"> <FontAwesomeIcon icon={faLinkedin} size="2x" /></a>
                <a href="https://github.com/hadeelhhawajreh" target='_blank' rel="noopener noreferrer" className="github a-social"> <FontAwesomeIcon icon={faGithub} size="2x" /></a>
              </div>
            </div>
          </div>




          <div className="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img className="omar" src={dana} alt="" />
                <h2 className="omar2">Dana Kiswani</h2>
              </div>
              <div class="flip-card-back">
                <p className='aboutp'>My name is Dana Kiswani, I am a Full-Stack Developer, with a Software-engineering background.</p>
                <a href="https://www.linkedin.com/in/dana-abdehwahab/" target='_blank' rel="noopener noreferrer" className="linkedIn a-social"> <FontAwesomeIcon icon={faLinkedin} size="2x" /></a>
                <a href="https://github.com/Dana-Kiswani" target='_blank' rel="noopener noreferrer" className="github a-social"> <FontAwesomeIcon icon={faGithub} size="2x" /></a>
              </div>
            </div>
          </div>

        </figure>
        <div className='empty'>.</div>
      </figure>
      <Footer />


    </>
  )
}

export default About;
