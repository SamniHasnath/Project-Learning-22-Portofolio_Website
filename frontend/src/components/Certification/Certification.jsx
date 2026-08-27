import { useState } from 'react';
import { ExternalLink, ShieldCheck, ChevronDown, ChevronUp } from 'lucide-react';
import styles from './Certification.module.css';

const CERTS_INITIAL_COUNT = 6;
const ACHIEVEMENTS_INITIAL_COUNT = 3;

const certs = [
  {
    title: 'Python for Beginners',
    issuer: 'University of Moratuwa',
    category: 'PYTHON',
    color: '#34d399',
    bannerBg: 'linear-gradient(135deg, #0f2520, #091a14)',
  },
  {
    title: 'Node.js Bootcamp',
    issuer: 'Udemy',
    category: 'BACKEND',
    color: '#60a5fa',
    bannerBg: 'linear-gradient(135deg, #1a2035, #0f1628)',
  },
  {
    title: 'Microsoft Student Learn Ambassador',
    issuer: 'Microsoft',
    category: 'COMMUNITY',
    color: '#f472b6',
    bannerBg: 'linear-gradient(135deg, #2a1020, #1a0a15)',
  },
  {
    title: 'Introduction to Java',
    issuer: 'Sololearn',
    date: 'Jun 2025',
    category: 'PROGRAMMING',
    color: '#fb923c',
    bannerBg: 'linear-gradient(135deg, #2a1a08, #1a1005)',
  },
  {
    title: 'Data Fundamentals',
    issuer: 'IBM',
    date: 'Apr 2025',
    category: 'DATA SCIENCE',
    color: '#38bdf8',
    bannerBg: 'linear-gradient(135deg, #0d2030, #081520)',
  },
  {
    title: 'Introduction to SQL',
    issuer: 'Sololearn',
    category: 'DATABASES',
    color: '#facc15',
    bannerBg: 'linear-gradient(135deg, #1a1a08, #101008)',
  },
  {
    title: 'Programming in C Certification',
    issuer: 'Sololearn',
    category: 'PROGRAMMING',
    color: '#f97316',
    bannerBg: 'linear-gradient(135deg, #1a1208, #100c05)',
  },
  {
    title: 'Web Design for Beginners',
    issuer: 'University of Moratuwa',
    category: 'WEB DESIGN',
    color: '#a78bfa',
    bannerBg: 'linear-gradient(135deg, #1e1535, #110c24)',
  },
  {
    title: 'Basics of Generative AI',
    issuer: 'LinkedIn Learning',
    date: 'Nov 2024',
    category: 'AI',
    color: '#34d399',
    bannerBg: 'linear-gradient(135deg, #0f2520, #091a14)',
  },
  {
    title: 'Full Stack Web Development',
    issuer: 'Udemy (Dr. Angela Yu)',
    category: 'WEB DEVELOPMENT',
    color: '#60a5fa',
    bannerBg: 'linear-gradient(135deg, #1a2035, #0f1628)',
  },
  {
    title: 'Artificial Intelligence Fundamentals',
    issuer: 'IBM SkillsBuild',
    category: 'AI',
    color: '#f472b6',
    bannerBg: 'linear-gradient(135deg, #2a1020, #1a0a15)',
  },
  {
    title: 'Cybersecurity Training',
    issuer: 'APAC Cybersecurity Fund, Sri Lanka',
    category: 'CYBERSECURITY',
    color: '#ef4444',
    bannerBg: 'linear-gradient(135deg, #2a1010, #1a0808)',
  },
];

const achievements = [
  {
    title: 'IEEEXtreme 19.0 - Team PixelPioneers',
    issuer: 'IEEE',
    category: 'COMPETITIVE PROGRAMMING',
    color: '#fb923c',
    bannerBg: 'linear-gradient(135deg, #2a1a08, #1a1005)',
  },
  {
    title: "IX'25 UI/UX Competition",
    issuer: 'IEEE',
    date: '2025',
    category: 'UI/UX',
    color: '#38bdf8',
    bannerBg: 'linear-gradient(135deg, #0d2030, #081520)',
  },
  {
    title: 'IEEE Day Celebration 2025 - Design Team',
    issuer: 'IEEE Student Branch, SUSL',
    date: '2025',
    category: 'EVENT DESIGN',
    color: '#facc15',
    bannerBg: 'linear-gradient(135deg, #1a1a08, #101008)',
  },
  {
    title: 'Aurelia 2.0 - IEEE WIE Day 2026 - Program Team',
    issuer: 'IEEE Student Branch, SUSL',
    date: '2026',
    category: 'EVENT MANAGEMENT',
    color: '#a78bfa',
    bannerBg: 'linear-gradient(135deg, #1e1535, #110c24)',
  },
];

