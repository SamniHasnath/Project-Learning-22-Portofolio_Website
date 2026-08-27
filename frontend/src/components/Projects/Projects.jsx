import { useState } from "react";
import {
  ExternalLink,
  ChevronDown,
  ChevronUp,
  LayoutGrid,
  Layers,
  Globe,
  Database,
  BarChart2,
  FolderOpen,
  LayoutDashboard,
  Server,
  Wrench,
  RotateCw,
  RotateCcw,
  Bot,
  Palette,
  User,
  Users,
} from "lucide-react";
import styles from "./Projects.module.css";

const INITIAL_COUNT = 6;

// Maps each tech tag to a stack category so the back of the card can group them
const TAG_CATEGORY = {
  REACT: "Frontend",
  TAILWIND: "Frontend",
  CSS: "Frontend",
  JAVASCRIPT: "Frontend",
  "HTML/CSS": "Frontend",
  EJS: "Frontend",
  "NODE.JS": "Backend",
  EXPRESS: "Backend",
  JWT: "Backend",
  PHP: "Backend",
  POSTGRESQL: "Database",
  MYSQL: "Database",
  MONGODB: "Database",
  "TMDB API": "API",
  "OPENWEATHER API": "API",
  "REST API": "API",
  "QR API": "API",
  PYTHON: "Data Science",
  PANDAS: "Data Science",
  MATPLOTLIB: "Data Science",
  SEABORN: "Data Science",
  NUMPY: "Data Science",
  "POWER BI": "Data Science",
  DAX: "Data Science",
  "DATA VISUALIZATION": "Data Science",
  "SPEECH RECOGNITION": "AI/ML",
  "TEXT-TO-SPEECH": "AI/ML",
  "OPENAI API": "AI/ML",
  FIGMA: "UI/UX",
  "ADOBE XD": "UI/UX",
  "ADOBE ILLUSTRATOR": "UI/UX",
  "ADOBE PHOTOSHOP": "UI/UX",
  CANVA: "UI/UX",
  WIREFRAMING: "UI/UX",
  PROTOTYPING: "UI/UX",
};

const STACK_ORDER = [
  "Frontend",
  "Backend",
  "Database",
  "API",
  "AI/ML",
  "Data Science",
  "UI/UX",
  "Other",
];

const STACK_META = {
  Frontend: {
    icon: LayoutDashboard,
    color: "#60a5fa",
    bg: "rgba(96,165,250,0.12)",
    border: "rgba(96,165,250,0.3)",
  },
  Backend: {
    icon: Server,
    color: "#34d399",
    bg: "rgba(52,211,153,0.12)",
    border: "rgba(52,211,153,0.3)",
  },
  Database: {
    icon: Database,
    color: "#a78bfa",
    bg: "rgba(167,139,250,0.12)",
    border: "rgba(167,139,250,0.3)",
  },
  API: {
    icon: Globe,
    color: "#fbbf24",
    bg: "rgba(251,191,36,0.12)",
    border: "rgba(251,191,36,0.3)",
  },
  "AI/ML": {
    icon: Bot,
    color: "#2dd4bf",
    bg: "rgba(45,212,191,0.12)",
    border: "rgba(45,212,191,0.3)",
  },
  "Data Science": {
    icon: BarChart2,
    color: "#f472b6",
    bg: "rgba(244,114,182,0.12)",
    border: "rgba(244,114,182,0.3)",
  },
  "UI/UX": {
    icon: Palette,
    color: "#fb923c",
    bg: "rgba(251,146,60,0.12)",
    border: "rgba(251,146,60,0.3)",
  },
  Other: {
    icon: Wrench,
    color: "#9ca3af",
    bg: "rgba(156,163,175,0.12)",
    border: "rgba(156,163,175,0.3)",
  },
};

function groupTagsByStack(tags) {
  const groups = {};
  tags.forEach((tag) => {
    const category = TAG_CATEGORY[tag] || "Other";
    (groups[category] = groups[category] || []).push(tag);
  });
  return STACK_ORDER.filter((category) => groups[category]).map((category) => ({
    category,
    tags: groups[category],
  }));
}

