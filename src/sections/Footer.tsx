"use client";

import React from "react";
import { Github, Linkedin, Mail, Heart } from "lucide-react";
import Container from "@/components/Container";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-white/10 py-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gradient">Arsalan Javed</h3>
            <p className="text-text/60 text-sm">
              Business Analyst & Project Manager delivering digital transformation through strategic planning and intelligent automation.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-text">Quick Links</h4>
            <div className="flex flex-col space-y-2">
              <a href="#about" className="text-text/60 hover:text-primary transition-colors text-sm">
                About
              </a>
              <a href="#skills" className="text-text/60 hover:text-primary transition-colors text-sm">
                Skills
              </a>
              <a href="#projects" className="text-text/60 hover:text-primary transition-colors text-sm">
                Projects
              </a>
              <a href="#automations" className="text-text/60 hover:text-primary transition-colors text-sm">
                Automation
              </a>
              {/* <a href="#testimonials" className="text-text/60 hover:text-primary transition-colors text-sm">
                Testimonials
              </a> */}
              <a href="#contact" className="text-text/60 hover:text-primary transition-colors text-sm">
                Contact
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-text">Connect</h4>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/Arsalan40"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text/60 hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/engr-arsalanjaved/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text/60 hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:engr.arsalanjaved@gmail.com"
                className="text-text/60 hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-text/60 text-sm">
            © {currentYear} Arsalan Javed. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};
