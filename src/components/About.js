import React, { Component } from 'react';
class About extends Component {
  render() {

    if(this.props.data){
      var name = this.props.userinfo_data.full_name;
      var profilepic= "images/"+this.props.data.image;
      var birthday = this.props.userinfo_data.birthday;
      var city = this.props.userinfo_data.city;
      var aboutme = this.props.userinfo_data.aboutme;

      var email = this.props.userinfo_data.email;
      var resumeDownload = this.props.data.resumedownload;
    }

    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  src='https://cdn4.iconfinder.com/data/icons/forum-buttons-and-community-signs-1/794/profile-3-512.png' alt="Nordic Giant Profile Pic" />
         </div>
         <div className="nine columns main-col">
            <h2>About Me</h2>

            <p>{aboutme}</p>
            <div className="row">
               <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
						   <span>Name: {name} </span><br />
						   <span>City: {city} <br />

                   </span>
                   <br /><span>phone: 0785144005</span><br />
                     <span>Email: {email}</span>
					   </p>
               </div>
               <div className="columns download">
                  <p>
                     <a href={resumeDownload} className="button"><i className="fa fa-download"></i>Download Resume</a>
                  </p>
               </div>
            </div>
         </div>
      </div>

   </section>
    );
  }
}

export default About;
