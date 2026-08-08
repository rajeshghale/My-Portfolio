import React, { useEffect, useRef } from 'react';

export default function Services() {
  const rootRef = useRef(null);

  useEffect(() => {
    let frameId;

    const updateMarquee = () => {
      const root = rootRef.current;
      if (!root) return;

      const tracks = root.querySelectorAll('.services__marquee-track');
      tracks.forEach((track) => {
        const firstContent = track.querySelector('.services__marquee-content');
        if (!firstContent) return;

        const loopWidth = firstContent.offsetWidth;
        if (!loopWidth) return;

        const offset = (window.scrollY * 0.7) % loopWidth;
        const direction = track.classList.contains('services__marquee-track--left') ? -1 : 1;
        const startOffset = direction === 1 ? -loopWidth : 0;
        track.querySelectorAll('.services__marquee-content').forEach((content) => {
          content.style.transform = `translate3d(${startOffset + direction * offset}px, 0, 0)`;
        });
      });
      frameId = undefined;
    };

    const handleScroll = () => {
      if (!frameId) frameId = requestAnimationFrame(updateMarquee);
    };

    updateMarquee();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', updateMarquee);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateMarquee);
      if (frameId) cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <section className="services reveal visible" id="services" ref={rootRef}>
      {/* Desktop marquee — pure CSS, zero JS, zero jitter */}
      <div className="services__desktop">
        {/* Row 1: scrolls left */}
        <div className="services__marquee-track services__marquee-track--left">
          <div className="services__marquee-content">
            <span className="services__heading">Web Dev</span>
            <span className="services__ampersand">&amp;</span>
            <span className="services__heading">Graphic Design</span>
            <span className="services__ampersand">·</span>
            <span className="services__heading">Web Dev</span>
            <span className="services__ampersand">&amp;</span>
            <span className="services__heading">Graphic Design</span>
            <span className="services__ampersand">·</span>
          </div>
          {/* Duplicate for seamless loop */}
          <div className="services__marquee-content" aria-hidden="true">
            <span className="services__heading">Web Dev</span>
            <span className="services__ampersand">&amp;</span>
            <span className="services__heading">Graphic Design</span>
            <span className="services__ampersand">·</span>
            <span className="services__heading">Web Dev</span>
            <span className="services__ampersand">&amp;</span>
            <span className="services__heading">Graphic Design</span>
            <span className="services__ampersand">·</span>
          </div>
        </div>

        {/* Row 2: scrolls right */}
        <div className="services__marquee-track services__marquee-track--right">
          <div className="services__marquee-content">
            <span className="services__heading">UI</span>
            <span className="services__ampersand">&amp;</span>
            <span className="services__heading">Systems</span>
            <span className="services__ampersand">·</span>
            <span className="services__heading">UI</span>
            <span className="services__ampersand">&amp;</span>
            <span className="services__heading">Systems</span>
            <span className="services__ampersand">·</span>
          </div>
          <div className="services__marquee-content" aria-hidden="true">
            <span className="services__heading">UI</span>
            <span className="services__ampersand">&amp;</span>
            <span className="services__heading">Systems</span>
            <span className="services__ampersand">·</span>
            <span className="services__heading">UI</span>
            <span className="services__ampersand">&amp;</span>
            <span className="services__heading">Systems</span>
            <span className="services__ampersand">·</span>
          </div>
        </div>
      </div>

      {/* Mobile list */}
      <div className="services__mobile">
        <div className="services__mobile-headings">
          <div className="services__mobile-heading">Web Dev</div>
          <div className="services__mobile-amp">
            <div className="services__mobile-amp-line"></div>
            <span className="services__mobile-amp-text">&amp;</span>
            <div className="services__mobile-amp-line"></div>
          </div>
          <div className="services__mobile-heading">Graphic Design</div>
        </div>
        <div className="services__mobile-list">
          <span className="services__mobile-list-label">Also available</span>
          <div className="services__mobile-list-item">
            <div className="services__mobile-list-dot"></div>
            <span className="services__mobile-list-text">UI</span>
          </div>
          <div className="services__mobile-list-item">
            <div className="services__mobile-list-dot"></div>
            <span className="services__mobile-list-text">Systems</span>
          </div>
        </div>
      </div>
    </section>
  );
}
