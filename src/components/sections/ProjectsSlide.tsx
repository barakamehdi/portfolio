"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Terminal, Box } from "lucide-react";

const featuredProjects = [
  {
    name: "Darkway",
    tagline: "Real-time Multiplayer Pong Game",
    description: "A full-featured multiplayer Pong game built with WebSocket communication, tournament brackets, global rankings, and spectator mode. Engineered microservices architecture handling 1000+ concurrent connections with real-time synchronization.",
    tech: ["WebSocket", "REST API", "OAuth 2.0", "JWT", "SQLite", "Microservices"],
    github: "https://github.com/elbaraka/Darkway",
    icon: Terminal,
    gradient: "from-cyan-500/20 to-blue-500/10",
    accent: "#22D3EE"
  },
  {
    name: "cubes3d",
    tagline: "Software 3D Rendering Engine",
    description: "A complete software rasterizer implementing perspective projection, Phong lighting model, texture mapping, and OBJ file parsing. Renders 50K+ polygons at 60fps using pure mathematics and efficient memory management without GPU APIs.",
    tech: ["C", "Mathematics", "3D Graphics", "Texture Mapping", "Rasterization"],
    github: "https://github.com/elbaraka/cubes3d",
    icon: Box,
    gradient: "from-indigo-500/20 to-purple-500/10",
    accent: "#6366F1"
  },
  {
    name: "minishell",
    tagline: "POSIX-Compliant Shell Implementation",
    description: "A fully functional POSIX shell with pipeline support, job control, signal handling, environment variables, and builtin commands. Implements proper process forking, redirection, and background execution with complete signal management.",
    tech: ["C", "POSIX", "Signals", "Processes", "Pipes", "Job Control"],
    github: "https://github.com/elbaraka/minishell",
    icon: Terminal,
    gradient: "from-emerald-500/20 to-green-500/10",
    accent: "#10B981"
  }
];

export default function ProjectsSlide() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden px-6">
      <div className="max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="mb-12"
        >
          <span className="text-xs uppercase tracking-widest text-accent font-mono mb-4 block">
            Featured Work
          </span>
          <h2 className="text-5xl md:text-6xl font-bold">
            Systems I've <span className="text-accent">engineered</span>
          </h2>
        </motion.div>

        {/* Project Carousel */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -20 }}
              transition={{ duration: 0.5 }}
              className={`p-10 md:p-16 rounded-3xl border border-border bg-gradient-to-br ${featuredProjects[activeIndex].gradient}`}
            >
              {/* Project Header */}
              <div className="flex items-start justify-between mb-12">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    {(() => {
                      const IconComponent = featuredProjects[activeIndex].icon;
                      return (
                        <IconComponent
                          className="w-8 h-8"
                          style={{ color: featuredProjects[activeIndex].accent }}
                        />
                      );
                    })()}
                    <h3
                      className="text-4xl md:text-5xl font-bold"
                      style={{ color: featuredProjects[activeIndex].accent }}
                    >
                      {featuredProjects[activeIndex].name}
                    </h3>
                  </div>
                  <p className="text-xl text-text-secondary ml-12">
                    {featuredProjects[activeIndex].tagline}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-text-secondary leading-relaxed mb-12 max-w-3xl text-lg">
                {featuredProjects[activeIndex].description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-3 mb-12">
                {featuredProjects[activeIndex].tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 text-sm font-mono rounded-lg bg-bg-secondary border border-border hover:border-accent transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center gap-8">
                <a
                  href={featuredProjects[activeIndex].github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-base font-semibold text-text-secondary hover:text-accent transition-colors group px-6 py-3 border border-border rounded-lg hover:border-accent"
                >
                  <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span>View Source Code</span>
                </a>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Project Navigation */}
          <div className="flex items-center justify-center gap-6 mt-16">
            {featuredProjects.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`px-6 py-3 rounded-xl text-base font-mono transition-all duration-300 ${
                  activeIndex === index
                    ? "bg-accent text-bg-primary font-bold"
                    : "bg-bg-secondary border-2 border-border hover:border-accent text-text-secondary"
                }`}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
              >
                {String(index + 1).padStart(2, "0")}
              </motion.button>
            ))}
          </div>

          {/* Slide Counter */}
          <div className="text-center mt-10">
            <p className="text-sm text-text-tertiary font-mono">
              {String(activeIndex + 1).padStart(2, "0")} / {String(featuredProjects.length).padStart(2, "0")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
