import React from "react";
import moment from "moment";
import "./index.scss";
import skillflarelogo from "../../assets/skillflare-logo.png";
import omlogo from "../../assets/om.jpg";
import ambplogo from "../../assets/ambp.jpeg";
import dmilogo from "../../assets/dmi.png";
import neclogo from "../../assets/nec.png";

const TimelineItem = ({ date, title, company, companyUrl, logo, children }) => (
  <div className="timeline-item">
    <div className="timeline-item__dot" />
    <div className="timeline-item__card">
      <div className="timeline-item__header">
        <div className="timeline-item__meta">
          <span className="timeline-item__date">{date}</span>
          <h3 className="timeline-item__title">{title}</h3>
          {companyUrl
            ? <a className="timeline-item__company timeline-item__company--link" href={companyUrl} target="_blank" rel="noreferrer">{company} <i className="fas fa-external-link-alt" /></a>
            : <p className="timeline-item__company">{company}</p>
          }
        </div>
        {logo && <img src={logo} alt={company} className="timeline-item__logo" />}
      </div>
      <div className="timeline-item__body">{children}</div>
    </div>
  </div>
);

const EduCard = ({ date, degree, institution, logo, grade }) => (
  <div className="edu-card reveal">
    {logo && <img src={logo} alt={institution} />}
    <div>
      <span className="edu-card__date">{date}</span>
      <h4>{degree}</h4>
      <p>{institution}</p>
      {grade && <span className="edu-card__grade">{grade}</span>}
    </div>
  </div>
);

