import { useState } from 'react';
import { FiCheck, FiCopy } from 'react-icons/fi';
import LetterReveal from '../components/LetterReveal.jsx';
import Reveal from '../components/Reveal.jsx';
import RollingButton from '../components/RollingButton.jsx';
import { personalInfo } from '../data/portfolio.js';

export function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    companyName: '',
    websiteUrl: '',
    service: '',
    budget: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [formattedText, setFormattedText] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = `Project Inquiry: ${formData.fullName} - ${formData.service || 'Software Engineering'}`;
    const body = [
      'PROJECT INQUIRY',
      '--------------------------------',
      `Full Name: ${formData.fullName}`,
      `Email: ${formData.email}`,
      `Company: ${formData.companyName || 'Not specified'}`,
      `Website: ${formData.websiteUrl || 'Not specified'}`,
      `Requested Service: ${formData.service || 'General inquiry'}`,
      `Budget Range: ${formData.budget || 'Flexible'}`,
      '',
      'Project Details:',
      formData.message,
      '--------------------------------',
      'Sent via Kehinde Salimonu Portfolio (KennyDev)',
    ].join('\n');

    setFormattedText(body);
    setSubmitted(true);

    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    window.location.assign(mailtoUrl);
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(formattedText);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      setCopied(true);
    }
  };

  return (
    <div className="flex flex-col bg-white dark:bg-[#0c0c0c] transition-colors duration-200">
        {/* ==================== TITLE ==================== */}
        <section className="w-full pt-16 pb-20 lg:px-10 md:px-8 px-5 bg-white dark:bg-[#0c0c0c] transition-colors duration-200">
          <div className="max-w-[1400px] mx-auto text-center">
            <LetterReveal
              lines={['Contact', 'With Me']}
              className="text-[50px] md:text-[80px] lg:text-[110px] font-black uppercase tracking-tighter leading-[0.95] text-[#171717] dark:text-white"
            />
          </div>
        </section>

        {/* ==================== CONTENT GRID ==================== */}
        <section className="w-full py-24 lg:px-10 md:px-8 px-5 bg-white dark:bg-[#0c0c0c] border-t border-[#f0f0f0] dark:border-[#1e1e1e] transition-colors duration-200">
          <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
            {/* Left Column: Direct Info */}
            <Reveal x={-30} y={0} className="lg:col-span-4 flex flex-col gap-12">
              <div className="flex flex-col gap-3">
                <p className="text-[12px] font-bold uppercase tracking-widest text-[#171717]/40 dark:text-white/40">
                  Office Location
                </p>
                <div className="text-[14px] md:text-[15px] font-medium text-[#171717] dark:text-white leading-relaxed">
                  <p>Lagos, Nigeria</p>
                  <p>Available Worldwide</p>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <p className="text-[12px] font-bold uppercase tracking-widest text-[#171717]/40 dark:text-white/40">
                  Office Time
                </p>
                <div className="text-[14px] md:text-[15px] font-medium text-[#171717] dark:text-white leading-relaxed">
                  <p>Monday – Sunday</p>
                  <p>24/7 hours</p>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <p className="text-[12px] font-bold uppercase tracking-widest text-[#171717]/40 dark:text-white/40">
                  Support
                </p>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-[14px] md:text-[15px] font-medium text-[#171717] dark:text-white hover:underline"
                >
                  {personalInfo.email}
                </a>
              </div>

              <div className="flex flex-col gap-3">
                <p className="text-[12px] font-bold uppercase tracking-widest text-[#171717]/40 dark:text-white/40">
                  Resume
                </p>
                <a
                  href={personalInfo.resumeUrl}
                  download
                  className="inline-flex w-fit items-center border border-[#171717] dark:border-white px-4 py-2 text-[12px] font-bold uppercase tracking-wider text-[#171717] dark:text-white transition-colors duration-300 hover:bg-[#171717] hover:text-white dark:hover:bg-white dark:hover:text-black"
                >
                  View CV
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.12} className="lg:col-span-8">
              {submitted ? (
                <div className="p-8 md:p-12 border border-[#e5e5e5] dark:border-[#222222] bg-[#fafafa] dark:bg-[#141414] transition-colors duration-200">
                  <div className="w-12 h-12 bg-black text-white dark:bg-white dark:text-black flex items-center justify-center mb-6">
                    <FiCheck size={24} />
                  </div>
                  <h3 className="text-2xl font-black text-[#171717] dark:text-white mb-3">
                    Inquiry Draft Prepared!
                  </h3>
                  <p className="text-sm text-[#171717]/60 dark:text-white/60 mb-6 max-w-lg leading-relaxed">
                    Your email client should have opened with your pre-filled message. If it didn&apos;t open automatically, you can copy the inquiry text below and send it directly to{' '}
                    <strong className="text-black dark:text-white">{personalInfo.email}</strong>.
                  </p>

                  <div className="p-4 bg-white dark:bg-[#1a1a1a] border border-[#e0e0e0] dark:border-[#2a2a2a] font-mono text-xs text-[#171717] dark:text-[#ededed] whitespace-pre-wrap max-h-60 overflow-y-auto mb-6">
                    {formattedText}
                  </div>

                  <div className="flex flex-wrap items-center gap-4">
                    <button
                      type="button"
                      onClick={handleCopy}
                      className="px-5 py-2.5 bg-black text-white dark:bg-white dark:text-black font-bold text-sm flex items-center gap-2 hover:bg-[#333] dark:hover:bg-[#ccc] transition-colors cursor-pointer"
                    >
                      {copied ? (
                        <>
                          <FiCheck /> Copied!
                        </>
                      ) : (
                        <>
                          <FiCopy /> Copy inquiry text
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          fullName: '',
                          email: '',
                          companyName: '',
                          websiteUrl: '',
                          service: '',
                          budget: '',
                          message: '',
                        });
                      }}
                      className="text-xs font-bold uppercase tracking-wider text-[#171717]/60 dark:text-white/60 hover:text-black dark:hover:text-white underline ml-auto cursor-pointer"
                    >
                      Send another message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col gap-2">
                      <label className="text-[13px] font-bold text-[#171717] dark:text-white">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        placeholder="Your full name"
                        value={formData.fullName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 text-[14px] text-[#171717] dark:text-white bg-white dark:bg-[#141414] border border-[#e0e0e0] dark:border-[#2a2a2a] outline-none focus:border-black dark:focus:border-white transition-colors duration-300 placeholder:text-[#171717]/30 dark:placeholder:text-white/30"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-[13px] font-bold text-[#171717] dark:text-white">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="you@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 text-[14px] text-[#171717] dark:text-white bg-white dark:bg-[#141414] border border-[#e0e0e0] dark:border-[#2a2a2a] outline-none focus:border-black dark:focus:border-white transition-colors duration-300 placeholder:text-[#171717]/30 dark:placeholder:text-white/30"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col gap-2">
                      <label className="text-[13px] font-bold text-[#171717] dark:text-white">
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="companyName"
                        placeholder="Your company"
                        value={formData.companyName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 text-[14px] text-[#171717] dark:text-white bg-white dark:bg-[#141414] border border-[#e0e0e0] dark:border-[#2a2a2a] outline-none focus:border-black dark:focus:border-white transition-colors duration-300 placeholder:text-[#171717]/30 dark:placeholder:text-white/30"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-[13px] font-bold text-[#171717] dark:text-white">
                        Website URL
                      </label>
                      <input
                        type="url"
                        name="websiteUrl"
                        placeholder="https://yourwebsite.com"
                        value={formData.websiteUrl}
                        onChange={handleChange}
                        className="w-full px-4 py-3 text-[14px] text-[#171717] dark:text-white bg-white dark:bg-[#141414] border border-[#e0e0e0] dark:border-[#2a2a2a] outline-none focus:border-black dark:focus:border-white transition-colors duration-300 placeholder:text-[#171717]/30 dark:placeholder:text-white/30"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col gap-2">
                      <label className="text-[13px] font-bold text-[#171717] dark:text-white">
                        What services are you looking for?
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 text-[14px] text-[#171717] dark:text-white bg-white dark:bg-[#141414] border border-[#e0e0e0] dark:border-[#2a2a2a] outline-none focus:border-black dark:focus:border-white transition-colors duration-300"
                      >
                        <option value="">Select your service</option>
                        <option value="Backend & APIs">Backend & APIs</option>
                        <option value="Frontend Engineering">Frontend Engineering</option>
                        <option value="System Design">System Design</option>
                        <option value="Full-Stack Platforms">Full-Stack Platforms</option>
                        <option value="UI / UX Thinking">UI / UX Thinking</option>
                        <option value="Product Architecture">Product Architecture</option>
                        <option value="Product Architecture">Custom Consultation</option>
                      </select>
                    </div>

                    {/* <div className="flex flex-col gap-2">
                      <label className="text-[13px] font-bold text-[#171717] dark:text-white">
                        Project Budget
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 text-[14px] text-[#171717] dark:text-white bg-white dark:bg-[#141414] border border-[#e0e0e0] dark:border-[#2a2a2a] outline-none focus:border-black dark:focus:border-white transition-colors duration-300"
                      >
                        <option value="">Select your budget</option>
                        <option value="< $5,000">&lt; $5,000</option>
                        <option value="$5,000 - $15,000">$5,000 - $15,000</option>
                        <option value="$15,000+">$15,000+</option>
                        <option value="Flexible">Flexible</option>
                      </select>
                    </div> */}
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-[13px] font-bold text-[#171717] dark:text-white">
                      Tell me about your project
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      placeholder="Brief description of your project, goals, and timeline..."
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 text-[14px] text-[#171717] dark:text-white bg-white dark:bg-[#141414] border border-[#e0e0e0] dark:border-[#2a2a2a] outline-none focus:border-black dark:focus:border-white transition-colors duration-300 placeholder:text-[#171717]/30 dark:placeholder:text-white/30 resize-y"
                    />
                  </div>

                  <RollingButton type="submit" variant="black" className="self-start px-8 py-3">
                    Send Message
                  </RollingButton>
                </form>
              )}
            </Reveal>
          </div>
        </section>
      </div>
  );
}

export default ContactPage;
