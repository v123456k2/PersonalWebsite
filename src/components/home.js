import React, { Component } from 'react';
import homeImg from "../assets/images/home.png";

export default class Home extends Component {
    render() {
      return (
        <section id = "mainContent">
            <div className = "mainContent">
                  <div style={{backgroundImage: 'url(/PersonalWebsite/images/about.jpg)'}} height='100%' width = "100%"> 
                    <h1 className = "text">Hi There! <br/> I'm Vincent</h1>
                    <h2 className = "textRight">| Software Engineer | <br/> | World Traveller |<br/>| Food Connoisseur |</h2>
                    <h5 className = "text2"> Interested? <br/> then keep reading on</h5>
                  </div>
                  
            </div>
                               
        </section>
        
      )
    }
  }