import React from "react";
import moment from "moment";
import Title from "../common/Title";
import "./index.scss";
import ResumeItem from "./Item";
import cpwdlogo from "../../assets/cpwd-logo.png";
import skillflarelogo from "../../assets/skillflare-logo.png";
import omlogo from "../../assets/om.jpg";
import nimslogo from "../../assets/nims.png";
import ambplogo from "../../assets/ambp.jpeg";
import dmilogo from "../../assets/dmi.png";
import neclogo from "../../assets/nec.png";

const Resume = () => {
  return (
    <div className="page" id="resume">
      <Title icon={"fa fa-briefcase"}>
        Resume - Total Commercial Experience{" "}
        {moment().diff("09/09/2017", "years", true).toFixed(2)} years
      </Title>
      <ResumeItem
        date={"Oct 2022 - Present"}
        title={"Senior Software Engineer"}
        company={"NEC Corporation India"}
        logo={neclogo}
      >
        <b>Client Name – BanQsoft Credit Management</b> <br />
        Project Name – <b>Ledger </b> based on Web application. Technology - ReactTS, 
        GraphQL, Git, ES6, HTML5, CSS3, Material Design MUI, Cypress<br />
        <a href={"https://www.banqsoft.com/"} target="_blank">
          Website
        </a>{" "}
        <br />
        ● Worked extensively on web application consisting of ReactTS, calling APIs by GraphQL for developing modules. <br />
        ● Written the assertions to test the modules by Cypress. <br />
        ● Develop UI/UX using ReactTS with MUI, based on prototypes shared by Client. <br />
        ● Estimation, designing, development, bug-fixing of modules to ensure smooth delivery in agile
methodology. <br />
        ● Collaborating with team members to ensure proper integration.{" "}
        <br />
        </ResumeItem>

      <ResumeItem
        date={"Feb 2021 - Sept 2022"}
        title={"Senior Software Engineer"}
        company={"DMINC"}
        logo={dmilogo}
      >
        Project Name – <b>PitStopUSA</b> based on VTEX Marketplace platform
        consisting React, GraphQL, NodeJS, Store Framework, TypeScript,
        Serverless Architecture, AWS <br />
        <a href={"https://pitstopusa.myvtex.com/"} target="_blank">
          Website
        </a>{" "}
        <br />
        ● Worked extensively on ReactJS, native JS and GraphQL APIs for
        developing modules. <br />
        ● Develop UI/UX using ReactJS based on prototypes. <br />
        ● Estimation, designing, development, bug-fixing of modules to ensure
        smooth delivery. <br />
        ● Collaborating with other teams to ensure proper integration. <br />●
        Bug fixing and maintenance to ensure smooth delivery of the product.{" "}
        <br />
        ● Worked on the Data Migration with the help of ETL Tool.
        <br />
        <br />
        <br />
        <br />
        Project Name – <b>Award Platform</b> based on NodeJS, MySQL, Angular,
        Git, ES6, HTML5, CSS3, Bootstrap, Material Design <br />
        <a href={"https://annualawards.dminc.com"} target="_blank">
          Website
        </a>{" "}
        <br />
        ● Worked extensively on the project consisting of Node JS and MYSQL for
        developing modules. <br />● Created the Rest APIs for the platform.
      </ResumeItem>
      <ResumeItem
        date={"Sep 2020 - Jan 2021"}
        title={"Software Engineer"}
        company={"SkillFlare"}
        logo={skillflarelogo}
      >
        Project Name – <b>Qozo </b> based on React, GraphQL, Dynamo DB,
        Serverless Architecture, AWS <br />
        <a href={"https://qozo.io/"} target="_blank">
          Website
        </a>{" "}
        &{" "}
        <a href={"https://dev.qozo.io/"} target="_blank">
          Another Product{" "}
        </a>
        <br />
        ● Working on front-end with extensive use of React and native JavaScript
        for developing SPA. <br />
        Worked extensively on ReactJS, native JS and GraphQL APIs for developing
        modules. <br />
        ● Develop UI/UX using ReactJS based on prototypes.
        <br />
        ● Support to UK Team in Qozo on day to day basis.
        <br />
        ● Estimation, designing, development, bug-fixing of modules to ensure
        smooth delivery.
        <br />
        ● Collaborating with other teams to ensure proper integration.
        <br />
        ● Bug fixing and maintenance to ensure smooth delivery of the product.
        <br />
        <br />
        <br />
        <br />
        Project Name – <b>Chatbot </b> based on Artificial Intelligence based on Python, Flask, NLTK, Angular, MongoDB, Git.
        <br />
        <a href={""} target="_blank">
          Website
        </a>{" "}
        <br />
        ● Extensively worked on backend technologies like Python, Flask, NLTK, MongoDB.
        <br />
        ● Bug fixing and maintenance of the product.
        <br />
        ● Implemented the third party ZOOM API for Video conferencing as per the user`s convenient time and
Twilio API for IVR, if user would like to contact our Customer support as like Conference call immediately.
        <br />
        <br />
      </ResumeItem>
      <ResumeItem
        date={"Sep 2017 – Aug 2020"}
        title={"Java Developer"}
        company={"OM Associates"}
        logo={omlogo}
      >
        Project Name – <b>SPOT (Sales and Promotion Optimization tools)</b>{" "}
        based on Hybrid Mobile Application and web application technology –
        Angular , Node JS, Express JS, MongoDB. <br />
        <a href={"https://spotyourdeal.com/#/home"} target="_blank">
          Website
        </a>{" "}
        And{" "}
        <a
          href={
            "https://play.google.com/store/apps/details?id=com.spot.mckinsol&hl=en_IN"
          }
          target="_blank"
        >
          Android Application
        </a>{" "}
        And{" "}
        <a
          href={"https://apps.apple.com/in/app/spotyourdeal/id1491896908"}
          target="_blank"
        >
          iOS Application
        </a>{" "}
        <br />
        ● Support to USA Clients in SPOT (Sales and Promotion Optimization
        tools) on day to day basis. <br />
        ● Extensively worked on ReactJS, NodeJS, MongoDB, ExpressJS. <br />
        ● Implementation of Payment Gateway (Paypal). <br />
        ● Collaborating with other teams to ensure proper integration of modules
        and smooth deployment of the product. <br />
        <br />
        <br />
        <br />
        Project Name – <b>Chatbot based on DialogFlow </b> based on Node JS,
        Express, HTML, CSS, JavaScript. <br />
        <a
          href={"https://dashboard.heroku.com/apps/chatbotmohit"}
          target="_blank"
        >
          Website
        </a>{" "}
        <br />
        ● In house Website development project <br />
        ● Setup whole project for Chatbot with Frontend as well as Backend.
        <br />
        ● Estimation, design and development of various modules.
        <br />
        ● Build out the source control query service that queries information in
        a scalable and efficient manner.
        <br />
        ● Implemented NodeJS for the backend
        <br />
        ● Ensuring smooth delivery of the project.
        <br />
        <br />
        <br />
        Project Name – <b>VAPOR (Hybrid Mobile Application) </b> based on React
        Native , Node JS, Express JS, MongoDB. <br />
        <a href={"https://vaporinterface.com"} target="_blank">
          Website
        </a>{" "}
        <br />
        ● In house Website development project <br />● Developed clean,
        maintainable and highly interactive single page web applications using
        Javascript, TypeScript, Angular, React, HTML, SASS. <br />
        ● Responsible for design and development of the web pages from mock-ups
        (PSD). <br />
        ● Worked the backend by using Node JS, Express and Mongo DB <br />
        ● Evaluate and implement new programming languages and technologies.
        Provide life-cycle management for software and code.
        <br />
        ● Creating GUI on the basis of Image provided by client. <br />
        ● Implementing business logics for them. <br />
        ● Setup the whole backend project on NodeJS with database of Mongo DB.
        <br />
        ● Written the API Logic as per the GUI fields <br />
        ● Develop the Code as per the requirements.
        <br />
        ● Co-ordinate with Client and as per his requirements, made the changes
        in Frontend and backend APIs respectively. <br />
        <br />
        <br />
        Project Name – <b>Intellicept Website </b> based on Wordpress. <br />
        <a href={"https://intellicept.com"} target="_blank">
          Website
        </a>{" "}
        <br />
        ● Build client websites with WordPress.
        <br />
        ● Architect, implement, and manage web-based applications, databases,
        and interfaces from initial architecture through development, test, and
        deployment
        <br />
        ● Design, coordinate, and troubleshoot integrations, components, and
        infrastructures to run enterprise class website
        <br />
        ● Modify existing code as needed.
        <br />
        ● Develop themes and plugins.
        <br />
        ● Executed and monitored standards for user interfaces page design and
        graphics development.
        <br />
        ● Other duties may also be assigned.
        <br />
      </ResumeItem>
      <Title icon={"fa fa-university"}>Education</Title>
      <ResumeItem
        date={"2015 – 2018"}
        title={"NIMS University"}
        company={"Delhi"}
        logo={nimslogo}
      >
        Bachelor's Degree in Computer Application
      </ResumeItem>
      <ResumeItem
        date={"2012 – 2016"}
        title={"Ambedkar Institute of Technology"}
        company={"Delhi"}
        logo={ambplogo}
      >
        Diploma in Information Technology Enabled Services & Management
      </ResumeItem>
    </div>
  );
};

export default Resume;
