import React, { Component } from 'react';
import PersonalStatement from "../PersonalStatement.pdf";
import AllPagesPDFViewer from "./allpage.js";



export default class writing2 extends Component {
    render() {
      return (
        <section id = "mainContent">
              <div className = "resume">
                <embed
                  src={PersonalStatement}
                  type="application/pdf"
                  height={800}
                  width={1000}
                />
              </div>
                {/*<div className="all-page-container">*/}
                    {/*<AllPagesPDFViewer pdf={PersonalStatement} />*/}
                {/*</div>*/}
        </section>
        
      )
    }
  }