import React, { Component } from 'react';
import FinalReport from "../FinalReport.pdf";
import AllPagesPDFViewer from "./allpage.js";



export default class technicalWriting extends Component {
    render() {
      return (
        <section id = "mainContent">
            <div className = "mainContent">
                {/*<div className="all-page-container">
                    <AllPagesPDFViewer pdf={FinalReport} />
      </div>*/}
              <div className = "resume">
                <embed
                  src={FinalReport}
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