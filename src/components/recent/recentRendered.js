import React, { useState, useEffect } from "react";
import './recent.css';
import portfolio from '../../img/portfolio.png'


function Recent (props) {    

        return (
            <>


                    <div className="features-container2">
        
                        <div className='features'>
                            <h1 className='ourss'>Recent Applicants</h1>
                        </div>
                        {/* saleh work  */}
                        <div className="flexthe-cards">
                        <div className="cards-app">
                            <div className="pcard">
                                <img className='profile-bg profile-bg-again' src="https://images.unsplash.com/photo-1470219556762-1771e7f9427d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8YnVpbGRpbmd8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80"></img>
                                <img class="avatar" src="https://assets.vogue.com/photos/5876fe0a8a28e998768824d3/4:3/w_795,h_597,c_limit/david-gandy.jpg" alt="" srcset=""></img>
                                <p class="name">{props.data[4].username}</p>
                                <p class="desig">Web Developer <br></br> Web-Tech Organization </p>
                                <div class="s-btns">
        {/* add react icons */}
        
                                </div>
                            </div>
                        </div>
                        
                            {/* end of cards  */}
                            <div className="cards-app">
                            <div className="pcard">
                                <img className='profile-bg profile-bg-again' src="https://images.unsplash.com/photo-1470219556762-1771e7f9427d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8YnVpbGRpbmd8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80"></img>
                                <img class="avatar" src="https://assets.vogue.com/photos/5876fe0a8a28e998768824d3/4:3/w_795,h_597,c_limit/david-gandy.jpg" alt="" srcset=""></img>
                                <p class="name">{props.data[3].username}</p>
                                <p class="desig">Web Developer <br></br> Web-Tech Organization </p>
                                <div class="s-btns">
        {/* add react icons */}
        
                                </div>
                            </div>
                        </div>
                        
                            {/* end of cards  */}
                            <div className="cards-app">
                            <div className="pcard">
                                <img className='profile-bg profile-bg-again' src="https://images.unsplash.com/photo-1470219556762-1771e7f9427d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8YnVpbGRpbmd8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80"></img>
                                <img class="avatar" src="https://assets.vogue.com/photos/5876fe0a8a28e998768824d3/4:3/w_795,h_597,c_limit/david-gandy.jpg" alt="" srcset=""></img>
                                <p class="name">{props.data[2].username}</p>
                                <p class="desig">Web Developer <br></br> Web-Tech Organization </p>
                                <div class="s-btns">
        {/* add react icons */}
        
                                </div>
                            </div>
                        </div>

                          {/* end of cards  */}
                        <div className="cards-app">
                            <div className="pcard">
                                <img className='profile-bg profile-bg-again' src="https://images.unsplash.com/photo-1470219556762-1771e7f9427d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8YnVpbGRpbmd8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80"></img>
                                <img class="avatar" src="https://assets.vogue.com/photos/5876fe0a8a28e998768824d3/4:3/w_795,h_597,c_limit/david-gandy.jpg" alt="" srcset=""></img>
                                <p class="name">{props.data[1].username}</p>
                                <p class="desig">Web Developer <br></br> Web-Tech Organization </p>
                                <div class="s-btns">
        {/* add react icons */}
        
                                </div>
                            </div>
                        </div>
                        
                            {/* end of cards  */}
                            <div className="cards-app">
                            <div className="pcard">
                                <img className='profile-bg profile-bg-again' src="https://images.unsplash.com/photo-1470219556762-1771e7f9427d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8YnVpbGRpbmd8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80"></img>
                                <img class="avatar" src="https://images.squarespace-cdn.com/content/v1/5442b6cce4b0cf00d1a3bef2/1578612969629-6RT438T6RBWR27IDFRPZ/ke17ZwdGBToddI8pDm48kIAZ5CWDgAf_tKNKdYtI7ZtZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpx78nW6aw6q_OBEgbzlBDLLqtzO1m_sKf16hJRhG3A2FkHtEA23RvFjTTKzL4c-UFU/Mens-Fair-Trade-Fashion-PACT" alt="" srcset=""></img>
                                <p class="name">{props.data[0].username}</p>
                                <p class="desig">Web Developer <br></br> Web-Tech Organization </p>
                                <div class="s-btns">
        {/* add react icons */}
        
                                </div>
                            </div>
                        </div>
                        </div>
                        
                            {/* end of cards  */}
        
                    </div>
        




            {/* <div className="features-container2">

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

            </div> */}

        </>
        )

    }


export default Recent;
