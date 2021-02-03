import React from "react";
import './features.css';
import py1 from '../../img/py1.jpg'
import py2 from '../../img/py2.png'
import py3 from '../../img/py3.png'
import py4 from '../../img/py4.png'
import py5 from '../../img/py5.png'

class Features extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalBtn: false,
        }
    }

    render() {

        return (
            <div className="features-container">

                <div className='features'>
                    <h1 className='our'>Our Features</h1>
                </div>

                <div className='features2'>
                    <div class="demo-container">
                        <div class="demo-box" id="glow-blue">
                            <figure className='fig1'>
                                <img className='one' src={py1} />
                                <figcaption><br></br>
                                Create Your Portfolio
                                </figcaption>
                            </figure>
                        </div>

                        <div class="demo-box two" id="glow-green">
                            <figure>
                                <img className='one' src={py2} />
                                <figcaption><br></br>
                                Create Your Contact List Online
                                </figcaption>
                            </figure>

                        </div>

                        <div class="demo-box three" id="glow-red">
                            <figure>
                                <img className='one' src={py3} />
                                <figcaption><br></br>
                                Show Upcoming Events
                                </figcaption>
                            </figure>
                        </div>
                    </div>

                    <div class="demo-box second four" id="glow-pink">
                        <figure>
                            <img className='one' src={py4} />
                            <figcaption><br></br>
                            Accessible, Available Everywhere
                            </figcaption>
                        </figure>

                    </div>

                    <div class="demo-box second five" id="glow-yellow">
                        <figure>
                            <img className='one' src={py5} />
                            <figcaption><br></br>
                            Updated Forever
                            </figcaption>
                        </figure>
                    </div>
                <div className='empty'></div>

                </div>

            </div>

        )
    }
}

export default Features;