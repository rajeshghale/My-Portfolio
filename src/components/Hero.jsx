import React, { useState, useEffect } from 'react';

export default function Hero() {
  const roles = ['BCA Student', 'Web Developer', 'Problem Solver'];
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const currentRole = roles[roleIndex];

    const type = () => {
      if (!isDeleting) {
        setDisplayText((prev) => currentRole.substring(0, prev.length + 1));
        if (displayText === currentRole) {
          timer = setTimeout(() => setIsDeleting(true), 1500);
        } else {
          timer = setTimeout(type, 100);
        }
      } else {
        setDisplayText((prev) => currentRole.substring(0, prev.length - 1));
        if (displayText === '') {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
          timer = setTimeout(type, 500);
        } else {
          timer = setTimeout(type, 50);
        }
      }
    };

    timer = setTimeout(type, isDeleting ? 50 : 100);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  const handleSelectedWorkClick = (e) => {
    e.preventDefault();
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" id="hero-section">
      <div className="hero__backdrop" aria-hidden="true">
        <div className="hero__grid"></div>
      </div>

      <div className="hero__container">
        {/* Mobile Layout */}
        <div className="hero__mobile">
          <div className="hero__mobile-anim" style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '1rem', alignItems: 'start' }}>
            <div>
              <div className="hero__label">01/</div>
              <div className="hero__label-sub" style={{ marginTop: '0.5rem' }}>From Nepal with<br />Love</div>
            </div>
            <div className="hero__status">
              <span className="hero__status-dot"></span>
              <span className="hero__status-text">Open for work</span>
            </div>
          </div>

          <div className="hero__mobile-anim">
            <h1 className="hero__heading">Software<br />Developer</h1>
            <div style={{ marginTop: '0.5rem', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '14px', color: 'var(--foreground)' }}>
              I am a <span style={{ color: 'var(--accent)', fontWeight: 'bold' }}>{displayText}</span><span className="cursor">|</span>
            </div>
          </div>

          <div className="hero__mobile-anim">
            <div className="hero__tags">
              <a href="#skills-section" className="hero__tag">HTML</a>
              <a href="#skills-section" class="hero__tag">CSS</a>
              <a href="#skills-section" class="hero__tag">JavaScript</a>
              <a href="#skills-section" class="hero__tag">React</a>
              <a href="#skills-section" class="hero__tag">Python</a>
            </div>
          </div>

          <div className="hero__mobile-anim">
            <div className="hero__label" style={{ marginBottom: '0.5rem', textAlign: 'left' }}>Dr & Me</div>
            <div className="hero__image-wrapper" style={{ width: '100%' }}>
              <div className="hero__image-frame" style={{ aspectRatio: '16/9' }}>
                <span className="corner-bracket corner-bracket--tl"></span>
                <span className="corner-bracket corner-bracket--tr"></span>
                <span className="corner-bracket corner-bracket--bl"></span>
                <span className="corner-bracket corner-bracket--br"></span>
                <img src="/mePic.jpg" alt="Rajesh Ghale" width="1200" height="675" />
              </div>
            </div>
          </div>

          <div className="hero__mobile-anim">
            <div style={{ textAlign: 'right' }}>
              <div className="hero__description" style={{ marginLeft: 'auto' }}>
                <p>Building clean, modern web apps<br />for real users.</p>
              </div>
              <div style={{ marginTop: '0.5rem', fontSize: '10px', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.24em', color: 'color-mix(in srgb, var(--foreground) 55%, transparent)' }}>
                Open for freelance / internships<br />Based in Kathmandu, Nepal
              </div>
            </div>
          </div>

          <div className="hero__mobile-anim">
            <div className="hero__name" style={{ textAlign: 'right' }}>Rajesh<br />Ghale</div>
          </div>

          <div className="hero__mobile-anim">
            <div style={{ textAlign: 'right', fontSize: '10px', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.26em', color: 'color-mix(in srgb, var(--foreground) 55%, transparent)' }}>
              2025 Portfolio
            </div>
          </div>

          <div className="hero__mobile-anim">
            <div className="hero__arrow-block">
              <div className="hero__arrow"><span aria-hidden="true">-&gt;</span></div>
              <div className="hero__location">
                I based in<br />Kathmandu,<br />Passionate in code & design
              </div>
            </div>
          </div>

          <div className="hero__mobile-anim" style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <a className="hero__cta" href="#projects" onClick={handleSelectedWorkClick}>
              <span>Selected work</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m7 7 10 10"></path><path d="M17 7v10H7"></path></svg>
            </a>
          </div>

          <div className="hero__mobile-anim">
            <div style={{ textAlign: 'right', fontSize: '10px', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.28em', color: 'color-mix(in srgb, var(--foreground) 55%, transparent)' }}>
              Design & code by Rajesh
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hero__desktop">
          <div className="hero__row">
            <div className="hero__heading-block">
              <h1 className="hero__heading">Software<br />Developer</h1>
              <div className="hero__tags">
                <a href="#skills-section" className="hero__tag">HTML</a>
                <a href="#skills-section" className="hero__tag">CSS</a>
                <a href="#skills-section" className="hero__tag">JavaScript</a>
                <a href="#contact" className="hero__tag">Web Dev</a>
              </div>
            </div>
            <div className="hero__meta">
              <div class="hero__status">
                <span className="hero__status-dot"></span>
                <span className="hero__status-text">Open for work</span>
              </div>
              <div className="hero__label" style={{ textAlign: 'right' }}>
                <div>01/</div>
                <div className="hero__label-sub">From Nepal with<br />Love</div>
              </div>
            </div>
          </div>

          <div className="hero__row-bottom">
            <div className="hero__image-block">
              <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                <div style={{ width: '100%', maxWidth: '720px' }}>
                  <div className="hero__image-wrapper">
                    <div className="hero__image-frame" style={{ aspectRatio: '16/6' }}>
                      <span className="corner-bracket corner-bracket--tl"></span>
                      <span className="corner-bracket corner-bracket--tr"></span>
                      <span className="corner-bracket corner-bracket--bl"></span>
                      <span className="corner-bracket corner-bracket--br"></span>
                      <img src="/mePic.jpg" alt="Rajesh Ghale" width="1600" height="600" />
                    </div>
                  </div>

                  <div className="hero__arrow-block" style={{ marginTop: '1.5rem' }}>
                    <div className="hero__arrow"><span aria-hidden="true">-&gt;</span></div>
                    <div className="hero__location">
                      I based in<br />Kathmandu,<br />Passionate in code & design
                    </div>
                  </div>

                  <div className="hero__credit">Design & code by Rajesh</div>
                </div>
              </div>
            </div>

            <div className="hero__name-block">
              <div className="hero__description">
                <p>Building clean, modern web apps<br />for real users.</p>
                <div className="hero__description-sub">
                  Open for freelance / internships<br />Based in Kathmandu, Nepal
                </div>
              </div>
              <div className="hero__name">Rajesh<br />Ghale</div>
              <div className="hero__year">2025 Portfolio</div>
              <div className="hero__cta-row">
                <a className="hero__cta" href="#projects" onClick={handleSelectedWorkClick}>
                  <span>Selected work</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m7 7 10 10"></path><path d="M17 7v10H7"></path></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
