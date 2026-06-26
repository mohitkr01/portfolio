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
                <li id="react">React.js</li>
                <li id="node">Node.js</li>
                <li id="javascript">JavaScript (ES6)</li>
                <li id="mongodb">MongoDB</li>
                <li>Next.js</li>
                <li>GraphQL</li>
                <li>AWS</li>
            </ul>
        </div>
    );
};

export default Skills;
