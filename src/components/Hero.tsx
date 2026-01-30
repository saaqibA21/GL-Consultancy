"use client";

import { useEffect, useState } from "react";
import CountUp from "react-countup";

export default function Hero() {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("landing");
      if (section && window.scrollY + window.innerHeight > section.offsetTop) {
        setIsInView(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="landing"
      aria-label="Private college admission consultancy in Chennai"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#faf8f3] via-[#f5f1e8] to-[#f0ebe0]"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-5">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `radial-gradient(circle, #d4af37 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 pt-2 pb-12 w-full">
        <div className="space-y-4">
          {/* GEO Trust Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/60 bg-amber-50 px-3 py-1 text-xs text-amber-700 font-medium">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
            Trusted Chennai Admission Consultants
          </div>

          {/* SEO Optimized H1 */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
            Private College Admissions in{" "}
            <span className="text-amber-600">Chennai & Tamil Nadu</span>{" "}
            Made Simple
          </h1>

          {/* Keyword-rich description */}
          <p className="text-sm md:text-base text-[#4a5568] max-w-xl">
            GL Consultancy helps students choose the right private colleges in
            Chennai and across Tamil Nadu. Compare courses, understand fees,
            explore real student reviews, and get free one-on-one admission
            counselling from experienced experts.
          </p>

          {/* CTA */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#appointment"
              title="Book free college admission counselling in Chennai"
              className="rounded-full bg-amber-500 px-6 py-2 text-sm font-semibold text-white hover:bg-amber-600 transition-colors shadow-md"
            >
              Book Free Counselling
            </a>

            <a
              href="#colleges"
              title="Browse private colleges in Chennai"
              className="text-sm text-[#1e2749] hover:text-amber-600 underline-offset-4 hover:underline font-medium"
            >
              View Chennai Colleges
            </a>
          </div>

          {/* Stats (SEO-safe) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl pt-8">
            <div className="flex flex-col items-center">
              <p className="text-5xl font-bold text-amber-400">
                <CountUp start={0} end={isInView ? 6300 : 0} duration={3} suffix="+" />
              </p>
              <p className="text-sm text-[#4a5568] mt-2 text-center">
                Students counselled in Chennai
              </p>
            </div>

            <div className="flex flex-col items-center">
              <p className="text-5xl font-bold text-amber-400">
                <CountUp start={0} end={isInView ? 25 : 0} duration={3} suffix="+" />
              </p>
              <p className="text-sm text-[#4a5568] mt-2 text-center">
                Private colleges partnered
              </p>
            </div>

            <div className="flex flex-col items-center">
              <p className="text-5xl font-bold text-amber-400">
                <CountUp start={0} end={isInView ? 4.8 : 0} decimals={1} duration={2.5} />
              </p>
              <p className="text-sm text-[#4a5568] mt-2 text-center">
                Student satisfaction rating
              </p>
            </div>

            <div className="flex flex-col items-center">
              <p className="text-5xl font-bold text-amber-400">
                <CountUp start={0} end={isInView ? 5 : 0} duration={3} suffix="+" />
              </p>
              <p className="text-sm text-[#4a5568] mt-2 text-center">
                Years of admission expertise
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
