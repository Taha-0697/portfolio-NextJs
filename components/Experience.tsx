
"use client";

import { experiences } from "@/data/experiences";

export default function Experience() {
  return (
  <section className="section" id="experience">
      <h2>Experience</h2>

      <div className="experience-timeline">
        {experiences.map((experience, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-marker"></div>

            <div className="timeline-content">
              <h3>{experience.title}</h3>

              <p className="company">
                {experience.company} • {experience.duration}
              </p>

              <ul className="experience-list">
                {experience.responsibilities.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

