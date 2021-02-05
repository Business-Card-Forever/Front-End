import React, { Component } from 'react';
import logo from '../../img/logo.png';
import { Navbar, Nav, Button, Form, Modal, Col, Row } from 'react-bootstrap';
import header from '../header/header'


class Events extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var message = this.props.data.Eventsmessage;
    }

    return (
      <section id="Events">

         <div className="row section-head">

            <div className="two columns header-col">

               <h2><span></span></h2>

            </div>

            <div className="ten columns">

                  <p className="lead">{message}</p>

            </div>

         </div>

         <div className="row">
            <div className="eight columns">

               <form action="" method="post" id="EventsForm" name="EventsForm">
					<fieldset>

                  <div>
						   <label htmlFor="EventsName">Event-Name <span className="required">*</span></label>
						   <input type="text" defaultValue="" size="35" id="EventsName" name="EventsName" onChange={this.handleChange}/>
                  </div>

                  <div>
						   <label htmlFor="EventsSubject">Location</label>
						   <input type="text" defaultValue="" size="35" id="EventsSubject" name="EventsSubject" onChange={this.handleChange}/>
                  </div>

                  {/* <div>
						   <label htmlFor="EventsSubject">Location</label>
						   <input type="text" defaultValue="" size="35" id="EventsSubject" name="EventsSubject" onChange={this.handleChange}/>
                  </div> */}

                  <div>
						   <label htmlFor="EventsEmail">Date <span className="required">*</span></label>
						   <input type="date" defaultValue="" size="35" id="EventsEmail" name="EventsEmail" onChange={this.handleChange}/>
                  </div>


                  <div>
                     <label htmlFor="EventsMessage">Description <span className="required">*</span></label>
                     <textarea cols="50" rows="2" id="EventsMessage" name="EventsMessage"></textarea>
                  </div>

                  <div>
                     <button className="submit">Create Event</button>
                     <span id="image-loader">
                        <img alt="" src="images/loader.gif" />
                     </span>
                  </div>
					</fieldset>
				   </form>

           <div id="message-warning"> Error boy</div>
				   <div id="message-success">
                  <i className="fa fa-check"></i>Your message was sent, thank you!<br />
				   </div>
           </div>


            <aside className="four columns footer-widgets">
               <div className="widget widget_Events">

					   <h4>Address and Phone</h4>
					   <p className="address">
						   {name}<br />
						   {street} <br />
						   {city}, {state} {zip}<br />
						   <span>{phone}</span>
					   </p>
				   </div>
            </aside>
      </div>
   </section>
    );
  }
}

export default Events;
