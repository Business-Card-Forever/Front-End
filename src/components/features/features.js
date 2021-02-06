import React from "react";
import './features.css';
import py1 from '../../img/qr.jpg'
import py2 from '../../img/two.png'
import py3 from '../../img/three.png'
import py4 from '../../img/four.png'
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

              

                <div className='features2'>

                <div className='features' style={{ paddingTop: 50 }}>
                    <h1 style={{ fontSize: 50, color: '#fff', }}>Our Features</h1>
                </div>
                    <div class="demo-container">
                        <div class="demo-box" id="glow-blue">
                            <figure className='fig1'>
                                <img className='one' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDev0MWjAs7yEcdTGVUBq_W3YkpDqYqgiu4A&usqp=CAU' />
                                <figcaption><br></br>
                                Create Your Portfolio
                                </figcaption>
                            </figure>
                        </div>

                        <div class="demo-box two" id="glow-green">
                            <figure>
                                <img className='one' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfTlEoy8yGDco3ThsXiWLd4tqtB1KTuFyCpg&usqp=CAU' />
                                <figcaption><br></br>
                                Create Your Contact List Online
                                </figcaption>
                            </figure>

                        </div>

                        <div class="demo-box three" id="glow-red">
                            <figure>
                                <img className='one' src='data:image/png;base64,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' />
                                <figcaption><br></br>
                                Show Upcoming Events
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                    <br></br><br></br>
                    <div class="demo-box second four" id="glow-pink">
                        <figure>
                            <img className='one' src='data:image/png;base64,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' />
                            <figcaption><br></br>
                            Accessible, Available Everywhere
                            </figcaption>
                        </figure>

                    </div>

                    <div class="demo-box second five" id="glow-yellow">
                        <figure>
                            <img className='one' src={py1} />
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