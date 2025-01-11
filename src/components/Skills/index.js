import { Component } from "react";
import Resume from "../Resume";
import Footer from '../Footer';
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaDatabase } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { SiExpress } from "react-icons/si";

import './index.css';

class Skills extends Component {
    render() {
        return (
            <div>
                <div className="skills-bg mt-5">
                    <h1>My Skills</h1> {/* Missing closing tag added */}
                    <div className="skills-items-con fade-in-to-top ">
                        <div className="skill-item">
                            <FaHtml5 size={40} />
                            <h2 className="skill-name">HTML</h2>
                        </div>
                        <div className="skill-item">
                            <FaCss3Alt size={40}  />
                            <h2  className="skill-name">CSS</h2>
                        </div>
                        <div className="skill-item">
                            <IoLogoJavascript size={40}  />
                            <h2  className="skill-name">JavaScript</h2>
                        </div>
                        <div className="skill-item">
                            <FaReact size={40}  />
                            <h2  className="skill-name">ReactJS</h2>
                        </div>
                        <div className="skill-item">
                            <FaNode size={40}  />
                            <h2  className="skill-name">NodeJS</h2>
                        </div>
                        <div className="skill-item">
                            <SiExpress size={40}  />
                            <h2 className="skill-name">ExpressJS</h2>
                        </div>
                        <div className="skill-item">
                            <FaDatabase size={40}  />
                            <h2 className="skill-name">SQL</h2>
                        </div>
                    </div>
                </div>
               <Resume />
                <div style={{marginTop:'250px'}} >
                <Footer />
                   
                </div>
            </div>
        );
    }
}

export default Skills;
