import React from 'react';
import './index.scss';
import ContactForm from './Form';

const contactInfo = [
  { icon: 'fas fa-envelope', label: 'Email',    value: 'mohitbarawal@gmail.com', href: 'mailto:mohitbarawal@gmail.com' },
  { icon: 'fas fa-phone',   label: 'Phone',    value: '+91 888 268 8205',        href: 'tel:+918882688205' },
  { icon: 'fas fa-map-marker-alt', label: 'Location', value: 'Delhi, India',    href: null },
  { icon: 'fab fa-linkedin', label: 'LinkedIn', value: 'mohit-kumar-13a77253',   href: 'https://www.linkedin.com/in/mohit-kumar-13a77253/' },
  { icon: 'fab fa-github',  label: 'GitHub',   value: 'mohitkr01',              href: 'https://github.com/mohitkr01' },
];

const Contact = () => {
  return (
    <section id="contact">
      <div className="section-container">
        <h2 className="section-title reveal">Get In <span>Touch</span></h2>
        <p className="section-subtitle reveal">Have an opportunity or want to collaborate? Let's talk.</p>

        <div className="contact-layout">
          <div className="contact-info reveal reveal-delay-1">
            <h3>Contact Information</h3>
            <p>Feel free to reach out — I'm always open to discussing new opportunities, projects, or just a friendly hello.</p>

            <div className="contact-info__list">
              {contactInfo.map(item => (
                <div key={item.label} className="contact-info__item">
                  <div className="contact-info__icon">
                    <i className={item.icon} />
                  </div>
                  <div>
                    <span className="contact-info__label">{item.label}</span>
                    {item.href
                      ? <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">{item.value}</a>
                      : <p>{item.value}</p>
                    }
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="contact-form-wrap reveal reveal-delay-2">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
