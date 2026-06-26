"use client";

import { useState } from "react";
import InsuranceLogo from "@/components/InsuranceLogo";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* ─── NAVBAR ─── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#fffbf5]/90 backdrop-blur-md border-b border-amber-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="flex flex-col leading-tight">
            <span
              className="text-lg font-semibold text-amber-900"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Axial Holistic
            </span>
            <span className="text-xs tracking-widest text-amber-700 uppercase">
              Depression Clinic
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8 text-sm text-stone-600 font-medium">
            <a href="#about" className="hover:text-amber-800 transition-colors">
              About Us
            </a>
            <a
              href="#approach"
              className="hover:text-amber-800 transition-colors"
            >
              Our Approach
            </a>
            <a href="#what-to-expect" className="hover:text-amber-800 transition-colors">
              What to Expect
            </a>
            <a
              href="#contact"
              className="bg-amber-600 text-white px-5 py-2 rounded-full text-sm hover:bg-amber-700 transition-colors"
            >
              Schedule a Conversation
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-stone-600"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-0.5 bg-current mb-1.5" />
            <div className="w-6 h-0.5 bg-current mb-1.5" />
            <div className="w-6 h-0.5 bg-current" />
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-[#fffbf5] border-t border-amber-100 px-6 py-4 flex flex-col gap-4 text-stone-700 text-sm font-medium">
            <a href="#about" onClick={() => setMenuOpen(false)}>
              About Us
            </a>
            <a href="#approach" onClick={() => setMenuOpen(false)}>
              Our Approach
            </a>
            <a href="#what-to-expect" onClick={() => setMenuOpen(false)}>
              What to Expect
            </a>
            <a
              href="#contact"
              className="bg-amber-600 text-white px-5 py-2 rounded-full text-center"
              onClick={() => setMenuOpen(false)}
            >
              Schedule a Conversation
            </a>
          </div>
        )}
      </nav>

      <main className="flex-1">
        {/* ─── HERO ─── */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Sunrise gradient background */}
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-950 via-purple-900 via-40% to-amber-500" />

          {/* Soft glow overlay */}
          <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-amber-300/40 to-transparent" />

          {/* Horizon line glow */}
          <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-300/60 to-transparent" />

          <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
            <p className="animate-fade-up text-amber-300 text-sm tracking-[0.3em] uppercase font-medium mb-6">
              Axial Holistic Depression Clinic
            </p>

            <h1
              className="animate-fade-up-1 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white leading-tight mb-8"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Your Darkness
              <br />
              <span className="text-amber-300">Doesn&apos;t Have to Last.</span>
            </h1>

            <p className="animate-fade-up-2 text-lg sm:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed mb-10">
              If depression has persisted despite your best efforts and
              treatments you&apos;ve already tried, you&apos;re not out of
              options — you&apos;ve simply arrived at the right place.
            </p>

            <div className="animate-fade-up-3 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="bg-amber-500 hover:bg-amber-400 text-white font-semibold px-8 py-4 rounded-full transition-colors text-base shadow-lg shadow-amber-900/30"
              >
                Take the First Step
              </a>
              <a
                href="#about"
                className="border border-white/40 hover:border-white/80 text-white px-8 py-4 rounded-full transition-colors text-base backdrop-blur-sm"
              >
                Learn About Us
              </a>
            </div>
          </div>

          {/* Scroll cue */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="rgba(255,255,255,0.5)"
              strokeWidth="2"
            >
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </div>
        </section>

        {/* ─── MISSION STATEMENT ─── */}
        <section className="bg-amber-50 py-20 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <p
              className="text-2xl sm:text-3xl md:text-4xl font-medium text-stone-800 leading-relaxed"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              &ldquo;We believe every person with treatment-resistant depression
              deserves a care team that{" "}
              <span className="text-amber-700 italic">never gives up.</span>
              &rdquo;
            </p>
            <div className="mt-8 h-px w-16 bg-amber-400 mx-auto" />
          </div>
        </section>

        {/* ─── WHO WE HELP ─── */}
        <section id="about" className="py-24 px-6 bg-[#fffbf5]">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              {/* Left: image placeholder with sunrise illustration */}
              <div className="relative rounded-3xl overflow-hidden aspect-square bg-gradient-to-br from-indigo-100 via-purple-50 to-amber-100 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-200/60 via-purple-100/40 to-amber-200/60" />
                <div className="relative z-10 text-center px-8">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-b from-amber-300 to-amber-500 flex items-center justify-center shadow-lg shadow-amber-200">
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="1.5"
                    >
                      <circle cx="12" cy="12" r="4" />
                      <path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
                    </svg>
                  </div>
                  <p
                    className="text-stone-700 text-lg font-medium"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    Light is waiting on the other side.
                  </p>
                </div>
              </div>

              {/* Right: content */}
              <div>
                <p className="text-amber-600 text-sm tracking-widest uppercase font-medium mb-4">
                  Who We Help
                </p>
                <h2
                  className="text-3xl sm:text-4xl font-semibold text-stone-900 mb-6 leading-snug"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  You&apos;ve Tried.
                  <br />
                  You&apos;ve Fought.
                  <br />
                  <span className="text-amber-700">
                    You Deserve More.
                  </span>
                </h2>
                <div className="space-y-4 text-stone-600 leading-relaxed text-base">
                  <p>
                    If you&apos;ve been through medications, therapy, or other
                    treatments and still find yourself weighed down by
                    depression — you&apos;re not broken, and you&apos;re not
                    alone.
                  </p>
                  <p>
                    Treatment-resistant depression is real. It affects many
                    people who simply need a different kind of care — a more
                    thorough, more personalized, more holistic approach than
                    what they&apos;ve received before.
                  </p>
                  <p>
                    That&apos;s exactly what we do. We work with people ages 12
                    and above who haven&apos;t found lasting relief, and we
                    build a path forward tailored entirely to them.
                  </p>
                </div>

                <div className="mt-8 grid grid-cols-2 gap-4">
                  {[
                    { num: "12+", label: "Ages Served" },
                    { num: "10+", label: "Years of Experience" },
                    { num: "5,000+", label: "Patients Helped" },
                    { num: "3×", label: "Board-Certified Physician" },
                  ].map(({ num, label }) => (
                    <div
                      key={label}
                      className="bg-amber-50 rounded-2xl p-4 border border-amber-100"
                    >
                      <p
                        className="text-2xl font-bold text-amber-700"
                        style={{ fontFamily: "var(--font-playfair)" }}
                      >
                        {num}
                      </p>
                      <p className="text-stone-500 text-sm mt-1">{label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── OUR APPROACH ─── */}
        <section id="approach" className="py-24 px-6 bg-stone-900">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-amber-400 text-sm tracking-widest uppercase font-medium mb-4">
                Our Approach
              </p>
              <h2
                className="text-3xl sm:text-4xl font-semibold text-white mb-4"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Holistic. Personal. Yours.
              </h2>
              <p className="text-stone-400 max-w-xl mx-auto">
                No two people experience depression the same way. Your care plan
                shouldn&apos;t be the same either.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  step: "01",
                  title: "We Listen First",
                  body: "We start with you — your history, your life, what you've already tried, and what matters most to you. Nothing is assumed.",
                  icon: (
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M12 2a10 10 0 0 1 10 10c0 3.87-2.19 7.22-5.4 8.9L15 22H9l-1.6-1.1A10 10 0 0 1 2 12 10 10 0 0 1 12 2z" />
                      <path d="M9 12a3 3 0 1 0 6 0 3 3 0 0 0-6 0" />
                    </svg>
                  ),
                },
                {
                  step: "02",
                  title: "We Look at the Whole Picture",
                  body: "Depression is rarely just one thing. We explore biological, psychological, and lifestyle factors to understand what's driving yours.",
                  icon: (
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 6v6l4 2" />
                    </svg>
                  ),
                },
                {
                  step: "03",
                  title: "We Build Your Plan",
                  body: "Together, we design a treatment approach built around your unique situation — not a protocol, not a one-size-fits-all answer.",
                  icon: (
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M9 11l3 3L22 4" />
                      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                    </svg>
                  ),
                },
                {
                  step: "04",
                  title: "We Walk With You",
                  body: "Recovery is a journey, not a single appointment. We stay by your side — adjusting, supporting, and celebrating every step forward.",
                  icon: (
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  ),
                },
              ].map(({ step, title, body, icon }) => (
                <div
                  key={step}
                  className="bg-stone-800 rounded-2xl p-6 border border-stone-700 hover:border-amber-600/50 transition-colors group"
                >
                  <div className="text-amber-400 mb-4 group-hover:text-amber-300 transition-colors">
                    {icon}
                  </div>
                  <p className="text-amber-600 text-xs font-bold tracking-wider mb-2">
                    {step}
                  </p>
                  <h3
                    className="text-white font-semibold text-lg mb-3"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {title}
                  </h3>
                  <p className="text-stone-400 text-sm leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── ABOUT THE DOCTOR ─── */}
        <section className="py-24 px-6 bg-amber-50">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-amber-600 text-sm tracking-widest uppercase font-medium mb-4">
                  Your Physician
                </p>
                <h2
                  className="text-3xl sm:text-4xl font-semibold text-stone-900 mb-6"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  Led by Someone Who
                  <br />
                  <span className="text-amber-700">Chose Not to Give Up</span>
                </h2>
                <div className="space-y-4 text-stone-600 leading-relaxed">
                  <p>
                    Our clinic is led by a triple board-certified psychiatrist
                    with over a decade of experience in General Psychiatry,
                    Child &amp; Adolescent Psychiatry, and Forensic Psychiatry.
                  </p>
                  <p>
                    Having worked with more than 5,000 patients, our physician
                    founded Axial with a single conviction: that the right care
                    — thoughtful, thorough, and deeply personal — can change
                    lives, even when nothing else has.
                  </p>
                  <p>
                    We treat patients of all ages starting from 12, and we work
                    closely with most major insurance providers including
                    Medicare to make care as accessible as possible.
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  {[
                    "Triple Board-Certified",
                    "General Psychiatry",
                    "Child & Adolescent",
                    "Forensic Psychiatry",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="bg-white border border-amber-200 text-amber-800 text-xs font-medium px-4 py-2 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Insurance callout */}
              <div className="space-y-6">
                <div className="bg-white rounded-3xl p-8 border border-amber-100 shadow-sm">
                  <div className="w-12 h-12 bg-amber-100 rounded-2xl flex items-center justify-center mb-5">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#d97706" strokeWidth="1.5">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  </div>
                  <h3
                    className="text-xl font-semibold text-stone-900 mb-3"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    Insurance Accepted
                  </h3>
                  <p className="text-stone-500 text-sm leading-relaxed mb-5">
                    We work with most major insurance providers to help ensure
                    that financial concerns don&apos;t stand between you and
                    the care you deserve.
                  </p>

                  {/* Insurance provider logos */}
                  <div className="flex flex-wrap items-center gap-3 mt-1">
                    {[
                      { name: "Medicare", file: "/logos/medicare.png" },
                      { name: "Aetna", file: "/logos/aetna.webp" },
                      { name: "Blue Cross Blue Shield", file: "/logos/bcbs.jpeg" },
                      { name: "Cigna", file: "/logos/cigna.png" },
                      { name: "UnitedHealthcare", file: "/logos/uhc.png" },
                    ].map(({ name, file }) => (
                      <InsuranceLogo key={name} name={name} file={file} />
                    ))}
                    <span className="text-stone-400 text-sm italic font-medium">
                      & many more
                    </span>
                  </div>
                </div>

                <div className="bg-white rounded-3xl p-8 border border-amber-100 shadow-sm">
                  <div className="w-12 h-12 bg-amber-100 rounded-2xl flex items-center justify-center mb-5">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#d97706" strokeWidth="1.5">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                    </svg>
                  </div>
                  <h3
                    className="text-xl font-semibold text-stone-900 mb-3"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    Compassionate at Every Step
                  </h3>
                  <p className="text-stone-500 text-sm leading-relaxed">
                    From your first call to your ongoing care, you will be met
                    with warmth, patience, and a genuine commitment to your
                    well-being — no judgment, no rush.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── WHAT TO EXPECT ─── */}
        <section id="what-to-expect" className="py-24 px-6 bg-[#fffbf5]">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-amber-600 text-sm tracking-widest uppercase font-medium mb-4">
                What to Expect
              </p>
              <h2
                className="text-3xl sm:text-4xl font-semibold text-stone-900"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Your First Steps With Us
              </h2>
            </div>

            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-6 top-0 bottom-0 w-px bg-amber-200 hidden sm:block" />

              <div className="space-y-10">
                {[
                  {
                    num: "1",
                    title: "Reach Out",
                    body: "Send us a message or give us a call. There's no pressure, no commitment — just a conversation about where you are and whether we might be a good fit.",
                  },
                  {
                    num: "2",
                    title: "Your First Appointment",
                    body: "We'll spend time truly getting to know you — your history, your experience with depression, and your goals. This is the foundation of everything we do.",
                  },
                  {
                    num: "3",
                    title: "A Plan Built for You",
                    body: "Based on our evaluation, we'll discuss what options we believe make sense for your specific situation and walk you through every possibility together.",
                  },
                  {
                    num: "4",
                    title: "Ongoing Partnership",
                    body: "Your care doesn't end at a single appointment. We check in, we adjust, and we stay with you for as long as you need us.",
                  },
                ].map(({ num, title, body }) => (
                  <div
                    key={num}
                    className="sm:pl-16 relative flex gap-6 sm:block"
                  >
                    <div className="relative z-10 sm:absolute sm:left-0 sm:top-1 flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center text-white font-bold text-lg shadow-md shadow-amber-200">
                        {num}
                      </div>
                    </div>
                    <div className="pb-2">
                      <h3
                        className="text-xl font-semibold text-stone-900 mb-2"
                        style={{ fontFamily: "var(--font-playfair)" }}
                      >
                        {title}
                      </h3>
                      <p className="text-stone-500 leading-relaxed">{body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── WARM BANNER ─── */}
        <section className="py-20 px-6 bg-gradient-to-r from-amber-500 to-orange-400">
          <div className="max-w-3xl mx-auto text-center">
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white mb-6 leading-tight"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Your story isn&apos;t over.
              <br />
              It&apos;s just waiting for the right chapter.
            </h2>
            <a
              href="#contact"
              className="inline-block bg-white text-amber-700 font-semibold px-8 py-4 rounded-full hover:bg-amber-50 transition-colors shadow-lg"
            >
              Begin Your Journey
            </a>
          </div>
        </section>

        {/* ─── CONTACT ─── */}
        <section id="contact" className="py-24 px-6 bg-stone-900">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16">
              {/* Left */}
              <div>
                <p className="text-amber-400 text-sm tracking-widest uppercase font-medium mb-4">
                  Reach Out
                </p>
                <h2
                  className="text-3xl sm:text-4xl font-semibold text-white mb-6"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  Let&apos;s Start With
                  <br />
                  <span className="text-amber-400">a Conversation</span>
                </h2>
                <p className="text-stone-400 leading-relaxed mb-10">
                  You don&apos;t need to have everything figured out before you
                  call. You just need to take one step. We&apos;ll handle the
                  rest together.
                </p>

                <div className="space-y-5">
                  {[
                    {
                      icon: (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.78a16 16 0 0 0 6.29 6.29l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                        </svg>
                      ),
                      label: "Phone",
                      value: "[Phone number coming soon]",
                    },
                    {
                      icon: (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                          <polyline points="22,6 12,13 2,6" />
                        </svg>
                      ),
                      label: "Email",
                      value: "[Email address coming soon]",
                    },
                    {
                      icon: (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                          <circle cx="12" cy="10" r="3" />
                        </svg>
                      ),
                      label: "Location",
                      value: "[Address coming soon]",
                    },
                  ].map(({ icon, label, value }) => (
                    <div key={label} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-stone-800 flex items-center justify-center text-amber-400 flex-shrink-0">
                        {icon}
                      </div>
                      <div>
                        <p className="text-stone-500 text-xs uppercase tracking-wider mb-0.5">
                          {label}
                        </p>
                        <p className="text-stone-300 text-sm">{value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: form */}
              <div className="bg-stone-800 rounded-3xl p-8 border border-stone-700">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center h-full text-center py-10">
                    <div className="w-16 h-16 bg-amber-500/20 rounded-full flex items-center justify-center mb-4">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    </div>
                    <h3
                      className="text-white text-2xl font-semibold mb-2"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      Message Received
                    </h3>
                    <p className="text-stone-400">
                      Thank you for reaching out. We&apos;ll be in touch soon.
                    </p>
                  </div>
                ) : (
                  <>
                    <h3
                      className="text-white text-xl font-semibold mb-6"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      Send Us a Message
                    </h3>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="text-stone-400 text-xs uppercase tracking-wider mb-1.5 block">
                            Your Name
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="Jane Smith"
                            value={formData.name}
                            onChange={(e) =>
                              setFormData({ ...formData, name: e.target.value })
                            }
                            className="w-full bg-stone-700 border border-stone-600 text-white placeholder-stone-500 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-500 transition-colors"
                          />
                        </div>
                        <div>
                          <label className="text-stone-400 text-xs uppercase tracking-wider mb-1.5 block">
                            Phone (optional)
                          </label>
                          <input
                            type="tel"
                            placeholder="(555) 000-0000"
                            value={formData.phone}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                phone: e.target.value,
                              })
                            }
                            className="w-full bg-stone-700 border border-stone-600 text-white placeholder-stone-500 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-500 transition-colors"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="text-stone-400 text-xs uppercase tracking-wider mb-1.5 block">
                          Email Address
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="you@example.com"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          className="w-full bg-stone-700 border border-stone-600 text-white placeholder-stone-500 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-500 transition-colors"
                        />
                      </div>

                      <div>
                        <label className="text-stone-400 text-xs uppercase tracking-wider mb-1.5 block">
                          How can we help?
                        </label>
                        <textarea
                          required
                          rows={4}
                          placeholder="Tell us a little about what you're going through. There's no wrong answer."
                          value={formData.message}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              message: e.target.value,
                            })
                          }
                          className="w-full bg-stone-700 border border-stone-600 text-white placeholder-stone-500 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-500 transition-colors resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-amber-500 hover:bg-amber-400 text-white font-semibold py-4 rounded-xl transition-colors text-sm"
                      >
                        Send Message
                      </button>

                      <p className="text-stone-500 text-xs text-center">
                        We typically respond within one business day. If this is
                        an emergency, please call 988 (Suicide &amp; Crisis
                        Lifeline).
                      </p>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ─── FOOTER ─── */}
      <footer className="bg-stone-950 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            <div>
              <p
                className="text-lg font-semibold text-amber-400 mb-1"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Axial Holistic Depression Clinic
              </p>
              <p className="text-stone-500 text-sm max-w-xs">
                Specialized, compassionate care for treatment-resistant
                depression. You&apos;re not out of options.
              </p>
            </div>

            <div className="flex gap-12 text-sm">
              <div>
                <p className="text-stone-400 font-medium mb-3">Navigate</p>
                <div className="space-y-2">
                  {[
                    ["About Us", "#about"],
                    ["Our Approach", "#approach"],
                    ["What to Expect", "#what-to-expect"],
                    ["Contact", "#contact"],
                  ].map(([label, href]) => (
                    <a
                      key={label}
                      href={href}
                      className="block text-stone-500 hover:text-amber-400 transition-colors"
                    >
                      {label}
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-stone-400 font-medium mb-3">Crisis Support</p>
                <div className="space-y-2 text-stone-500 text-sm">
                  <p>988 Suicide &amp; Crisis Lifeline</p>
                  <p>Call or text 988</p>
                  <p>Available 24/7</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-stone-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-stone-600 text-xs">
            <p>
              &copy; {new Date().getFullYear()} Axial Holistic Depression
              Clinic. All rights reserved.
            </p>
            <p>
              This website is for informational purposes only and does not
              constitute medical advice.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
