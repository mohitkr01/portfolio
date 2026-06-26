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
                <img src="https://drive.google.com/file/d/1yNNoCmPibNDHCLR9E7enXtti9sUu2kPE/view?usp=share_link" alt={type}/>   
            </div>
            <div className="profile__content">
                <div className="profile__title">
                    Mohit Kumar
                </div>
                <TypedText
                    dataText={
                        [
                            'Senior Consultant',
                            'Full Stack Developer (MERN)',
                            'Senior Software Engineer',
                            'Senior Full Stack Developer'
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
                <a href="https://drive.google.com/file/d/1Ns97g-GT1CRJxwtlMifnf33pvF0Io_8X/view?usp=share_link" target="_blank" rel="noreferrer">
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
