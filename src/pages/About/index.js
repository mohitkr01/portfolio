import React from 'react';
import './index.scss';

const stats = [
  { value: '7+',  label: 'Years Experience', icon: 'fas fa-briefcase' },
  { value: '5',   label: 'Companies',         icon: 'fas fa-building' },
  { value: '15+', label: 'Projects Delivered',icon: 'fas fa-code' },
  { value: '5',   label: 'Awards Won',         icon: 'fas fa-award' },
];

const About = () => {
  return (
    <section id="about">
      <div className="section-container">
        <h2 className="section-title reveal">About <span>Me</span></h2>
        <p className="section-subtitle reveal">A brief introduction</p>

        <div className="about__grid">
          <div className="about__text reveal reveal-delay-1">
            <p>
              Full Stack Software Developer with <strong>7+ years of overall development experience</strong>,
              including ~5 years specializing in Full Stack Development (MERN Stack – MongoDB,
              Express.js, React.js, Node.js).
            </p>
            <p>
              Hands-on across the complete software development lifecycle — from RESTful API design and
              cloud deployment (AWS/GCP) to translating Figma designs into production-ready,
              responsive UI. Delivered solutions for clients across <strong>healthcare, retail, and
              e-commerce</strong> sectors.
            </p>
            <p>
              Strong track record in Agile delivery, project ownership, peer mentorship, and client
              communication. Currently working as <strong>Senior Consultant at Emids Technologies</strong>,
              leading end-to-end development of a healthcare-sector solutions portal.
            </p>

            <div className="about__info">
              <div className="about__info-item">
                <i className="fas fa-map-marker-alt" />
                <span>Delhi, India</span>
              </div>
              <div className="about__info-item">
                <i className="fas fa-envelope" />
                <span>mohitbarawal@gmail.com</span>
              </div>
              <div className="about__info-item">
                <i className="fab fa-whatsapp" />
                <a href="https://wa.me/918882688205" target="_blank" rel="noreferrer" className="about__info-link">+91 888 268 8205</a>
              </div>
              <div className="about__info-item">
                <i className="fas fa-globe" />
                <span>Open to Relocate</span>
              </div>
            </div>
          </div>

          <div className="about__stats">
            {stats.map((stat, i) => (
              <div key={stat.label} className={`about__stat-card reveal reveal-delay-${i + 1}`}>
                <i className={stat.icon} />
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
