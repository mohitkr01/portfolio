import React, { useContext } from 'react';
import './index.scss';
import { ThemeContext } from "../../context/ThemeContext";

const Skills = () => {
    const { changeTheme, startThemeChangeTimer, stopThemeChangeTimer } = useContext(ThemeContext);

    function handleMouseEnter(e) {
        const type = e.nativeEvent.target.id;
        if (type) {
            changeTheme(type)
        }
    }

    return (
        <div className="skills">
            <h4>Try to Click/Move cursor below on skills</h4>
            {/* <h5>Skills</h5> */}
            <ul onMouseEnter={stopThemeChangeTimer}
                onMouseLeave={startThemeChangeTimer}
                onMouseOver={handleMouseEnter} >
                <li id="react" >React</li>
                {/* <li id="angular">Angular</li> */}
                <li id="redux">Redux</li>
                {/* <li id="vue">Vue</li>
                <li id="rxjs">Rxjs</li>
                <li id="ngrx">Ngrx</li> */}
                <li id="node">NodeJS </li>
                <li id="javascript">JavaScript</li>
                <li id="wordpress">Wordpress</li>
                <li id="mongodb">MongoDB</li>
                <li id="php">PHP</li>
                {/* <li id="python">Python</li> */}
            </ul>
        </div>
    );
};

export default Skills;
