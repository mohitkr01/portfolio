import React, { useState, useEffect, useRef } from 'react';
import './index.scss';

const THEMES = [
  { id: 'green',  bg: '#1a3824', bgCard: '#224830', primary: '#78cc6d' },
  { id: 'purple', bg: '#1e1240', bgCard: '#281852', primary: '#a78bfa' },
  { id: 'blue',   bg: '#0e2244', bgCard: '#142c58', primary: '#38bdf8' },
  { id: 'orange', bg: '#38180a', bgCard: '#48220e', primary: '#f97316' },
];

function hexToRgb(hex) {
  return [
    parseInt(hex.slice(1, 3), 16),
    parseInt(hex.slice(3, 5), 16),
    parseInt(hex.slice(5, 7), 16),
  ].join(', ');
}

function applyTheme(theme) {
  const root = document.documentElement;
  const pRgb = hexToRgb(theme.primary);
  root.style.setProperty('--bg', theme.bg);
  root.style.setProperty('--bg-card', theme.bgCard);
  root.style.setProperty('--bg-rgb', hexToRgb(theme.bg));
  root.style.setProperty('--primary', theme.primary);
  root.style.setProperty('--primary-dim', `rgba(${pRgb}, 0.12)`);
  root.style.setProperty('--primary-border', `rgba(${pRgb}, 0.3)`);
  root.style.setProperty('--primary-glow', `rgba(${pRgb}, 0.07)`);
}

const navLinks = [
  { label: 'About',   href: '#about' },
  { label: 'Skills',  href: '#skills' },
  { label: 'Resume',  href: '#resume' },
  { label: 'Works',   href: '#works' },
  { label: 'Contact', href: '#contact' },
];

const Menu = () => {
  const [menuOpen, setMenuOpen]     = useState(false);
  const [scrolled, setScrolled]     = useState(false);
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [themeId, setThemeId]       = useState(() => localStorage.getItem('theme') || 'green');
  const paletteRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const theme = THEMES.find(t => t.id === themeId) || THEMES[0];
    applyTheme(theme);
    localStorage.setItem('theme', themeId);
  }, [themeId]);

  useEffect(() => {
    if (!paletteOpen) return;
    const handleClick = (e) => {
      if (paletteRef.current && !paletteRef.current.contains(e.target)) {
        setPaletteOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [paletteOpen]);

  const handleLink = () => setMenuOpen(false);

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        <a href="#hero" className="navbar__logo">
          <span>M</span>K
        </a>

        <ul className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
          {navLinks.map(link => (
            <li key={link.label}>
              <a href={link.href} onClick={handleLink}>{link.label}</a>
            </li>
          ))}
        </ul>

        <div className="navbar__actions">
          <div className="navbar__theme" ref={paletteRef}>
            <button
              className="navbar__theme-btn"
              onClick={() => setPaletteOpen(o => !o)}
              aria-label="Change theme colour"
              title="Change theme"
            >
              <i className="fas fa-palette" />
            </button>
            {paletteOpen && (
              <div className="navbar__theme-palette">
                {THEMES.map(t => (
                  <button
                    key={t.id}
                    className={`navbar__theme-dot ${themeId === t.id ? 'active' : ''}`}
                    style={{ background: t.primary }}
                    onClick={() => { setThemeId(t.id); setPaletteOpen(false); }}
                    title={t.id.charAt(0).toUpperCase() + t.id.slice(1)}
                    aria-label={`${t.id} theme`}
                  />
                ))}
              </div>
            )}
          </div>

          <button
            className={`navbar__hamburger ${menuOpen ? 'navbar__hamburger--open' : ''}`}
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Menu;
