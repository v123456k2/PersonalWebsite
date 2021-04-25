import React from 'react'
import {Link} from 'react-router-dom'
import { useLocation } from "react-router-dom";

const Sidebar = () => {
  //assigning location variable
  const location = useLocation();

  //destructuring pathname from location
  const { pathname } = location;

  //Javascript split method to get the name of the path in array
  const splitLocation = pathname.split("/");
  return (
    <div>
        <section id ="sidebar">
            <div className = "sidebar">
              <div className = "author-img" style ={{backgroundImage: 'PersonalWebsite/images/about.jpg'}} />
              <h1 className = "name"> Vincent Chow </h1>
              <span className="mail"><i className="fa fa-envelope"></i> v123456k212561256@gmail.com</span>
              <span className="phone"><i className="fa fa-phone"></i> +1 724-328-2719</span>
              <nav className = "menuList">
                <ul>
                    <li className={splitLocation[2] === "" ? "active" : ""}>
                        <Link to='/PersonalWebsite/'>Home</Link>
                    </li>
                    <li className={splitLocation[2] === "about" ? "active" : ""}>
                        <Link to='/PersonalWebsite/about'>About</Link>
                    </li>
                    <li className={splitLocation[2] === "goal" ? "active" : ""}>
                        <Link to='/PersonalWebsite/goal'>Career Goal</Link>
                    </li>
                    <li className={splitLocation[2] === "resume" ? "active" : ""}>
                        <Link to="/PersonalWebsite/resume">Resume</Link>
                    </li>
                    <li className={splitLocation[2] === "education" ? "active" : ""}>
                        <Link to="/PersonalWebsite/education">Education</Link>
                    </li>
                    <li className={splitLocation[2] === "experiences" ? "active" : ""}>
                        <Link to="/PersonalWebsite/experiences">Experiences</Link>
                    </li>
                    <li className={splitLocation[2] === "project" ? "active" : ""}>
                        <Link to="/PersonalWebsite/project">Project</Link>
                    </li>
                    <li className={splitLocation[2] === "courses" ? "active" : ""}>
                        <Link to="/PersonalWebsite/courses">Course Works</Link>
                    </li>
                    <li className={splitLocation[2] === "technicalWriting" ? "active" : ""}>
                        <Link to="/PersonalWebsite/technicalWriting">Technical Writing Sample</Link>
                    </li>
                    <li className={splitLocation[2] === "writing1" ? "active" : ""}>
                        <Link to="/PersonalWebsite/writing1">Writing Samples 1</Link>
                    </li>
                    <li className={splitLocation[2] === "writing2" ? "active" : ""}>
                        <Link to="/PersonalWebsite/writing2">Writing Samples 2</Link>
                    </li>
                    <li className={splitLocation[2] === "presentation" ? "active" : ""}>
                        <Link to="/PersonalWebsite/presentation">Presentation Sample</Link>
                    </li>
                    
                </ul>
              </nav>
              <nav className = "redirectLinks">
                <ul>
                  <li><a href="https://www.linkedin.com/in/vincent-chow-165330198/" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin"></i></a></li>
                  <li><a href="https://github.com/v123456k2" target="_blank" rel="noopener noreferrer"><i className="fa fa-github"></i></a></li>
                </ul>
              </nav>

            </div>
        </section>
    </div>
  )
}

export default Sidebar;