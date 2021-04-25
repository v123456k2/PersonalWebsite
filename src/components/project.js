import React, { Component } from 'react'
import {Link} from 'react-router-dom'



export default class Project extends Component {
    render() {
      return (
        <section id = "mainContent">
            <div className = "mainContent">
              <a href="https://www.vip.gatech.edu/teams/ai-based-discovery-and-innovation"><h1>Vertically Integrated Project (VIP) | AI Based Discovery and Innovation | Lung Disease Classification</h1></a>
              <p>
              This is the research team I am currently involved with. The general idea of this team is to use “artificial intelligence (AI)-based approaches (especially manifold learning) for understanding the delicate rules of nature and utilizing them for forming innovative software- and hardware-based tools for addressing the major challenges in a wide range of disciplines.”
              </p>
              <p>
              The current research is significant as lung disease illnesses in various forms are among the major and most common causes of death worldwide. Due to the lack of infrastructure and trained radiologists, many illnesses remain undiagnosed or are not detected early enough to avoid long term complications and chronic symptoms.
              </p>
              <p>
              The main vision of this research is to use a new approach based on machine learning (ML) and deep learning (DL) for the classification and detection of interstitial lung disease using thoracic images. As a major part of the project, the algorithms will be implemented in a mobile application for smartphone or tablet and will potentially be available as a lightweight web-based application for use in a web browser.  We utilized Firebase for user authentication, user credential storage, and profile data. Firebase is a trusted platform used by companies around the world; it allows us to offer, not only a user specific profile, but also ensures security for our sensitive data. The backend API of our app is implemented using a Python library called Flask and communicates via HTTP with our Azure Machine Learning workspace, where our model is contained. 
              </p>
              <p>
              The application will also have a platform for radiologists to label thoracic images to add to the database. On the client side, a user would input a X-ray image, or a collection of images, which would be processed and classified in the back-end using the algorithms. This platform will be extremely helpful and innovative, especially for under-developed countries that lack necessary medical infrastructure or access to trained radiologists. The focus of this project will be on the classification of lung disease using convolutional neural networks (CNNs) and transfer learning with X-ray images. 
              </p>
              <ul>
                <li>
                Developed a Flask API based on a trained model and included features for displaying saliency map based on the images uploaded.
                </li>
                <li>
                Wrote a user interface front-end using React that calls the Flask API back-end increasing project progress by 20%.
                </li>
                <li>
                Utilized Azure and Firebase to store user data and user profile, allowing the user to save their predicted results, and enhanced data protection and usability by 20%.
                </li>
              </ul>
              <br/>
              <h1>COVID image classification</h1>
              <p>
              With 33.8 million cases worldwide and 7.2 million in the US, accurate and speedy detection of COVID-19 has been a challenge for doctors since the beginning. Although partially effective, traditional COVID-19 tests face imperfections in their results. Our goal with this model would be to develop a machine learning program that could identify high-probability COVID cases based on chest X-rays, allowing medical professionals to potentially see potentially missed COVID cases. This tool could potentially be added to traditional COVID tests in high risk patients, which would help in the successful treatment of these patients. This early detection in particular has led to decreased mortality rates in COVID patients. It could also encourage patients to self isolate before receiving another test.
              </p>
              <p>
              For the unsupervised phase, we applied K-Means and Gaussian Mixture Model (GMM). In order to have a better training performance, we used feature-reduced data processed by Principal Component Analysis (PCA). The Silhouette Coefficient and Davies-Bouldin index were used to evaluate our cluster results.
              </p>
              <p>
              For the supervised phase, we used convolutional neural networks (CNNs) since they are the most common type of method used for image classification. We took multiple approaches using CNNs, as we believe this has the highest chance in generating a sucessful model. In addition to CNNs, we utilized Random Forest, an ensemble learning method by constructing and adjusting decision trees, to discover another approach for our supervised learning. We compared training results of the above three methods to determine which one is better for our problem.
              </p>
              <ul>
                <li>
                Developed different models in python for classifying COVID-19 X-ray images, obtaining an accuracy of 83% 
                </li>
                <li>
                Utilized Kmeans and GMM for unsupervised learning and CNN and random forest for supervised learning 
                </li>
              </ul>
              <br/>
              <h1>Marine Robotics</h1>
              <p>
              This is an organization where a group of students come together and build robots to compete in various marine robotics competitions, such as RoboBoat and RoboSub, involving autonomous navigation. In the competition, the robot will utilize image classification techniques for autonomous navigation. On this robot, I worked on improving the accuracy of the classification.
              </p>
              <ul>
                <li>
                Implemented a new image classification model for marine robotics using hyper-parameter and image augmentation techniques such as scaling, padding, flipping, adjusting brightness, contrast, and saturation, increasing the prediction accuracy to 99%.
                </li>
                <li>
                Wrote ML algorithms using the TensorFlow platform in Python 
                </li>
                <li>
                Utilized Yolact for real-time instance segmentation for the robot’s image perception in nonlinear environments 
                </li>
              </ul>
              <br/>

              <h1>FoodShed Project</h1>
              <p>
              This is a project for a student organization Coding for Good that coordinates with non-profit organizations to help them solve emerging problems. The basic idea behind the FoodShed Project is to coordinate with local markets to reduce food waste. Normally, food that is close to expiration dates are thrown out, which is wasteful and what we are doing is placing fridges around campus that put these foods that are close to expiration in for students to take. This can reduce food waste at the same time helping students save some money. I lead a team of four to implement an app that will display where the fridges are around campus, and display pictures of what food are in the fridges. 
              </p>
              <ul>
                <li>
                Developed an app that manages food inventory within the city with AngularJS, increasing project progress by 60% 
                </li>
                <li>
                Utilized Github version control for integration and development of application 
                </li>
                <li>
                Followed Agile practices and gave weekly scrum meetings 
                </li>
                <li>
                Successfully planned how to proceed with the FoodShed app development by creating a timeline chart that lists the time frame for each task, scheduling meetings with another student organization and informing them of project progress, and finding tutorials online, resulting in a 25% increase in productivity. 
                </li>
              </ul>
              <br/>

              <h1>Milk Tank Project</h1>
              <p>
              The milk tank is an indispensable component to a dairy farmer’s business, and is frequently accessed. It is most common to have the pipe valve controls on top of the milk tank and a ladder to access them. This has caused problems for farmers who have medical issues that limit their ability to climb a ladder. The solution to this problem is to create a safer, more stable design that streamlines the client’s access to the milk tank’s controls and minimizes the need to leave the ground. In meeting the client’s needs, the final product will be a unique alternative to farmers with similar issues. 
              </p>
              <p>
              In this project, as a team of eight, we designed, evaluated, and fabricated a device to enable a dairy 
              farmer with prosthetic leg and spina bifida to access the controls of his milk tank with more ease than 
              the status quo. A hydraulic lift with the capacity to support the client was selected for modifications; 
              though the lift was not purchased, various modifications to the lift were fabricated over the course of 
              the project and can be installed on the selected lift when purchased by the client. A railing and gate 
              to ensure the lift’s safety was fabricated using square steel tubing, MIG welding, 
              and low carbon hot rolled flat. Additionally, a steel-and-wood platform was created to mimic the 
              lift’s platform to accommodate the rails. This design should solve the problem of not only our 
              client, but other farmers with similar cases. Out final design document can be viewed <Link to="/PersonalWebsite/technicalWriting">here</Link>. 
              As a leader, I made sure to guide the team to the completion of the project.
              </p>
              <ul>
                <li>
                Designed a hydraulic lift that costs ~$3000 specifically for a client with disability to allow access to the top of a milk tank safely 
                </li>
                <li>
                Arranged 10 meetings and divided workload between our eight members 
                </li>
                <li>
                Communicated with our client for project specifications and to plan on-site visits
                </li>
                <li>
                Created an agenda and kept minutes of each meeting, and retained each iteration of the project
                </li>
              </ul>
              <br/>
              <img className = "aboutImg2" src = '/PersonalWebsite/images/milktank.jpg'></img>
          </div>
            
        </section>
      )
    }
  }