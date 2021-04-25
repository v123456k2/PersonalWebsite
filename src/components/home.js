import React, { Component } from 'react';
import homeImg from "../assets/images/home.png";
import ResumeFinal from "../ResumeFinal.pdf";

export default class Home extends Component {
    render() {
      return (
        <section id = "mainContent">
            <div className = "mainContent">
                <div className = "homeImg">
                  <img
                    className="d-block w-100 "
                    style={{ backgroundImage: `url(${homeImg})` }}
                    alt=""
                  />
                  <div> 
                    <h1 className = "text">Hi There! <br/> I'm Vincent</h1>
                    <h2 className = "textRight">| Software Engineer | <br/> | World Traveller |<br/>| Food Connoisseur |</h2>
                    <h5 className = "text2"> Interested? <br/> then keep reading on</h5>
                  </div>
                  
                </div>
                               
            </div>
        </section>
        
      )
    }
  }