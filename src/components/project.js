import React, { Component } from 'react'


export default class Project extends Component {
    render() {
      return (
        <section id = "mainContent">
            <div className = "mainContent">
                <h1>Vertically Integrated Project - lung disease classification</h1>
                <a href="https://www.vip.gatech.edu/teams/ai-based-discovery-and-innovation">vip website link</a>
                <p>
                  This is the research team I am currently involved with. The general idea of this team is to use 
                  “artificial intelligence (AI)-based approaches (especially manifold learning) for understanding the 
                  delicate rules of nature and utilizing them for forming innovative software- and hardware-based tools 
                  for addressing the major challenges in a wide range of disciplines.”
                </p>
                <p>
                  The current research is significant as lung disease illnesses in various forms are among the major and 
                  most common causes of death worldwide. Due to the lack of infrastructure and trained radiologists, 
                  many illnesses remain undiagnosed or are not detected early enough to avoid long term complications and chronic symptoms.
                </p>
                <p>
                  The main vision of this research is to use a new approach based on machine learning (ML) and deep 
                  learning (DL) for the classification and detection of interstitial lung disease using thoracic images. 
                  As a major part of the project, the algorithms will be implemented in a mobile application for 
                  smartphone or tablet and will potentially be available as a lightweight web-based application for use 
                  in a web browser.  We utilized Firebase for user authentication, user credential storage, and 
                  profile data. Firebase is a trusted platform used by companies around the world and it allows us to 
                  offer not only a user specific profile but also ensures security for our sensitive data. The backend 
                  API of our app is implemented using a Python library called Flask and communicates via HTTP with our 
                  Azure Machine Learning workspace where our model is contained. 
                </p>
                <p>
                The application will also have a platform for radiologists to label thoracic images to add to the 
                database. On the client side, a user would input a X-ray image, or a collection of images, which would 
                be processed and classified in the back-end using the algorithms. This platform will be extremely helpful 
                and innovative, especially for under-developed countries that lack necessary medical infrastructure or 
                access to trained radiologists. The focus of this project will be on the classification of lung disease 
                using CNNs and transfer learning with X-ray images. 
                </p>
                <ul>
                  <li>
                  Developed a Flask API based on a trained model and included features for displaying saliency 
                  map based on the images uploaded.
                  </li>
                  <li>
                  Wrote a user interface front-end using React that calls the Flask API back-end.
                  </li>
                  <li>
                  Utilized Azure and Firebase to store user data and user profile, allowing the user to save their 
                  predicted results and enhanced data protection and usability by 20%.
                  </li>
                </ul>
                <br/>
                <h1>COVID image classification</h1>
                <p>
                With 33.8 million cases worldwide and 7.2 million in the US, accurate and speedy detection of 
                COVID-19 has been a challenge for doctors since the beginning. Although partially effective, 
                traditional COVID-19 tests face imperfections in their results. Our goal with this model would be to 
                develop a machine learning program that could identify high-probability COVID cases based on chest 
                X-rays, allowing medical professionals to potentially see potentially missed COVID cases. This tool 
                could potentially be added to traditional COVID tests in high risk patients, which would help in the 
                successful treatment of these patients. This early detection in particular has led to decreased 
                mortality rates in COVID patients. It could also encourage patients to self isolate before receiving 
                another test.
                </p>
                <p>
                For the unsupervised phase, we plan to apply K-Means and Gaussian Mixture Model (GMM). 
                In order to have a better training performance, we will use feature-reduced data processed by 
                Principal Component Analysis(PCA). The Silhouette Coefficient and Davies-Bouldin index will be used 
                to evaluate our cluster results.
                </p>
                <p>
                For the supervised phase, we will use Convolutional neural networks (CNNs) since they are the most 
                common type of method used for image classification. We plan to take multiple approaches using CNNs,
                 as we believe this has the highest chance in generating a sucessful model. In addition to CNNs, 
                 we will utilize Random Forest, an ensemble learning method by constructing and adjusting decision 
                 trees, to discover another approach for our supervised learning. We will compare training results of 
                 the above three methods to determine which one is better for our problem.
                </p>
                <ul>
                  <li>
                  Developed different models in python for classifying COVID-19 Xray-images and obtained an accuracy of 83% 
                  </li>
                  <li>
                  Utilized Kmeans and GMM for unsupervised learning and CNN and random forest for supervised learning 
                  </li>
                </ul>
                <br/>
                <h1>Marine Robotics</h1>
                <p>
                This is a club where a group of students come together and build robots to compete in various marine 
                robotics competitions, such as RoboBoat and RoboSub involving autonomous navigation. In the competition 
                the robot will utilize image classification techniques for autonomous navigation. What I did is to 
                improve the accuracy of classification.
                </p>
                <ul>
                  <li>
                    Implemented a new image classification model for marine robotics using hyper-parameter and image 
                    augmentation techniques such as scaling, padding, flipping, adjusting brightness, contrast, and 
                    saturation, increasing the prediction accuracy up to 99%. 
                  </li>
                  <li>
                  Wrote ML algorithms using the TensorFlow platform on python 
                  </li>
                  <li>
                  Utilized Yolact for real time instance segmentation for the robot’s image perception in robust environments 
                  </li>
                </ul>
                <br/>

                <h1>FoodShed Project</h1>
                <p>
                  This is a project for a student organization that coordinates with non-profit 
                  organizations to help them solve emerging problems. The basic idea behind FoodShed Project is to 
                  coordinate with local markets to reduce food waste. Normally food that are close to expiration dates 
                  are thrown out, which is wasteful and what we are doing is placing fridges around campus that put 
                  these foods that are close to expiration in for students to take. This on one hand can reduce food 
                  waste and on the other hand help students save some money. What this project will do is to implement 
                  an app that will display where the fridges are around campus, and display pictures of what food are 
                  in the fridges. 
                </p>
                <ul>
                  <li>
                    Developed an app that manages food inventory within the city with AngularJS 
                  </li>
                  <li>
                    Utilized Github version control for Integration and development of application 
                  </li>
                  <li>
                    Followed Agile practices and gave weekly scrum meetings 
                  </li>
                  <li>
                    Successfully planned how to proceed with the FoodShed app development by creating a timeline 
                    chart that lists the time frame for each task, scheduling meetings with another student organization 
                    and preset to them the progresses, and finding tutorials online, resulting in a 25% increase in 
                    productivity. 
                  </li>
                </ul>
                <br/>

                <h1>Milk Tank Project</h1>
                <p>
                  The milk tank is an indispensable component to a dairy farmer’s business, and is frequently accessed. 
                  It is most common to have the pipe valve controls on top of the milk tank and a ladder to access them. 
                  This has caused problems for farmers who have medical issues that limit their ability to climb a ladder. 
                  The solution to this problem is to create a safer, more stable design that streamlines the client’s access 
                  to the milk tank’s controls and minimizes the need to leave the ground. In meeting the client’s needs the 
                  final product will be unique to farmers with similar issues. 
                </p>
                <p>
                In this project we designed, evaluated, and fabricated a device to enable a dairy farmer with prosthetic 
                leg and spina bifida to access the controls of his milk tank with more ease than the status quo. 
                A hydraulic lift with the capacity to support the client was selected, and while it was not purchased, 
                various modifications to the lift were fabricated over the course of the project to be installed on the 
                selected lift once purchased by the client. A railing and gate to ensure the lift’s safety was fabricated 
                using square steel tubing, MIG welding, and low carbon hot rolled flat. Additionally, a steel-and-wood 
                platform was created to mimic the lift’s platform to accommodate the rails. This design should solve the 
                problem of not only our client, but other farmers with similar cases. I played the role of a leadership for 
                this project, below is a specific list of what I accomplished.
                </p>
                <ul>
                  <li>
                    Designed a hydraulic lift specifically for a client with disability to allow access to the top of a milk tank safely 
                  </li>
                  <li>
                    Arranged meeting time and divided workload between our eight members
                  </li>
                  <li>
                    Communicated with our client for specific project specifications via email and phone
                  </li>
                  <li>
                    Kept files and records for each meeting and each project version
                  </li>
                </ul>
            </div>
            
        </section>
      )
    }
  }