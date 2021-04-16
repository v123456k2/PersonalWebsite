import React, { Component } from 'react';
import FinalReport from "../FinalReport.pdf";
import AllPagesPDFViewer from "./allpage.js";



export default class technicalWriting extends Component {
    render() {
      return (
        <section id = "mainContent">
            <div className = "mainContent">
                <div className="all-page-container">
                    <AllPagesPDFViewer pdf={FinalReport} />
                </div>
            </div>
        </section>
        
      )
    }
  }