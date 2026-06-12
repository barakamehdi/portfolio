"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";

const links = [
  {
    label: "GitHub",
    url: "https://github.com/elbaraka",
    icon: Github,
    color: "hover:text-white"
  },
  {
    label: "LinkedIn",
    url: "https://linkedin.com/in/elbaraka",
    icon: Linkedin,
    color: "hover:text-blue-400"
  },
  {
    label: "Email",
    url: "mailto:elbaraka@student.1337.ma",
    icon: Mail,
    color: "hover:text-accent"
  }
];

export default function ContactSlide() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden px-4 md:px-6">
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 opacity-20 md:opacity-30"
          style={{
            background: `
              radial-gradient(ellipse at 20% 50%, rgba(99, 102, 241, 0.1) 0%, transparent 50%),
              radial-gradient(ellipse at 80% 50%, rgba(34, 211, 238, 0.1) 0%, transparent 50%)
            `,
            animation: "meshGradient 20s ease infinite",
            backgroundSize: "200% 200%"
          }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
        className="relative z-10 max-w-3xl w-full"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: false }}
          className="mb-6 md:mb-8 text-center"
        >
          <span className="text-xs uppercase tracking-widest text-accent font-mono mb-2 block">
            Let&apos;s Connect
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4">
            Ready to build <span className="text-accent">something great?</span>
          </h2>
          <p className="text-sm md:text-lg text-text-secondary">
            I&apos;m always interested in new projects, collaborations, and opportunities.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: false }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-5 mb-10 md:mb-16"
        >
          {links.map((link, index) => (
            <motion.a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              viewport={{ once: false }}
              className={`inline-flex items-center gap-2 md:gap-3 px-5 py-3 md:px-7 md:py-4 rounded-xl bg-bg-secondary border-2 border-border hover:border-accent transition-all duration-300 group text-text-secondary ${link.color} w-full sm:w-auto justify-center`}
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <link.icon className="w-5 h-5 md:w-6 md:h-6" />
              <span className="font-semibold text-sm md:text-base">{link.label}</span>
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: false }}
          className="p-6 md:p-10 rounded-2xl md:rounded-3xl bg-gradient-to-br from-bg-secondary to-bg-tertiary border-2 border-accent/30 hover:border-accent transition-colors text-center"
        >
          <p className="text-xs md:text-sm text-text-secondary mb-3 md:mb-4 font-medium">Or send me an email directly</p>
          <a
            href="mailto:elbaraka@student.1337.ma"
            className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-bold text-accent hover:opacity-80 transition-opacity break-all"
          >
            elbaraka@student.1337.ma
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: false }}
          className="mt-8 md:mt-12 text-xs md:text-sm text-text-tertiary font-mono text-center"
        >
          Built with Next.js, Framer Motion & TailwindCSS
        </motion.p>
      </motion.div>
    </section>
  );
}
