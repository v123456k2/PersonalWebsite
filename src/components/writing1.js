import React, { Component } from 'react';
import ProjectSummary from "../ProjectSummary.pdf";
import AllPagesPDFViewer from "./allpage.js";



export default class writing1 extends Component {
    render() {
      return (
        <section id = "mainContent">
              <div className = "resume">
                <embed
                  src={ProjectSummary}
                  type="application/pdf"
                  height={800}
                  width={1000}
                />
              </div>
              {/*}
                <div className="all-page-container">
                    {<AllPagesPDFViewer pdf={'url(files/ProjectSummary.pdf)'} />}
                </div>*/}
        </section>
        
      )
    }
  }