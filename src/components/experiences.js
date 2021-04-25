import React, { Component } from 'react';

export default class Experiences extends Component {
    render() {
      return (
        <section id = "mainContent">
            <div className = "mainContent">
                <a href="https://trulightproject.com/" target="_blank" rel="noopener noreferrer" ><h1>Trulight Project</h1></a>
                <p>
                Trulight Project is a non-profit start-up dedicated with a mission to protect, all. It is developing mobile apps in Java back-end based on algorithms that determine the user’s safety based on his or her current location and the location’s historical criminal records. On the client side, the user simply has to open the app and it will provide a score based on where they are. The importance of Trulight Project to the society is, without a doubt, crucial, making the work I do significant. In this internship, I worked in a team of four to implement the algorithm and conducte extensive research on platforms, languages, and data sources. We utilized Jira for task distribution and had weekly scrum meetings. Below is a list of what I accomplished:
                </p>
                <ul>
                  <li>Conducted research and performed cost-benefit analysis on cloud services, which ultimately led to the successful adoption of the Google Cloud Platform (GCP) that resulted in cost reduction by 20% and an increase in productivity by 20%.
                  </li>
                  <li>
                  Implemented and directed 100+ of unit tests with four team members and provided them with API documentation for JUnit test, increasing productivity by 30% and project completion status by 5%. 
                  </li>
                  <li>
                  Developed an algorithm in Java to calculate neighborhood safety score (trulight score) for mobile app backend.
                  </li>
                  <li>
                  Built Rest API through spring boot and Open API for the algorithm that determine the user’s safety score, that allowed open-source collaboration, which led to an increase in efficiency by 20%. 
                  </li>
                  <li>
                  Researched reliable sources for each crime category, such as murder and rape, and integrated it to the algorithm.
                  </li>
                </ul>
                <p>
                Currently, Trulight is partnering with Ayonix to provide drones and cameras for live data feed and face recognition to compare it to the FBI watchlist to further enhance the safety of the society.
                </p>
                <img className = "aboutImg" src = '/PersonalWebsite/images/trulight.png'></img>
                <br/>

                <h1>Lucid-Décor </h1>
                <p>
                Lucid-Décor is a start-up that I co-founded with a group of friends. The idea sparked when I read an article on the amount of money Americans spend annually on decorative goods. I was shocked by the enormous amount, and, due to COVID-19, online shopping has become more prominent, I decided to open up my own stores selling decorations through Shopify. The process began with finding products, ordering them, then implementing and designing the web store. Below is a list of what I accomplished:
                </p>
                <ul>
                  <li>
                  Co-founded Lucid Décor using Node.js backend and Redux framework through React for the online store.
                  </li>
                  <li>
                  Oversaw the alpha launch of our web store and adjusted product mix accordingly.
                  </li>
                  <li>
                  Integrated purchase checkout flow along with user data encryption through Shopify Partners’ backend.
                  </li>
                  <li>
                  Developed scalable and efficient restful API backend calls using GraphQL and Apollo.
                  </li>
                </ul>
                <br/>

                <h1>Global PMX</h1>
                <p>
                Global PMX is a manufacturing company founded in 1987. It utilizes CNC machines and manufactures critical components for different products in different industries, ranging from automobiles to medical equipment. In this internship, I had the opportunity to work at multiple departments: business, engineering, and computer science. I gained a deep understanding of the function of each department and further confirmed my interest lies in the software engineering field. I joined meetings, made presentations and presented them while in the business department, and actually designed parts and programmed CNC machines in G-code while in the technical department. Below is a list of what I accomplished:
                </p>
                <ul>
                  <li>
                  Delivered a presentation to the production team on overall equipment effectiveness (OEE) calculation and maximizing human-computer interaction, increasing productivity by 20%. 
                  </li>
                  <li>
                  Implemented a more efficient way to cut the materials on Alex Tech-VT08 CNC and Tsugami B0326-II CNC using G-Code after taking into consideration of the metal shape and knives, increasing profit by 30% and reducing cutting time by 30%. 
                  </li>
                  <li>
                  Conducted 100+ precision tests for finished auto parts with calipers and height gauge.
                  </li>
                </ul>
            </div>
            
        </section>
        
      )
    }
  }