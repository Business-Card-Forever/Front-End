import React, { Component } from 'react';

class Resume extends Component {

  getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  render() {

    if(this.props.data){
      var birthday = this.props.userinfo_data.birthday;
      var email =this.props.userinfo_data.email
      var city =this.props.userinfo_data.city
      var major =this.props.edu_data_data.degree
      var education = this.props.data.education.map(function(education){
        return <div key={education.school}><h3>{education.school}</h3>
        <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
        <p>{education.description}</p></div>
      })
      var work = this.props.data.work.map(function(work){
        return <div key={work.company}><h3>{work.company}</h3>
            <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
            <p>{work.description}</p>
        </div>
      })

      var skills = this.props.data.skills.map((skills)=>{
        var className = 'bar-expand '+skills.name.toLowerCase();
        return (
          <li key={skills.name}>
            <span style={{width:skills.level, backgroundColor:this.getRandomColor()}}className={className}></span><em>{skills.name}</em>
          </li>
        )
      })
    }

    return (
      <section id="resume">
       


      <div className="row education">
         <div className="three columns header-col">
            <h1><span>Major : {major}</span>: </h1>
         </div>
         <div className="nine columns main-col">
         <h1><span>Birthday: {birthday}  </span></h1>
        </div>

      </div>


      <div className="row work">

         <div className="three columns header-col">
            <h1><span>Email : {email}</span></h1>
         </div>
         <br/>
         <div >
            <h1><span>City : {city}</span></h1>
         </div>

    </div>



      <div className="row skill">

         <div className="nine columns main-col">


			</div>
      </div>
   </section>
    );
  }
}

export default Resume;
