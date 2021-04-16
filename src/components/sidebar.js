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
              <div className = "author-img" style ={{backgroundImage: 'url(images/about.jpg)'}} />
              <h1 className = "name"> Vincent Chow </h1>
              <span className="mail"><i className="fa fa-envelope"></i> v123456k212561256@gmail.com</span>
              <span className="phone"><i className="fa fa-phone"></i> +1 724-328-2719</span>
              <nav className = "menuList">
                <ul>
                    <li className={splitLocation[1] === "" ? "active" : ""}>
                        <Link to='/'>Home</Link>
                    </li>
                    <li className={splitLocation[1] === "about" ? "active" : ""}>
                        <Link to='/about'>About</Link>
                    </li>
                    <li className={splitLocation[1] === "goal" ? "active" : ""}>
                        <Link to='/goal'>Career Goal</Link>
                    </li>
                    <li className={splitLocation[1] === "resume" ? "active" : ""}>
                        <Link to="/resume">Resume</Link>
                    </li>
                    <li className={splitLocation[1] === "education" ? "active" : ""}>
                        <Link to="/education">Education</Link>
                    </li>
                    <li className={splitLocation[1] === "experiences" ? "active" : ""}>
                        <Link to="/experiences">Experiences</Link>
                    </li>
                    <li className={splitLocation[1] === "project" ? "active" : ""}>
                        <Link to="/project">Project</Link>
                    </li>
                    <li className={splitLocation[1] === "courses" ? "active" : ""}>
                        <Link to="/courses">Course Works</Link>
                    </li>
                    <li className={splitLocation[1] === "technicalWriting" ? "active" : ""}>
                        <Link to="/technicalWriting">Technical Writing Sample</Link>
                    </li>
                    <li className={splitLocation[1] === "writing1" ? "active" : ""}>
                        <Link to="/writing1">Writing Samples 1</Link>
                    </li>
                    <li className={splitLocation[1] === "writing2" ? "active" : ""}>
                        <Link to="/writing2">Writing Samples 2</Link>
                    </li>
                    <li className={splitLocation[1] === "presentation" ? "active" : ""}>
                        <Link to="/presentation">Presentation Sample</Link>
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