function CertCard({ cert }) {
  return (
    <div className={styles.card}>
      {/* Banner — always dark for visual contrast */}
      <div className={styles.banner} style={{ background: cert.bannerBg }}>
        <span className={styles.category} style={{ color: cert.color }}>
          {cert.category}
        </span>
        <ShieldCheck size={28} color={cert.color} strokeWidth={1.5} />
      </div>

      {/* Content */}
      <div className={styles.cardBody}>
        <h3 className={styles.certTitle}>
          {cert.title}
        </h3>
        <p className={styles.issuer}>
          {cert.issuer}
        </p>
        {cert.date && (
          <span className={styles.date}>
            Issued {cert.date}
          </span>
        )}
      </div>
    </div>
  );
}

export default function Certification() {
  const [showAllCerts, setShowAllCerts] = useState(false);
  const visibleCerts = showAllCerts ? certs : certs.slice(0, CERTS_INITIAL_COUNT);
  const hasMoreCerts = certs.length > CERTS_INITIAL_COUNT;

  const [showAllAchievements, setShowAllAchievements] = useState(false);
  const visibleAchievements = showAllAchievements ? achievements : achievements.slice(0, ACHIEVEMENTS_INITIAL_COUNT);
  const hasMoreAchievements = achievements.length > ACHIEVEMENTS_INITIAL_COUNT;

  return (
    <section id="certifications" className={`sec ${styles.section}`}>
      <div className={styles.inner}>
        <div className={`reveal ${styles.header}`}>
          <p className={styles.eyebrow}>
            Credentials
          </p>
          <h2 className={styles.title}>
            Certifications &amp; Courses
          </h2>
          <p className={styles.subtitle}>
            Continuous learning through industry-recognized programs and hands-on projects.
          </p>
          <a
            href="https://www.linkedin.com/in/samni-hasnath03/details/certifications/"
            target="_blank" rel="noopener noreferrer"
            className={styles.linkBtn}
          >
            View All on LinkedIn <ExternalLink size={15} />
          </a>
        </div>

        <div className={`reveal reveal-grid ${styles.grid}`}>
          {visibleCerts.map((cert) => (
            <CertCard key={cert.title} cert={cert} />
          ))}
        </div>

        {hasMoreCerts && (
          <div className={styles.moreWrap}>
            <button
              onClick={() => setShowAllCerts(!showAllCerts)}
              className={styles.moreBtn}
            >
              {showAllCerts ? (
                <><ChevronUp size={16} /> Show Less</>
              ) : (
                <><ChevronDown size={16} /> View All Certifications ({certs.length})</>
              )}
            </button>
          </div>
        )}

        {/* Achievements & Activities */}
        <div id="achievements" className={`reveal ${styles.achievementsHeader}`}>
          <p className={styles.eyebrowAlt}>
            Recognition
          </p>
          <h3 className={styles.titleSm}>
            Achievements &amp; Activities
          </h3>
          <p className={styles.subtitleNoBtn}>
            Competitions, design contributions, and community recognitions.
          </p>
        </div>

        <div className={`reveal reveal-grid ${styles.grid}`}>
          {visibleAchievements.map((cert) => (
            <CertCard key={cert.title} cert={cert} />
          ))}
        </div>

        {hasMoreAchievements && (
          <div className={styles.moreWrap}>
            <button
              onClick={() => setShowAllAchievements(!showAllAchievements)}
              className={styles.moreBtn}
            >
              {showAllAchievements ? (
                <><ChevronUp size={16} /> Show Less</>
              ) : (
                <><ChevronDown size={16} /> View All Achievements ({achievements.length})</>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
