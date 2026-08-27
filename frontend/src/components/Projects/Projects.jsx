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
    emoji: "💸",
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
    emoji: "✈️",
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
    emoji: "📚",
    description:
      "Personal reading journal app that lets users log books, write notes, and rate reads — with cover images fetched from the Open Library API.",
    githubUrl:
      "https://github.com/SamniHasnath/Project_Learning-17-Book-Notes-Web-App.git",
    demoUrl: "#",
  },
  {
    id: 6,
    title: "Movie Website",
    category: "Full Stack",
    type: "Personal",
    tags: ["REACT", "TAILWIND", "TMDB API"],
    emoji: "🎬",
    description:
      "Movie database app with real-time search, category filtering, and detailed media pages powered by the TMDB API.",
    githubUrl:
      "https://github.com/SamniHasnath/Project_Learning-25-Movie_Website.git",
    demoUrl: "#",
  },
  {
    id: 7,
    title: "Weather App",
    category: "Full Stack",
    type: "Personal",
    tags: ["REACT", "OPENWEATHER API", "CSS"],
    emoji: "⛅",
    description:
      "Clean weather forecasting app with city search, current conditions, and a dynamic UI that adapts to weather data.",
    githubUrl:
      "https://github.com/SamniHasnath/Project_Learning-11-Weather-App.git",
    demoUrl: "#",
  },

  {
    id: 15,
    title: "Sales Analysis Dashboard",
    category: "Data Science",
    type: "Personal",
    tags: ["PYTHON", "PANDAS", "MATPLOTLIB"],
    emoji: "📊",
    description:
      "Data analysis project that processes sales datasets, generates visual insights on revenue trends, and produces region-wise performance reports.",
    githubUrl: "https://github.com/SamniHasnath/sales-analysis-dashboard",
  },
  {
    id: 16,
    title: "HR Analytics Dashboard",
    category: "Data Science",
    type: "Group",
    tags: ["POWER BI", "DAX", "DATA VISUALIZATION"],
    emoji: "📈",
    description:
      "Interactive Global HR Analytics: Employee Attrition dashboard built on the IBM HR Analytics dataset, with dynamic filters, KPI executive summary cards, and visual insights for data-driven HR decision-making.",
    githubUrl: "#",
   
  },
  {
    id: 17,
    title: "Jarvis AI Assistant",
    category: "AI/ML",
    type: "Personal",
    tags: ["PYTHON", "SPEECH RECOGNITION", "TEXT-TO-SPEECH", "OPENAI API"],
    emoji: "🤖",
    description:
      "Browser-based voice assistant with a FastAPI backend for command routing and OpenAI fallback, while speech recognition and text-to-speech run in the browser via the Web Speech API. Handles weather, news, jokes, Wikipedia lookups, web/YouTube search, timers, and more.",
    githubUrl: "https://github.com/SamniHasnath/Python_Project_Learning-24-Jarvis-Web-Application.git",
      },
  {
    id: 18,
    title: "ShePulse - Women's Wellness App",
    category: "UI/UX",
    type: "Group",
    tags: ["FIGMA", "WIREFRAMING", "PROTOTYPING"],
    emoji: "💗",
    description:
      "UI specification document for ShePulse, a women's wellness app - covering wireframes, interactive prototypes, and a complete design system to guide development.",
     },
  {
    id: 12,
    title: "Pipelinehub",
    category: "Full Stack",
    type: "Personal",
    tags: ["REACT", "NODE.JS", "EXPRESS"],
    emoji: "🚀",
    description:
      "Independent project — a pipeline management tool built to explore workflow automation concepts and dashboard design.",
    githubUrl: "https://github.com/SamniHasnath/Project-Learning-20-Pipelinehub.git",
    demoUrl: "#",
  },
  {
    id: 13,
    title: "Sports Management System",
    category: "Full Stack",
    type: "Group",
    tags: ["PHP", "MYSQL", "HTML/CSS"],
    emoji: "⚽",
    description:
      "Academic group project — a web-based system for managing sports teams, schedules, and match results with a MySQL backend.",
    githubUrl: "https://github.com/SamniHasnath/Semester-03-Group_project--Sports-Management-System.git",
    demoUrl: "#",
  },
  {
    id: 14,
    title: "Bus Reservation System",
    category: "Other",
    type: "Personal",
    tags: ["C", "CLI", "FILE I/O"],
    emoji: "🚌",
    description:
      "Command-line bus ticketing system in C with seat booking, cancellation, and file-based persistence - the project that started it all.",
    githubUrl: "https://github.com/SamniHasnath/Project-Learning-03--BusReservationSystem_C-Project.git",
      },
    {
    id: 21,
    title: "Elder Care Monitoring System",
    category: "Full Stack",
    type: "Group",
    tags: ["REACT", "NODE.JS", "EXPRESS", "POSTGRESQL"],
    emoji: "🏥",
    description:
      "Full-stack Elder Management System for managing elder care records with CRUD operations, featuring a simple, user-friendly dashboard.",
    githubUrl:
      "https://github.com/SamniHasnath/Project_Learning-12-OwnAPI-PRACTICE-APP",
    demoUrl: "#",
  },
  {
    id: 23,
    title: "Blog Application",
    category: "Full Stack",
    type: "Personal",
    tags: ["NODE.JS", "EXPRESS", "EJS"],
    emoji: "✍️",
    description:
      "Simple full-stack blog application built with Node.js, Express, and EJS, allowing users to create, edit, and delete posts through a clean, responsive UI.",
    githubUrl:
      "https://github.com/SamniHasnath/Project_Learning-08-Blog_Application",
    demoUrl: "#",
  },
  {
    id: 24,
    title: "QR Code Generator",
    category: "Full Stack",
    type: "Personal",
    tags: ["NODE.JS", "QR API", "HTML/CSS"],
    emoji: "🔳",
    description:
      "Beginner-friendly Node.js application that generates QR code images from user-entered text or URLs.",
    githubUrl:
      "https://github.com/SamniHasnath/Project_Learning-06-QRcode-Generator",
    demoUrl: "#",
  },
  {
    id: 26,
    title: "Quran Website",
    category: "Full Stack",
    type: "Personal",
    tags: ["JAVASCRIPT", "HTML/CSS"],
    emoji: "📖",
    description:
      "A website for reading and navigating the Quran, built with JavaScript.",
    githubUrl:
      "https://github.com/SamniHasnath/Project-Learning-27_Quran_Website",
    demoUrl: "#",
  },
  {
    id: 27,
    title: "Full Stack Dev Guide App",
    category: "Full Stack",
    type: "Personal",
    tags: ["HTML/CSS", "JAVASCRIPT"],
    emoji: "📘",
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

  const links = (
    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
      <a
        href={project.demoUrl !== "#" ? project.demoUrl : undefined}
        target="_blank"
        rel="noopener noreferrer"
        onClick={stopFlip}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "6px",
          fontSize: "13px",
          fontWeight: "700",
          padding: "6px 12px",
          borderRadius: "8px",
          border: "1px solid var(--c-border)",
          background:
            project.demoUrl !== "#" ? "rgba(255,255,255,0.04)" : "transparent",
          color: project.demoUrl !== "#" ? "var(--c-text)" : "var(--c-text-2)",
          textDecoration: "none",
          transition: "all 0.2s",
          cursor: project.demoUrl !== "#" ? "pointer" : "default",
          opacity: project.demoUrl !== "#" ? 1 : 0.45,
        }}
        onMouseEnter={(e) => {
          if (project.demoUrl !== "#") {
            e.currentTarget.style.color = "var(--c-accent)";
            e.currentTarget.style.borderColor = "var(--c-accent)";
          }
        }}
        onMouseLeave={(e) => {
          if (project.demoUrl !== "#") {
            e.currentTarget.style.color = "var(--c-text)";
            e.currentTarget.style.borderColor = "var(--c-border)";
          }
        }}
      >
        Live Preview <ExternalLink size={13} />
      </a>
      {project.githubUrl !== "#" && (
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={stopFlip}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            fontSize: "13px",
            fontWeight: "500",
            padding: "6px 12px",
            borderRadius: "8px",
            border: "1px solid var(--c-border)",
            background: "rgba(255,255,255,0.04)",
            color: "var(--c-text-2)",
            textDecoration: "none",
            transition: "all 0.2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "var(--c-text)";
            e.currentTarget.style.borderColor = "var(--c-border-hover)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "var(--c-text-2)";
            e.currentTarget.style.borderColor = "var(--c-border)";
          }}
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
        <div
          className="project-card-face"
          style={{
            background: "var(--c-card)",
            border: "1px solid var(--c-border)",
            borderRadius: "16px",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "180px",
              background: "linear-gradient(135deg, #1a1a2e, #0f0f1a)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "56px",
              position: "relative",
              flexShrink: 0,
            }}
          >
            {project.emoji}
            <span
              style={{
                position: "absolute",
                top: "14px",
                left: "14px",
                display: "inline-flex",
                alignItems: "center",
                gap: "5px",
                fontSize: "11px",
                fontWeight: "700",
                letterSpacing: "0.5px",
                padding: "4px 10px",
                borderRadius: "6px",
                background: "rgba(255,255,255,0.06)",
                color: "var(--c-text-2)",
                border: "1px solid var(--c-border-md)",
              }}
            >
              <RotateCw size={11} /> Tech Stack
            </span>
            <span
              style={{
                position: "absolute",
                top: "14px",
                right: "14px",
                fontSize: "11px",
                fontWeight: "700",
                letterSpacing: "0.5px",
                padding: "4px 10px",
                borderRadius: "6px",
                background:
                  project.type === "Group"
                    ? "rgba(99, 179, 237, 0.15)"
                    : "rgba(154, 117, 234, 0.15)",
                color: project.type === "Group" ? "#63b3ed" : "#9a75ea",
                border: `1px solid ${project.type === "Group" ? "rgba(99,179,237,0.3)" : "rgba(154,117,234,0.3)"}`,
              }}
            >
              {project.type === "Group" ? "Group" : "Personal"}
            </span>
          </div>

          <div
            style={{
              padding: "24px",
              display: "flex",
              flexDirection: "column",
              flex: 1,
              minHeight: 0,
            }}
          >
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "10px",
                marginBottom: "12px",
              }}
            >
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontSize: "11px",
                    fontWeight: "700",
                    color: "var(--c-accent)",
                    letterSpacing: "1px",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
            <h3
              style={{
                fontSize: "19px",
                fontWeight: "700",
                color: "var(--c-text)",
                marginBottom: "10px",
              }}
            >
              {project.title}
            </h3>
            <p
              style={{
                color: "var(--c-text-2)",
                fontSize: "14px",
                lineHeight: "1.7",
                marginBottom: "20px",
                display: "-webkit-box",
                WebkitLineClamp: 4,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
              }}
            >
              {project.description}
            </p>
            <div style={{ marginTop: "auto" }}>{links}</div>
          </div>
        </div>

        {/* BACK */}
        <div
          className="project-card-face project-card-back"
          style={{
            background: "var(--c-card)",
            border: "1px solid var(--c-border)",
            borderRadius: "16px",
            padding: "28px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "4px",
            }}
          >
            <span style={{ fontSize: "28px" }}>{project.emoji}</span>
            <h3
              style={{
                fontSize: "17px",
                fontWeight: "700",
                color: "var(--c-text)",
              }}
            >
              {project.title}
            </h3>
          </div>
          <p
            style={{
              color: "var(--c-text-3)",
              fontSize: "11px",
              fontWeight: "700",
              letterSpacing: "2px",
              textTransform: "uppercase",
              margin: "10px 0 16px",
            }}
          >
            Tech Stack
          </p>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "14px",
              flex: 1,
              minHeight: 0,
              overflowY: "auto",
            }}
          >
            {stack.map(({ category, tags }) => {
              const meta = STACK_META[category];
              const Icon = meta.icon;
              return (
                <div key={category}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      marginBottom: "8px",
                      color: meta.color,
                    }}
                  >
                    <Icon size={14} />
                    <span
                      style={{
                        fontSize: "11px",
                        fontWeight: "700",
                        letterSpacing: "1.5px",
                        textTransform: "uppercase",
                      }}
                    >
                      {category}
                    </span>
                  </div>
                  <div
                    style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}
                  >
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          fontSize: "11px",
                          fontWeight: "600",
                          padding: "4px 10px",
                          borderRadius: "999px",
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

          <div
            style={{
              marginTop: "16px",
              paddingTop: "16px",
              borderTop: "1px solid var(--c-border)",
            }}
          >
            {links}
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "6px",
              marginTop: "12px",
              color: "var(--c-text-3)",
              fontSize: "11px",
            }}
          >
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
    <section
      id="projects"
      className="sec"
      style={{
        padding: "100px 24px",
        background: "var(--c-bg)",
        borderTop: "1px solid var(--c-border)",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div
          className="reveal"
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: "24px",
            marginBottom: "40px",
          }}
        >
          <div>
            <p
              style={{
                color: "var(--c-accent)",
                fontSize: "12px",
                fontWeight: "700",
                letterSpacing: "4px",
                textTransform: "uppercase",
                marginBottom: "14px",
              }}
            >
              My Portfolio
            </p>
            <h2
              style={{
                fontSize: "clamp(28px, 4vw, 46px)",
                fontWeight: "800",
                color: "var(--c-text)",
                lineHeight: "1.2",
              }}
            >
              Building digital products
              <br />
              with passion &amp; precision
            </h2>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div
          className="reveal"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "8px",
            marginBottom: "48px",
            padding: "6px",
            background: "var(--c-card)",
            border: "1px solid var(--c-border)",
            borderRadius: "16px",
            width: "fit-content",
          }}
        >
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
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "7px",
                  padding: "9px 16px",
                  borderRadius: "10px",
                  border: "none",
                  background: isActive ? "var(--c-accent)" : "transparent",
                  color: isActive ? "#fff" : "var(--c-text-2)",
                  fontSize: "13px",
                  fontWeight: "600",
                  cursor: "pointer",
                  transition: "all 0.2s",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={(e) => {
                  if (!isActive)
                    e.currentTarget.style.background = "var(--c-bg)";
                }}
                onMouseLeave={(e) => {
                  if (!isActive)
                    e.currentTarget.style.background = "transparent";
                }}
              >
                <Icon size={14} />
                {label}
                <span
                  style={{
                    fontSize: "11px",
                    fontWeight: "700",
                    background: isActive
                      ? "rgba(255,255,255,0.2)"
                      : "var(--c-bg)",
                    color: isActive ? "#fff" : "var(--c-text-2)",
                    borderRadius: "6px",
                    padding: "1px 6px",
                    minWidth: "20px",
                    textAlign: "center",
                    transition: "all 0.2s",
                  }}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Type Filter Tabs */}
        <div
          className="reveal"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "8px",
            marginBottom: "48px",
            padding: "6px",
            background: "var(--c-card)",
            border: "1px solid var(--c-border)",
            borderRadius: "16px",
            width: "fit-content",
          }}
        >
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
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "7px",
                  padding: "9px 16px",
                  borderRadius: "10px",
                  border: "none",
                  background: isActive ? "var(--c-accent)" : "transparent",
                  color: isActive ? "#fff" : "var(--c-text-2)",
                  fontSize: "13px",
                  fontWeight: "600",
                  cursor: "pointer",
                  transition: "all 0.2s",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={(e) => {
                  if (!isActive)
                    e.currentTarget.style.background = "var(--c-bg)";
                }}
                onMouseLeave={(e) => {
                  if (!isActive)
                    e.currentTarget.style.background = "transparent";
                }}
              >
                <Icon size={14} />
                {label}
                <span
                  style={{
                    fontSize: "11px",
                    fontWeight: "700",
                    background: isActive
                      ? "rgba(255,255,255,0.2)"
                      : "var(--c-bg)",
                    color: isActive ? "#fff" : "var(--c-text-2)",
                    borderRadius: "6px",
                    padding: "1px 6px",
                    minWidth: "20px",
                    textAlign: "center",
                    transition: "all 0.2s",
                  }}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Project Grid */}
        <div
          className="reveal reveal-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "24px",
          }}
        >
          {visible.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div
            style={{
              textAlign: "center",
              padding: "60px 0",
              color: "var(--c-text-2)",
            }}
          >
            No projects in this category yet.
          </div>
        )}

        {hasMore && (
          <div style={{ textAlign: "center", marginTop: "48px" }}>
            <button
              onClick={() => setShowAll(!showAll)}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "14px 32px",
                borderRadius: "12px",
                background: "var(--c-card)",
                border: "1px solid var(--c-border)",
                color: "var(--c-text)",
                fontWeight: "600",
                fontSize: "14px",
                cursor: "pointer",
                transition: "border-color 0.2s, transform 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--c-border-hover)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--c-border)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
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