const GithubIcon = () => (
  <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const CATEGORIES = [
  { label: "All", icon: LayoutGrid },
  { label: "Full Stack", icon: Layers },
  { label: "Data Science", icon: BarChart2 },
  { label: "AI/ML", icon: Bot },
  { label: "UI/UX", icon: Palette },
  { label: "Other", icon: FolderOpen },
];

const TYPES = [
  { label: "All", icon: LayoutGrid },
  { label: "Personal", icon: User },
  { label: "Group", icon: Users },
];

const projects = [
  {
    id: 1,
    title: "Expense Tracker",
    category: "Full Stack",
    type: "Personal",
    tags: ["REACT", "NODE.JS", "EXPRESS", "POSTGRESQL"],
    description:
      "Full stack expense management app with category tracking, monthly summaries, and a clean dashboard built on a PERN stack.",
    githubUrl:
      "https://github.com/SamniHasnath/Project_Learning-15-Expense-Tracker-App.git",
    demoUrl: "#",
  },
  {
    id: 2,
    title: "Travel Tracker",
    category: "Full Stack",
    type: "Personal",
    tags: ["REACT", "NODE.JS", "EXPRESS", "POSTGRESQL"],
    description:
      "Interactive travel log where users can mark visited countries, add trip notes, and visualize their journey on a world map.",
    githubUrl:
      "https://github.com/SamniHasnath/Project_Learning-14-Travel-Tracker-App.git",
    demoUrl: "#",
  },
  {
    id: 3,
    title: "Book Notes App",
    category: "Full Stack",
    type: "Personal",
    tags: ["REACT", "NODE.JS", "EXPRESS", "POSTGRESQL"],
    description:
      "Personal reading journal app that lets users log books, write notes, and rate reads — with cover images fetched from the Open Library API.",
    githubUrl:
      "https://github.com/SamniHasnath/Project_Learning-17-Book-Notes-Web-App.git",
    demoUrl: "#",
  },
  {
    id: 4,
    title: "Movie Website",
    category: "Full Stack",
    type: "Personal",
    tags: ["REACT", "TAILWIND", "TMDB API"],
    description:
      "Movie database app with real-time search, category filtering, and detailed media pages powered by the TMDB API.",
    githubUrl:
      "https://github.com/SamniHasnath/Project_Learning-25-Movie_Website.git",
    demoUrl: "#",
  },
  {
    id: 5,
    title: "Weather App",
    category: "Full Stack",
    type: "Personal",
    tags: ["REACT", "OPENWEATHER API", "CSS"],
    description:
      "Clean weather forecasting app with city search, current conditions, and a dynamic UI that adapts to weather data.",
    githubUrl:
      "https://github.com/SamniHasnath/Project_Learning-11-Weather-App.git",
    demoUrl: "#",
  },
  {
    id: 7,
    title: "HR Analytics Dashboard",
    category: "Data Science",
    type: "Group",
    tags: ["POWER BI", "DAX", "DATA VISUALIZATION"],
    description:
      "Interactive Global HR Analytics: Employee Attrition dashboard built on the IBM HR Analytics dataset, with dynamic filters, KPI executive summary cards, and visual insights for data-driven HR decision-making.",
    githubUrl: "#",

  },
  {
    id: 8,
    title: "Jarvis AI Assistant",
    category: "AI/ML",
    type: "Personal",
    tags: ["PYTHON", "SPEECH RECOGNITION", "TEXT-TO-SPEECH", "OPENAI API"],
    description:
      "Browser-based voice assistant with a FastAPI backend for command routing and OpenAI fallback, while speech recognition and text-to-speech run in the browser via the Web Speech API. Handles weather, news, jokes, Wikipedia lookups, web/YouTube search, timers, and more.",
    githubUrl: "https://github.com/SamniHasnath/Python_Project_Learning-24-Jarvis-Web-Application.git",
      },
  {
    id: 9,
    title: "ShePulse - Women's Wellness App",
    category: "UI/UX",
    type: "Group",
    tags: ["FIGMA", "WIREFRAMING", "PROTOTYPING"],
    description:
      "UI specification document for ShePulse, a women's wellness app - covering wireframes, interactive prototypes, and a complete design system to guide development.",
     },
  {
    id: 10,
    title: "Pipelinehub",
    category: "Full Stack",
    type: "Personal",
    tags: ["REACT", "NODE.JS", "EXPRESS"],
    description:
      "Independent project — a pipeline management tool built to explore workflow automation concepts and dashboard design.",
    githubUrl: "https://github.com/SamniHasnath/Project-Learning-20-Pipelinehub.git",
    demoUrl: "#",
  },
  {
    id: 11,
    title: "Sports Management System",
    category: "Full Stack",
    type: "Group",
    tags: ["PHP", "MYSQL", "HTML/CSS"],
    description:
      "Academic group project — a web-based system for managing sports teams, schedules, and match results with a MySQL backend.",
    githubUrl: "https://github.com/SamniHasnath/Semester-03-Group_project--Sports-Management-System.git",
    demoUrl: "#",
  },
  {
    id: 12,
    title: "Bus Reservation System",
    category: "Other",
    type: "Personal",
    tags: ["C", "CLI", "FILE I/O"],
    description:
      "Command-line bus ticketing system in C with seat booking, cancellation, and file-based persistence - the project that started it all.",
    githubUrl: "https://github.com/SamniHasnath/Project-Learning-03--BusReservationSystem_C-Project.git",
      },
    {
    id: 13,
    title: "Elder Care Monitoring System",
    category: "Full Stack",
    type: "Group",
    tags: ["REACT", "NODE.JS", "EXPRESS", "POSTGRESQL"],
    description:
      "A full-stack elderly care platform connecting families abroad with elderly parents and caregivers through health monitoring, alerts, task management, and secure communication.",
    githubUrl:
      "https://github.com/SamniHasnath/FamilyCare-Univercity-Project.git",
    demoUrl: "#",
  },
    {
    id: 14,
    title: "QR Code Generator",
    category: "Full Stack",
    type: "Personal",
    tags: ["NODE.JS", "QR API", "HTML/CSS"],
    description:
      "Beginner-friendly Node.js application that generates QR code images from user-entered text or URLs.",
    githubUrl:
      "https://github.com/SamniHasnath/Project_Learning-06-QRcode-Generator.git",
    demoUrl: "#",
  },
  {
    id: 15,
    title: "Quran Website",
    category: "Full Stack",
    type: "Personal",
    tags: ["JAVASCRIPT", "HTML/CSS"],
    description:
      "A website for reading and navigating the Quran, built with JavaScript.",
    githubUrl:
      "https://github.com/SamniHasnath/Project-Learning-27_Quran_Website.git",
    demoUrl: "#",
  },
  {
    id: 16,
    title: "Full Stack Dev Guide App",
    category: "Full Stack",
    type: "Personal",
    tags: ["HTML/CSS", "JAVASCRIPT"],
    description:
      "A full-stack development guide app compiling learning resources and references for aspiring developers.",
    githubUrl:
      "https://github.com/SamniHasnath/Project-Learning-26-FullStack-dev-Guide-App",
    demoUrl: "#",
  },
];

function ProjectCard({ project }) {
  const [flipped, setFlipped] = useState(false);
  const stack = groupTagsByStack(project.tags);
  const stopFlip = (e) => e.stopPropagation();
  const hasDemo = project.demoUrl !== "#";
  const hasGithub = project.githubUrl !== "#";

  const links = (
    <div className={styles.links}>
      <a
        href={hasDemo ? project.demoUrl : undefined}
        target="_blank"
        rel="noopener noreferrer"
        onClick={stopFlip}
        className={`${styles.liveLink}${hasDemo ? ` ${styles.liveLinkActive}` : ""}`}
      >
        Live Preview <ExternalLink size={13} />
      </a>
      {hasGithub && (
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={stopFlip}
          className={styles.sourceLink}
        >
          Source Code <GithubIcon />
        </a>
      )}
    </div>
  );

  return (
    <div
      className={`project-card${flipped ? " flipped" : ""}`}
      onClick={() => setFlipped((f) => !f)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setFlipped((f) => !f);
        }
      }}
      aria-label={`${project.title} — click to ${flipped ? "show project info" : "view tech stack"}`}
    >
      <div className="project-card-inner">
        {/* FRONT */}
        <div className={`project-card-face ${styles.cardFace}`}>
          <div className={styles.frontBody}>
            <div className={styles.cardTopRow}>
              <span className={styles.stackBadge}>
                <RotateCw size={11} /> Tech Stack
              </span>
              <span
                className={`${styles.typeBadge} ${project.type === "Group" ? styles.typeBadgeGroup : styles.typeBadgePersonal}`}
              >
                {project.type === "Group" ? "Group" : "Personal"}
              </span>
            </div>
            <div className={styles.tagsRow}>
              {project.tags.map((tag) => (
                <span key={tag} className={styles.tagText}>
                  {tag}
                </span>
              ))}
            </div>
            <h3 className={styles.cardTitle}>
              {project.title}
            </h3>
            <p className={styles.cardDescription}>
              {project.description}
            </p>
            <div className={styles.linksFooter}>{links}</div>
          </div>
        </div>

        {/* BACK */}
        <div className={`project-card-face project-card-back ${styles.cardFace} ${styles.backFace}`}>
          <div className={styles.backHead}>
            <h3 className={styles.backTitle}>
              {project.title}
            </h3>
          </div>
          <p className={styles.backLabel}>
            Tech Stack
          </p>

          <div className={styles.stackList}>
            {stack.map(({ category, tags }) => {
              const meta = STACK_META[category];
              const Icon = meta.icon;
              return (
                <div key={category}>
                  <div className={styles.stackGroupHead} style={{ color: meta.color }}>
                    <Icon size={14} />
                    <span className={styles.stackGroupLabel}>
                      {category}
                    </span>
                  </div>
                  <div className={styles.stackTagsRow}>
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        className={styles.stackTag}
                        style={{
                          background: meta.bg,
                          border: `1px solid ${meta.border}`,
                          color: meta.color,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <div className={styles.backLinksFooter}>
            {links}
          </div>

          <div className={styles.flipHint}>
            <RotateCcw size={12} /> Click to flip back
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeType, setActiveType] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const filtered = projects
    .filter((p) => activeCategory === "All" || p.category === activeCategory)
    .filter((p) => activeType === "All" || p.type === activeType);

  const visible = showAll ? filtered : filtered.slice(0, INITIAL_COUNT);
  const hasMore = filtered.length > INITIAL_COUNT;

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    setShowAll(false);
  };

  const handleTypeChange = (type) => {
    setActiveType(type);
    setShowAll(false);
  };

  return (
    <section id="projects" className={`sec ${styles.section}`}>
      <div className={styles.inner}>
        <div className={`reveal ${styles.headRow}`}>
          <div>
            <p className={styles.eyebrow}>
              My Portfolio
            </p>
            <h2 className={styles.title}>
              Building digital products
              <br />
              with passion &amp; precision
            </h2>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className={`reveal ${styles.filterRow}`}>
          {CATEGORIES.map(({ label, icon: Icon }) => {
            const isActive = activeCategory === label;
            const count =
              label === "All"
                ? projects.length
                : projects.filter((p) => p.category === label).length;
            return (
              <button
                key={label}
                onClick={() => handleCategoryChange(label)}
                className={`${styles.filterBtn}${isActive ? ` ${styles.filterBtnActive}` : ""}`}
              >
                <Icon size={14} />
                {label}
                <span className={`${styles.filterCount}${isActive ? ` ${styles.filterCountActive}` : ""}`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Type Filter Tabs */}
        <div className={`reveal ${styles.filterRow}`}>
          {TYPES.map(({ label, icon: Icon }) => {
            const isActive = activeType === label;
            const count =
              label === "All"
                ? projects.length
                : projects.filter((p) => p.type === label).length;
            return (
              <button
                key={label}
                onClick={() => handleTypeChange(label)}
                className={`${styles.filterBtn}${isActive ? ` ${styles.filterBtnActive}` : ""}`}
              >
                <Icon size={14} />
                {label}
                <span className={`${styles.filterCount}${isActive ? ` ${styles.filterCountActive}` : ""}`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Project Grid */}
        <div className={`reveal reveal-grid ${styles.grid}`}>
          {visible.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className={styles.empty}>
            No projects in this category yet.
          </div>
        )}

        {hasMore && (
          <div className={styles.moreWrap}>
            <button
              onClick={() => setShowAll(!showAll)}
              className={styles.moreBtn}
            >
              {showAll ? (
                <>
                  <ChevronUp size={16} /> Show Less
                </>
              ) : (
                <>
                  <ChevronDown size={16} /> View All{" "}
                  {activeCategory === "All" ? "Projects" : activeCategory} (
                  {filtered.length})
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
