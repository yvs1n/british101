"use client";

import { ScrollReveal } from "@/components/ScrollReveal";
import { Send, Heart, Coffee, CreditCard } from "lucide-react";
import { useState } from "react";

export default function Support() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    yearLevel: "",
    country: "",
    major: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Mentorship request sent successfully! (This is a mock implementation)");
    setFormData({ name: "", email: "", yearLevel: "", country: "", major: "", message: "" });
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12">
      <ScrollReveal>
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Support & Mentorship</h1>
          <p className="text-xl text-gray-400">Get personalized advice or support our charity mission</p>
        </div>
      </ScrollReveal>

      <div className="grid lg:grid-cols-5 gap-12">
        {/* Contact Form */}
        <ScrollReveal className="lg:col-span-3" direction="left" delay={0.2}>
          <div className="glass p-8 md:p-10 rounded-3xl h-full">
            <h2 className="text-2xl font-bold mb-6">Request Mentorship</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-dark-200 border border-white/10 rounded-xl py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-ruby"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-dark-200 border border-white/10 rounded-xl py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-ruby"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Year Level</label>
                  <select
                    value={formData.yearLevel}
                    onChange={(e) => setFormData({...formData, yearLevel: e.target.value})}
                    className="w-full bg-dark-200 border border-white/10 rounded-xl py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-ruby appearance-none"
                    required
                  >
                    <option value="" disabled>Select...</option>
                    <option value="9">Year 9</option>
                    <option value="10">Year 10</option>
                    <option value="11">Year 11</option>
                    <option value="12">Year 12</option>
                    <option value="13">Year 13</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Country</label>
                  <input
                    type="text"
                    required
                    value={formData.country}
                    onChange={(e) => setFormData({...formData, country: e.target.value})}
                    className="w-full bg-dark-200 border border-white/10 rounded-xl py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-ruby"
                    placeholder="e.g. UAE"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Target Major</label>
                  <input
                    type="text"
                    required
                    value={formData.major}
                    onChange={(e) => setFormData({...formData, major: e.target.value})}
                    className="w-full bg-dark-200 border border-white/10 rounded-xl py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-ruby"
                    placeholder="e.g. Medicine"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">How can we help?</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-dark-200 border border-white/10 rounded-xl py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-ruby resize-none"
                  placeholder="Tell us about your situation..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-ruby hover:bg-ruby-light text-white px-8 py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2"
              >
                Send Message <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </ScrollReveal>

        {/* Sponsor Section */}
        <ScrollReveal className="lg:col-span-2" direction="right" delay={0.4}>
          <div className="glass p-8 md:p-10 rounded-3xl h-full flex flex-col justify-center relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <Heart className="w-48 h-48" />
            </div>

            <div className="relative z-10">
              <div className="bg-ruby/20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-ruby" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Sponsor the Project</h2>
              <p className="text-gray-300 leading-relaxed mb-8">
                British Curriculum 101 is a 100% free, charity-first platform.
                Your contributions help us keep the servers running and cover API costs for future AI-driven mentorship features.
              </p>

              <div className="space-y-4">
                <button
                  onClick={() => alert("Redirecting to Buy Me a Coffee...")}
                  className="w-full bg-[#FFDD00] hover:bg-[#FFEA00] text-black px-6 py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-3"
                >
                  <Coffee className="w-5 h-5" />
                  Buy Me a Coffee
                </button>
                <button
                  onClick={() => alert("Redirecting to Stripe...")}
                  className="w-full bg-[#635BFF] hover:bg-[#7A73FF] text-white px-6 py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-3"
                >
                  <CreditCard className="w-5 h-5" />
                  Donate via Stripe
                </button>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
