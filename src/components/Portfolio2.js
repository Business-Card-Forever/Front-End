import React, { Component } from 'react';
import ReactGA from 'react-ga';
import $ from 'jquery';
// import './Portfolio2.css';
import Header from './Header';
import Footer from './Footer';
import About from './About';
import Resume from './Resume';
// import Contact from './Contact';
import Portfolio from './Portfolio';

class Portfolio2 extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      foo: 'bar',
      resumeData: {},
      userinfo_data :{},
      work_data_data:{},
      edu_data_data:{},

    };

    ReactGA.initialize('UA-110570651-1');
    ReactGA.pageview(window.location.pathname);
  }


GenNewProfile = () => {
  
  let userinfo=localStorage.getItem('userinfo');
  let url = `http://e-bcard.herokuapp.com/api/userinfo/${userinfo}/`;
  console.log(url)
  return fetch(url, {
      method: 'GET',
      headers:{'Content-Type':'application/json'},
  }).then(response => response.json()).then((json) => {
    this.setState({ userinfo_data: json });  
      console.log(json)
  })
  .catch(error => error);
}


WorkNewProfile = () => {
  
  let work_data=localStorage.getItem('work_data');
  let url = `http://e-bcard.herokuapp.com/api/workexperience/${work_data}/`;
  console.log(url)
  return fetch(url, {
      method: 'GET',
      headers:{'Content-Type':'application/json'},
  }).then(response => response.json()).then((json) => {
    this.setState({ work_data_data: json });  
      console.log(json)
  })
  .catch(error => error);
}


EduNewProfile = () => {
  
  let edu_data=localStorage.getItem('edu_data');
  let url = `http://e-bcard.herokuapp.com/api/eduction/${edu_data}/`;
  console.log(url)
  return fetch(url, {
      method: 'GET',
      headers:{'Content-Type':'application/json'},
  }).then(response => response.json()).then((json) => {
    this.setState({ edu_data_data: json });  
      console.log(json)
  })
  .catch(error => error);
}






  getResumeData(){
    $.ajax({
      url:'./resumeData.json',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({resumeData: data});
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
        alert(err);
      }
    });
  }
  componentWillMount(){
    this.GenNewProfile();
    this.WorkNewProfile();
    this.EduNewProfile();
  }
  componentDidMount(){
    this.getResumeData();
  }
  
  render() {
    console.log(this.state.userinfo_data);

    return (
      <div className="App">  
        <Header data={this.state.resumeData.main} userinfo_data ={this.state.userinfo_data} />
        <About data={this.state.resumeData.main} userinfo_data ={this.state.userinfo_data} work_data_data ={this.state.work_data_data} edu_data_data ={this.state.edu_data_data}/>
        <Resume data={this.state.resumeData.resume} userinfo_data ={this.state.userinfo_data} work_data_data ={this.state.work_data_data} edu_data_data ={this.state.edu_data_data}/>
        <Portfolio data={this.state.resumeData.portfolio} userinfo_data ={this.state.userinfo_data} work_data_data ={this.state.work_data_data} edu_data_data ={this.state.edu_data_data}/>
        {/* <Contact data={this.state.resumeData.main}/> */}
        <Footer data={this.state.resumeData.main} userinfo_data ={this.state.userinfo_data}/>
      </div>
    );
  }
}

export default Portfolio2;