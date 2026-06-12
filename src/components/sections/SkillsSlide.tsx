"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    category: "Languages",
    skills: ["C", "C++", "TypeScript", "JavaScript", "Python"],
    proficiency: 95
  },
  {
    category: "Backend",
    skills: ["REST APIs", "WebSockets", "Databases", "System Design", "Node.js"],
    proficiency: 90
  },
  {
    category: "Frontend",
    skills: ["React", "Next.js", "TailwindCSS", "Framer Motion", "PWA"],
    proficiency: 85
  },
  {
    category: "DevOps",
    skills: ["Docker", "NGINX", "CI/CD", "Linux", "Performance"],
    proficiency: 80
  }
];

const experience = [
  {
    year: "2024-Present",
    title: "Full-Stack Engineer",
    org: "42 Network",
    desc: "Building systems, mentoring peers, shipping production features"
  },
  {
    year: "2023-2024",
    title: "Systems Programming",
    org: "42 Cursus",
    desc: "Deep dive into low-level C/C++, algorithms, and system architecture"
  },
  {
    year: "2022-2023",
    title: "Web Development",
    org: "42 Projects",
    desc: "Full-stack development with modern frameworks and best practices"
  }
];

export default function SkillsSlide() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden px-4 md:px-6">
      <div className="max-w-5xl w-full max-h-full py-6 md:py-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <div className="mb-6 md:mb-10">
            <span className="text-xs uppercase tracking-widest text-accent font-mono mb-2 block">
              Skills & Experience
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-1">
              What I <span className="text-accent">can do</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 md:gap-10">
            <div>
              <h3 className="text-base md:text-lg font-semibold mb-4 md:mb-6 text-text-secondary">Technical Skills</h3>
              <div className="space-y-4 md:space-y-6">
                {skillCategories.map((category, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: false }}
                    className="p-4 md:p-5 rounded-xl bg-bg-secondary border border-border hover:border-accent/30 transition-all"
                  >
                    <div className="flex justify-between items-center mb-2 md:mb-3">
                      <h4 className="font-semibold text-sm md:text-base">{category.category}</h4>
                      <span className="text-xs md:text-sm text-accent font-mono font-bold">{category.proficiency}%</span>
                    </div>
                    <div className="w-full h-1.5 md:h-2 bg-bg-tertiary rounded-full overflow-hidden mb-3">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${category.proficiency}%` }}
                        transition={{ duration: 0.8, delay: index * 0.1 + 0.2 }}
                        viewport={{ once: false }}
                        className="h-full bg-gradient-to-r from-accent to-indigo-500 rounded-full"
                      />
                    </div>
                    <div className="flex flex-wrap gap-1.5 md:gap-2">
                      {category.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-1 md:px-2.5 md:py-1.5 text-[10px] md:text-xs bg-bg-tertiary rounded-lg border border-border text-text-secondary"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-base md:text-lg font-semibold mb-4 md:mb-6 text-text-secondary">Journey</h3>
              <div className="space-y-3 md:space-y-4">
                {experience.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: false }}
                    className="p-4 md:p-5 rounded-xl bg-bg-secondary border border-border hover:border-accent/30 transition-all"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold text-accent text-sm md:text-base">{item.title}</h4>
                      <span className="text-[10px] md:text-xs text-text-tertiary font-mono bg-bg-tertiary px-2 py-0.5 md:px-3 md:py-1 rounded shrink-0 ml-2">
                        {item.year}
                      </span>
                    </div>
                    <p className="text-xs md:text-sm text-text-secondary mb-1 font-medium">{item.org}</p>
                    <p className="text-[10px] md:text-xs text-text-tertiary leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
