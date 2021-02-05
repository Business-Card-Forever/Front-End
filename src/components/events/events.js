import React from "react";
import './events.scss';

import { Container, Row, Col, Dropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import omar from "../../img/omar.jpg";
import dana from "../../img/dana.jpg";
import hadeel from "../../img/hadeel.jpg";
import aghyad from "../../img/aghyad.jpg";
import momayaz from "../../img/momayaz.jpg";


import Footer from '../footer/footer';

import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';


const Events = props => {


    let style = {
        clear: 'both',
    }
    return (
        <div className='bigContainer'>


            <div class="page-event">
                <div class="coveren">
                    <div class="heading">events</div>
                </div>
            </div>


            <div class="omaren">

                <section>

                    <div class="leftBox">
                        <div class="content">
                            <h1>E-BCard Events</h1>
                            <p className='events-description'>A modern and professional, free event and conference website template, ensuring an enviable experience. To push the potential of your upcoming conference to new heights, craft an online presence that will go over and beyond.</p>
                        </div>
                    </div>
                    <div class="events">
                        <ul>


                            <li>
                                <div class="time">
                                    <h2><span>Date: 04/2/2021 </span></h2>
                                </div>
                                <div class="details">
                                    <h3 className='events-name'>Event Title:</h3>
                                    <h6 className='events-hosts'> Hosts: 4 </h6>
                                    <p className='events-description'>anything.</p>
                                    <p className='events-location'>Location: Amman</p>
                                    
                                </div>
                                <div style={style}></div>
                            </li>


                            <li>
                                <div class="time">
                                    <h2><br /><span>Date: June</span></h2>
                                </div>
                                <div class="details">
                                    <h3 className='events-name'>Event Title:</h3>
                                    <h6 className='events-hosts'> Hosts: 4 </h6>
                                    <p className='events-description'>20 years old.</p>
                                    <p className='events-location'>Location: Amman</p>

                                </div>
                                <div style={style}></div>
                            </li>


                            <li>
                                <div class="time">
                                    <h2><br /><span>Date: June</span></h2>
                                </div>
                                <div class="details">
                                    <h3 className='events-name'>Event Title:</h3>
                                    <h6 className='events-hosts'> Hosts: 4 </h6>
                                    <p className='events-description'> .\</p>
                                    <p className='events-location'>Location: Amman</p>
                                    {/* <a href="">View Details</a> */}
                                </div>
                                <div style={style}></div>
                            </li>


                            <li>
                                <div class="time">
                                    <h2><br /><span>June</span></h2>
                                </div>
                                <div class="details">
                                    <h3 className='events-name'>Event Title:</h3>
                                    <h6 className='events-hosts'> Hosts: 4 </h6>
                                    <p className='events-description'> .\</p>

                                </div>
                                <div style={style}></div>
                            </li>
                            
                            <li>
                                <div class="time">
                                    <h2><br /><span> Date: June</span></h2>
                                </div>
                                <div class="details">
                                    <h3 className='events-name'>Event Title:</h3>
                                    <h6 className='events-hosts'> Hosts: 4 </h6>
                                    <p className='events-description'> .\</p>
                                    <p className='events-location'>Location: Amman</p>
                                </div>
                                <div style={style}></div>
                            </li>

                        </ul>
                    </div>
                </section>
                
            </div>

            <div className='empDiv'></div>

            <Footer />


        </div>


    )
}

export default Events;
