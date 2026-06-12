"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Code2, Terminal, Box, Database } from "lucide-react";

interface Project {
  name: string;
  oneLiner: string;
  fullDescription: string;
  techStack: string[];
  github?: string;
  demo?: string;
  icon: React.ElementType;
  color: string;
}

const projects: Project[] = [
  {
    name: "ft_transcendence",
    oneLiner: "Real-time multiplayer Pong with matchmaking",
    fullDescription: "A full-featured multiplayer Pong game with real-time WebSocket communication, tournament brackets, global rankings, spectator mode, and in-game chat. Built with a microservices architecture handling 1000+ concurrent connections.",
    techStack: ["C", "WebSocket", "REST API", "SQLite", "OAuth 2.0", "JWT"],
    github: "https://github.com",
    icon: Terminal,
    color: "#22D3EE"
  },
  {
    name: "cubes3d",
    oneLiner: "Software 3D rendering engine from scratch",
    fullDescription: "A complete software rasterizer implementing perspective projection, Phong lighting model, texture mapping, and OBJ file parsing. No GPU APIs—just pure mathematics and efficient memory management. Handles 50K+ polygons at 60fps.",
    techStack: ["C", " mathematics", "z-buffering", "texture mapping", "Phong lighting"],
    github: "https://github.com",
    icon: Box,
    color: "#6366F1"
  },
  {
    name: "minishell",
    oneLiner: "POSIX-compliant shell implementation",
    fullDescription: "A fully functional POSIX shell with pipeline support, job control, signal handling, environment variables, and builtin commands. Implements proper process forking, redirection, and background execution.",
    techStack: ["C", "POSIX", "signals", "processes", "pipes", "job control"],
    github: "https://github.com",
    icon: Terminal,
    color: "#10B981"
  },
  {
    name: "ft_containers",
    oneLiner: "Complete STL container implementation",
    fullDescription: "A bit-exact reimplementation of the C++ STL containers: vector, map, stack, queue, and list. Includes iterators, allocators, and full C++98/03 compliance with modern C++11 features.",
    techStack: ["C++", "templates", "iterators", "RAII", "SFINAE"],
    github: "https://github.com",
    icon: Database,
    color: "#F59E0B"
  }
];

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const section = ref.current as HTMLElement;
      const rect = section.getBoundingClientRect();
      const sectionHeight = section.offsetHeight;
      if (sectionHeight <= 0 || isNaN(sectionHeight)) return;
      const scrollProgress = Math.abs(rect.top) / Math.max(sectionHeight - window.innerHeight, 1);
      const newIndex = Math.min(
        Math.max(0, Math.floor(scrollProgress * projects.length)),
        projects.length - 1
      );
      setActiveIndex(newIndex);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const activeProject = projects[activeIndex] || projects[0];

  return (
    <section id="projects" ref={ref} className="relative py-32 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-xs uppercase tracking-widest text-accent font-mono mb-4 block">
            Projects
          </span>
          <h2 className="text-4xl md:text-5xl font-semibold">
            Engineered{' '}
            <span className="text-accent">systems</span>
          </h2>
        </motion.div>

        {/* Project Switcher */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Project List */}
          <div className="flex flex-col gap-3">
            {projects.map((project, index) => (
              <motion.button
                key={project.name}
                onClick={() => setActiveIndex(index)}
                initial={{ opacity: 0, x: -40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`text-left p-5 rounded-xl transition-all duration-300 border ${
                  activeIndex === index
                    ? "bg-bg-secondary border-accent"
                    : "bg-transparent border-border hover:border-text-tertiary"
                }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <project.icon
                    className="w-4 h-4"
                    style={{ color: project.color }}
                  />
                  <span
                    className={`font-mono text-sm ${
                      activeIndex === index ? "text-accent" : "text-text-tertiary"
                    }`}
                  >
                    0{index + 1}
                  </span>
                  <h3
                    className={`text-lg font-medium ${
                      activeIndex === index ? "text-text-primary" : "text-text-secondary"
                    }`}
                  >
                    {project.name}
                  </h3>
                </div>
                <p className="text-sm text-text-tertiary ml-7">
                  {project.oneLiner}
                </p>
              </motion.button>
            ))}
          </div>

          {/* Project Preview */}
          <div className="relative min-h-[400px] lg:sticky lg:top-24">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject.name}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 p-8 rounded-2xl bg-bg-secondary border border-border"
              >
                {/* Project Visual Placeholder */}
                <div
                  className="relative h-48 rounded-xl overflow-hidden mb-6"
                  style={{
                    background: `linear-gradient(135deg, ${activeProject.color}20 0%, ${activeProject.color}05 100%)`
                  }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <activeProject.icon
                      className="w-16 h-16"
                      style={{ color: activeProject.color, opacity: 0.3 }}
                    />
                  </div>
                  {/* Animated grid effect */}
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage: `
                        linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                      `,
                      backgroundSize: "20px 20px"
                    }}
                  />
                </div>

                {/* Project Details */}
                <h3
                  className="text-2xl font-semibold mb-2"
                  style={{ color: activeProject.color }}
                >
                  {activeProject.name}
                </h3>
                <p className="text-text-secondary mb-4 leading-relaxed">
                  {activeProject.fullDescription}
                </p>

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {activeProject.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-mono rounded-full bg-bg-tertiary text-text-secondary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  {activeProject.github && (
                    <a
                      href={activeProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-accent transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      <span>Source</span>
                    </a>
                  )}
                  {activeProject.demo && (
                    <a
                      href={activeProject.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-accent transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}