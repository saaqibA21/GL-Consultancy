const courses = [
  {
    name: "B.Tech / B.E. (Computer Science, IT, ECE, Mechanical)",
    type: "Undergraduate",
    highlights: [
      "Top private engineering colleges in Chennai",
      "Cut-off, counselling & management quota guidance",
      "Hostel, fees, placement and accreditation comparison",
    ],
  },
  {
    name: "B.Com / BBA / BMS",
    type: "Undergraduate",
    highlights: [
      "Commerce & management colleges across Chennai",
      "Specialisations like FinTech, Analytics & Marketing",
      "Strong foundation for CA, MBA and corporate careers",
    ],
  },
  {
    name: "MBA / PGDM",
    type: "Postgraduate",
    highlights: [
      "Top MBA colleges in Chennai with placements",
      "Profile-based shortlisting & SOP guidance",
      "Full-time, part-time & executive MBA options",
    ],
  },
  {
    name: "Allied Health Sciences & Nursing",
    type: "Undergraduate / Diploma",
    highlights: [
      "Paramedical, nursing & allied health programmes",
      "Hospital tie-ups & real clinical exposure",
      "India & abroad career pathway support",
    ],
  },
];

export default function CoursesSection() {
  return (
    <section
      aria-labelledby="courses-heading"
      className="mt-16"
    >
      {/* SEO-Optimized Heading */}
      <h2
        id="courses-heading"
        className="text-2xl md:text-3xl font-semibold"
      >
        Courses Offered by Our Chennai College Admission Consultants
      </h2>

      {/* SEO + GEO Description */}
      <p className="mt-2 text-sm text-[#4a5568] max-w-xl">
        We guide students across Chennai and Tamil Nadu in choosing the right
        course and private college based on career goals, budget, entrance
        scores, and long-term opportunities.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {courses.map((course) => (
          <article
            key={course.name}
            className="rounded-3xl border border-amber-200 bg-white p-5 shadow-md hover:shadow-lg transition-shadow"
            itemScope
            itemType="https://schema.org/EducationalOccupationalProgram"
          >
            <div className="flex items-center justify-between gap-3">
              {/* Course Name */}
              <h3
                className="text-lg font-semibold"
                itemProp="name"
              >
                {course.name}
              </h3>

              <span className="rounded-full bg-amber-100 border border-amber-200 px-3 py-1 text-[11px] text-amber-700 font-medium">
                {course.type}
              </span>
            </div>

            {/* Course Highlights */}
            <ul className="mt-4 space-y-2 text-xs text-[#4a5568]">
              {course.highlights.map((point) => (
                <li key={point} className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-400" />
                  <span itemProp="description">{point}</span>
                </li>
              ))}
            </ul>

            {/* Internal SEO CTA */}
            <a
              href="#appointment"
              title={`Get counselling for ${course.name} admissions in Chennai`}
              className="mt-4 inline-block text-xs font-semibold text-amber-600 underline-offset-4 hover:underline"
            >
              Speak to a Chennai admission counsellor →
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
