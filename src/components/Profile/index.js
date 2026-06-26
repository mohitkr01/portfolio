import React from 'react';
import './index.scss';
import TypedText from '../TypedText';
import SocialLinks from '../SocialLinks';

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero__orb hero__orb--1" />
      <div className="hero__orb hero__orb--2" />
      <div className="hero__orb hero__orb--3" />

      <div className="hero__content">
        <div className="hero__text">
          <p className="hero__greeting">Hello, I'm</p>
          <h1 className="hero__name">Mohit Kumar</h1>
          <div className="hero__role">
            <TypedText dataText={[
              'Senior Consultant',
              'Full Stack Developer (MERN)',
              'Senior Software Engineer',
              'Senior Full Stack Developer',
            ]} />
          </div>
          <p className="hero__bio">
            Full Stack Developer with <strong>7+ years</strong> of experience in MERN Stack,
            AWS &amp; GraphQL. Building scalable solutions for healthcare, retail &amp; e-commerce.
          </p>
          <SocialLinks />
          <div className="hero__cta">
            <a
              href="https://drive.google.com/file/d/1Ns97g-GT1CRJxwtlMifnf33pvF0Io_8X/view?usp=share_link"
              target="_blank"
              rel="noreferrer"
              className="btn btn--primary"
            >
              <i className="fas fa-download" /> Download CV
            </a>
            <a href="#contact" className="btn btn--outline">
              <i className="fas fa-envelope" /> Contact Me
            </a>
          </div>
        </div>

        <div className="hero__photo">
          <div className="hero__photo-wrap">
            <img
              src="https://drive.google.com/thumbnail?id=1yNNoCmPibNDHCLR9E7enXtti9sUu2kPE&sz=w600"
              alt="Mohit Kumar"
            />
          </div>
          <div className="hero__photo-ring" />
        </div>
      </div>

      <a href="#about" className="hero__scroll-indicator" aria-label="Scroll down">
        <i className="fas fa-chevron-down" />
      </a>
    </section>
  );
};

export default Hero;
