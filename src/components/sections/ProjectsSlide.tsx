"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Building2, Globe, Layers, Terminal, Calendar, ArrowLeft, ArrowRight } from "lucide-react";

interface Project {
  name: string;
  tagline: string;
  description: string;
  tech: string[];
  github: string;
  period: string;
  duration: string;
    icon: React.ElementType;
  accent: string;
}

const gradients: Record<string, string> = {
  Darway: "linear-gradient(135deg, rgba(34,211,238,0.15), rgba(59,130,246,0.06))",
  Webserv: "linear-gradient(135deg, rgba(99,102,241,0.15), rgba(168,85,247,0.06))",
  Inception: "linear-gradient(135deg, rgba(16,185,129,0.15), rgba(34,197,94,0.06))",
  Minishell: "linear-gradient(135deg, rgba(245,158,11,0.15), rgba(249,115,22,0.06))",
};

const featuredProjects: Project[] = [
  {
    name: "Darway",
    tagline: "Real-Time Housing Platform",
    description: "Built role-specific dashboards (Owner, Tenant, Admin) with JWT-secured routing and persistent sessions. Engineered bidirectional WebSocket messaging for concurrent real-time conversations. Integrated geolocation filtering with interactive map exploration. Delivered as installable PWA with offline-ready service worker caching.",
    tech: ["React", "TypeScript", "Node.js", "WebSockets", "PWA", "JWT", "Geolocation"],
    github: "https://github.com/elbaraka",
    period: "Jan \u2013 Mar 2026",
    duration: "3 months",
    icon: Building2,
    accent: "#22D3EE"
  },
  {
    name: "Webserv",
    tagline: "HTTP/1.1 Server from Scratch",
    description: "Built RFC-compliant HTTP/1.1 server handling GET, POST, DELETE, chunked transfer, and file uploads. Implemented non-blocking I/O with select() multiplexing for concurrent connections in a single thread. Designed CGI execution pipeline with proper environment isolation for dynamic content generation.",
    tech: ["C++", "POSIX Sockets", "HTTP/1.1", "CGI", "Non-blocking I/O", "Multiplexing"],
    github: "https://github.com/elbaraka",
    period: "Sep \u2013 Nov 2025",
    duration: "2 months",
    icon: Globe,
    accent: "#6366F1"
  },
  {
    name: "Inception",
    tagline: "Containerized Infrastructure",
    description: "Architected multi-service Docker stack with NGINX reverse proxy and TLS termination. Configured persistent volumes ensuring data integrity across container teardown cycles. Automated provisioning, health checks, and inter-service dependency management for a production-grade deployment.",
    tech: ["Docker", "NGINX", "MariaDB", "TLS", "Reverse Proxy", "DevOps"],
    github: "https://github.com/elbaraka",
    period: "Oct \u2013 Nov 2025",
    duration: "3 weeks",
    icon: Layers,
    accent: "#10B981"
  },
  {
    name: "Minishell",
    tagline: "Unix Shell in C",
    description: "Rebuilt a Bash-compatible shell featuring a lexer, recursive descent parser, execution engine, pipes, and redirections. Implemented built-ins (cd, export, unset, env, exit) with correct exit code propagation. Handled signal management and memory-safe process tree cleanup across all execution paths.",
    tech: ["C", "POSIX", "Unix System Calls", "Processes", "Signals", "Parser"],
    github: "https://github.com/elbaraka",
    period: "Sep \u2013 Nov 2024",
    duration: "6 weeks",
    icon: Terminal,
    accent: "#F59E0B"
  }
];

export default function ProjectsSlide() {
  const [activeIndex, setActiveIndex] = useState(0);
  const project = featuredProjects[activeIndex];
  const IconComponent = project.icon;

  const nextProject = () => setActiveIndex((prev) => (prev + 1) % featuredProjects.length);
  const prevProject = () => setActiveIndex((prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length);

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden px-4 md:px-6">
      <div className="max-w-5xl w-full max-h-full py-6 md:py-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="mb-6 md:mb-10"
        >
          <span className="text-xs uppercase tracking-widest text-accent font-mono mb-2 block">
            Featured Work
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
            Projects I&apos;ve <span className="text-accent">engineered</span>
          </h2>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="p-5 md:p-10 lg:p-14 rounded-2xl md:rounded-3xl border border-border"
              style={{ background: gradients[project.name] }}
            >
              <div className="flex items-start gap-3 md:gap-4 mb-4 md:mb-6">
                <div className="p-2 md:p-2.5 rounded-xl bg-bg-secondary/50 border border-border shrink-0">
                  <IconComponent className="w-5 h-5 md:w-7 md:h-7" style={{ color: project.accent }} />
                </div>
                <div className="min-w-0">
                  <div className="flex flex-wrap items-baseline gap-2 md:gap-4 mb-1">
                    <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold" style={{ color: project.accent }}>
                      {project.name}
                    </h3>
                    <span className="text-xs text-text-tertiary font-mono">{project.period}</span>
                  </div>
                  <p className="text-sm md:text-lg lg:text-xl text-text-secondary">
                    {project.tagline}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 mb-4 md:mb-6">
                <Calendar className="w-3.5 h-3.5 md:w-4 md:h-4 text-text-tertiary" />
                <span className="text-xs md:text-sm text-text-tertiary font-mono">{project.duration}</span>
              </div>

              <p className="text-sm md:text-base text-text-secondary leading-relaxed mb-6 md:mb-8 max-w-3xl">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5 md:gap-2 mb-6 md:mb-8">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 md:px-3 md:py-1.5 text-xs md:text-sm font-mono rounded-lg bg-bg-secondary/70 border border-border"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm md:text-base font-semibold text-text-secondary hover:text-accent transition-colors px-4 py-2 md:px-5 md:py-2.5 border border-border rounded-lg hover:border-accent group"
              >
                <Github className="w-4 h-4 md:w-5 md:h-5 group-hover:scale-110 transition-transform" />
                <span>View Source Code</span>
              </a>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-between mt-4 md:mt-8">
            <button
              onClick={prevProject}
              className="flex items-center gap-2 px-3 py-2 text-sm text-text-secondary hover:text-accent transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Previous</span>
            </button>

            <div className="flex items-center gap-2 md:gap-3">
              {featuredProjects.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    activeIndex === index ? "bg-accent scale-125" : "bg-text-tertiary/50 hover:bg-text-secondary"
                  }`}
                  whileHover={{ scale: 1.3 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={`Go to project ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextProject}
              className="flex items-center gap-2 px-3 py-2 text-sm text-text-secondary hover:text-accent transition-colors"
            >
              <span className="hidden sm:inline">Next</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="text-center mt-3 md:mt-4">
            <p className="text-xs text-text-tertiary font-mono">
              {String(activeIndex + 1).padStart(2, "0")} / {String(featuredProjects.length).padStart(2, "0")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
