import { ScrollReveal } from "@/components/ScrollReveal";
import { Award, Trophy, Star } from "lucide-react";

export default function ScholarshipHub() {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-12">
      <ScrollReveal>
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Scholarship Hub</h1>
          <p className="text-xl text-gray-400">Benchmarks for merit-based financial aid</p>
        </div>
      </ScrollReveal>

      <div className="space-y-8">
        {/* Elite Tier */}
        <ScrollReveal direction="up" delay={0.2}>
          <div className="glass p-8 md:p-10 rounded-3xl relative overflow-hidden border-2 border-gold shadow-[0_0_30px_rgba(255,215,0,0.15)]">
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-gold/20 blur-[50px] rounded-full pointer-events-none" />

            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="bg-gradient-to-br from-gold to-gold-dark p-4 rounded-2xl shrink-0">
                <Trophy className="w-10 h-10 text-dark-100" />
              </div>

              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
                  <h2 className="text-3xl font-bold text-gold">Elite Tier</h2>
                  <div className="bg-dark-200 px-4 py-2 rounded-lg font-mono font-bold text-xl tracking-widest border border-white/10">
                    A*A*A*
                  </div>
                </div>

                <p className="text-xl text-white mb-6 font-medium">75% – 100% Scholarship</p>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Reserved for the top 1% of applicants globally. This tier often unlocks full-ride scholarships, including tuition, housing, and stipends at elite institutions.
                </p>

                <div className="bg-dark-200/50 p-4 rounded-xl border border-white/5">
                  <span className="text-sm text-gray-400 uppercase tracking-wider font-bold block mb-2">Target Institutions</span>
                  <span className="text-white font-medium">NYU Abu Dhabi, AUC (Presidential Scholarship), Ivy League merit programs, Oxford/Cambridge bursaries.</span>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* High Merit Tier */}
        <ScrollReveal direction="up" delay={0.4}>
          <div className="glass p-8 md:p-10 rounded-3xl relative overflow-hidden border border-ruby-light/30">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="bg-gradient-to-br from-ruby-light to-ruby-dark p-4 rounded-2xl shrink-0">
                <Award className="w-10 h-10 text-white" />
              </div>

              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
                  <h2 className="text-3xl font-bold text-ruby-light">High Merit</h2>
                  <div className="bg-dark-200 px-4 py-2 rounded-lg font-mono font-bold text-xl tracking-widest border border-white/10 text-gray-300">
                    AAA – AAB
                  </div>
                </div>

                <p className="text-xl text-white mb-6 font-medium">30% – 50% Automatic Discount</p>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Highly competitive grades that trigger automatic, merit-based tuition discounts at many international branch campuses without the need for a separate application.
                </p>

                <div className="bg-dark-200/50 p-4 rounded-xl border border-white/5">
                  <span className="text-sm text-gray-400 uppercase tracking-wider font-bold block mb-2">Target Institutions</span>
                  <span className="text-white font-medium">University of Birmingham Dubai, Heriot-Watt, Middlesex, American University of Sharjah (AUS).</span>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Academic Grant Tier */}
        <ScrollReveal direction="up" delay={0.6}>
          <div className="glass p-8 md:p-10 rounded-3xl relative overflow-hidden border border-blue-400/30">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="bg-gradient-to-br from-blue-400 to-blue-600 p-4 rounded-2xl shrink-0">
                <Star className="w-10 h-10 text-white" />
              </div>

              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
                  <h2 className="text-3xl font-bold text-blue-400">Academic Grant</h2>
                  <div className="bg-dark-200 px-4 py-2 rounded-lg font-mono font-bold text-xl tracking-widest border border-white/10 text-gray-400">
                    ABB
                  </div>
                </div>

                <p className="text-xl text-white mb-6 font-medium">10% – 20% Entry-Level Grant</p>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Solid academic performance that universities reward with &quot;Early Bird&quot; or entry-level academic grants to secure your enrollment.
                </p>

                <div className="bg-dark-200/50 p-4 rounded-xl border border-white/5">
                  <span className="text-sm text-gray-400 uppercase tracking-wider font-bold block mb-2">Target Institutions</span>
                  <span className="text-white font-medium">Most UK/Australian branch campuses in the Middle East and mid-tier private universities in Egypt.</span>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
