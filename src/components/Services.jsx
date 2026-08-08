import React, { useEffect, useRef } from 'react';

export default function Services() {
  return (
    <section className="services reveal visible" id="services">
      {/* Desktop marquee — pure CSS, zero JS, zero jitter */}
      <div className="services__desktop">
        {/* Row 1: scrolls left */}
        <div className="services__marquee-track services__marquee-track--left">
          <div className="services__marquee-content">
            <span className="services__heading">Web Dev</span>
            <span className="services__ampersand">&amp;</span>
            <span className="services__heading">App Dev</span>
            <span className="services__ampersand">·</span>
            <span className="services__heading">Web Dev</span>
            <span className="services__ampersand">&amp;</span>
            <span className="services__heading">App Dev</span>
            <span className="services__ampersand">·</span>
          </div>
          {/* Duplicate for seamless loop */}
          <div className="services__marquee-content" aria-hidden="true">
            <span className="services__heading">Web Dev</span>
            <span className="services__ampersand">&amp;</span>
            <span className="services__heading">App Dev</span>
            <span className="services__ampersand">·</span>
            <span className="services__heading">Web Dev</span>
            <span className="services__ampersand">&amp;</span>
            <span className="services__heading">App Dev</span>
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
          <div className="services__mobile-heading">App Dev</div>
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
