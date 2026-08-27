import styles from './About.module.css';

const stats = [
  { value: '15+', label: 'Projects', color: 'var(--c-accent)' },
  { value: '20+', label: 'Technologies', color: 'var(--c-accent-2)' },
  { value: '2+ Yrs', label: 'Experience', color: '#34d399' },
];

export default function About() {
  return (
    <section id="about" className={`sec ${styles.section}`}>
      <div className={`reveal ${styles.inner}`}>
        {/* Photo */}
        <div className={`about-photo ${styles.photo}`}>
          <img
            src="/photo1.jpeg"
            alt="Samni Hasnath"
            className={styles.photoImg}
          />
        </div>

        {/* Content */}
        <div className={styles.content}>
          <p className={styles.eyebrow}>
            About Me
          </p>
          <h2 className={styles.heading}>
            Bridging the gap between
          </h2>
          <h2 className={styles.headingMuted}>
            Data Science &amp; Web Development
          </h2>
          <p className={styles.paragraph}>
            I'm a Software Engineering undergraduate with a passion for building
            intelligent applications. My expertise lies in crafting seamless user
            experiences while leveraging data-driven insights to solve complex problems.
          </p>
          <p className={styles.paragraphLast}>
            Whether it's developing robust full-stack systems or analyzing patterns
            in data, I focus on delivering high-quality, scalable solutions that make an impact.
          </p>

          <div className={styles.statsGrid}>
            {stats.map((stat) => (
              <div key={stat.label} className={styles.statCard}>
                <p className={styles.statValue} style={{ color: stat.color }}>
                  {stat.value}
                </p>
                <p className={styles.statLabel}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
