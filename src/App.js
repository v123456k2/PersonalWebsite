import './App.css';
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
import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import ReactDOM from 'react-dom';


const App = () => {
  return (
    <div>
      <Sidebar/>
      <Switch>
      <Route exact path="/PersonalWebsite/" component={Home} />
      <Route path="/PersonalWebsite/about" component={About} />
      <Route path="/PersonalWebsite/goal" component={Goal} />
      <Route path="/PersonalWebsite/resume" component={Resume} />
      <Route path="/PersonalWebsite/education" component={Education} />
      <Route path="/PersonalWebsite/experiences" component={Experiences} />
      <Route path="/PersonalWebsite/project" component={Project} />
      <Route path="/PersonalWebsite/courses" component={Courses} />
      <Route path="/PersonalWebsite/technicalWriting" component={technicalWriting} />
      <Route path="/PersonalWebsite/writing1" component={Writing1} />
      <Route path="/PersonalWebsite/writing2" component={Writing2} />
      <Route path="/PersonalWebsite/presentation" component={Presentation} />
      
    </Switch>
    </div>
  )
}
export default App;
