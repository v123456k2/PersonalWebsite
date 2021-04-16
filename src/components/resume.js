import React, { Component } from 'react';
import ResumeFinal from "../ResumeFinal.pdf";



export default class Resume extends Component {
  
  render() {
    return (
      <section id = "mainContent">
          <div className = "mainContent">
            <div className = "resume">
              <embed
                src={ResumeFinal}
                type="application/pdf"
                height={800}
                width={1000}
              />
            </div>
          </div>
      </section>
      
    )
  }
}