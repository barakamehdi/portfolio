"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Github, Linkedin, Mail, Download, ArrowUpRight } from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const links = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com",
      description: "Check my repositories"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com",
      description: "Let's connect professionally"
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:elbaraka@student.1337.ma",
      description: "Get in touch"
    }
  ];

  return (
    <section ref={ref} className="relative py-32 px-6 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, var(--accent) 0%, transparent 70%)"
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs uppercase tracking-widest text-accent font-mono mb-4 block">
            Contact
          </span>
          <h2 className="text-4xl md:text-5xl font-semibold mb-4">
            Let's build something{' '}
            <span className="text-accent">together</span>
          </h2>
          <p className="text-text-secondary max-w-lg mx-auto">
            I'm currently available for internships and junior developer positions. Let's talk about how I can contribute to your team.
          </p>
        </motion.div>

        {/* Contact Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-4 mb-12"
        >
          {links.map((link, index) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 rounded-2xl bg-bg-secondary border border-border hover:border-accent transition-all duration-300 hover:bg-bg-tertiary"
            >
              <link.icon className="w-6 h-6 text-accent mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-medium mb-1">{link.label}</h3>
              <p className="text-sm text-text-tertiary">{link.description}</p>
            </a>
          ))}
        </motion.div>

        {/* Resume Download */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-bg-secondary border border-border hover:border-accent hover:bg-accent-glow transition-all duration-300 group">
            <Download className="w-4 h-4 text-accent" />
            <span className="font-medium">Download Resume</span>
            <ArrowUpRight className="w-4 h-4 text-text-tertiary group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
          </button>
        </motion.div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-32 pt-8 border-t border-border"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-text-tertiary">
            <p>© 2024 El Baraka. All rights reserved.</p>
            <p>Built with Next.js + Framer Motion</p>
          </div>
        </motion.footer>
      </div>
    </section>
  );
}