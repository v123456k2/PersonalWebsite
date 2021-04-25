import React, { Component } from 'react';
import Presentation from "../ProposalPresentation.pdf";
import AllPagesPDFViewer from "./allpage.js";



export default class presentation extends Component {
    render() {
      return (
        <section id = "mainContent">
            <div className = "resume">
                <embed
                  src={Presentation}
                  type="application/pdf"
                  height={800}
                  width={1000}
                />
              </div>
                {/*<div className="all-page-container">
                    <AllPagesPDFViewer pdf={Presentation} />
      </div>*/}
        </section>
        
      )
    }
  }