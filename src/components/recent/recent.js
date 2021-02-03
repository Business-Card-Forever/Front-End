import React from "react";
import './recent.css';
import portfolio from '../../img/portfolio.png'
import SignUpBtn from '../header/header'
// import 'bootstrap/dist/css/bootstrap.min.css';


class Recent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalBtn: false,
        }
    }

    render() {

        return (
            <div className="features-container2">

                <div className='features'>
                    <h1 className='our'>Recent Applicants</h1>
                </div>

                <div className='features2'>
                    <div class="demo-container">
                        <div class="demo-box2" id="glow-blue">
                            <figure className='fig1'>
                                <img className='one' src={portfolio} />
                                <figcaption className='figcaption2'><br></br>
                                Hadeel Hussam
                                </figcaption>
                            </figure>
                        </div>

                        <div class="demo-box2 two" id="glow-green">
                            <figure className='fig1'>
                                <img src={portfolio} />
                                <figcaption className='figcaption2'><br></br>
                                Aghyad Albalkhi
                                </figcaption>
                            </figure>

                        </div>

                        <div class="demo-box2 three" id="glow-red">
                            <figure className='fig1'>
                                <img src={portfolio} />
                                <figcaption className='figcaption2'><br></br>
                                Momayaz Aldoos
                                </figcaption>
                            </figure>
                        </div>
                    </div>


                    <div class="demo-box2 second2 four" id="glow-pink">
                        <figure className='fig1'>
                            <img src={portfolio} />
                            <figcaption className='figcaption2'><br></br>
                            Dana Kiswani
                            </figcaption>
                        </figure>

                    </div>

                    <button class="glow-on-hover" type="button">Create Your Own</button>

                    <div class="demo-box2 second2 five" id="glow-yellow">
                        <figure className='fig1'>
                            <img src={portfolio} />
                            <figcaption className='figcaption2'><br></br>
                            Omar Zain
                            </figcaption>
                        </figure>
                    </div>
                <div className='empty'></div>

                </div>

            </div>

        )
    }
}

export default Recent;