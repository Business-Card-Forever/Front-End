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

        {/* <ImageEvent
          date="# 2"
          text="# Create your Own Portofilo"
          src="data:image/png;base64,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"
          alt="jellyfish swimming"
          color='white'
        //   lineColor:Ti7Rs6zu1NlR7Ux47RFfU2xXYxxNV1z5NJIu895kq6mdefzvTtk2ue/
          
        >
          <div>
            <UrlButton href="https://unsplash.com/search/photos/undersea">
              View more undersea photos
            </UrlButton>
          </div>
        </ImageEvent> */}
        <TextEvent id='textEvent4' date="# 2" text="# Create your Own Portofilo"/>

        {/* <YouTubeEvent
          date="6/18/19"
          id="6UnRHtwHGSE"
          name="General Tso's Chicken recipe"
          text="... and YouTube videos!"
        /> */}
        <TextEvent id='textEvent6'  date="# 3" text="# Share Your Portfoilo and make your connections "/>
        <TextEvent id='textEvent7'  date="# 4" text="# Stay Tund to attend the Up coming events "/>
      </Events>
      {/* <ImageEvent
          date="# 2"
          text="# Create your Own Portofilo"
          src="data:image/png;base64,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"
          alt="jellyfish swimming"
          color='white'
          
        >
          <div>
            <UrlButton href="https://unsplash.com/search/photos/undersea">
              View more undersea photos
            </UrlButton>
          </div>
        </ImageEvent> */}
        

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