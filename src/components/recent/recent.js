import React, { useState, useEffect } from "react";
import './recent.css';
import portfolio from '../../img/portfolio.png'
import SignUpBtn from '../header/header'
// import 'bootstrap/dist/css/bootstrap.min.css';


function Recent (props) {

    let url = 'https://e-bcard.herokuapp.com/api/users/';

    const [names, setNames] = useState({});

    useEffect(() =>{
        fetchNames()


    },[]);

    const fetchNames = async () => {
        const res = await fetch(url);
        const jsonData = await res.json();
        let last5 =  jsonData.slice(Math.max(jsonData.length - 5, 0))
        setNames(last5);
    };

    console.log(names[1].username);
    




    // useEffect(() => {

    //     fetch('https://e-bcard.herokuapp.com/api/users/', {
    //         method: 'GET',
    //         headers: { 'Content-Type': 'application/json' },
    //     })
    //         .then(data => data.json())
    //         .then(
    //             data => {
    //             let last5 =  data.slice(Math.max(data.length - 5, 0))
    //             // console.log(last5);
    //             setNames([last5]);
    //         })
    //     })
        // console.log(names[1].username, '77777777777777777');
        
        
        // names.map(values =>{
        //     console.log(values, 'kkkkkkkkkkk');
        //     // return setNames(values.username)
        //     })
        
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
                                {names[4].username}
                                </figcaption>
                            </figure>
                        </div>

                        <div className="demo-box2 two" id="glow-green">
                            <figure className='fig1'>
                                <img src={portfolio} />
                                <figcaption className='figcaption2'><br></br>
                                {names[3].username}
                                </figcaption>
                            </figure>

                        </div>

                        <div className="demo-box2 three" id="glow-red">
                            <figure className='fig1'>
                                <img src={portfolio} />
                                <figcaption className='figcaption2'><br></br>
                                {names[2].username}
                                </figcaption>
                            </figure>
                        </div>
                    </div>


                    <div className="demo-box2 second2 four" id="glow-pink">
                        <figure className='fig1'>
                            <img src={portfolio} />
                            <figcaption className='figcaption2'><br></br>
                            {names[1].username}
                            </figcaption>
                        </figure>

                    </div>

                    <button className="glow-on-hover" type="button">Create Your Own</button>

                    <div className="demo-box2 second2 five" id="glow-yellow">
                        <figure className='fig1'>
                            <img src={portfolio} />
                            <figcaption className='figcaption2'><br></br>
                            {names[0].username}
                            </figcaption>
                        </figure>
                    </div>
                <div className='empty'></div>

                </div>

            </div>

        )
    }


export default Recent;