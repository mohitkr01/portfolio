import React from 'react';
import moment from 'moment';
import Title from "../common/Title";
import './index.scss';
import ResumeItem from "./Item";
import cpwdlogo from '../../assets/cpwd-logo.png';
import skillflarelogo from '../../assets/skillflare-logo.png';
import mckinsollogo from '../../assets/mckinsol-logo.png';
import omlogo from '../../assets/om.jpg';
import nimslogo from '../../assets/nims.png';
import ambplogo from '../../assets/ambp.jpeg';

const Resume = () => {
    return (
        <div className="page" id="resume">
            <Title icon={'fa fa-briefcase'}>
                Resume - Total Commercial Experience {moment().diff('09/03/2017', 'years', true).toFixed(2)} years
            </Title>
            <ResumeItem
                date={'Sep 2020 - Present'}
                title={'Software Engineer'}
                company={'SkillFlare'}
                logo= {skillflarelogo}
            >
                • Working on front-end with extensive use of React and native JavaScript for developing SPA. <br />
                •
            </ResumeItem>
            <ResumeItem
                date={'Nov 2018 – Aug 2020'}
                title={'Software Developer'}
                company={'McKinsol Consulting Inc.'}
                logo={mckinsollogo}
            >
                • Involved in the implementation of the MVC arhitecture using Node JS. <br />
                • Develop clean, maintainable and highly interactive single page web applications using
                Javascript, Angular, HTML, CSS. <br />
                • Responsible for design and development of the web pages from sketchs.
            </ResumeItem>
            <ResumeItem
                date={'Sep 2017 – Oct 2018'}
                title={'Java Developer'}
                company={'OM Associates'}
                logo={omlogo}
            >
                • Developed clean, maintainable and highly interactive single page web applications using
                Javascript, TypeScript, Angular, React, HTML, SASS. <br />
                • Responsible for design and development of the web pages from mock-ups (PSD). <br />
                • Worked the backend by using Node JS, Express and Mongo DB <br />
            </ResumeItem>
            <ResumeItem
                classNames={'not-last'}
                date={'Mar 2017 – Sept 2017'}
                title={'IT Assistant'}
                company={'CPWD'}
                logo={cpwdlogo}
            >
                • Involved in the implementation of the MVC arhitecture using Node JS. <br />
                • Connected to Data Sources and performed operations using Spring Data framework features like
                Spring JDBC and Spring ORM. <br />
                • Built RESTFul web services consume them using Angular JS. <br />
            </ResumeItem>
            <Title icon={'fa fa-university'}>
                Education
            </Title>
            <ResumeItem
                date={'2015 – 2018'}
                title={'NIMS University'}
                company={'Delhi'}
                logo={nimslogo}
            >
                Bachelor's Degree in Computer Application
            </ResumeItem>
            <ResumeItem
                date={'2012 – 2016'}
                title={'Ambedkar Institute of Technology'}
                company={'Delhi'}
                logo={ambplogo}
            >
                Diploma in Information Technology Enabled Services & Management
            </ResumeItem>
        </div>
    );
};

export default Resume;
