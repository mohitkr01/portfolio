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
                        Full Stack Software Developer with 7+ years of overall development experience, including ~5 years
                        specializing in Full Stack Development (MERN Stack – MongoDB, Express.js, React.js, Node.js).
                        <br /> <br />
                        Hands-on across the complete software development lifecycle, from RESTful API design and cloud
                        deployment (AWS/GCP) to translating Figma designs into production-ready, responsive UI.
                        Delivered solutions for clients across healthcare, retail, and e-commerce sectors.
                        <br /> <br />
                        Strong track record in Agile delivery, project ownership, peer mentorship, and client
                        communication. Well-versed in technologies including React.js, Next.js, Node.js, Express.js,
                        MongoDB, PostgreSQL, GraphQL, AWS, Python, PHP, and more.
                        <br /><br />
                        I’m an easy-going person who works well with cross-functional teams. I enjoy collaborating
                        with people from different backgrounds and I always challenge myself to grow as a developer
                        and as a professional.
                    </p>
                </div>
            </div>
            <Title>
                My philosophy of programming
            </Title>
            <div className="row">
                <div className="column">
                    <p>
                        I have a deep understanding of how JavaScript works. I strongly believe that having a solid
                        understanding of core technologies allows developers to master any framework. Building
                        scalable, maintainable, and user-friendly software is what drives me every day.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
