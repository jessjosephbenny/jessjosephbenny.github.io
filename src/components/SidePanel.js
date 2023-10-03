import React from "react";
import {
    AiOutlineGithub,
    AiOutlineInstagram,
    AiOutlineLinkedin
  } from "react-icons/ai";

function SidePanel() {
    return(
        <div className="glassy-panel">
        <a className="social-button" href="https://www.linkedin.com/in/jessjosephbenny/">
            <AiOutlineLinkedin/>
        </a>
        <a className="social-button" href="https://www.instagram.com/jessjosephbenny/" target="_blank">
            <AiOutlineInstagram/>
        </a>
        <a className="social-button" href="https://github.com/jessjosephbenny" target="_blank">
            <AiOutlineGithub/>
        </a>
    </div>
    )
}

export default SidePanel