import { useState } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { createRipple } from '../../utils/ripple';
import styles from './Navbar.module.css';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Education & Volunteer', href: '#education' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar({ theme, toggleTheme }) {
  const [open, setOpen] = useState(false);
  const isLight = theme === 'light';

  return (
    <>
      {/* Rainbow top bar */}
      <div className={styles.topBar} />

      <nav className={styles.nav}>
        <div className={`nav-inner ${styles.navInner}`}>
          {/* Logo */}
          <a href="#home" className={styles.logo}>
            <img
              src="/logo.png"
              alt="Samni Hasnath Logo"
              className={styles.logoImg}
            />
            <span className={styles.logoText}>
              Samni Hasnath
            </span>
          </a>

          {/* Desktop links */}
          <ul className={`desktop-nav ${styles.desktopLinks}`}>
            {navLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className={styles.navLink}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Right actions */}
          <div className={styles.actions}>
            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              title={isLight ? 'Switch to dark mode' : 'Switch to light mode'}
              className={styles.themeToggle}
            >
              {isLight ? <Moon size={16} /> : <Sun size={16} />}
            </button>

            {/* Hire Me */}
            <a href="#contact" onClick={createRipple}
              className={`hire-btn ripple-host ${styles.hireBtn}`}
            >
              Hire Me
            </a>

            {/* Mobile burger */}
            <button onClick={() => setOpen(!open)} className={`burger-btn ${styles.burger}`}>
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className={styles.mobileMenu}>
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} onClick={() => setOpen(false)} className={styles.mobileLink}>
                {link.label}
              </a>
            ))}
            <div className={styles.mobileActions}>
              <a href="#contact" className={`ripple-host ${styles.mobileHireBtn}`} onClick={e => { setOpen(false); createRipple(e); }}>
                Hire Me
              </a>
              <button onClick={toggleTheme} className={styles.mobileThemeToggle}>
                {isLight ? <Moon size={16} /> : <Sun size={16} />}
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
