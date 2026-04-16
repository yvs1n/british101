"use client";

import { ScrollReveal } from "@/components/ScrollReveal";
import { ArrowRight, MapPin, GraduationCap, Compass } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [yearLevel, setYearLevel] = useState("");
  const [country, setCountry] = useState("");
  const [major, setMajor] = useState("");

  const handleWizardSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate navigation/filtering
    alert(`Wizard Selected: Year ${yearLevel}, ${country}, ${major}`);
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-4">
        {/* Background Gradients */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-ruby/20 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-5xl mx-auto text-center z-10">
          <ScrollReveal>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
              The Mentor I Wish <span className="text-transparent bg-clip-text bg-gradient-to-r from-ruby to-gold">I Had.</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed text-balance">
              Demystifying the British International Curriculum (IGCSE, AS, and A-Level) for families in the MENA region.
              Find the safest subject pathways, top university requirements, and scholarship benchmarks.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#wizard" className="bg-ruby hover:bg-ruby-light text-white px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(224,17,95,0.4)]">
                Start Your Roadmap <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/board-battle" className="glass hover:bg-white/10 px-8 py-4 rounded-full font-bold text-lg transition-all text-white">
                Compare Boards
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* The Mission Section */}
      <section className="py-24 px-4 bg-dark-100/50">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="glass p-8 md:p-12 rounded-3xl relative overflow-hidden">
              <div className="absolute -right-20 -top-20 w-64 h-64 bg-gold/10 blur-[60px] rounded-full" />
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Compass className="text-gold w-8 h-8" />
                The Mission
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                British Curriculum 101 is a 100% free, charity-first digital hub built by a student who has successfully navigated the complexities of the system.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                The core objective is to bridge the &quot;information gap&quot;. Too many parents and students are confused by the differences between CIE, Edexcel, and OxfordAQA. We&apos;re here to provide clarity on board differences, government equivalency rules (specifically UAE and Egypt), and competitive scholarship pathways.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Quick Start Wizard */}
      <section id="wizard" className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Quick Start Wizard</h2>
              <p className="text-gray-400">Tell us where you are, and we&apos;ll show you the path forward.</p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <form onSubmit={handleWizardSubmit} className="glass p-8 rounded-3xl flex flex-col md:flex-row gap-6 items-end">
              <div className="flex-1 w-full">
                <label className="block text-sm font-medium text-gray-300 mb-2">Current Year Level</label>
                <div className="relative">
                  <GraduationCap className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <select
                    value={yearLevel}
                    onChange={(e) => setYearLevel(e.target.value)}
                    className="w-full bg-dark-200 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-ruby appearance-none"
                    required
                  >
                    <option value="" disabled>Select Year...</option>
                    <option value="9">Year 9</option>
                    <option value="10">Year 10 (IGCSE)</option>
                    <option value="11">Year 11 (IGCSE)</option>
                    <option value="12">Year 12 (AS Level)</option>
                    <option value="13">Year 13 (A Level)</option>
                  </select>
                </div>
              </div>

              <div className="flex-1 w-full">
                <label className="block text-sm font-medium text-gray-300 mb-2">Target Country</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <select
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className="w-full bg-dark-200 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-ruby appearance-none"
                    required
                  >
                    <option value="" disabled>Select Country...</option>
                    <option value="UAE">United Arab Emirates</option>
                    <option value="Egypt">Egypt</option>
                    <option value="UK">United Kingdom</option>
                    <option value="US">United States</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div className="flex-1 w-full">
                <label className="block text-sm font-medium text-gray-300 mb-2">Target Major</label>
                <select
                  value={major}
                  onChange={(e) => setMajor(e.target.value)}
                  className="w-full bg-dark-200 border border-white/10 rounded-xl py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-ruby appearance-none"
                  required
                >
                  <option value="" disabled>Select Major...</option>
                  <option value="Medicine">Medicine / Healthcare</option>
                  <option value="Engineering">Engineering / CS / AI</option>
                  <option value="Business">Business / Economics</option>
                  <option value="Arts">Humanities / Arts</option>
                  <option value="Undecided">Undecided</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full md:w-auto bg-ruby hover:bg-ruby-light text-white px-8 py-3 rounded-xl font-bold transition-all"
              >
                Find My Path
              </button>
            </form>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
