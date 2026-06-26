import React from 'react';
import './index.scss';
import { projects } from './data';

const Works = () => {
  return (
    <section id="works">
      <div className="section-container">
        <h2 className="section-title reveal">My <span>Projects</span></h2>
        <p className="section-subtitle reveal">Real-world work delivered for clients</p>

        <div className="works-grid">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className={`work-card reveal reveal-delay-${(i % 3) + 1}`}
            >
              <div
                className="work-card__banner"
                style={{
                  background: `linear-gradient(135deg, ${project.color}18 0%, ${project.color}06 100%)`,
                  borderBottomColor: `${project.color}28`,
                }}
              >
                <div className="work-card__dot" style={{ background: project.color }} />
                <span className="work-card__company">{project.company}</span>
              </div>

              <div className="work-card__body">
                <h3 className="work-card__title">{project.title}</h3>
                <p className="work-card__desc">{project.description}</p>
                <div className="work-card__tech">
                  {project.tech.map(t => (
                    <span key={t} className="work-card__badge" style={{ borderColor: `${project.color}40`, color: project.color }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {project.link && (
                <div className="work-card__footer">
                  <a href={project.link} target="_blank" rel="noreferrer">
                    <i className="fas fa-external-link-alt" /> Visit Site
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