const Resume = () => {
  return (
    <section id="resume">
      <div className="section-container">

        {/* ── Experience ── */}
        <h2 className="section-title reveal">Work <span>Experience</span></h2>
        <p className="section-subtitle reveal">
          {moment().diff("09/01/2018", "years", true).toFixed(1)} years of commercial experience
        </p>

        <div className="timeline">

          <TimelineItem
            date="Jul 2025 – Present"
            title="Senior Consultant"
            company="Emids Technologies Pvt Ltd"
            companyUrl="https://www.emids.com"
          >
            <strong>Client: Hansei &nbsp;|&nbsp; Project: BENJI</strong><br />
            <em>ReactJS · Node.js · Express.js · MongoDB · REST APIs · Figma-to-Code</em>
            <ul>
              <li>Own end-to-end development of BENJI, a healthcare-sector solutions portal, from requirement analysis through deployment.</li>
              <li>Translate Figma designs into responsive, pixel-accurate UI components.</li>
              <li>Design and integrate RESTful APIs to power core workflows and third-party connections.</li>
              <li>Implemented secure OTP-based email validation for appointment verification.</li>
            </ul>
          </TimelineItem>

          <TimelineItem
            date="Nov 2022 – Jul 2025"
            title="Senior Software Engineer"
            company="NEC Corporation India"
            companyUrl="https://in.nec.com"
            logo={neclogo}
          >
            <strong>Client: 7Eleven &nbsp;|&nbsp; Project: EDM (End Device Manager)</strong><br />
            <em>ReactJS · Next.js · Node.js · Express.js · MongoDB · PgSQL · AWS</em>
            <ul>
              <li>Led development of key modules for a device-monitoring platform used across retail locations.</li>
              <li>Built responsive, reusable UI components using ReactJS and Material UI.</li>
              <li>Developed and maintained RESTful APIs using Node.js and Express.js.</li>
            </ul>
            <p className="timeline-award">★ Oscard Award — Q4 2024 &nbsp;·&nbsp; ★ Consider It Done Award — Q4 2025</p>

            <br />
            <strong>Client: NEC America &nbsp;|&nbsp; Project: 7-Eleven Retail Product</strong><br />
            <em>ReactTS · Node.js · PowerShell · Serverless · DynamoDB · PgSQL · AWS</em>
            <ul>
              <li>Provided L2/L3 production support, resolving daily escalations and critical bugs.</li>
              <li>Built automation scripts using PowerShell, Node.js, and PgSQL to improve operational efficiency.</li>
            </ul>

            <br />
            <strong>Client: BanQsoft Credit Management &nbsp;|&nbsp; Project: Ledger Web App</strong><br />
            <em>ReactJS · Next.js · GraphQL · Cypress · MUI · Serverless · AWS</em>
            <ul>
              <li>Built core ledger modules using ReactJS and GraphQL with Cypress E2E test automation.</li>
              <li>Designed UI/UX with Material UI according to stakeholder specs.</li>
            </ul>
            <p className="timeline-award">★ Vogue Award — Popular Choice in Solutions (Mar 2022)</p>
          </TimelineItem>

          <TimelineItem
            date="Feb 2021 – Oct 2022"
            title="Software Engineer"
            company="Pragiti Internet Technologies"
            companyUrl="https://dminc.com"
            logo={dmilogo}
          >
            <strong>Client: PitStopUSA &nbsp;|&nbsp; Project: E-Commerce Web App</strong><br />
            <em>VTEX Marketplace · ReactJS · Next.js · Store Framework · Node.js · Bootstrap</em>
            <ul>
              <li>Built and maintained e-commerce storefront features using VTEX Marketplace and ReactJS.</li>
              <li>Developed custom VTEX apps including Legacy Order and Zaius email-marketing integrations.</li>
              <li>Managed data migration using ETL tools ensuring accurate product/catalog transitions.</li>
            </ul>
            <p className="timeline-award">★ Consider It Done Award — Aug 2022</p>

            <br />
            <strong>Client: Award Platform &nbsp;|&nbsp; Project: Recognition Web App</strong><br />
            <em>Node.js · MySQL · Angular · Bootstrap · Material Design</em>
            <ul>
              <li>Developed REST APIs using Node.js integrated with MySQL for data persistence.</li>
              <li>Supported front-end modules in Angular styled with Bootstrap and Material Design.</li>
            </ul>
          </TimelineItem>

          <TimelineItem
            date="Sep 2020 – Jan 2021"
            title="Software Engineer"
            company="SkillFlare"
            companyUrl="https://www.skillflare.co.in"
            logo={skillflarelogo}
          >
            <strong>Client: QOZO &nbsp;|&nbsp; Project: Web Application</strong><br />
            <em>ReactTS · Node.js · Next.js · GraphQL · Serverless · MongoDB · DynamoDB · AWS</em>
            <ul>
              <li>Developed modules using ReactTS and GraphQL within a serverless architecture.</li>
              <li>Integrated front-end components with backend services and third-party APIs.</li>
            </ul>

            <br />
            <strong>Client: AI Chatbot &nbsp;|&nbsp; Project: Customer Support Bot</strong><br />
            <em>Python · Flask · NLTK · Angular · MongoDB · Heroku</em>
            <ul>
              <li>Built back-end chatbot logic using Flask and NLTK for natural language processing.</li>
              <li>Integrated Zoom and Twilio APIs for video conferencing and IVR-based support.</li>
            </ul>
          </TimelineItem>

          <TimelineItem
            date="Sep 2018 – Aug 2020"
            title="Software Developer"
            company="OM Associates"
            logo={omlogo}
          >
            <strong>Client: SPOT &nbsp;|&nbsp; Project: Sales &amp; Promotion Optimization Tools</strong><br />
            <em>ReactJS · Node.js · Express.js · MongoDB · Bootstrap · GCP</em>
            <ul>
              <li>Supported U.S.-based clients with feature development and issue resolution.</li>
              <li>Developed web and hybrid mobile features including PayPal payment integration.</li>
            </ul>

            <br />
            <strong>Client: VAPOR &nbsp;|&nbsp; Project: Hybrid Mobile App</strong><br />
            <em>React Native · Node.js · Express.js · MongoDB</em>
            <ul>
              <li>Managed end-to-end development lifecycle from prototyping through deployment.</li>
              <li>Integrated backend logic with UI to ensure robust business-process execution.</li>
            </ul>
          </TimelineItem>

        </div>

        {/* ── Education ── */}
        <h2 className="section-title reveal" style={{ marginTop: '70px' }}>
          <span>Education</span>
        </h2>

        <div className="edu-grid">
          <EduCard
            date="2022 – 2025"
            degree="Bachelor of Computer Application (BCA)"
            institution="IGNOU — Indira Gandhi National Open University"
            grade="67%"
          />
          <EduCard
            date="2012 – 2015"
            degree="Diploma in Information Technology &amp; Enabled S&amp;M"
            institution="Ambedkar Polytechnic, Delhi"
            logo={ambplogo}
            grade="71.57%"
          />
          <EduCard
            date="2012"
            degree="12th Standard — Non-Medical"
            institution="CBSE"
            grade="70.2%"
          />
          <EduCard
            date="2009"
            degree="10th Standard"
            institution="CBSE"
            grade="72.8%"
          />
        </div>

        {/* ── Certifications ── */}
        <h2 className="section-title reveal" style={{ marginTop: '70px' }}>
          <span>Certifications</span>
        </h2>
        <div className="cert-grid reveal">
          {[
            'VTEX Certified Developer',
            'Mirakl University Certified Developer',
            'UiPath Certified Advanced RPA Developer',
            'IBM Certified — Programming Languages (HTML, XHTML, JS, CSS, PHP)',
            'IBM Certified Training — J2SE, J2EE &amp; Android',
          ].map(cert => (
            <div key={cert} className="cert-item">
              <i className="fas fa-certificate" />
              <span dangerouslySetInnerHTML={{ __html: cert }} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Resume;
