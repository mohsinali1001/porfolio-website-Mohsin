function ProjectCard({ project, variant = 'compact', index }) {
  if (!project) return null;

  const isDetailed = variant === 'detailed';

  if (isDetailed) {
    return (
      <article className="rounded-2xl border border-border bg-surface p-6 sm:p-8 lg:p-12 transition-all hover:border-accent/40">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-3xl space-y-5">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                {project.category}
              </span>
              <span className="text-xs text-muted">•</span>
              <span
                className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium border ${
                  project.isAcademicProject
                    ? 'border-amber-500/30 bg-amber-500/10 text-amber-600 dark:text-amber-400'
                    : 'border-border bg-surface-secondary text-foreground'
                }`}
              >
                {project.status}
              </span>
            </div>

            <h3 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              {project.title}
            </h3>

            <p className="text-base leading-relaxed text-muted sm:text-lg">
              {project.description}
            </p>

            {project.architectureDetails && project.architectureDetails.length > 0 && (
              <div className="pt-2">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground">
                  Engineering Highlights:
                </h4>
                <ul className="mt-3 space-y-2 text-sm text-muted">
                  {project.architectureDetails.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-accent mt-0.5" aria-hidden="true">—</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Technology Tags */}
            <div className="pt-4">
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center rounded-md border border-border bg-surface-secondary px-3 py-1 text-xs font-medium text-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Links if verified URLs exist */}
            {(project.links?.live || project.links?.github) && (
              <div className="flex items-center gap-4 pt-4 border-t border-border/60">
                {project.links.live && (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-accent-hover"
                  >
                    Live Demo ↗
                  </a>
                )}
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-accent-hover"
                  >
                    Source Code ↗
                  </a>
                )}
              </div>
            )}
          </div>

          {typeof index === 'number' && (
            <div className="hidden lg:flex flex-col items-end">
              <span className="text-4xl font-extrabold text-border/80 select-none">
                0{index + 1}
              </span>
            </div>
          )}
        </div>
      </article>
    );
  }

  // Compact / Grid Card (used in FeaturedProjects)
  return (
    <article className="flex flex-col justify-between rounded-xl border border-border bg-surface p-6 sm:p-7 transition-all hover:border-accent/50">
      <div>
        <div className="flex items-center justify-between gap-2">
          <span className="text-xs font-medium uppercase tracking-wider text-accent">
            {project.category}
          </span>
          {project.status && (
            <span
              className={`rounded-full border px-2.5 py-0.5 text-[10px] font-medium ${
                project.isAcademicProject
                  ? 'border-amber-500/30 bg-amber-500/10 text-amber-600 dark:text-amber-400'
                  : 'border-border bg-surface-secondary text-muted'
              }`}
            >
              {project.status}
            </span>
          )}
        </div>

        <h3 className="mt-4 text-xl font-bold text-foreground">
          {project.title}
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-muted">
          {project.description}
        </p>
      </div>

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

        {/* Links if verified URLs exist */}
        {(project.links?.live || project.links?.github) && (
          <div className="mt-4 flex items-center gap-3 pt-3 border-t border-border/40">
            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-accent hover:text-accent-hover"
              >
                Live Demo ↗
              </a>
            )}
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-accent hover:text-accent-hover"
              >
                GitHub ↗
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

export default ProjectCard;

