"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [showStickyBtn, setShowStickyBtn] = useState(false);

  const testimonials = [
    {
      name: "H.A.",
      stars: 5,
      text: "Dr. Parmar is very kind, patient, professional, and understanding. I can tell he truly cares about his patients. Trusting someone with your mental health is a hard thing to do, but his demeanor makes it very easy to talk about your struggles.",
    },
    {
      name: "M.C.",
      stars: 5,
      text: "Over the last 4 months of ups and downs, this doctor has been navigating the complexities of my son's mental health issues. I am forever grateful and am blessed that this is who we ended up with as our Dr. for my child.",
    },
    {
      name: "C.N.",
      stars: 5,
      text: "I am eternally grateful for having found such a professional psychiatrist and above all a great human being! Highly recommend, thanks Dr. Parmar, for your attention to my son!",
    },
  ];

  const insuranceLogos = [
    { name: "Medicare", file: "/logos/medicare.png" },
    { name: "Aetna", file: "/logos/aetna.webp" },
    { name: "Blue Cross Blue Shield", file: "/logos/bcbs.png" },
    { name: "Cigna", file: "/logos/cigna.png" },
    { name: "UnitedHealthcare", file: "/logos/uhc.png" },
  ];

  // Sticky CTA appears after scrolling past the hero
  useEffect(() => {
    const handleScroll = () => setShowStickyBtn(window.scrollY > window.innerHeight * 0.8);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll-triggered entrance animations
  useEffect(() => {
    document.documentElement.classList.add("js-anim");
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        }),
      { threshold: 0.1 }
    );
    document.querySelectorAll("[data-animate]").forEach((el) => observer.observe(el));
    return () => {
      observer.disconnect();
      document.documentElement.classList.remove("js-anim");
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) {
        setSubmitError(data.error ?? "Something went wrong. Please call us directly.");
        return;
      }
      setSubmitted(true);
    } catch {
      setSubmitError("Could not send. Please call us directly.");
    }
  };

  return (
    <div className="flex flex-col min-h-screen">

      {/* ─── STICKY FLOATING CTA ─── */}
      <a
        href="#contact"
        className={`fixed bottom-6 right-6 z-50 bg-amber-500 hover:bg-amber-400 text-white font-semibold px-6 py-3.5 rounded-full shadow-xl shadow-amber-900/40 text-sm transition-all duration-300 ${
          showStickyBtn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        Book a Free Call →
      </a>

      {/* ─── NAVBAR ─── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#fffbf5]/90 backdrop-blur-md border-b border-amber-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="flex flex-col leading-tight">
            <span className="text-lg font-semibold text-amber-900" style={{ fontFamily: "var(--font-playfair)" }}>
              Axial Holistic
            </span>
            <span className="text-xs tracking-widest text-amber-700 uppercase">Depression Clinic</span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8 text-sm text-stone-600 font-medium">
            <a href="#about" className="hover:text-amber-800 transition-colors">About Us</a>
            <a href="#doctor" className="hover:text-amber-800 transition-colors">Dr. Ankit Parmar</a>
            <a href="#testimonials" className="hover:text-amber-800 transition-colors">Stories</a>
            <a href="#approach" className="hover:text-amber-800 transition-colors">Our Approach</a>
            <a href="#tms" className="hover:text-amber-800 transition-colors">TMS</a>
            <a href="#contact" className="bg-amber-600 text-white px-5 py-2 rounded-full text-sm hover:bg-amber-700 transition-colors">
              Book Appointment
            </a>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden p-2 text-stone-600" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            <div className="w-6 h-0.5 bg-current mb-1.5" />
            <div className="w-6 h-0.5 bg-current mb-1.5" />
            <div className="w-6 h-0.5 bg-current" />
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-[#fffbf5] border-t border-amber-100 px-6 py-4 flex flex-col gap-4 text-stone-700 text-sm font-medium">
            <a href="#about" onClick={() => setMenuOpen(false)}>About Us</a>
            <a href="#doctor" onClick={() => setMenuOpen(false)}>Dr. Ankit Parmar</a>
            <a href="#testimonials" onClick={() => setMenuOpen(false)}>Stories</a>
            <a href="#approach" onClick={() => setMenuOpen(false)}>Our Approach</a>
            <a href="#tms" onClick={() => setMenuOpen(false)}>TMS</a>
            <a href="#contact" className="bg-amber-600 text-white px-5 py-2 rounded-full text-center" onClick={() => setMenuOpen(false)}>
              Book Appointment
            </a>
          </div>
        )}
      </nav>

      <main className="flex-1">

        {/* ─── HERO — full-screen photo background ─── */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Real photo background */}
          <div className="absolute inset-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/hope-path.png"
              alt=""
              aria-hidden="true"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-stone-950/92 via-stone-900/78 to-stone-950/88" />
            {/* Amber horizon glow bleeding through */}
            <div className="absolute inset-0 bg-gradient-to-t from-amber-900/25 via-transparent to-transparent" />
          </div>

          <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
            <p className="animate-fade-up text-amber-400 text-sm tracking-[0.3em] uppercase font-medium mb-6">
              Axial Holistic Depression Clinic
            </p>
            <h1
              className="animate-fade-up-1 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white leading-tight mb-8"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Holistic Care for
              <br />
              <span className="text-amber-300">Chronic Depression.</span>
            </h1>
            <p className="animate-fade-up-2 text-lg sm:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed mb-4">
              Deeply personalized, integrative care for people living with
              persistent depression — so you can reclaim the life you deserve.
            </p>
            <p className="animate-fade-up-2 text-sm text-amber-400/80 tracking-wide mb-8">
              Serving Rockwall, TX · Rowlett · Wylie · Heath · Greater DFW
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

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2">
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </div>
        </section>

        {/* ─── STATS BAR ─── */}
        <section className="bg-stone-950 border-b border-stone-800 py-8 px-6">
          <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { num: "5,000+", label: "Patients Helped" },
              { num: "10+", label: "Years Experience" },
              { num: "3×", label: "Board-Certified" },
              { num: "4.9★", label: "Average Rating" },
            ].map(({ num, label }, i) => (
              <div key={label} data-animate data-delay={String(i * 100)}>
                <p
                  className="text-2xl sm:text-3xl font-bold text-amber-400"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {num}
                </p>
                <p className="text-stone-400 text-sm mt-1">{label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ─── RHETORICAL QUESTIONS ─── */}
        <section className="py-28 px-6 bg-stone-950">
          <div className="max-w-3xl mx-auto text-center">
            <div className="space-y-10">
              <p
                className="text-xl sm:text-2xl text-stone-500 leading-relaxed"
                style={{ fontFamily: "var(--font-playfair)" }}
                data-animate
              >
                Have you tried medication after medication, finding that they
                only take you part of the way?
              </p>
              <p
                className="text-xl sm:text-2xl text-stone-400 leading-relaxed"
                style={{ fontFamily: "var(--font-playfair)" }}
                data-animate
              >
                Are you managing annoying or concerning side effects — or
                quietly wondering why your prescription leaves you feeling{" "}
                <span className="italic">not quite like yourself</span>?
              </p>
              <p
                className="text-2xl sm:text-3xl text-stone-200 leading-relaxed"
                style={{ fontFamily: "var(--font-playfair)" }}
                data-animate
              >
                Have you started to believe you&apos;re the problem — when
                really, you just haven&apos;t found the{" "}
                <span className="italic">right combination of care</span>?
              </p>
            </div>

            {/* Pivot */}
            <div className="mt-16 pt-12 border-t border-stone-800" data-animate>
              <p className="text-stone-500 text-sm tracking-widest uppercase mb-6">
                Here&apos;s what we know
              </p>
              <p
                className="text-xl sm:text-2xl text-stone-300 leading-relaxed mb-6"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Standard treatments are a vital tool that help millions of people.
                But for many, medications alone aren&apos;t enough.
              </p>
              <p
                className="text-3xl sm:text-4xl font-semibold leading-snug"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                <span className="text-amber-400">
                  Treatment-resistant depression is real —
                </span>
                <br />
                <span className="text-white">and so is a comprehensive path through it.</span>
              </p>
            </div>
          </div>
        </section>

        {/* ─── WHO WE HELP ─── */}
        <section id="about" className="py-24 px-6 bg-[#fffbf5]">
          <div className="max-w-6xl mx-auto">
            {/* Mission pull-quote */}
            <div className="text-center mb-16" data-animate>
              <p
                className="text-2xl sm:text-3xl font-medium text-stone-800 leading-relaxed max-w-3xl mx-auto"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                &ldquo;We believe every person with treatment-resistant depression
                deserves a care team that looks at the whole picture and{" "}
                <span className="text-amber-700 italic">never gives up.</span>
                &rdquo;
              </p>
              <div className="mt-6 h-px w-16 bg-amber-400 mx-auto" />
            </div>

            <div className="grid md:grid-cols-2 gap-16 items-center">
              {/* Left: hopeful lifestyle photo */}
              <div className="relative rounded-3xl overflow-hidden aspect-square shadow-lg" data-animate>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/hope-path.png"
                  alt="Person walking toward the light on a golden sunset path"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/50 via-transparent to-transparent" />
                <p
                  className="absolute bottom-6 left-6 right-6 text-white text-lg font-medium drop-shadow-lg"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  A brighter, fuller life is within your reach.
                </p>
              </div>

              {/* Right: content */}
              <div data-animate data-delay="200">
                <p className="text-amber-600 text-sm tracking-widest uppercase font-medium mb-4">
                  Who We Help
                </p>
                <h2
                  className="text-3xl sm:text-4xl font-semibold text-stone-900 mb-6 leading-snug"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  You&apos;ve Searched.
                  <br />
                  You&apos;ve Persevered.
                  <br />
                  <span className="text-amber-700">You Deserve More.</span>
                </h2>
                <div className="space-y-4 text-stone-600 leading-relaxed text-base">
                  <p>
                    If you have tried multiple medications or therapies and still
                    haven&apos;t found lasting, vibrant relief, that is not a
                    reflection of you. It is simply a biological signal that your
                    depression requires a different, more multifaceted layer of
                    care. That&apos;s exactly what we do — we work with adults 18
                    and above across Rockwall, TX and the greater North Texas area
                    to build a path forward tailored entirely to you.
                  </p>
                </div>

                <div className="mt-8 grid grid-cols-2 gap-4">
                  {[
                    { num: "18+", label: "Ages Served" },
                    { num: "10+", label: "Years of Experience" },
                    { num: "5,000+", label: "Patients Helped" },
                    { num: "3×", label: "Board-Certified Physician" },
                  ].map(({ num, label }) => (
                    <div key={label} className="bg-amber-50 rounded-2xl p-4 border border-amber-100">
                      <p className="text-2xl font-bold text-amber-700" style={{ fontFamily: "var(--font-playfair)" }}>
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

        {/* ─── ABOUT THE DOCTOR ─── */}
        <section id="doctor" className="py-24 px-6 bg-amber-50">
          <div className="max-w-6xl mx-auto">

            {/* Question opener */}
            <p
              className="text-center text-xl sm:text-2xl text-stone-600 italic mb-12 max-w-2xl mx-auto"
              style={{ fontFamily: "var(--font-playfair)" }}
              data-animate
            >
              What would it mean to finally have a doctor who genuinely
              doesn&apos;t give up on you?
            </p>

            {/* First-person Dr. Parmar quote */}
            <div
              className="bg-white rounded-3xl px-10 py-12 border border-amber-100 shadow-sm text-center max-w-3xl mx-auto mb-20"
              data-animate
            >
              <div
                className="text-6xl text-amber-300 leading-none mb-4 select-none"
                style={{ fontFamily: "Georgia, serif" }}
                aria-hidden="true"
              >
                &ldquo;
              </div>
              <p
                className="text-xl sm:text-2xl text-stone-700 leading-relaxed italic"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                In my years of practice, I&apos;ve seen how invaluable
                traditional treatments can be. Yet, I have also met many
                patients who — despite trying various medications and therapies
                — still haven&apos;t found the full, lasting relief they
                deserve. True recovery isn&apos;t about discarding conventional
                medicine; it&apos;s about looking at the entire picture. By
                combining advanced, innovative care like TMS with holistic
                wellness strategies, we bridge the gap where medications alone
                might fall short.
              </p>
              <div className="mt-8 pt-6 border-t border-amber-100">
                <p className="text-amber-700 font-semibold">Dr. Ankit Parmar</p>
                <p className="text-stone-400 text-sm mt-1">Founder, Axial Holistic Depression Clinic</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div data-animate>
                <p className="text-amber-600 text-sm tracking-widest uppercase font-medium mb-4">
                  Meet Your Physician
                </p>
                <h2
                  className="text-3xl sm:text-4xl font-semibold text-stone-900 mb-2"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  Dr. Ankit Parmar
                </h2>
                <p className="text-amber-700 font-medium mb-6">
                  Who has Empowered 5,000+ Patients to Reclaim Their Lives From Depression
                </p>
                <div className="space-y-4 text-stone-600 leading-relaxed">
                  <p>
                    Dr. Ankit Parmar is a triple board-certified psychiatrist in
                    General Psychiatry, Child &amp; Adolescent Psychiatry, and
                    Forensic Psychiatry. With over 10 years of experience, he
                    blends standard psychiatric expertise with holistic and
                    advanced modalities to guide patients toward true,
                    long-term wellness.
                  </p>
                  <p>
                    He completed his residency at Texas Tech University Health
                    Sciences Center and fellowships at UT Southwestern Medical
                    Center. Dr. Parmar combines medications, therapy, and
                    advanced treatments with a holistic approach — guiding
                    patients toward both recovery and long-term wellness.
                  </p>
                  <p>
                    We treat adults 18 and above, and we work closely with most
                    major insurance providers including Medicare to make
                    high-quality psychiatric care as accessible as possible
                    across Rockwall, TX and the Dallas–Fort Worth area.
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  {["Triple Board-Certified", "General Psychiatry", "Child & Adolescent", "Forensic Psychiatry"].map((tag) => (
                    <span key={tag} className="bg-white border border-amber-200 text-amber-800 text-xs font-medium px-4 py-2 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Doctor photo */}
              <div className="flex flex-col gap-6" data-animate data-delay="200">
                <div className="rounded-3xl overflow-hidden shadow-lg aspect-[3/4] max-w-sm mx-auto w-full">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/dr-parmar.jpeg" alt="Dr. Ankit Parmar" className="w-full h-full object-cover object-top" />
                </div>
              </div>
            </div>

            {/* Insurance & compassion cards */}
            <div className="mt-16 grid md:grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="bg-white rounded-3xl p-8 border border-amber-100 shadow-sm" data-animate>
                  <div className="w-12 h-12 bg-amber-100 rounded-2xl flex items-center justify-center mb-5">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#d97706" strokeWidth="1.5">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-stone-900 mb-3" style={{ fontFamily: "var(--font-playfair)" }}>
                    Insurance Accepted
                  </h3>
                  <p className="text-stone-500 text-sm leading-relaxed">
                    We work with most major insurance providers to help ensure
                    that financial concerns don&apos;t stand between you and
                    the care you deserve. Medicare, Aetna, Blue Cross Blue Shield,
                    Cigna, UnitedHealthcare, and many more.
                  </p>
                </div>

                <div className="bg-white rounded-3xl p-8 border border-amber-100 shadow-sm" data-animate data-delay="100">
                  <div className="w-12 h-12 bg-amber-100 rounded-2xl flex items-center justify-center mb-5">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#d97706" strokeWidth="1.5">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-stone-900 mb-3" style={{ fontFamily: "var(--font-playfair)" }}>
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

        {/* ─── TESTIMONIALS — 3 static cards ─── */}
        <section id="testimonials" className="py-24 px-6 bg-[#fffbf5]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14" data-animate>
              <p className="text-amber-600 text-sm tracking-widest uppercase font-medium mb-4">
                Patient Stories
              </p>
              <h2
                className="text-3xl sm:text-4xl font-semibold text-stone-900"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Stories of Healing &amp; Hope
              </h2>
              <p className="text-stone-500 mt-3 max-w-md mx-auto text-sm">
                Real words from real patients — not curated, not cherry-picked.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((t, i) => (
                <div
                  key={t.name}
                  className="bg-white rounded-3xl p-8 border border-amber-100 shadow-sm flex flex-col"
                  data-animate
                  data-delay={String(i * 150)}
                >
                  {/* Stars */}
                  <div className="flex gap-1 mb-6">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <svg
                        key={j}
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill={j < t.stars ? "#f59e0b" : "none"}
                        stroke={j < t.stars ? "#f59e0b" : "#d1d5db"}
                        strokeWidth="1.5"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>

                  {/* Quote */}
                  <p
                    className="text-stone-600 leading-relaxed italic flex-1 text-base mb-6"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    &ldquo;{t.text}&rdquo;
                  </p>

                  {/* Attribution */}
                  <div className="pt-5 border-t border-amber-100 flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-amber-100 flex items-center justify-center text-amber-700 font-bold text-sm flex-shrink-0">
                      {t.name[0]}
                    </div>
                    <div>
                      <p className="text-stone-900 font-semibold text-sm">{t.name}</p>
                      <p className="text-amber-600 text-xs">Verified Patient</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── OUR APPROACH ─── */}
        <section id="approach" className="py-24 px-6 bg-stone-900">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16" data-animate>
              <p className="text-amber-400 text-sm tracking-widest uppercase font-medium mb-4">
                Our Approach
              </p>
              <h2
                className="text-3xl sm:text-4xl font-semibold text-white mb-4"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Holistic. Personal. Yours.
              </h2>
              <p className="text-amber-300 text-lg italic mb-3 max-w-xl mx-auto" style={{ fontFamily: "var(--font-playfair)" }}>
                What if the missing piece to your recovery isn&apos;t a new
                prescription, but a care plan truly integrated for your unique
                biology?
              </p>
              <p className="text-stone-400 max-w-xl mx-auto">
                Medications can be an excellent foundation — but your care plan
                should look at the whole picture. We don&apos;t replace your
                care; we elevate it.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  step: "01",
                  title: "We Listen First",
                  body: "We dive deep into your history, your experiences with past treatments, and how you feel day to day. Nothing is assumed.",
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
                  body: "We evaluate your physical wellness, lifestyle, and brain health — not just your symptoms.",
                  icon: (
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 6v6l4 2" />
                    </svg>
                  ),
                },
                {
                  step: "03",
                  title: "We Build Your Plan Together",
                  body: "We combine standard psychiatry with advanced treatments like TMS and holistic strategies tailored specifically to you.",
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
                  body: "Recovery is a partnership. We closely monitor your progress, minimize bothersome side effects, and adjust your care every step of the way.",
                  icon: (
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  ),
                },
              ].map(({ step, title, body, icon }, i) => (
                <div
                  key={step}
                  className="bg-stone-800 rounded-2xl p-6 border border-stone-700 hover:border-amber-600/50 transition-colors group"
                  data-animate
                  data-delay={String(i * 100)}
                >
                  <div className="text-amber-400 mb-4 group-hover:text-amber-300 transition-colors">{icon}</div>
                  <p className="text-amber-600 text-xs font-bold tracking-wider mb-2">{step}</p>
                  <h3 className="text-white font-semibold text-lg mb-3" style={{ fontFamily: "var(--font-playfair)" }}>
                    {title}
                  </h3>
                  <p className="text-stone-400 text-sm leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── TMS THERAPY ─── */}
        <section id="tms" className="py-24 px-6 bg-stone-950">
          <div className="max-w-6xl mx-auto">

            {/* Header */}
            <div className="text-center mb-16" data-animate>
              <p className="text-amber-400 text-sm tracking-widest uppercase font-medium mb-4">
                TMS Therapy
              </p>
              <h2
                className="text-3xl sm:text-4xl font-semibold text-white mb-6"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                When You Need More Than Medication,
                <br />
                We Safely Wake Up the Brain.
              </h2>
            </div>

            {/* Intro — text left, diagram placeholder right */}
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="space-y-5" data-animate>
                <p className="text-stone-300 leading-relaxed text-lg">
                  If you have tried multiple antidepressants without finding lasting relief, the issue isn&apos;t your willpower — it&apos;s your brain&apos;s biological circuitry. TMS is an FDA-cleared, non-invasive technology designed precisely for treatment-resistant depression.
                </p>
                <p className="text-stone-400 leading-relaxed">
                  Unlike daily medications that travel through your entire system, TMS acts precisely where it&apos;s needed — delivering targeted micro-pulses directly to the root source of your symptoms.
                </p>
              </div>
              <div
                className="rounded-2xl border border-amber-500/20 bg-stone-900/60 flex flex-col items-center justify-center py-16 px-8 text-center"
                data-animate
                data-delay="100"
              >
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" className="mb-4 opacity-40" aria-hidden="true">
                  <circle cx="32" cy="32" r="30" stroke="#d97706" strokeWidth="1.5" />
                  <path d="M32 12 C20 12 14 22 14 32 C14 42 20 52 32 52" stroke="#d97706" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M32 12 C44 12 50 22 50 32 C50 42 44 52 32 52" stroke="#d97706" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M20 22 Q32 14 44 22" stroke="#fbbf24" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M22 18 Q32 10 42 18" stroke="#fcd34d" strokeWidth="1" strokeLinecap="round" strokeDasharray="3 3" />
                  <path d="M25 15 Q32 8 39 15" stroke="#fde68a" strokeWidth="1" strokeLinecap="round" strokeDasharray="2 4" />
                  <circle cx="32" cy="35" r="5" fill="#d97706" fillOpacity="0.3" stroke="#d97706" strokeWidth="1" />
                </svg>
                <p className="text-stone-500 text-sm">Diagram coming soon</p>
                <p className="text-stone-600 text-xs mt-1">Illustration of TMS targeting the prefrontal cortex</p>
              </div>
            </div>

            {/* 3-column step cards */}
            <div className="grid sm:grid-cols-3 gap-6 mb-12">
              {[
                {
                  step: "01",
                  title: "The Target",
                  body: "In chronic depression, the prefrontal cortex — the area responsible for mood regulation — becomes underactive and sluggish.",
                  icon: (
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <circle cx="12" cy="12" r="3" />
                      <circle cx="12" cy="12" r="7" />
                      <circle cx="12" cy="12" r="11" />
                    </svg>
                  ),
                },
                {
                  step: "02",
                  title: "The Pulse",
                  body: "While you sit comfortably, a specialized magnetic coil gently delivers focused micro-pulses — similar in strength to an MRI — safely through the skull.",
                  icon: (
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                    </svg>
                  ),
                },
                {
                  step: "03",
                  title: "The Awakening",
                  body: "These magnetic pulses stimulate inactive nerve cells. Over time, neurons resume healthy firing patterns, lifting the heavy fog of depression.",
                  icon: (
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M12 2v6M12 16v6M4.93 4.93l4.24 4.24M14.83 14.83l4.24 4.24M2 12h6M16 12h6M4.93 19.07l4.24-4.24M14.83 9.17l4.24-4.24" />
                    </svg>
                  ),
                },
              ].map(({ step, title, body, icon }, i) => (
                <div
                  key={step}
                  className="bg-stone-800 rounded-2xl p-6 border border-stone-700 hover:border-amber-600/50 transition-colors group"
                  data-animate
                  data-delay={String(i * 100)}
                >
                  <div className="text-amber-400 mb-4 group-hover:text-amber-300 transition-colors">{icon}</div>
                  <p className="text-amber-600 text-xs font-bold tracking-wider mb-2">{step}</p>
                  <h3 className="text-white font-semibold text-lg mb-3" style={{ fontFamily: "var(--font-playfair)" }}>
                    {title}
                  </h3>
                  <p className="text-stone-400 text-sm leading-relaxed">{body}</p>
                </div>
              ))}
            </div>

            {/* Callout box */}
            <div className="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-8 mb-10" data-animate>
              <h3
                className="text-amber-300 text-xl font-semibold mb-3"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                The Holistic Advantage: No Systemic Side Effects
              </h3>
              <p className="text-stone-300 leading-relaxed">
                Because TMS is a localized physical treatment rather than a chemical one, it requires no anesthesia, carries no downtime, and produces zero systemic side effects — no chemical weight gain, no nausea, no emotional blunting. Patients can read, stream a show, and drive themselves to and from their 20-minute sessions.
              </p>
            </div>

            {/* Insurance note + CTA */}
            <div className="text-center" data-animate>
              <p className="text-stone-400 mb-6">
                TMS is covered by Medicare and most major commercial insurance providers.
              </p>
              <a
                href="#contact"
                className="inline-block bg-amber-500 hover:bg-amber-400 text-white font-semibold px-8 py-4 rounded-full transition-colors"
              >
                Verify Your TMS Coverage →
              </a>
            </div>

          </div>
        </section>

        {/* ─── INSURANCE MARQUEE ─── */}
        <section className="py-16 px-6 bg-amber-50">
          <div className="max-w-3xl mx-auto text-center mb-10" data-animate>
            <h2
              className="text-2xl sm:text-3xl font-semibold text-stone-900 mb-3"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Worried About Cost? We Accept All Major Insurances.
            </h2>
            <p className="text-stone-500 text-sm">
              We partner with leading insurance providers so you can access
              high-quality depression care without financial stress.
            </p>
          </div>

          <div className="overflow-hidden">
            <div className="animate-marquee flex gap-12 items-center w-max">
              {[...insuranceLogos, ...insuranceLogos].map(({ name, file }, i) => (
                <div
                  key={`${name}-${i}`}
                  className="bg-white border border-stone-100 rounded-xl shadow-sm flex items-center justify-center px-5 py-3 w-40 h-14 flex-shrink-0"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={file} alt={name} className="max-h-7 max-w-full w-auto object-contain" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── LIFE PHOTO STRIP ─── */}
        <section className="py-16 px-6 bg-amber-50">
          <div className="max-w-6xl mx-auto">
            <p
              className="text-center text-xl sm:text-2xl font-medium text-stone-700 mb-10 max-w-2xl mx-auto"
              style={{ fontFamily: "var(--font-playfair)" }}
              data-animate
            >
              Because a fuller, brighter life is{" "}
              <span className="text-amber-700 italic">within your reach.</span>
            </p>
            <div className="grid grid-cols-3 gap-4">
              {[
                {
                  src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=600&q=80",
                  alt: "Friends laughing together outdoors",
                },
                {
                  src: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=600&q=80",
                  alt: "Woman smiling with joy in natural light",
                },
                {
                  src: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=600&q=80",
                  alt: "Sunlight through trees on a peaceful path",
                },
              ].map(({ src, alt }, i) => (
                <div
                  key={alt}
                  className="rounded-2xl overflow-hidden aspect-[4/3] shadow-sm"
                  data-animate
                  data-delay={String(i * 100)}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={src}
                    alt={alt}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── WHAT TO EXPECT ─── */}
        <section id="what-to-expect" className="py-24 px-6 bg-[#fffbf5]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16" data-animate>
              <p className="text-amber-600 text-sm tracking-widest uppercase font-medium mb-4">
                What to Expect
              </p>
              <h2
                className="text-3xl sm:text-4xl font-semibold text-stone-900"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Your First Steps With Us
              </h2>
              <p className="text-amber-700 text-lg italic mt-4 max-w-lg mx-auto" style={{ fontFamily: "var(--font-playfair)" }}>
                What if the hardest part is already behind you — and the next
                step is simpler than you think?
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-16 items-center">
              {/* Photo */}
              <div className="rounded-3xl overflow-hidden shadow-md aspect-[3/4] max-w-sm mx-auto w-full" data-animate>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/consultation.png"
                  alt="Warm, supportive one-on-one conversation"
                  className="w-full h-full object-cover"
                />
              </div>

              <div data-animate data-delay="200">
                <div className="relative">
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
                      <div key={num} className="sm:pl-16 relative flex gap-6 sm:block">
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
            </div>
          </div>
        </section>

        {/* ─── SERVICE AREA ─── */}
        <section className="py-16 px-6 bg-amber-50">
          <div className="max-w-4xl mx-auto text-center" data-animate>
            <p className="text-amber-600 text-sm tracking-widest uppercase font-medium mb-4">
              Where We Serve
            </p>
            <h2
              className="text-2xl sm:text-3xl font-semibold text-stone-900 mb-4"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Proudly Serving Rockwall, TX and the Greater DFW Area
            </h2>
            <p className="text-stone-500 leading-relaxed mb-8 max-w-2xl mx-auto">
              Our clinic is located in Rockwall, Texas — just east of Dallas on I-30 — making us accessible to patients from across the metroplex seeking specialized depression care.
            </p>
            <div className="flex flex-wrap justify-center gap-3 text-sm">
              {[
                "Rockwall, TX",
                "Rowlett, TX",
                "Wylie, TX",
                "Heath, TX",
                "Fate, TX",
                "Royse City, TX",
                "Garland, TX",
                "Mesquite, TX",
                "Forney, TX",
                "Dallas, TX",
              ].map((city) => (
                <span
                  key={city}
                  className="bg-white border border-amber-200 text-amber-800 px-4 py-2 rounded-full font-medium"
                >
                  {city}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ─── FAQ ─── */}
        <section id="faq" className="py-24 px-6 bg-[#fffbf5]">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-14" data-animate>
              <p className="text-amber-600 text-sm tracking-widest uppercase font-medium mb-4">
                Common Questions
              </p>
              <h2
                className="text-3xl sm:text-4xl font-semibold text-stone-900"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                You Have Questions. We Have Answers.
              </h2>
            </div>

            <div className="space-y-4">
              {[
                {
                  q: "Is there a psychiatrist in Rockwall, TX who specializes in treatment-resistant depression?",
                  a: "Yes. Dr. Ankit Parmar at Axial Holistic Depression Clinic (6730 Horizon Rd, STE C, Rockwall, TX 75032) specializes in holistic, integrative care for people who have tried other treatments without lasting success.",
                },
                {
                  q: "Does Dr. Parmar accept Medicare and major insurance?",
                  a: "Yes. We accept Medicare, Aetna, Blue Cross Blue Shield, Cigna, UnitedHealthcare, and most other major insurance providers. Call us at 972-478-0152 to verify your specific plan.",
                },
                {
                  q: "What is treatment-resistant depression?",
                  a: "Treatment-resistant depression is when someone does not respond adequately to two or more antidepressant treatments tried at proper doses. It is far more common than most people realize — and specialized, holistic care can open doors that standard approaches miss.",
                },
                {
                  q: "Which cities near Rockwall do you serve?",
                  a: "We primarily serve Rockwall and surrounding communities including Rowlett, Wylie, Heath, Fate, Royse City, Garland, Mesquite, Forney, and the broader Dallas–Fort Worth metroplex.",
                },
                {
                  q: "What makes Dr. Parmar's approach different?",
                  a: "Dr. Parmar is triple board-certified in General Psychiatry, Child & Adolescent Psychiatry, and Forensic Psychiatry — with over 10 years of experience and 5,000+ patients helped. He takes a whole-person approach, exploring biological, psychological, and lifestyle factors to build a plan tailored to you specifically.",
                },
                {
                  q: "How do I schedule an appointment?",
                  a: "Call us at 972-478-0152, email practice@axialtms.com, or fill out the contact form below. We are open Monday through Friday, 9am–5pm, and will respond within one business day.",
                },
              ].map(({ q, a }, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-6 border border-amber-100 shadow-sm"
                  data-animate
                  data-delay={String(i * 80)}
                >
                  <h3
                    className="text-stone-900 font-semibold text-base mb-3"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {q}
                  </h3>
                  <p className="text-stone-500 text-sm leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── WARM BANNER ─── */}
        <section className="py-20 px-6 bg-gradient-to-r from-amber-500 to-orange-400">
          <div className="max-w-3xl mx-auto text-center" data-animate>
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
              <div data-animate>
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
                      value: "972-478-0152",
                      link: "tel:+19724780152",
                    },
                    {
                      icon: (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                          <polyline points="22,6 12,13 2,6" />
                        </svg>
                      ),
                      label: "Email",
                      value: "treatdepression@axialtms.com",
                    },
                    {
                      icon: (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.78a16 16 0 0 0 6.29 6.29l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /><line x1="1" y1="1" x2="23" y2="23" />
                        </svg>
                      ),
                      label: "Fax",
                      value: "659-901-1257",
                    },
                    {
                      icon: (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                          <circle cx="12" cy="10" r="3" />
                        </svg>
                      ),
                      label: "Location",
                      value: "6730 Horizon Rd, STE C, Rockwall, TX 75032",
                    },
                  ].map(({ icon, label, value, link }: { icon: React.ReactNode; label: string; value: string; link?: string }) => (
                    <div key={label} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-stone-800 flex items-center justify-center text-amber-400 flex-shrink-0">
                        {icon}
                      </div>
                      <div>
                        <p className="text-stone-500 text-xs uppercase tracking-wider mb-0.5">{label}</p>
                        {link ? (
                          <a href={link} className="text-stone-300 text-sm hover:text-amber-400 transition-colors">{value}</a>
                        ) : (
                          <p className="text-stone-300 text-sm">{value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: form */}
              <div className="bg-stone-800 rounded-3xl p-8 border border-stone-700" data-animate data-delay="200">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center h-full text-center py-10">
                    <div className="w-16 h-16 bg-amber-500/20 rounded-full flex items-center justify-center mb-4">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    </div>
                    <h3 className="text-white text-2xl font-semibold mb-2" style={{ fontFamily: "var(--font-playfair)" }}>
                      Message Received
                    </h3>
                    <p className="text-stone-400">Thank you for reaching out. We&apos;ll be in touch soon.</p>
                  </div>
                ) : (
                  <>
                    <h3 className="text-white text-xl font-semibold mb-6" style={{ fontFamily: "var(--font-playfair)" }}>
                      Send Us a Message
                    </h3>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="text-stone-400 text-xs uppercase tracking-wider mb-1.5 block">Your Name</label>
                          <input
                            type="text"
                            required
                            placeholder="Jane Smith"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full bg-stone-700 border border-stone-600 text-white placeholder-stone-500 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-500 transition-colors"
                          />
                        </div>
                        <div>
                          <label className="text-stone-400 text-xs uppercase tracking-wider mb-1.5 block">Phone (optional)</label>
                          <input
                            type="tel"
                            placeholder="(555) 000-0000"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full bg-stone-700 border border-stone-600 text-white placeholder-stone-500 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-500 transition-colors"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="text-stone-400 text-xs uppercase tracking-wider mb-1.5 block">Email Address</label>
                        <input
                          type="email"
                          required
                          placeholder="you@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-stone-700 border border-stone-600 text-white placeholder-stone-500 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-500 transition-colors"
                        />
                      </div>
                      <div>
                        <label className="text-stone-400 text-xs uppercase tracking-wider mb-1.5 block">How can we help?</label>
                        <textarea
                          required
                          rows={4}
                          placeholder="Tell us a little about what you're going through. There's no wrong answer."
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full bg-stone-700 border border-stone-600 text-white placeholder-stone-500 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-500 transition-colors resize-none"
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full bg-amber-500 hover:bg-amber-400 text-white font-semibold py-4 rounded-xl transition-colors text-sm"
                      >
                        Send Message
                      </button>
                      {submitError && (
                        <p className="text-red-400 text-sm text-center">{submitError}</p>
                      )}
                      <p className="text-stone-500 text-xs text-center">
                        We typically respond within one business day. If this is
                        an emergency, please call 988 (Suicide &amp; Crisis Lifeline).
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
              <p className="text-lg font-semibold text-amber-400 mb-1" style={{ fontFamily: "var(--font-playfair)" }}>
                Axial Holistic Depression Clinic
              </p>
              <p className="text-stone-500 text-sm max-w-xs">
                Specialized, compassionate care for treatment-resistant depression. You&apos;re not out of options.
              </p>
            </div>

            <div className="flex gap-12 text-sm">
              <div>
                <p className="text-stone-400 font-medium mb-3">Navigate</p>
                <div className="space-y-2">
                  {[
                    ["About Us", "#about"],
                    ["Dr. Ankit Parmar", "#doctor"],
                    ["Stories", "#testimonials"],
                    ["Our Approach", "#approach"],
                    ["What to Expect", "#what-to-expect"],
                    ["FAQ", "#faq"],
                    ["Contact", "#contact"],
                  ].map(([label, href]) => (
                    <a key={label} href={href} className="block text-stone-500 hover:text-amber-400 transition-colors">
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
            <p>&copy; {new Date().getFullYear()} Axial Holistic Depression Clinic. All rights reserved.</p>
            <p>This website is for informational purposes only and does not constitute medical advice.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
