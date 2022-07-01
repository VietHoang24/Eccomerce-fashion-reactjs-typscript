import React, { Component } from "react";
import { HashRouter as Router, Route, NavLink, Outlet } from "react-router-dom";
import SignUpForm from "../../components/auth/Singup";
import SignInForm from "../../components/auth/Signin";
import {
  FacebookLoginButton,
  GoogleLoginButton,
  InstagramLoginButton,
} from "react-social-login-buttons";
import "./style.css";
const Auth=() =>{

    return (
      <div className="App1">
        <div className="login-box">
          
          <div className="appForm">
            <Outlet />
          </div>
        </div>
      </div>
    );
  }


export default Auth;
