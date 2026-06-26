import React from "react";
import moment from "moment";
import Title from "../common/Title";
import "./index.scss";
import ResumeItem from "./Item";
import skillflarelogo from "../../assets/skillflare-logo.png";
import omlogo from "../../assets/om.jpg";
import ambplogo from "../../assets/ambp.jpeg";
import dmilogo from "../../assets/dmi.png";
import neclogo from "../../assets/nec.png";

const Resume = () => {
  return (
    <div className="page" id="resume">
      <Title icon={"fa fa-briefcase"}>
        Resume - Total Commercial Experience{" "}
        {moment().diff("09/01/2018", "years", true).toFixed(2)} years
      </Title>

      <ResumeItem
        date={"Jul 2025 – Present"}
        title={"Senior Consultant"}
        company={"Emids Technologies Pvt Ltd"}
      >
        <b>Client: Hansei</b> &nbsp;|&nbsp; Project: <b>BENJI</b><br />
        <i>Technology: ReactJS, Node.js, Express.js, MongoDB, REST APIs, Figma-to-Code Implementation</i>
        <br /><br />
        ● Own end-to-end development of BENJI, a healthcare-sector solutions portal, from requirement
        analysis through deployment.<br />
        ● Translate Figma designs into responsive, pixel-accurate UI components for web and application
        modules.<br />
        ● Design and integrate RESTful APIs to power core application workflows and third-party service
        connections.<br />
        ● Collaborate with design, product, and QA teams to ensure accurate design-to-code translation
        and timely release cycles.<br />
        ● Implemented secure OTP-based email validation, displaying appointment details to the user only
        upon successful verification.
      </ResumeItem>

      <ResumeItem
        date={"Nov 2022 – Jul 2025"}
        title={"Senior Software Engineer"}
        company={"NEC Corporation India"}
        logo={neclogo}
      >
        <b>Client: 7Eleven</b> &nbsp;|&nbsp; Project: <b>EDM (End Device Manager)</b><br />
        <i>Technology: ReactJS, Next.js, Node.js, Express.js, MongoDB, PgSQL, AWS, ES6, HTML5, CSS3</i>
        <br /><br />
        ● Led development of key modules for a device-monitoring web platform used across retail
        locations.<br />
        ● Built responsive, reusable UI components using ReactJS and Material UI.<br />
        ● Developed and maintained RESTful APIs using Node.js and Express.js.<br />
        ● Participated in Agile ceremonies, contributing to sprint planning, estimation, and delivery.<br />
        ● Collaborated with cross-functional teams to ensure smooth integration and deployment.<br />
        <br />
        ★ <b>Oscard Award</b> — 4th Quarter 2024, for Outstanding Performance<br />
        ★ <b>Consider It Done Award</b> — 4th Quarter 2025<br />
        <br />

        <b>Client: NEC America</b> &nbsp;|&nbsp; Project: <b>7-Eleven Retail Product</b><br />
        <i>Technology: ReactTS, Node.js, Express.js, PowerShell, Serverless, DynamoDB, PgSQL, MongoDB, AWS</i>
        <br /><br />
        ● Provided L2/L3 production support, resolving daily escalations and critical bugs for a live
        retail platform.<br />
        ● Built automation scripts using PowerShell, Node.js, and PgSQL to improve client-side
        operational efficiency.<br />
        ● Collaborated with distributed, cross-time-zone teams to enhance system integration and
        stability.<br />
        <br />

        <b>Client: BanQsoft Credit Management</b> &nbsp;|&nbsp; Project: <b>Ledger Web Application</b><br />
        <i>Technology: ReactJS, Next.js, GraphQL, Serverless, MUI, Cypress, Node.js, Express.js, MongoDB, AWS</i>
        <br />
        <a href={"https://www.banqsoft.com/"} target="_blank" rel="noreferrer">Website</a>
        <br /><br />
        ● Built core ledger modules using ReactJS and GraphQL, with Cypress for end-to-end test
        automation.<br />
        ● Designed UI/UX with Material UI according to stakeholder specifications.<br />
        ● Drove Agile delivery across design, bug resolution, and integration testing.<br />
        <br />
        ★ <b>Vogue Award</b> — Popular Choice in Solutions (Mar 2022)
      </ResumeItem>

      <ResumeItem
        date={"Feb 2021 – Oct 2022"}
        title={"Software Engineer"}
        company={"Pragiti Internet Technologies"}
        logo={dmilogo}
      >
        <b>Client: PitStopUSA</b> &nbsp;|&nbsp; Project: <b>E-Commerce Web Application</b><br />
        <i>Technology: VTEX Marketplace, ReactJS, Next.js, Store Framework, Node.js, Express.js, Bootstrap</i>
        <br />
        <a href={"https://pitstopusa.myvtex.com/"} target="_blank" rel="noreferrer">Website</a>
        <br /><br />
        ● Built and maintained e-commerce storefront features using VTEX Marketplace and ReactJS.<br />
        ● Developed custom VTEX applications, including Legacy Order integration and Zaius email-marketing
        integration.<br />
        ● Managed data migration using ETL tools, ensuring accurate product and catalog transitions.<br />
        ● Translated design mockups into responsive, production-ready UI components.<br />
        <br />
        ★ <b>Consider It Done Award</b> — Aug 2022, for Outstanding Performance<br />
        <br />

        <b>Client: Award Platform</b> &nbsp;|&nbsp; Project: <b>Recognition Web Application</b><br />
        <i>Technology: Node.js, MySQL, Angular, Bootstrap, Material Design</i>
        <br />
        <a href={"https://annualawards.dminc.com"} target="_blank" rel="noreferrer">Website</a>
        <br /><br />
        ● Developed REST APIs using Node.js, integrated with MySQL for data persistence.<br />
        ● Supported front-end modules in Angular, styled with Bootstrap and Material Design.
      </ResumeItem>

      <ResumeItem
        date={"Sep 2020 – Jan 2021"}
        title={"Software Engineer"}
        company={"SkillFlare"}
        logo={skillflarelogo}
      >
        <b>Client: QOZO</b> &nbsp;|&nbsp; Project: <b>Web Application</b><br />
        <i>Technology: ReactTS, Node.js, Next.js, Express.js, GraphQL, Serverless, MongoDB, DynamoDB, AWS</i>
        <br />
        <a href={"https://qozo.io/"} target="_blank" rel="noreferrer">Website</a>
        <br /><br />
        ● Developed modules using ReactTS and GraphQL within a serverless architecture.<br />
        ● Integrated front-end components with backend services and third-party APIs.<br />
        ● Provided ongoing development support, resolving issues and implementing enhancements.<br />
        ● Contributed across the full development lifecycle — implementation, testing, and deployment.<br />
        <br />

        <b>Client: AI Chatbot</b> &nbsp;|&nbsp; Project: <b>Artificial Intelligence-Based Customer Support Bot</b><br />
        <i>Technology: Python, Flask, NLTK, Angular, MongoDB, Heroku</i>
        <br /><br />
        ● Built back-end chatbot logic using Flask and NLTK for natural language processing.<br />
        ● Integrated Zoom and Twilio APIs to enable video conferencing and IVR-based customer support.
      </ResumeItem>

      <ResumeItem
        date={"Sep 2018 – Aug 2020"}
        title={"Software Developer"}
        company={"OM Associates"}
        logo={omlogo}
      >
        <b>Client: SPOT</b> &nbsp;|&nbsp; Project: <b>Sales and Promotion Optimization Tools</b><br />
        <i>Technology: ReactJS, Node.js, Express.js, MongoDB, Bootstrap, GCP</i>
        <br />
        <a href={"https://spotyourdeal.com/#/home"} target="_blank" rel="noreferrer">Website</a>
        <br /><br />
        ● Supported U.S.-based clients with feature development and issue resolution.<br />
        ● Built core modules using ReactJS, Node.js, Express.js, and MongoDB.<br />
        ● Developed web and hybrid mobile features, including PayPal payment integration.<br />
        ● Collaborated across teams to ensure smooth module integration and product deployment.<br />
        <br />

        <b>Client: VAPOR</b> &nbsp;|&nbsp; Project: <b>Hybrid Mobile Application</b><br />
        <i>Technology: React Native, Node.js, Express.js, MongoDB, Bootstrap</i>
        <br />
        <a href={"https://vaporinterface.com"} target="_blank" rel="noreferrer">Website</a>
        <br /><br />
        ● Managed the end-to-end development lifecycle, from prototyping through deployment.<br />
        ● Integrated backend logic with UI to ensure robust business-process execution.<br />
        <br />

        <b>Client: Intellicept</b> &nbsp;|&nbsp; Project: <b>Web Platform</b><br />
        <i>Technology: WordPress</i>
        <br />
        <a href={"https://intellicept.com"} target="_blank" rel="noreferrer">Website</a>
        <br /><br />
        ● Architected and implemented full-stack features using WordPress.<br />
        ● Managed backend logic and ensured cross-platform UI/UX compatibility.
      </ResumeItem>

      <Title icon={"fa fa-university"}>Education</Title>

      <ResumeItem
        date={"2022 – 2025"}
        title={"Bachelor of Computer Application (BCA) — 67%"}
        company={"IGNOU (Indira Gandhi National Open University)"}
      >
        Bachelor's Degree in Computer Application
      </ResumeItem>

      <ResumeItem
        date={"2012 – 2015"}
        title={"Diploma in Information Technology and Enabled S&M — 71.57%"}
        company={"Ambedkar Polytechnic, Delhi"}
        logo={ambplogo}
      >
        Diploma in Information Technology Enabled Services &amp; Management
      </ResumeItem>

      <ResumeItem
        date={"2012"}
        title={"12th Standard, Non-Medical — 70.2%"}
        company={"CBSE"}
      >
        Central Board of Secondary Education
      </ResumeItem>

      <ResumeItem
        date={"2009"}
        title={"10th Standard — 72.8%"}
        company={"CBSE"}
      >
        Central Board of Secondary Education
      </ResumeItem>
    </div>
  );
};

export default Resume;
