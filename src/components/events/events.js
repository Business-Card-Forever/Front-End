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
                            <p className='events-description'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        </div>
                    </div>
                    <div className="events">
                        {props.info.map((events, idx) => (

                            <ul>
                                <li>
                                    <div className="time">
                                        <h3 key={events.idx} style={h3Style}><span>Date: <br /> {events.date} </span></h3>
                                    </div>
                                    <div className="details">
                                        <h3 key={events.idx} className='events-name'>Event Title: {events.event_name}</h3>
                                        <h6 key={events.idx} className='events-hosts'> Hosts: {events.host} </h6>
                                        <p key={events.idx} className='events-description'>{events.desc}</p>
                                        <p key={events.idx} className='events-location'>Location: {events.location}</p>
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
