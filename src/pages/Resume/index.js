import React from "react";
import moment from "moment";
import Title from "../common/Title";
import "./index.scss";
import ResumeItem from "./Item";
import cpwdlogo from "../../assets/cpwd-logo.png";
import skillflarelogo from "../../assets/skillflare-logo.png";
import mckinsollogo from "../../assets/mckinsol-logo.png";
import omlogo from "../../assets/om.jpg";
import nimslogo from "../../assets/nims.png";
import ambplogo from "../../assets/ambp.jpeg";
import dmilogo from "../../assets/dmi.png";

const Resume = () => {
  return (
    <div className="page" id="resume">
      <Title icon={"fa fa-briefcase"}>
        Resume - Total Commercial Experience{" "}
        {moment().diff("09/03/2017", "years", true).toFixed(2)} years
      </Title>
      <ResumeItem
        date={"Feb 2021 - Present"}
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
        {/* &{" "} */}
        {/* <a href={"https://dev.qozo.io/"} target="_blank">
          Another Product{" "}
        </a> */}
        {/* asd */}
        <br />
        ● Worked extensively on ReactJS, native JS and GraphQL APIs for
        developing modules. <br />
        ● Develop UI/UX using ReactJS based on prototypes. <br />
        ● Estimation, designing, development, bug-fixing of modules to ensure
        smooth delivery. <br />
        ● Collaborating with other teams to ensure proper integration. <br />
        ● Bug fixing and maintenance to ensure smooth delivery of the product.{" "}
        <br />
        ● Worked on the Data Migration with the help of ETL Tool.
        <br />
        <br />
        <br />
        <br />
        Project Name – <b>Award Platform</b> based on NodeJS, MySQL, Angular, Git, ES6, HTML5,
CSS3, Bootstrap, Material Design <br />
        <a
          href={"https://annualawards.dminc.com"}
          target="_blank"
        >
          Website
        </a>{" "}
        <br />
        ● Worked extensively on the project consisting of Node JS and MYSQL for developing modules. <br />
        ● Created the Rest APIs for the platform.
        
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
      </ResumeItem>
      <ResumeItem
        date={"Nov 2018 – Aug 2020"}
        title={"Software Developer"}
        company={"McKinsol Consulting Inc."}
        logo={mckinsollogo}
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
        Project Name – <b>Chatbot </b> based on SAP Fiori/Ui5
        <br />
        <a href={"https://mckinsol.com"} target="_blank">
          Website
        </a>{" "}
        <br />
        ● Setup the account with SAP Team and their configuration also.
        <br />
        ● Written code for GUI as per the requirement based on XML.
        <br />
        ● Using SAP Hana Cockpit server.
        <br />
        ● Configuration of Cloud Connector in local environment.
        <br />
        ● Calling the API with the help of O-Data.
        <br />
      </ResumeItem>
      <ResumeItem
        date={"Sep 2017 – Oct 2018"}
        title={"Java Developer"}
        company={"OM Associates"}
        logo={omlogo}
      >
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
      <ResumeItem
        classNames={"not-last"}
        date={"Mar 2017 – Sept 2017"}
        title={"IT Assistant"}
        company={"CPWD"}
        logo={cpwdlogo}
      >
        ● Develop project concepts and maintain optimal workflow.
        <br />
        ● Maintained the GUI Part and made the changes as per the Client
        requirement.
        <br />
        ● Made APIs based on the Core Java with the help of MySQL Database.
        <br />
        ● Work with senior developer to manage large, complex design projects
        for corporate clients.
        <br />
        ● Complete detailed programming and development tasks for front end
        public and internal websites as well as challenging back-end server
        code.
        <br />
        ● Built RESTFul web services consume them using Angular JS. <br />
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
