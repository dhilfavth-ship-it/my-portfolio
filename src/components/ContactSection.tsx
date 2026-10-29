import React, { useState } from 'react';
import { PORTFOLIO_INFO } from '../data/portfolioData';
import { Mail, Github, Linkedin, Send, MapPin, CheckCircle2, Copy, Check } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [copiedEmail, setCopiedEmail] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 600);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_INFO.socials.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative bg-[#111827] border-t border-[#1E2A3A]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16">
          <p className="text-xs font-mono text-[#E8395A] uppercase tracking-[0.2em] mb-3">07 — Contact</p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2 className="text-3xl sm:text-5xl font-black text-[#F0EBF5] tracking-tight leading-tight">
              Let's Work<br />
              <span className="text-[#FF6B8A]">Together</span>
            </h2>
            <p className="text-sm text-[#8B9BB4] max-w-xs leading-relaxed">
              Whether you have an opportunity, a project, or a question — I'd love to connect.
            </p>
          </div>
        </div>

        {/* 2-Column Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Direct Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl bg-[#0B0F19] border border-[#1E2A3A] p-6 sm:p-7 space-y-6">
              <div>
                <h3 className="text-lg font-bold text-[#F0EBF5] mb-1.5">
                  Get in Touch
                </h3>
                <p className="text-xs text-[#8B9BB4] leading-relaxed">
                  Feel free to reach out directly via email or connect through LinkedIn and GitHub. I typically respond within 24 hours.
                </p>
              </div>

              <div className="space-y-3">
                {/* Email Item */}
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-[#111827] border border-[#1E2A3A]">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#E8395A]/10 border border-[#E8395A]/20 flex items-center justify-center text-[#FF6B8A]">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono uppercase text-[#4A5568]">Email</div>
                      <a
                        href={`mailto:${PORTFOLIO_INFO.socials.email}`}
                        className="text-xs font-semibold text-[#F0EBF5] hover:text-[#FF6B8A] transition-colors"
                      >
                        {PORTFOLIO_INFO.socials.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={copyEmail}
                    className="p-1.5 rounded-lg bg-[#1A2035] hover:bg-[#1E2A3A] text-[#8B9BB4] hover:text-[#F0EBF5] transition-colors cursor-pointer"
                    title="Copy email address"
                  >
                    {copiedEmail ? <Check className="w-3.5 h-3.5 text-[#10B981]" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                {/* LinkedIn Item */}
                <a
                  href={PORTFOLIO_INFO.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-[#111827] border border-[#1E2A3A] hover:border-[#38BDF8]/40 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#38BDF8]/10 border border-[#38BDF8]/20 flex items-center justify-center text-[#38BDF8]">
                      <Linkedin className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono uppercase text-[#4A5568]">LinkedIn</div>
                      <div className="text-xs font-semibold text-[#F0EBF5] group-hover:text-[#38BDF8] transition-colors">
                        Connect on LinkedIn
                      </div>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-[#4A5568] group-hover:text-[#F0EBF5]">→</span>
                </a>

                {/* GitHub Item */}
                <a
                  href={PORTFOLIO_INFO.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-[#111827] border border-[#1E2A3A] hover:border-[#E8395A]/40 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#E8395A]/10 border border-[#E8395A]/20 flex items-center justify-center text-[#FF6B8A]">
                      <Github className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono uppercase text-[#4A5568]">GitHub</div>
                      <div className="text-xs font-semibold text-[#F0EBF5] group-hover:text-[#FF6B8A] transition-colors">
                        View Code Repositories
                      </div>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-[#4A5568] group-hover:text-[#F0EBF5]">→</span>
                </a>

                {/* Location Item */}
                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#111827] border border-[#1E2A3A]">
                  <div className="w-9 h-9 rounded-xl bg-[#10B981]/10 border border-[#10B981]/20 flex items-center justify-center text-[#10B981]">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono uppercase text-[#4A5568]">Location</div>
                    <div className="text-xs font-semibold text-[#F0EBF5]">
                      {PORTFOLIO_INFO.location}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-[#0B0F19] border border-[#1E2A3A] p-6 sm:p-8">
              <h3 className="text-lg font-bold text-[#F0EBF5] mb-1.5">
                Send a Message
              </h3>
              <p className="text-xs text-[#8B9BB4] mb-6">
                Fill out the form below and I will get back to you promptly.
              </p>

              {isSubmitted ? (
                <div className="p-6 rounded-2xl bg-[#10B981]/10 border border-[#10B981]/30 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-[#10B981]/20 flex items-center justify-center mx-auto text-[#10B981]">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-[#F0EBF5]">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-xs text-[#8B9BB4] max-w-sm mx-auto">
                    Thank you for reaching out. I have received your message and will reply as soon as possible.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-2 px-4 py-2 rounded-xl bg-[#111827] border border-[#1E2A3A] text-xs font-mono text-[#F0EBF5] hover:border-[#E8395A]/50 transition-colors cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-xs font-mono text-[#8B9BB4]">
                        Your Name <span className="text-[#E8395A]">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#111827] border border-[#1E2A3A] text-sm text-[#F0EBF5] placeholder-[#4A5568] focus:outline-none focus:border-[#E8395A]/60 transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-xs font-mono text-[#8B9BB4]">
                        Your Email <span className="text-[#E8395A]">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#111827] border border-[#1E2A3A] text-sm text-[#F0EBF5] placeholder-[#4A5568] focus:outline-none focus:border-[#E8395A]/60 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="subject" className="text-xs font-mono text-[#8B9BB4]">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project Inquiry / Job Opportunity"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#111827] border border-[#1E2A3A] text-sm text-[#F0EBF5] placeholder-[#4A5568] focus:outline-none focus:border-[#E8395A]/60 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-xs font-mono text-[#8B9BB4]">
                      Message <span className="text-[#E8395A]">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Hi Fathima, I'd like to talk about..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#111827] border border-[#1E2A3A] text-sm text-[#F0EBF5] placeholder-[#4A5568] focus:outline-none focus:border-[#E8395A]/60 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#E8395A] hover:bg-[#FF6B8A] text-white text-sm font-bold tracking-wide transition-all duration-200 shadow-[0_4px_20px_rgba(232,57,90,0.35)] hover:shadow-[0_6px_28px_rgba(232,57,90,0.5)] disabled:opacity-50 cursor-pointer active:scale-[0.99]"
                  >
                    <Send className={`w-4 h-4 ${isSubmitting ? 'animate-spin' : ''}`} />
                    <span>{isSubmitting ? 'Sending Message...' : 'Send Message'}</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
