import React from "react";
import './recent.css';
// import portfolio from '../../img/portfolio.png'


function Recent(props) {

    return (
        <>
           
            <div className="features-container2">

                <div className='features'>
                    <h1 className='ourss'>Recent Applicants</h1>
                </div>
                <div className="flexthe-cards">
                    <div className="cards-app">
                        <div className="pcard">
                            <img className='profile-bg profile-bg-again' alt='img' src="https://images.unsplash.com/photo-1470219556762-1771e7f9427d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8YnVpbGRpbmd8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80"></img>
                            <img className="avatar" alt='img' src="https://cdn4.iconfinder.com/data/icons/forum-buttons-and-community-signs-1/794/profile-3-512.png" alt="" srcset=""></img>
                            <p className="name">{props.data[4].full_name}</p>
                            <p className="desig">Major: {props.data[4].major} <br></br>Email: {props.data[4].email} </p>
                            <p className="desig">{props.data[4].aboutme}</p>
                            <div className="s-btns">
                                {/* add react icons */}

                            </div>
                        </div>
                    </div>

                    {/* end of cards  */}
                    <div className="cards-app">
                        <div className="pcard">
                            <img className='profile-bg profile-bg-again' alt='img' src="https://images.unsplash.com/photo-1470219556762-1771e7f9427d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8YnVpbGRpbmd8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80"></img>
                            <img className="avatar" alt='img' src="https://cdn4.iconfinder.com/data/icons/forum-buttons-and-community-signs-1/794/profile-3-512.png" alt="" srcset=""></img>
                            <p className="name">{props.data[3].full_name}</p>
                            <p className="desig">Major: {props.data[3].major} <br></br>Email: {props.data[3].email} </p>
                            <p className="desig">{props.data[3].aboutme}</p>
                            <div className="s-btns">
                                {/* add react icons */}

                            </div>
                        </div>
                    </div>

                    {/* end of cards  */}
                    <div className="cards-app">
                        <div className="pcard">
                            <img className='profile-bg profile-bg-again' alt='img' src="https://images.unsplash.com/photo-1470219556762-1771e7f9427d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8YnVpbGRpbmd8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80"></img>
                            <img className="avatar" alt='img' src="https://cdn4.iconfinder.com/data/icons/forum-buttons-and-community-signs-1/794/profile-3-512.png" alt="" srcset=""></img>
                            <p className="name">{props.data[2].full_name}</p>
                            <p className="desig">Major: {props.data[2].major} <br></br>Email: {props.data[2].email} </p>
                            <p className="desig">{props.data[2].aboutme}</p>
                            <div className="s-btns">
                                {/* add react icons */}

                            </div>
                        </div>
                    </div>

                    {/* end of cards  */}
                    <div className="cards-app">
                        <div className="pcard">
                            <img className='profile-bg profile-bg-again' alt='img' src="https://images.unsplash.com/photo-1470219556762-1771e7f9427d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8YnVpbGRpbmd8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80"></img>
                            <img className="avatar" alt='img' src="https://cdn4.iconfinder.com/data/icons/forum-buttons-and-community-signs-1/794/profile-3-512.png" alt="" srcset=""></img>
                            <p className="name">{props.data[1].full_name}</p>
                            <p className="desig">Major: {props.data[1].major} <br></br>Email: {props.data[1].email} </p>
                            <p className="desig">{props.data[1].aboutme}</p>
                            <div className="s-btns">
                                {/* add react icons */}

                            </div>
                        </div>
                    </div>

                    {/* end of cards  */}
                    <div className="cards-app">
                        <div className="pcard">
                            <img className='profile-bg profile-bg-again' alt='img' src="https://images.unsplash.com/photo-1470219556762-1771e7f9427d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8YnVpbGRpbmd8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80"></img>
                            <img className="avatar" alt='img' src="https://cdn4.iconfinder.com/data/icons/forum-buttons-and-community-signs-1/794/profile-3-512.png" alt="" srcset=""></img>
                            <p className="name">{props.data[0].full_name}</p>
                            <p className="desig">Major: {props.data[0].major} <br></br>Email: {props.data[0].email} </p>
                            <p className="desig">{props.data[0].aboutme}</p>
                            <div className="s-btns">


                            </div>
                        </div>
                    </div>
                </div>


            </div>


        </>
    )

}


export default Recent;
