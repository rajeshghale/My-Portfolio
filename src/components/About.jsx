import React, { useEffect, useRef } from 'react';

export default function About() {
  const rootRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    });

    if (rootRef.current) {
      const elements = rootRef.current.querySelectorAll('.reveal');
      elements.forEach(el => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="about" id="skills-section" ref={rootRef}>
      <div className="about__container">
        <div className="about__layout">
          {/* Left: About text */}
          <div className="about__left">
            <div className="about__label-row reveal">
              <span className="about__label">About</span>
              <div className="about__label-line"></div>
            </div>
            <h2 className="about__title reveal">About</h2>
            <p className="about__text reveal">
              BCA Student & aspiring Full-Stack Developer pursuing my Bachelor of Computer Applications at Camad College under Pokhara University. Experienced in building web applications using HTML, CSS, JavaScript, React, and Python.
            </p>
            <p className="about__text-secondary reveal">
              Born on July 10, 2005, I am a young and enthusiastic learner fascinated by how technology shapes the modern world. Through my academic journey, I continuously build skills in programming, problem-solving, and digital innovation.
            </p>
            <p className="about__text-secondary reveal">
              Passionate about clean code, creative problem-solving, and turning ideas into reality — one line at a time.
            </p>
          </div>

          {/* Right: Skills */}
          <div className="about__right">
            <div className="about__skills">
              {/* Frontend */}
              <div className="about__skill-row reveal">
                <div className="about__skill-category">Frontend</div>
                <div className="about__skill-items">
                  <div className="about__skill-item">
                    <div className="about__skill-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                    </div>
                    <span className="about__skill-name">HTML</span>
                  </div>
                  <div className="about__skill-item">
                    <div className="about__skill-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4h16v16H4z" stroke="currentColor" stroke-width="2"/><path d="M8 8h8v8H8z" stroke="currentColor" stroke-width="2"/></svg>
                    </div>
                    <span className="about__skill-name">CSS</span>
                  </div>
                  <div className="about__skill-item">
                    <div className="about__skill-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" stroke="currentColor" stroke-width="2"/><path d="M9 9l6 6M15 9l-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
                    </div>
                    <span className="about__skill-name">JavaScript</span>
                  </div>
                  <div className="about__skill-item">
                    <div className="about__skill-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="2"/><ellipse cx="12" cy="12" rx="10" ry="4" stroke="currentColor" stroke-width="2"/><ellipse cx="12" cy="12" rx="10" ry="4" stroke="currentColor" stroke-width="2" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4" stroke="currentColor" stroke-width="2" transform="rotate(-60 12 12)"/></svg>
                    </div>
                    <span className="about__skill-name">React</span>
                  </div>
                </div>
              </div>

              {/* Backend */}
              <div className="about__skill-row reveal">
                <div className="about__skill-category">Backend</div>
                <div className="about__skill-items">
                  <div className="about__skill-item">
                    <div className="about__skill-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l-2 7h4l-2 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><rect x="4" y="2" width="16" height="20" rx="2" stroke="currentColor" stroke-width="2"/></svg>
                    </div>
                    <span className="about__skill-name">Python</span>
                  </div>
                  <div className="about__skill-item">
                    <div className="about__skill-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" stroke="currentColor" stroke-width="2"/><path d="M8 12h8M12 8v8" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
                    </div>
                    <span className="about__skill-name">Node.js</span>
                  </div>
                </div>
              </div>

              {/* Database */}
              <div className="about__skill-row reveal">
                <div className="about__skill-category">Database</div>
                <div className="about__skill-items">
                  <div className="about__skill-item">
                    <div className="about__skill-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="12" cy="5" rx="9" ry="3" stroke="currentColor" stroke-width="2"/><path d="M21 12c0 1.66-4.03 3-9 3s-9-1.34-9-3" stroke="currentColor" stroke-width="2"/><path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" stroke="currentColor" stroke-width="2"/></svg>
                    </div>
                    <span className="about__skill-name">MySQL</span>
                  </div>
                  <div className="about__skill-item">
                    <div className="about__skill-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="12" cy="5" rx="9" ry="3" stroke="currentColor" stroke-width="2"/><path d="M21 12c0 1.66-4.03 3-9 3s-9-1.34-9-3" stroke="currentColor" stroke-width="2"/><path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" stroke="currentColor" stroke-width="2"/></svg>
                    </div>
                    <span className="about__skill-name">MongoDB</span>
                  </div>
                </div>
              </div>

              {/* Tools */}
              <div className="about__skill-row reveal">
                <div className="about__skill-category">Tools</div>
                <div className="about__skill-items">
                  <div className="about__skill-item">
                    <div className="about__skill-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="2"/><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
                    </div>
                    <span className="about__skill-name">Git</span>
                  </div>
                  <div className="about__skill-item">
                    <div className="about__skill-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 17l6-6-6-6M12 19h8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                    </div>
                    <span className="about__skill-name">VS Code</span>
                  </div>
                  <div className="about__skill-item">
                    <div className="about__skill-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                    </div>
                    <span className="about__skill-name">GitHub</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
