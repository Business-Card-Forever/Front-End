import React from "react";
import './events.scss';

import Header from '../header/header';
import Footer from '../footer/footer';

// import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';


const Events = props => {

    let style = {
        clear: 'both',
    }

    let h3Style = {
        color: 'white',
        fontSize: '20px',
    }


    return (

        <div className='bigContainer'>
            <Header />

            <div className="page-event">
                <div className="coveren">
                    <div className="heading">events</div>
                </div>
            </div>
            <div className="omaren">

                <section>

                    <div className="leftBox">
                        <div className="content">
                            <h1>E-BCard Events</h1>

                            <p className='events-description'>A modern and professional, free event and conference website template, ensuring an enviable experience. To push the potential of your upcoming conference to new heights, craft an online presence that will go over and beyond.</p>

                        </div>
                    </div>
                    <div className="events">
                        <h2 className='latestE'>Latest Events</h2>
                        {props.info.map((events, idx) => (
                            
                            <ul>

                                <li>
                                    <div className="time">
                                        <h3 key={events.idx} style={h3Style}><span> {events.event_name} </span></h3>
                                    </div>
                                    <div className="details">
                                        <h3 key={events.idx} className='events-name'>Date: {events.date}</h3>
                                        <h4 key={events.idx} className='events-hosts'> Hosts: {events.host} </h4>
                                        <p key={events.idx} className='events-location'>Location: {events.location}</p>
                                        <p key={events.idx} className='events-description'>{events.desc}</p>
                                    </div>

                                    <div style={style}> </div>

                                </li>
                            </ul>
                        ))}
                    </div>
                </section>

            </div>

            <div className='empDiv'> </div>

            <Footer />


        </div>


    )
}

export default Events;
