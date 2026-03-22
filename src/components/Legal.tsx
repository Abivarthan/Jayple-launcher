"use client";

import React, { useState, useEffect } from 'react';
import { Navbar, Footer } from './Layout';
import { motion } from 'framer-motion';
import { FiChevronRight, FiBookOpen } from 'react-icons/fi';

interface LegalSection {
  id: string;
  title: string;
  content: React.ReactNode;
}

interface LegalPageProps {
  title: string;
  subtitle?: string;
  lastUpdated: string;
  highlights: {
    icon: React.ReactNode;
    text: string;
  }[];
  sections: LegalSection[];
}

export function LegalPage({ title, subtitle, lastUpdated, highlights, sections }: LegalPageProps) {
  const [activeSection, setActiveSection] = useState<string>(sections[0]?.id || "");

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map(s => document.getElementById(s.id));
      const scrollPosition = window.scrollY + 200;

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const el = sectionElements[i];
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <main className="min-h-screen bg-[#fafafa]">
      <Navbar />
      
      {/* Header Section */}
      <header className="pt-44 pb-20 px-6 bg-white border-b border-mercury/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-2 mb-6"
              >
                <div className="w-8 h-[2px] bg-primary"></div>
                <span className="text-sm font-bold tracking-widest uppercase text-slate">Legal Center</span>
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-7xl font-serif font-bold text-charcoal mb-6"
              >
                {title}
              </motion.h1>
              {subtitle && (
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  className="text-xl text-slate mb-8 max-w-2xl leading-relaxed"
                >
                  {subtitle}
                </motion.p>
              )}
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-sm font-medium text-slate/60"
              >
                Version 2.4 — Effective from {lastUpdated}
              </motion.p>
            </div>
          </div>
        </div>
      </header>

      {/* Highlights Section (Google Style) */}
      <section className="py-12 px-6 bg-[#fcfcfc]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-3xl bg-white border border-mercury/40 shadow-sm flex gap-4 items-start hover:shadow-md transition-shadow"
              >
                <div className="p-3 rounded-2xl bg-secondary text-charcoal text-xl">
                  {item.icon}
                </div>
                <p className="text-slate font-medium leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 relative">
          
          {/* Sidebar Navigation (Spotify Style) */}
          <aside className="lg:w-1/4">
            <div className="sticky top-32 space-y-8">
              <div>
                <h3 className="text-xs font-bold text-slate/40 uppercase tracking-widest mb-6 px-4">Navigation</h3>
                <nav className="space-y-1">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`w-full text-left px-5 py-3.5 rounded-2xl text-[15px] font-semibold transition-all duration-300 flex items-center justify-between group ${
                        activeSection === section.id 
                        ? 'bg-charcoal text-white shadow-lg shadow-charcoal/10' 
                        : 'text-slate hover:bg-white hover:text-charcoal'
                      }`}
                    >
                      <span>{section.title}</span>
                      <FiChevronRight className={`transition-transform duration-300 ${
                        activeSection === section.id ? 'translate-x-0 opacity-100' : '-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100'
                      }`} />
                    </button>
                  ))}
                </nav>
              </div>

              <div className="p-8 rounded-[2.5rem] bg-secondary border border-primary/20 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <FiBookOpen size={40} />
                </div>
                <h4 className="font-bold text-charcoal mb-2">Need help?</h4>
                <p className="text-sm text-slate mb-4">Contact our legal team for any clarifications regarding these terms.</p>
                <a href="mailto:legal@jayple.com" className="text-sm font-bold text-charcoal underline underline-offset-4 decoration-primary hover:text-primary transition-colors">
                  legal@jayple.com
                </a>
              </div>
            </div>
          </aside>

          {/* Document Content */}
          <div className="lg:w-3/4">
            <div className="bg-white p-10 md:p-16 lg:p-24 rounded-[4rem] shadow-premium border border-mercury/30">
              <style jsx global>{`
                .legal-doc-content h2 {
                  font-family: var(--font-serif);
                  font-size: 2.75rem;
                  font-weight: 700;
                  color: var(--color-charcoal);
                  margin-top: 5rem;
                  margin-bottom: 2rem;
                  scroll-margin-top: 120px;
                }
                .legal-doc-content h2:first-child {
                  margin-top: 0;
                }
                .legal-doc-content p {
                  font-size: 1.15rem;
                  line-height: 1.85;
                  color: var(--color-slate);
                  margin-bottom: 1.5rem;
                }
                .legal-doc-content ul {
                  margin: 2rem 0;
                  padding-left: 1.5rem;
                }
                .legal-doc-content li {
                  font-size: 1.15rem;
                  color: var(--color-slate);
                  margin-bottom: 1.25rem;
                  position: relative;
                  padding-left: 0.5rem;
                }
                .legal-doc-content li::marker {
                  color: var(--color-primary-dark);
                }
                .legal-doc-content strong {
                  color: var(--color-charcoal);
                  font-weight: 600;
                }
                .section-anchor {
                  display: block;
                  height: 0;
                  visibility: hidden;
                }
              `}</style>
              
              <div className="legal-doc-content">
                {sections.map((section) => (
                  <div key={section.id} id={section.id} className="mb-20">
                    <h2 className="group flex items-center gap-4">
                      <span className="text-primary text-xl md:text-2xl font-sans mt-2">{sections.indexOf(section) + 1}</span>
                      {section.title}
                    </h2>
                    <div className="prose prose-lg max-w-none text-slate">
                      {section.content}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-32 pt-16 border-t border-mercury">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                  <p className="text-sm text-slate font-medium">© 2026 Jayple Technologies Inc. All rights reserved.</p>
                  <div className="flex gap-6">
                    <button onClick={() => window.print()} className="text-sm font-bold text-charcoal hover:text-primary transition-colors flex items-center gap-2">
                      <FiBookOpen /> Print Policy
                    </button>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}

