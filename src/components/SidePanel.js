import React from "react";
import {
    AiOutlineGithub,
    AiOutlineInstagram,
    AiOutlineLinkedin
  } from "react-icons/ai";

function SidePanel({orientation}) {
    return(
        <div className={orientation==='vertical'?"glassy-panel":"glassy-panel-horizontal"}>
        <a className={orientation==='vertical'?"social-button":"social-button-horizontal"} href="https://www.linkedin.com/in/jessjosephbenny/">
            <AiOutlineLinkedin/>
        </a>
        <a className={orientation==='vertical'?"social-button":"social-button-horizontal"} href="https://www.instagram.com/jessjosephbenny/" >
            <AiOutlineInstagram/>
        </a>
        <a className={orientation==='vertical'?"social-button":"social-button-horizontal"} href="https://github.com/jessjosephbenny">
            <AiOutlineGithub/>
        </a>
    </div>
    )
}

export default SidePanel