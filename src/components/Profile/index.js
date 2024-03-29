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
                <img src="https://drive.google.com/uc?export=view&id=1SvR6GQFOXZy53lFaAHHZJZ04Y2OfC_bb" alt={type}/>   
            </div>
            <div className="profile__content">
                <div className="profile__title">
                    Mohit Kumar
                </div>
                <TypedText
                    dataText={
                        [
                            'Senior Software Engineer',
                            'Senior Full Stack Developer',
                            'Senior Software Developer',
                            'Senior Backend Developer'
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
                <a href="https://drive.google.com/file/d/143UAZhDUYHvhFuGQCS9MtFhcdiJN1Qva/view?usp=share_link" target="_blank" rel="noreferrer">
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
