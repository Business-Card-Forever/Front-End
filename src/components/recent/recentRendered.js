import React, { useState, useEffect } from "react";
import './recent.css';
import portfolio from '../../img/portfolio.png'


function Recent (props) {    

        return (
            <div className="features-container2">

                <div className='features'>
                    <h1 className='our'>Recent Applicants</h1>
                </div>

                <div className='features2'>
                    <div className="demo-container">
                        <div className="demo-box2" id="glow-blue">


                            <figure className='fig1'>
                                <img className='one' src={portfolio} />
                                <figcaption className='figcaption2'><br></br>
                                {props.data[4].username}
                                </figcaption>
                            </figure>
                        </div>

                        <div className="demo-box2 two" id="glow-green">
                            <figure className='fig1'>
                                <img src={portfolio} />
                                <figcaption className='figcaption2'><br></br>
                                {props.data[3].username}
                                </figcaption>
                            </figure>

                        </div>

                        <div className="demo-box2 three" id="glow-red">
                            <figure className='fig1'>
                                <img src={portfolio} />
                                <figcaption className='figcaption2'><br></br>
                                {props.data[2].username}
                                </figcaption>
                            </figure>
                        </div>
                    </div>


                    <div className="demo-box2 second2 four" id="glow-pink">
                        <figure className='fig1'>
                            <img src={portfolio} />
                            <figcaption className='figcaption2'><br></br>
                            {props.data[1].username}
                            </figcaption>
                        </figure>

                    </div>

                    <button className="glow-on-hover" type="button">Create Your Own</button>

                    <div className="demo-box2 second2 five" id="glow-yellow">
                        <figure className='fig1'>
                            <img src={portfolio} />
                            <figcaption className='figcaption2'><br></br>
                            {props.data[0].username}
                            </figcaption>
                        </figure>
                    </div>
                <div className='empty'></div>

                </div>

            </div>

        )
    }


export default Recent;