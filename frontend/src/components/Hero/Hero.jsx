import { useState, useEffect } from 'react';
import { ArrowRight, Download } from 'lucide-react';
import { createRipple } from '../../utils/ripple';
import styles from './Hero.module.css';

const roles = [
  'Data Scientist',
  'Full Stack Developer',
  'ML Engineer',
  'Problem Solver',
];

function AnimatedRole() {
  const [index, setIndex] = useState(0);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(i => (i + 1) % roles.length);
      setTick(t => t + 1);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const next = () => {
    setIndex(i => (i + 1) % roles.length);
    setTick(t => t + 1);
  };

  return (
    <span
      key={tick}
      className="animated-word"
      onClick={next}
      title="Click to cycle"
    >
      {roles[index]}
    </span>
  );
}

export default function Hero() {
  return (
    <section id="home" className={`sec ${styles.section}`}>
      <div className={`hero-inner ${styles.inner}`}>
        {/* Text */}
        <div className={`hero-text ${styles.text}`}>
          {/* Badge */}
          <div className={styles.badge}>
            <span className={styles.badgeDot} />
            Available for new opportunities
          </div>

          <h1 className={styles.h1}>
            Hi, I'm<br />
            <span className={styles.name}>Samni Hasnath</span>
          </h1>

          <h2 className={styles.h2}>
            Aspiring{' '}
            <span className={styles.role}>
              <AnimatedRole />
            </span>
          </h2>

          <p className={styles.lead}>
            Building scalable applications and deriving insights from data.
            Currently focused on the intersection of Machine Learning and Full Stack development.
          </p>

          <div className={`hero-btns ${styles.btns}`}>
            <a href="#projects" className={`ripple-host ${styles.btnPrimary}`} onClick={createRipple}>
              View Projects <ArrowRight size={16} />
            </a>
            <a href="/cv.pdf" download className={`ripple-host ${styles.btnSecondary}`} onClick={createRipple}>
              <Download size={16} /> Download CV
            </a>
          </div>
        </div>

        {/* Photo */}
        <div className={styles.photoWrap}>
          <div className={`hero-glow ${styles.glow}`} />
          <div className={`hero-photo ${styles.photo}`}>
            <img
              src="/photo1.jpeg"
              alt="Samni Hasnath"
              className={styles.photoImg}
            />
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className={`scroll-hint ${styles.scrollHint}`}>
        <span className={styles.scrollLabel}>Scroll</span>
        <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </section>
  );
}
