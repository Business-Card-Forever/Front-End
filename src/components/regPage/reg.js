import React, {useState} from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBInput } from 'mdbreact';
import './reg.css'
// import './header.css';
import logo from '../../img/logo.png';
import { Navbar, Nav, Button, Form, Modal, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Login from '../login/login';
import SignUp from '../signup/signup';

import VedioBG from '../main/main'
import header from '../header/header'



const RegistrationForm = () => {
    return (
      <>
      <header />
      <MDBContainer>
        <MDBRow>
          <MDBCol md='6'>
            <MDBCard
              className='card-image'
              style={{
                backgroundImage:
                  'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHjjAFqja8DCl9_ebsw-8ByXZIMz29jwRQtQ&usqp=CAU)',
                width: '27rem',
                paddingleft: '26%',
                marginleft: '56%'
              }}
            >
              <div className='text-white rgba-stylish-strong py-5 px-5 z-depth-4'>
                <div className='text-center'>
                  <h3 className='white-text mb-5 mt-4 font-weight-bold'>
                    <strong>SIGN</strong>
                    <a href='#!' className='green-text font-weight-bold'>
                      <strong> UP</strong>
                      <strong>  AS A COMPANY </strong>

                    </a>
                  </h3>
                </div>
                <MDBInput
                  label='First Name'
                  group
                  type='text'
                  validate
                  labelClass='white-text'
                />
                <MDBInput
                  label='Last Name'
                  group
                  type='text'
                  validate
                  labelClass='white-text'
                />
             
                <MDBInput
                  label='Your email'
                  group
                  type='text'
                  validate
                  labelClass='white-text'
                />
                <MDBInput
                  label='Your password'
                  group
                  type='password'
                  validate
                  labelClass='white-text'
                />
                <MDBInput
                  label='Industry'
                  group
                  type='white-text'
                  validate
                  labelClass='white-text'
                />
                 <MDBInput
                  label='Company Address'
                  group
                  type='white-text'
                  validate
                  labelClass='white-text'
                />


                <MDBRow className='d-flex align-items-center mb-4'>
                  <div className='text-center mb-3 col-md-12'>
                    <MDBBtn
                      color='success'
                      rounded
                      type='button'
                      className='btn-block z-depth-1'
                    >
                      Sign in
                    </MDBBtn>
                  </div>
                </MDBRow>
                <MDBCol md='12'>
                  <p className='font-small white-text d-flex justify-content-end'>
                    Have an account?
                    <a href='#!' className='green-text ml-1 font-weight-bold'>
                      Log in
                    </a>
                  </p>
                </MDBCol>
              </div>
            </MDBCard>
          </MDBCol>
        </MDBRow>



              <div className="empty-reg">  </div>




        <MDBRow>
          <MDBCol md='6'>
            <MDBCard
              className='card-image'
              style={{
                backgroundImage:
                  'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHjjAFqja8DCl9_ebsw-8ByXZIMz29jwRQtQ&usqp=CAU)',
                width: '27rem',
                paddingleft: '26%',
                marginleft: '56%'
              }}
            >
              <div className='text-white rgba-stylish-strong py-5 px-5 z-depth-4'>
                <div className='text-center'>
                  <h3 className='white-text mb-5 mt-4 font-weight-bold'>
                    <strong>SIGN</strong>
                    <a href='#!' className='green-text font-weight-bold'>
                      <strong> UP</strong>
                      <strong>  AS A USER </strong>
                    </a>
                  </h3>
                </div>
                <MDBInput
                  label='First Name'
                  group
                  type='text'
                  validate
                  labelClass='white-text'
                />
                <MDBInput
                  label='Last Name'
                  group
                  type='text'
                  validate
                  labelClass='white-text'
                />
             
                <MDBInput
                  label='Your email'
                  group
                  type='text'
                  validate
                  labelClass='white-text'
                />
                <MDBInput
                  label='Your password'
                  group
                  type='password'
                  validate
                  labelClass='white-text'
                />

                <MDBRow className='d-flex align-items-center mb-4'>
                  <div className='text-center mb-3 col-md-12'>
                    <MDBBtn
                      color='success'
                      rounded
                      type='button'
                      className='btn-block z-depth-1'
                    >
                      Sign in
                    </MDBBtn>
                  </div>
                </MDBRow>
                <MDBCol md='12'>
                  <p className='font-small white-text d-flex justify-content-end'>
                    Have an account?
                    <a href='#!' className='green-text ml-1 font-weight-bold'>
                      Log in
                    </a>
                  </p>
                </MDBCol>
              </div>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      </>
    );
  };
  
  export default RegistrationForm;
