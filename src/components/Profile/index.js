import React, { useContext } from 'react';
import './index.scss'
import TypedText from "../TypedText";
import SocialLinks from "../SocialLinks";
import Info from "../Info";
import Skills from "../Skills";
import { ThemeContext } from "../../context/ThemeContext";
import { useAnimation } from "../../use/animation";

const Profile = () => {
    const { backgroundImage, type } = useContext(ThemeContext);
    const { animation } = useAnimation();
    return (
        <div className="profile">
            <div className="profile__banner">
                <div className={`profile__photo ${animation}`} style={{ backgroundImage: `url(${backgroundImage})` }} />
                <img src="https://skillflare.co.in/mohit/mohit/personal/assets/mohitprofile.jpg" alt={type} />
            </div>
            <div className="profile__content">
                <div className="profile__title">
                    Mohit Kumar
                </div>
                <TypedText
                    dataText={
                        [
                            'Software Engineer',
                            'Full Stack Development',
                            'Backend Development'
                        ]
                    }
                />
                <SocialLinks />
                <Info icon="location">
                    DELHI / INDIA
                </Info>
                <Skills />
            </div>
            <div className="profile__contact">
                <a href="https://drive.google.com/file/d/1_nzL8hsMjEOeEt5r9SUUtY91JEapIeUq/view?usp=sharing" target="_blank" rel="noreferrer">
                    <span>
                        Download CV
                        </span>
                </a>
                <a href="mailto:mohitbarawal@gmail.com">
                    <span>
                        Contact Me
                        </span>
                </a>
            </div>
        </div>
    );
};

export default Profile;
