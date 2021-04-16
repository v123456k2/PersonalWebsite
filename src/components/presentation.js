import React, { Component } from 'react';
import Presentation from "../ProposalPresentation.pdf";
import AllPagesPDFViewer from "./allpage.js";



export default class presentation extends Component {
    render() {
      return (
        <section id = "mainContent">
            <div className = "mainContent">
                <div className="all-page-container">
                    <AllPagesPDFViewer pdf={Presentation} />
                </div>
            </div>
        </section>
        
      )
    }
  }