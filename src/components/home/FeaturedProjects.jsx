import { Link } from 'react-router-dom';

const FEATURED_PROJECTS = [
  {
    title: 'ShareWay',
    category: 'Mobility / Carpooling Platform',
    description:
      'A carpooling platform that connects passengers with drivers who have available seats, helping people share journeys between cities.',
    technologies: ['Flutter', 'Node.js', 'Express.js', 'Firebase'],
    link: '#',
    status: null,
  },
  {
    title: 'ShopFlow',
    category: 'E-commerce Platform',
    description:
      'An e-commerce solution designed to support buyers, sellers, and administrative operations through a structured multi-role platform.',
    technologies: ['React', 'Node.js', 'Express.js', 'MongoDB'],
    link: '#',
    status: null,
  },
  {
    title: 'CourseMind AI',
    category: 'AI-powered Learning Platform',
    description:
      'An AI-assisted learning workspace designed to help students organize course materials, explore topics, and practice using their academic resources.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'AI APIs'],
    link: '#',
    status: 'Academic project in development',
  },
];

function FeaturedProjects() {
  return (
    <section className="border-t border-border bg-background py-16 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-secondary px-3.5 py-1 text-xs font-semibold tracking-wider text-accent uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
              SELECTED WORK
            </div>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Projects built to solve real problems.
            </h2>
          </div>

          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-accent-hover"
          >
            View All Projects
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        {/* Projects Cards Grid */}
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {FEATURED_PROJECTS.map((project) => (
            <article
              key={project.title}
              className="flex flex-col justify-between rounded-xl border border-border bg-surface p-7 transition-all hover:border-accent/50"
            >
              <div>
                {/* Category & Status */}
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-medium uppercase tracking-wider text-accent">
                    {project.category}
                  </span>
                  {project.status && (
                    <span className="rounded-full bg-surface-secondary border border-border px-2.5 py-0.5 text-[10px] font-medium text-muted">
                      {project.status}
                    </span>
                  )}
                </div>

                {/* Project Title */}
                <h3 className="mt-4 text-xl font-bold text-foreground">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {project.description}
                </p>
              </div>

              {/* Technologies Tag List */}
              <div className="mt-6 border-t border-border/60 pt-5">
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center rounded bg-surface-secondary px-2 py-0.5 text-xs text-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default FeaturedProjects;

