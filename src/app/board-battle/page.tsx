import { ScrollReveal } from "@/components/ScrollReveal";
import { CheckCircle2, XCircle, ShieldAlert, GitMerge } from "lucide-react";

export default function BoardBattle() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12">
      <ScrollReveal>
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">The Board Battle</h1>
          <p className="text-xl text-gray-400">CIE vs. Edexcel vs. OxfordAQA</p>
        </div>
      </ScrollReveal>

      {/* The Matrix */}
      <ScrollReveal delay={0.2}>
        <div className="glass rounded-3xl overflow-hidden mb-24">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-dark-200/50">
                  <th className="p-6 font-bold text-lg border-b border-white/10 w-1/4">Feature</th>
                  <th className="p-6 font-bold text-lg border-b border-white/10 text-ruby-light w-1/4">Cambridge (CIE)</th>
                  <th className="p-6 font-bold text-lg border-b border-white/10 text-gold w-1/4">Edexcel (Pearson)</th>
                  <th className="p-6 font-bold text-lg border-b border-white/10 text-blue-400 w-1/4">OxfordAQA</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="p-6 font-medium text-gray-300">Exam Structure</td>
                  <td className="p-6">Linear (All exams at the end of the course)</td>
                  <td className="p-6">Modular (Can be taken in parts/units)</td>
                  <td className="p-6">Modular (Unit-based exams)</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="p-6 font-medium text-gray-300">Retakes</td>
                  <td className="p-6">Must retake the entire syllabus</td>
                  <td className="p-6">Can retake specific units to improve grade</td>
                  <td className="p-6">Can retake specific units</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="p-6 font-medium text-gray-300">Difficulty Perception</td>
                  <td className="p-6">Considered rigorous with strict grading</td>
                  <td className="p-6">Often seen as more student-friendly for Sciences/Math</td>
                  <td className="p-6">Modern syllabus, focused on critical thinking</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="p-6 font-medium text-gray-300">Availability</td>
                  <td className="p-6">Universally available globally</td>
                  <td className="p-6">Very common, especially in MENA</td>
                  <td className="p-6">Growing rapidly in the Middle East</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </ScrollReveal>

      {/* Linear vs Modular */}
      <div className="grid md:grid-cols-2 gap-8 mb-24">
        <ScrollReveal direction="left" delay={0.2}>
          <div className="glass p-8 rounded-3xl h-full border-l-4 border-l-ruby">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <ShieldAlert className="text-ruby w-6 h-6" />
              Linear Exams (CIE)
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              In a linear system, you sit for all your exams at the very end of the course (usually May/June of Year 11 or Year 13).
            </p>
            <ul className="space-y-3">
              <li className="flex gap-2 text-gray-400">
                <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                Good for students who retain information well over a long period.
              </li>
              <li className="flex gap-2 text-gray-400">
                <XCircle className="w-5 h-5 text-red-500 shrink-0" />
                High pressure: If you have a bad day, your entire grade is affected, and you must retake all papers for that subject.
              </li>
            </ul>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="right" delay={0.4}>
          <div className="glass p-8 rounded-3xl h-full border-l-4 border-l-gold">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <ShieldAlert className="text-gold w-6 h-6" />
              Modular Exams (Edexcel/AQA)
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              The syllabus is split into units. You take an exam for each unit. If you do poorly on Unit 1, you can just retake Unit 1 later without re-doing the whole subject.
            </p>
            <ul className="space-y-3">
              <li className="flex gap-2 text-gray-400">
                <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                Reduces stress by spreading exams out. Cash-in rules allow you to combine best unit scores.
              </li>
              <li className="flex gap-2 text-gray-400">
                <XCircle className="w-5 h-5 text-red-500 shrink-0" />
                Constant exam pressure throughout the year as you prepare for unit exams (Jan/June/Oct).
              </li>
            </ul>
          </div>
        </ScrollReveal>
      </div>

      {/* The Mix & Match Rule */}
      <ScrollReveal direction="up">
        <div className="relative glass p-10 md:p-14 rounded-3xl overflow-hidden bg-gradient-to-br from-dark-100 to-dark-200">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <GitMerge className="w-48 h-48" />
          </div>
          <div className="relative z-10 max-w-3xl">
            <h2 className="text-3xl font-bold mb-6 text-gold">The &quot;Mix &amp; Match&quot; Rule</h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              <strong className="text-white">Did you know?</strong> You are <span className="underline decoration-ruby underline-offset-4 font-bold">not</span> restricted to a single exam board for all your subjects.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              Universities globally do not penalize you for mixing boards. You can take IGCSE Math with Edexcel, IGCSE English with CIE, and Physics with OxfordAQA.
              The strategic move is to look at the syllabus and past papers for each board and choose the one that plays to your strengths for each specific subject.
            </p>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}
