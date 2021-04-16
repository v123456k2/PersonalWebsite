import React, { Component } from 'react';
import ProjectSummary from "../ProjectSummary.pdf";
import AllPagesPDFViewer from "./allpage.js";



export default class writing1 extends Component {
    render() {
      return (
        <section id = "mainContent">
            <div className = "mainContent">
                <div className="all-page-container">
                    <AllPagesPDFViewer pdf={ProjectSummary} />
                </div>
            </div>
        </section>
        
      )
    }
  }