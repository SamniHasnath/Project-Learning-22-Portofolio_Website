import { useState } from 'react';
import { ExternalLink, ShieldCheck, ChevronDown, ChevronUp } from 'lucide-react';

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
    <div style={{
      background: 'var(--c-card)', border: '1px solid var(--c-border)',
      borderRadius: '16px', overflow: 'hidden', transition: 'border-color 0.2s, transform 0.2s',
    }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = 'var(--c-border-hover)';
        e.currentTarget.style.transform = 'translateY(-3px)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'var(--c-border)';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      {/* Banner — always dark for visual contrast */}
      <div style={{
        height: '72px', background: cert.bannerBg,
        display: 'flex', alignItems: 'center',
        justifyContent: 'space-between', padding: '0 20px',
      }}>
        <span style={{
          fontSize: '11px', fontWeight: '700', color: cert.color,
          letterSpacing: '2px', textTransform: 'uppercase',
        }}>
          {cert.category}
        </span>
        <ShieldCheck size={28} color={cert.color} strokeWidth={1.5} />
      </div>

      {/* Content */}
      <div style={{ padding: '20px 20px 24px' }}>
        <h3 style={{
          fontSize: '17px', fontWeight: '700', color: 'var(--c-text)',
          marginBottom: '6px', lineHeight: '1.3',
        }}>
          {cert.title}
        </h3>
        <p style={{ color: 'var(--c-text-2)', fontSize: '13px', marginBottom: '16px' }}>
          {cert.issuer}
        </p>
        {cert.date && (
          <span style={{ fontSize: '12px', color: 'var(--c-text-3)', fontWeight: '600' }}>
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
    <section id="certifications" className="sec" style={{
      padding: '100px 24px', background: 'var(--c-bg)',
      borderTop: '1px solid var(--c-border)',
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '60px' }}>
          <p style={{
            color: 'var(--c-accent)', fontSize: '12px', fontWeight: '700',
            letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '16px',
          }}>
            Credentials
          </p>
          <h2 style={{
            fontSize: 'clamp(28px, 4vw, 46px)', fontWeight: '800',
            color: 'var(--c-text)', marginBottom: '16px',
          }}>
            Certifications &amp; Courses
          </h2>
          <p style={{ color: 'var(--c-text-2)', fontSize: '15px', maxWidth: '480px', margin: '0 auto 24px' }}>
            Continuous learning through industry-recognized programs and hands-on projects.
          </p>
          <a
            href="https://www.linkedin.com/in/samni-hasnath03/details/certifications/"
            target="_blank" rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '12px 24px', borderRadius: '12px',
              background: 'var(--c-card)', border: '1px solid var(--c-border)',
              color: 'var(--c-text)', fontWeight: '600', fontSize: '14px',
              textDecoration: 'none', transition: 'border-color 0.2s, transform 0.2s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'var(--c-border-hover)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'var(--c-border)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            View All on LinkedIn <ExternalLink size={15} />
          </a>
        </div>

        <div className="reveal reveal-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(320px, 100%), 1fr))',
          gap: '20px',
        }}>
          {visibleCerts.map((cert) => (
            <CertCard key={cert.title} cert={cert} />
          ))}
        </div>

        {hasMoreCerts && (
          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <button
              onClick={() => setShowAllCerts(!showAllCerts)}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '14px 32px', borderRadius: '12px',
                background: 'var(--c-card)', border: '1px solid var(--c-border)',
                color: 'var(--c-text)', fontWeight: '600', fontSize: '14px',
                cursor: 'pointer', transition: 'border-color 0.2s, transform 0.2s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'var(--c-border-hover)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--c-border)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
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
        <div id="achievements" className="reveal" style={{ textAlign: 'center', margin: '90px 0 50px', scrollMarginTop: '90px' }}>
          <p style={{
            color: 'var(--c-accent-2)', fontSize: '12px', fontWeight: '700',
            letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '16px',
          }}>
            Recognition
          </p>
          <h3 style={{
            fontSize: 'clamp(24px, 3.4vw, 38px)', fontWeight: '800',
            color: 'var(--c-text)', marginBottom: '16px',
          }}>
            Achievements &amp; Activities
          </h3>
          <p style={{ color: 'var(--c-text-2)', fontSize: '15px', maxWidth: '480px', margin: '0 auto' }}>
            Competitions, design contributions, and community recognitions.
          </p>
        </div>

        <div className="reveal reveal-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(320px, 100%), 1fr))',
          gap: '20px',
        }}>
          {visibleAchievements.map((cert) => (
            <CertCard key={cert.title} cert={cert} />
          ))}
        </div>

        {hasMoreAchievements && (
          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <button
              onClick={() => setShowAllAchievements(!showAllAchievements)}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '14px 32px', borderRadius: '12px',
                background: 'var(--c-card)', border: '1px solid var(--c-border)',
                color: 'var(--c-text)', fontWeight: '600', fontSize: '14px',
                cursor: 'pointer', transition: 'border-color 0.2s, transform 0.2s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'var(--c-border-hover)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--c-border)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
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
