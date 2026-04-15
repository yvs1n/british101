"use client";

import { ScrollReveal } from "@/components/ScrollReveal";
import { ChevronDown, HelpCircle } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const MYTHS = [
  {
    id: 1,
    myth: `"One board is harder than the other."`,
    truth: `False. Universities treat an A* from Cambridge (CIE) exactly the same as an A* from Edexcel or OxfordAQA. The syllabus style might differ (Linear vs. Modular), but the regulatory body (Ofqual) ensures the difficulty and grading standards are equivalent. Choose the board that fits your studying style.`,
  },
  {
    id: 2,
    myth: `"You need 5 A-Levels for top universities."`,
    truth: `False. Quality heavily outweighs quantity. Even Oxford, Cambridge, and Ivy League schools standardly ask for 3 or 4 A-Levels. Getting A*A*A* in three subjects is infinitely more valuable than getting BBBBB in five subjects. Focus on dominating 3 subjects related to your major.`,
  },
  {
    id: 3,
    myth: `"IGCSE Arabic is mandatory for Egypt."`,
    truth: `Clarification needed. The British IGCSE Arabic (First or Second Language) is NOT what the Egyptian Ministry of Education requires for equivalency. You must pass the specific Egyptian National Ministry Exams for Arabic, Religion, and Civics (Thanaweya Amma equivalents) to enroll in an Egyptian university. Taking IGCSE Arabic is optional and counts as one of your 8 subjects, but doesn't replace the Ministry exam.`,
  },
  {
    id: 4,
    myth: `"Using AI in coursework is okay as long as I rewrite it."`,
    truth: `Warning! Exam boards (especially for 2025/2026 cycles) have deployed advanced forensic AI detection tools. Schools are also implementing strict proctoring for coursework. If you are caught using AI to generate coursework for subjects like Computer Science, Global Perspectives, or Art, you risk being disqualified from ALL your subjects across that exam board.`,
  }
];

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(1);

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-12">
      <ScrollReveal>
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">The Parent&apos;s FAQ</h1>
          <p className="text-xl text-gray-400">Myth-Busting the British Curriculum</p>
        </div>
      </ScrollReveal>

      <div className="space-y-4">
        {MYTHS.map((item, index) => (
          <ScrollReveal key={item.id} delay={0.1 * index}>
            <div
              className={cn(
                "glass rounded-2xl overflow-hidden transition-all duration-300",
                openId === item.id ? "border-ruby shadow-[0_0_15px_rgba(224,17,95,0.2)]" : "border-white/10 hover:border-white/20"
              )}
            >
              <button
                onClick={() => setOpenId(openId === item.id ? null : item.id)}
                className="w-full p-6 flex items-center justify-between text-left focus:outline-none"
              >
                <div className="flex items-center gap-4">
                  <div className={cn("p-2 rounded-lg transition-colors", openId === item.id ? "bg-ruby" : "bg-dark-200")}>
                    <HelpCircle className={cn("w-6 h-6", openId === item.id ? "text-white" : "text-gray-400")} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-200">Myth: <span className={cn("italic", openId === item.id ? "text-white" : "")}>{item.myth}</span></h3>
                </div>
                <ChevronDown
                  className={cn("w-6 h-6 text-gray-400 transition-transform duration-300 shrink-0", openId === item.id ? "rotate-180" : "")}
                />
              </button>

              <div
                className={cn(
                  "overflow-hidden transition-all duration-300 ease-in-out",
                  openId === item.id ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                )}
              >
                <div className="p-6 pt-0 border-t border-white/5 mt-2">
                  <h4 className="text-sm text-ruby-light uppercase tracking-wider font-bold mb-3">The Truth</h4>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    {item.truth}
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}
