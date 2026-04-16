import { ScrollReveal } from "@/components/ScrollReveal";
import { Cpu, HeartPulse, ShieldCheck, ArrowRight } from "lucide-react";

export default function Pathways() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12">
      <ScrollReveal>
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">The Pathways</h1>
          <p className="text-xl text-gray-400">Safe Subject Combinations by Major</p>
        </div>
      </ScrollReveal>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Engineering & AI */}
        <ScrollReveal delay={0.2}>
          <div className="glass p-8 rounded-3xl h-full flex flex-col relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
              <Cpu className="w-32 h-32" />
            </div>
            <div className="relative z-10 flex-1">
              <div className="bg-blue-500/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Cpu className="w-8 h-8 text-blue-400" />
              </div>
              <h2 className="text-2xl font-bold mb-4">AI & Engineering</h2>
              <p className="text-gray-400 mb-6 line-clamp-3">
                The ultimate tech and engineering stack. Highly competitive globally.
              </p>

              <div className="space-y-4 mb-8">
                <div>
                  <h4 className="text-sm text-gray-500 uppercase tracking-wider font-bold mb-2">A-Level Requirements</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 bg-white/5 p-2 rounded-lg border border-white/10">
                      <ArrowRight className="w-4 h-4 text-blue-400" /> Math (Mandatory)
                    </li>
                    <li className="flex items-center gap-2 bg-white/5 p-2 rounded-lg border border-white/10">
                      <ArrowRight className="w-4 h-4 text-blue-400" /> Physics (Mandatory)
                    </li>
                    <li className="flex items-center gap-2 bg-white/5 p-2 rounded-lg border border-white/10">
                      <ArrowRight className="w-4 h-4 text-blue-400" /> Computer Science <span className="text-xs text-gray-500">or Further Math</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Medicine */}
        <ScrollReveal delay={0.4}>
          <div className="glass p-8 rounded-3xl h-full flex flex-col relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
              <HeartPulse className="w-32 h-32" />
            </div>
            <div className="relative z-10 flex-1">
              <div className="bg-ruby/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <HeartPulse className="w-8 h-8 text-ruby" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Medicine & Health</h2>
              <p className="text-gray-400 mb-6 line-clamp-3">
                The classic pre-med combination. Keep an eye on regional chemistry requirements.
              </p>

              <div className="space-y-4 mb-8">
                <div>
                  <h4 className="text-sm text-gray-500 uppercase tracking-wider font-bold mb-2">A-Level Requirements</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 bg-white/5 p-2 rounded-lg border border-white/10">
                      <ArrowRight className="w-4 h-4 text-ruby" /> Biology (Mandatory)
                    </li>
                    <li className="flex items-center gap-2 bg-white/5 p-2 rounded-lg border border-white/10">
                      <ArrowRight className="w-4 h-4 text-ruby" /> Chemistry (Mandatory)
                    </li>
                    <li className="flex items-center gap-2 bg-white/5 p-2 rounded-lg border border-white/10">
                      <ArrowRight className="w-4 h-4 text-ruby" /> Math or Physics <span className="text-xs text-gray-500">(AS or A-Level)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* The Universal Safe Pack */}
        <ScrollReveal delay={0.6}>
          <div className="glass p-8 rounded-3xl h-full flex flex-col relative overflow-hidden group border-2 border-gold/30">
            <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
              <ShieldCheck className="w-32 h-32" />
            </div>
            <div className="relative z-10 flex-1">
              <div className="bg-gold/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <ShieldCheck className="w-8 h-8 text-gold" />
              </div>
              <h2 className="text-2xl font-bold mb-4 text-gold">Universal Safe Pack</h2>
              <p className="text-gray-400 mb-6 line-clamp-3">
                Undecided? This trio keeps 90% of global majors (STEM & Humanities) wide open.
              </p>

              <div className="space-y-4 mb-8">
                <div>
                  <h4 className="text-sm text-gray-500 uppercase tracking-wider font-bold mb-2">A-Level Combinations</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 bg-white/5 p-2 rounded-lg border border-white/10">
                      <ArrowRight className="w-4 h-4 text-gold" /> Math
                    </li>
                    <li className="flex items-center gap-2 bg-white/5 p-2 rounded-lg border border-white/10">
                      <ArrowRight className="w-4 h-4 text-gold" /> Physics
                    </li>
                    <li className="flex items-center gap-2 bg-white/5 p-2 rounded-lg border border-white/10">
                      <ArrowRight className="w-4 h-4 text-gold" /> Chemistry
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
