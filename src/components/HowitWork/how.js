import React from "react";
import './how.css';
import how from '../../img/how.png'
import {
  Timeline,
  Events,
  UrlButton,
  ImageEvent,
  TextEvent,
  YouTubeEvent,
}from '@merc/react-timeline';

class How extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalBtn: false,
        }
    }

    render() {

        return (
            <>
            <div className="features-container3">
                <div className='features'>
                    <h1 className='howWork'>How Our Website Works</h1>

                    <Timeline>
      <Events>
        <TextEvent  id='textEvent5' date="# 1" text="# Sign up as a user" style={{width:'50%' }} />

        
        <TextEvent id='textEvent4' date="# 2" text="# Create your Own Portofilo"/>

        
        <TextEvent id='textEvent6'  date="# 3" text="# Share Your Portfoilo and make your connections "/>
        <TextEvent id='textEvent7'  date="# 4" text="# Stay Tund to attend the Up coming events "/>
      </Events>
     

    </Timeline>
  <br></br><br></br><br></br><br></br> 
    <Timeline>
    <TextEvent  id='textEvent1'  date="# 1" text="# Sign up as a Company"/>
    
        <TextEvent id='textEvent2'   date="# 2" text="# Create you Profile"/>
        <TextEvent  id='textEvent3'  date="# 3" text="# Create your own event "/>
    </Timeline>
                    
                </div>
                
    <br></br>
                
            </div>
</>      )
    }
}

export default How;