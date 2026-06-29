"use client";

import { Expertise } from "@/data/expertise";

export default function Skills() {
  return (
    <section className="section" id="skills">
      <h2>Technical Expertise</h2>

      <div className="skills-grid">
        {Expertise.map((group, index) => (
          <div className="skill-card" key={index}>
            <h3>
              <i className={group.icon}></i> {group.title}
            </h3>

            <div className="skill-tags">
              {group.skills.map((skill, i) => (
                <span className="tag" key={i}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
