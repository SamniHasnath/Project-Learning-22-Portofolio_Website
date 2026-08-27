import { useState } from 'react';
import { LayoutDashboard, Server, Database, PieChart, Wrench, Cloud, Palette, PenTool, ChevronDown, ChevronUp } from 'lucide-react';
import styles from './Skills.module.css';

const INITIAL_COUNT = 6;

const skillGroups = [
  { Icon: LayoutDashboard, title: 'Frontend', tags: ['React', 'Tailwind CSS','Bootstrap', 'JavaScript', 'HTML/CSS'] },
  { Icon: Server,         title: 'Backend',  tags: ['Node.js', 'Express.js', 'RESTful APIs','Authentication & Authorization','Server-side Development'] },
  { Icon: Database,       title: 'Databases', tags: ['PostgreSQL', 'MySQL', 'MongoDB','Database Design & Management'] },
  { Icon: PieChart,       title: 'Data Science', tags: ['Python','NumPy', 'Pandas', 'Matplotlib', 'Excel','Statistics'] },
  { Icon: Wrench,         title: 'Tools', tags: ['Git / GitHub', 'VS Code', 'Postman', 'Docker'] },
  { Icon: Cloud,          title: 'Cloud & Deployment',  tags: ['GitHub Pages', 'Vercel', 'Render','Netlify'] },
  { Icon: Palette,        title: 'Graphic Design',  tags: ['Adobe Photoshop', 'Adobe Illustrator', 'Adobe Indesign','Canva'] },
  { Icon: PenTool,        title: 'UI/UX Design',  tags: ['Figma', 'Wireframing', 'Adobe XD','Prototyping'] },
];

export default function Skills() {
  const [showAll, setShowAll] = useState(false);

  const visible = showAll ? skillGroups : skillGroups.slice(0, INITIAL_COUNT);
  const hasMore = skillGroups.length > INITIAL_COUNT;

  return (
    <section id="skills" className={`sec ${styles.section}`}>
      <div className={styles.inner}>
        <div className={`reveal ${styles.header}`}>
          <p className={styles.eyebrow}>
            My Expertise
          </p>
          <h2 className={styles.title}>
            Technologies I Work With
          </h2>
        </div>

        <div className={`reveal reveal-grid ${styles.grid}`}>
          {visible.map(({ Icon, title, tags }) => (
            <div key={title} className={styles.card}>
              <div className={styles.cardHead}>
                <Icon size={22} color="var(--c-accent)" />
                <h3 className={styles.cardTitle}>{title}</h3>
              </div>
              <div className={styles.tags}>
                {tags.map((tag) => (
                  <span key={tag} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {hasMore && (
          <div className={styles.moreWrap}>
            <button
              onClick={() => setShowAll(!showAll)}
              className={styles.moreBtn}
            >
              {showAll ? (
                <><ChevronUp size={16} /> Show Less</>
              ) : (
                <><ChevronDown size={16} /> View More ({skillGroups.length})</>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
