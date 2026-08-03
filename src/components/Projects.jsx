import React, { useEffect, useRef } from 'react';

export default function Projects() {
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

  const projectsData = [
    {
      id: 1,
      num: '01',
      name: 'Portfolio Website',
      desc: 'A modern, responsive portfolio website built with clean HTML, CSS, and JavaScript featuring dark mode and smooth animations.',
      tags: ['HTML', 'CSS', 'JavaScript'],
      image: '/bgimage.jpg',
      github: 'https://github.com/rajeshghale/My-Portfolio'
    },
    {
      id: 2,
      num: '02',
      name: 'Web Application',
      desc: 'A full-stack web application demonstrating modern development practices with responsive design and interactive features.',
      tags: ['React', 'Node.js', 'MongoDB'],
      image: '/bgimage.jpg',
      github: 'https://github.com/rajeshghale'
    },
    {
      id: 3,
      num: '03',
      name: 'Python Automation',
      desc: 'Python scripts and automation tools for solving real-world problems, showcasing problem-solving and algorithmic thinking.',
      tags: ['Python', 'Automation'],
      image: '/bgimage.jpg',
      github: 'https://github.com/rajeshghale'
    },
    {
      id: 4,
      num: '04',
      name: 'Landing Page Design',
      desc: 'A pixel-perfect, responsive landing page with modern CSS techniques, animations, and accessibility best practices.',
      tags: ['HTML', 'CSS', 'UI Design'],
      image: '/bgimage.jpg',
      github: 'https://github.com/rajeshghale'
    }
  ];

  return (
    <section className="projects" id="projects" ref={rootRef}>
      <div className="projects__container">
        <div className="projects__header reveal">
          <h2 className="projects__title">Featured Work</h2>
          <p className="projects__subtitle">
            A selection of projects I've built — from concept to deployment. Each project pushes my understanding of web technologies further.
          </p>
        </div>

        <div className="projects__grid">
          {projectsData.map((project) => (
            <div key={project.id} className="project-card reveal">
              <div className="project-card__image">
                <div className="project-card__overlay"></div>
                <span className="corner-bracket corner-bracket--tl"></span>
                <span className="corner-bracket corner-bracket--tr"></span>
                <span className="corner-bracket corner-bracket--bl"></span>
                <span className="corner-bracket corner-bracket--br"></span>
                <img src={project.image} alt={project.name} width="800" height="450" />
              </div>
              <div className="project-card__info">
                <span className="project-card__number">{project.num} / Project</span>
                <h3 className="project-card__name">{project.name}</h3>
                <p className="project-card__desc">{project.desc}</p>
                <div className="project-card__tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="project-card__tag">{tag}</span>
                  ))}
                </div>
                <div className="project-card__links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-card__link">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                    Source
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
