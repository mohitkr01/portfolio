import React from 'react';
import './index.scss';

const skillCategories = [
  {
    title: 'Frontend',
    icon: 'fas fa-laptop-code',
    color: '#61dafb',
    skills: ['React.js', 'Next.js', 'TypeScript', 'JavaScript (ES6)', 'HTML5', 'CSS3 / SCSS', 'Material UI', 'Bootstrap'],
  },
  {
    title: 'Backend',
    icon: 'fas fa-server',
    color: '#80BD01',
    skills: ['Node.js', 'Express.js', 'PHP', 'Python', 'GraphQL', 'REST APIs', 'Serverless'],
  },
  {
    title: 'Database',
    icon: 'fas fa-database',
    color: '#57ab52',
    skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'DynamoDB'],
  },
  {
    title: 'Cloud & Tools',
    icon: 'fas fa-cloud',
    color: '#FF9900',
    skills: ['AWS', 'GCP', 'Heroku', 'Git / GitHub', 'Cypress', 'WordPress', 'VTEX', 'Postman', 'ETL / Talend'],
  },
];

const Skills = () => {
  return (
    <section id="skills">
      <div className="section-container">
        <h2 className="section-title reveal">My <span>Skills</span></h2>
        <p className="section-subtitle reveal">Technologies I work with</p>

        <div className="skills-grid">
          {skillCategories.map((cat, i) => (
            <div key={cat.title} className={`skills-card reveal reveal-delay-${i + 1}`}>
              <div className="skills-card__header" style={{ borderLeftColor: cat.color }}>
                <i className={cat.icon} style={{ color: cat.color }} />
                <h4>{cat.title}</h4>
              </div>
              <div className="skills-card__list">
                {cat.skills.map(skill => (
                  <span key={skill} className="skills-pill">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
