import React from 'react';
import './index.scss';
import Title from "../common/Title";

const About = () => {
    return (
        <div className="page" id="about">
            <Title>
                About Me
            </Title>
            <div className="row">
                <div className="column">
                    <strong>
                        Hi, I am Mohit Kumar
                    </strong>
                    <p>
                        Software Developer specializing in back end development. Experienced with all stages of
                        the development cycle for dynamic website, static website, mobile application.
                        <br /> <br />
                        Self-taught, self-driven, passionate learner and developer focusing and Well-versed in numerous
                        programming languages including HTML5, CSS3, MySQL, Graph QL, NodeJS, Angular, React, MongoDB,
                        Core Java, Python, SAP Fiori/Ui5, Wordpress, PHP. Strong background in project
                        management and customer relations. Looking forward to working with ingenious teams on challenging projects.
                        <br /> <br />
                        I’m an easy going person that works well with everyone. I enjoy being around different types of people and I like to always challenge myself to improve at everything I do.
                        <br /><br />
                        I have a great passion for learning languages and exploring the world and also programming. I have always loved technology and programming. And this is my profession now.
                    </p>
                </div>
            </div>
            <Title>
                My philosophy of programming
            </Title>
            <div className="row">
                <div className="column">
                    <p>
                        I have a deep understanding of how JavaScript works. I strongly believe that having a solid understanding of core technologies allows developers to master at any frameworks.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
