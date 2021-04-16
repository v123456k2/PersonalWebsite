import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import About from './components/about.js';
import Project from './components/project.js';
import Resume from './components/resume.js';
import Sidebar from './components/sidebar.js';
import Home from './components/home.js';
import Goal from './components/goal.js';
import Education from './components/education.js';
import Experiences from './components/experiences';
import Courses from './components/courses.js';
import technicalWriting from './components/technicalWriting';
import Writing1 from './components/writing1.js';
import Writing2 from './components/writing2.js';
import Presentation from './components/presentation.js';




ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Sidebar></Sidebar>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/goal" component={Goal} />
        <Route path="/resume" component={Resume} />
        <Route path="/education" component={Education} />
        <Route path="/experiences" component={Experiences} />
        <Route path="/project" component={Project} />
        <Route path="/courses" component={Courses} />
        <Route path="/technicalWriting" component={technicalWriting} />
        <Route path="/writing1" component={Writing1} />
        <Route path="/writing2" component={Writing2} />
        <Route path="/presentation" component={Presentation} />
        
      </Switch>
    </Router>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
