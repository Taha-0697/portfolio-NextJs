"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="section" id="about">
            <h2>About Me</h2>
            <div className="about-content">
                <div>
                    <p>
                        I&nbsp;m a passionate full-stack developer based in Muscat, Oman, with a
                        strong foundation in front-end technologies and robust back-end
                        capabilities. I specialize in building scalable, user-centric web
                        applications that solve real-world problems.
                    </p>
                    <h3>My Approach</h3>
                    <p>
                        I believe in writing clean, maintainable code and staying current
                        with industry best practices. Every project is an opportunity to
                        create something exceptional.
                    </p>
                    <h3>What Drives Me</h3>
                    <p>
                        Innovation, continuous learning, and the satisfaction of building
                        products that users love. I&nbsp;m always excited to collaborate on
                        visually appealing and functionally robust solutions.
                    </p>
                </div>
                <div className="about-stats">
                    <div className="stat">
                        <div className="stat-number">5+</div>
                        <div className="stat-label">Years Experience</div>
                    </div>
                    <div className="stat">
                        <div className="stat-number">20+</div>
                        <div className="stat-label">Projects Completed</div>
                    </div>
                    <div className="stat">
                        <div className="stat-number">15+</div>
                        <div className="stat-label">Technologies</div>
                    </div>
                </div>
            </div>
        </section>
  );
}

