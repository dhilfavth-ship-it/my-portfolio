import React, { useState } from 'react';
import { PORTFOLIO_INFO } from '../data/portfolioData';
import { Mail, Github, Linkedin, Send, MapPin, CheckCircle2, MessageSquare, Copy, Check } from 'lucide-react';

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
    <section id="contact" className="py-20 md:py-28 relative bg-[#0A0A0C] border-t border-[#1F1B26]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#181420] border border-[#2B2336] text-xs font-mono text-[#FB7185] uppercase tracking-wider mb-3">
            <MessageSquare className="w-3.5 h-3.5 text-[#E11D48]" />
            <span>Section 07 · Contact</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let's Work Together
          </h2>
          <p className="text-sm sm:text-base text-[#9E97A6] mt-2 max-w-xl font-normal">
            Whether you have a full-stack opportunity, an architecture project, or a technical question, I'd love to connect with you.
          </p>
        </div>

        {/* 2-Column Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Direct Channels (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl bg-[#121017] border border-[#231E2C] p-6 sm:p-7 space-y-6 shadow-sm">
              <div>
                <h3 className="text-lg font-bold text-white mb-1.5">
                  Get in Touch
                </h3>
                <p className="text-xs text-[#9E97A6] leading-relaxed">
                  Feel free to reach out directly via email or connect through LinkedIn and GitHub. I typically respond within 24 hours.
                </p>
              </div>

              <div className="space-y-3">
                {/* Email Item */}
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-[#17131F] border border-[#261F30]">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#241A2D] flex items-center justify-center text-[#FB7185]">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono uppercase text-[#8E8798]">Email</div>
                      <a
                        href={`mailto:${PORTFOLIO_INFO.socials.email}`}
                        className="text-xs font-semibold text-white hover:text-[#FB7185] transition-colors"
                      >
                        {PORTFOLIO_INFO.socials.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={copyEmail}
                    className="p-1.5 rounded-lg bg-[#20192A] hover:bg-[#2B2238] text-[#9E97A6] hover:text-white transition-colors cursor-pointer"
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
                  className="flex items-center justify-between p-3.5 rounded-xl bg-[#17131F] border border-[#261F30] hover:border-[#38BDF8]/40 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#1B2533] flex items-center justify-center text-[#38BDF8]">
                      <Linkedin className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono uppercase text-[#8E8798]">LinkedIn</div>
                      <div className="text-xs font-semibold text-white group-hover:text-[#38BDF8] transition-colors">
                        Connect on LinkedIn
                      </div>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-[#8E8798] group-hover:text-white">→</span>
                </a>

                {/* GitHub Item */}
                <a
                  href={PORTFOLIO_INFO.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-[#17131F] border border-[#261F30] hover:border-[#E11D48]/40 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#241A2D] flex items-center justify-center text-[#FB7185]">
                      <Github className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono uppercase text-[#8E8798]">GitHub</div>
                      <div className="text-xs font-semibold text-white group-hover:text-[#FB7185] transition-colors">
                        View Code Repositories
                      </div>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-[#8E8798] group-hover:text-white">→</span>
                </a>

                {/* Location Item */}
                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#17131F] border border-[#261F30]">
                  <div className="w-9 h-9 rounded-xl bg-[#1B2421] flex items-center justify-center text-[#10B981]">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono uppercase text-[#8E8798]">Location</div>
                    <div className="text-xs font-semibold text-white">
                      {PORTFOLIO_INFO.location}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Simple Working Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-[#121017] border border-[#231E2C] p-6 sm:p-8 shadow-sm">
              <h3 className="text-lg font-bold text-white mb-1.5">
                Send a Message
              </h3>
              <p className="text-xs text-[#9E97A6] mb-6">
                Fill out the form below and I will get back to you promptly.
              </p>

              {isSubmitted ? (
                <div className="p-6 rounded-xl bg-[#10B981]/10 border border-[#10B981]/30 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-[#10B981]/20 flex items-center justify-center mx-auto text-[#10B981]">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-white">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-xs text-[#D4CEDB] max-w-sm mx-auto">
                    Thank you for reaching out. I have received your message and will reply to you as soon as possible.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-2 px-4 py-2 rounded-lg bg-[#191522] border border-[#2B2336] text-xs font-mono text-white hover:border-[#E11D48] transition-colors cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-xs font-mono text-[#D4CEDB]">
                        Your Name <span className="text-[#E11D48]">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#17131F] border border-[#261F30] text-sm text-white placeholder-[#6E6778] focus:outline-none focus:border-[#E11D48] transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-xs font-mono text-[#D4CEDB]">
                        Your Email <span className="text-[#E11D48]">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#17131F] border border-[#261F30] text-sm text-white placeholder-[#6E6778] focus:outline-none focus:border-[#E11D48] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="subject" className="text-xs font-mono text-[#D4CEDB]">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project Inquiry / Job Opportunity"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#17131F] border border-[#261F30] text-sm text-white placeholder-[#6E6778] focus:outline-none focus:border-[#E11D48] transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-xs font-mono text-[#D4CEDB]">
                      Message <span className="text-[#E11D48]">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Hi Fathima, I'd like to talk about..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#17131F] border border-[#261F30] text-sm text-white placeholder-[#6E6778] focus:outline-none focus:border-[#E11D48] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-[#E11D48] to-[#BE123C] hover:from-[#F43F5E] hover:to-[#E11D48] text-white text-sm font-semibold tracking-wide transition-all duration-200 shadow-[0_4px_16px_rgba(225,29,72,0.3)] hover:shadow-[0_6px_24px_rgba(225,29,72,0.45)] disabled:opacity-50 cursor-pointer active:scale-[0.99]"
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
