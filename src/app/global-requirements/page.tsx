import { ScrollReveal } from "@/components/ScrollReveal";
import { Globe2, FileWarning, Lock } from "lucide-react";

export default function GlobalRequirements() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12">
      <ScrollReveal>
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Global Requirements</h1>
          <p className="text-xl text-gray-400">Understanding Ministry Equivalency & Rules</p>
        </div>
      </ScrollReveal>

      {/* UAE Profile */}
      <ScrollReveal direction="up" delay={0.2}>
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3 text-gold">
            <Globe2 className="w-8 h-8" />
            United Arab Emirates (UAE) Equivalency
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass p-8 rounded-3xl">
              <h3 className="text-2xl font-bold mb-4">The Baseline Formula</h3>
              <div className="text-5xl font-extrabold text-ruby mb-4">5 <span className="text-2xl text-gray-400">+</span> 2 <span className="text-2xl text-gray-400">or</span> 1</div>
              <p className="text-lg text-gray-300 leading-relaxed mb-4">
                To get your Ministry of Education (MOE) Equivalency in the UAE, you need:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-400 text-lg">
                <li><strong className="text-white">5 IGCSEs</strong> (Minimum grade C/4)</li>
                <li><strong className="text-white">2 AS Levels</strong> (Minimum grade D) <span className="text-white font-bold">OR</span> <strong className="text-white">1 A-Level</strong> (Minimum grade E)</li>
              </ul>
            </div>

            <div className="glass p-8 rounded-3xl border-t-4 border-t-blue-500">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <FileWarning className="w-6 h-6 text-blue-500" />
                Attestation & EmSAT
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Getting the grades is only step one. For UAE equivalency, pay attention to the paperwork:
              </p>
              <ul className="space-y-3 text-gray-400">
                <li className="flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 shrink-0" />
                  <span><strong>Attestation:</strong> Your certificates must be stamped by the British Council and the Ministry of Foreign Affairs (MOFA).</span>
                </li>
                <li className="flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 shrink-0" />
                  <span><strong>Arabic & Islamic:</strong> MOE requires passing grades in Ministry Arabic and Islamic Studies (for Arab/Muslim students) for equivalency.</span>
                </li>
                <li className="flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 shrink-0" />
                  <span><strong>EmSAT:</strong> Depending on the university, you may still need to take EmSAT exams in Math, Physics, or English.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Egypt Profile */}
      <ScrollReveal direction="up" delay={0.4}>
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3 text-ruby-light">
            <Globe2 className="w-8 h-8" />
            Egypt Equivalency
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass p-8 rounded-3xl">
              <h3 className="text-2xl font-bold mb-4">The &quot;8+1 Rule&quot;</h3>
              <div className="text-5xl font-extrabold text-gold mb-4">8 <span className="text-2xl text-gray-400">+</span> 1 <span className="text-2xl text-gray-400">or</span> 2</div>
              <p className="text-lg text-gray-300 leading-relaxed mb-4">
                The Supreme Council of Universities in Egypt has a strict formula:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-400 text-lg">
                <li><strong className="text-white">8 IGCSEs</strong> (Minimum grade C/4)</li>
                <li><strong className="text-white">1 Full A-Level</strong> <span className="text-white font-bold">OR</span> <strong className="text-white">2 AS Levels</strong></li>
              </ul>
            </div>

            <div className="glass p-8 rounded-3xl border-t-4 border-t-ruby">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Lock className="w-6 h-6 text-ruby" />
                Subject Locks
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                In Egypt, what you study determines exactly what you can major in. These are &quot;Subject Locks&quot;:
              </p>
              <ul className="space-y-3 text-gray-400">
                <li className="flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-ruby mt-2 shrink-0" />
                  <span><strong>Engineering:</strong> You absolutely must have A-Level Math (or AS Math + AS Physics/Chemistry). IGCSE Math, Physics, and Chem are mandatory.</span>
                </li>
                <li className="flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-ruby mt-2 shrink-0" />
                  <span><strong>Medicine:</strong> A-Level Biology is required. IGCSE Biology, Chemistry, and Physics are mandatory.</span>
                </li>
                <li className="flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-ruby mt-2 shrink-0" />
                  <span><strong>Business/Arts:</strong> Usually requires only the base 8 IGCSEs, but an AS/A-Level in a relevant subject boosts your application.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}
