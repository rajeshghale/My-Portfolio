import React from 'react';

export default function Services({ scrolledY }) {
  const speed = 0.1;
  const translation1 = scrolledY * speed * -1;
  const translation2 = scrolledY * speed * 1;

  return (
    <section className="services reveal visible" id="services">
      {/* Desktop marquee */}
      <div className="services__desktop">
        <div 
          className="services__row" 
          style={{ transform: `translateX(${translation1}px)` }}
        >
          <span className="services__heading">Web Dev</span>
          <span className="services__ampersand">&amp;</span>
          <span className="services__heading">App Dev</span>
          <div className="services__list">
            <span className="services__list-label">Services</span>
            <div className="services__list-divider"></div>
            <span className="services__list-item">Frontend Development</span>
            <span className="services__list-item">Backend Systems</span>
            <span className="services__list-item">Responsive Design</span>
            <span className="services__list-item">API Integration</span>
          </div>
        </div>
        <div 
          className="services__row" 
          style={{ transform: `translateX(${translation2}px)` }}
        >
          <span className="services__heading">UI</span>
          <span className="services__ampersand">&amp;</span>
          <span className="services__heading">Systems</span>
          <div className="services__list" style={{ textAlign: 'right' }}>
            <span className="services__list-label" style={{ textAlign: 'right' }}>Focus</span>
            <div className="services__list-divider" style={{ marginLeft: 'auto' }}></div>
            <span className="services__list-item">Performance</span>
            <span className="services__list-item">Accessibility</span>
            <span className="services__list-item">Clean UI</span>
            <span className="services__list-item">Great UX</span>
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
          <span className="services__mobile-list-label">Expertise</span>
          <div className="services__mobile-list-item">
            <div className="services__mobile-list-dot"></div>
            <span className="services__mobile-list-text">Frontend Development</span>
          </div>
          <div className="services__mobile-list-item">
            <div className="services__mobile-list-dot"></div>
            <span className="services__mobile-list-text">Backend Systems</span>
          </div>
          <div className="services__mobile-list-item">
            <div className="services__mobile-list-dot"></div>
            <span className="services__mobile-list-text">Responsive Design</span>
          </div>
          <div className="services__mobile-list-item">
            <div className="services__mobile-list-dot"></div>
            <span className="services__mobile-list-text">API Integration</span>
          </div>
          <div className="services__mobile-list-item">
            <div className="services__mobile-list-dot"></div>
            <span className="services__mobile-list-text">Problem Solving</span>
          </div>
        </div>
      </div>
    </section>
  );
}
