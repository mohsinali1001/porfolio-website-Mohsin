import { projectsData } from '../data/projects';
import ProjectCard from '../components/common/ProjectCard';
import Button from '../components/common/Button';

function Projects() {
  return (
    <div className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <header className="border-b border-border pb-12 sm:pb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-secondary px-3.5 py-1 text-xs font-semibold tracking-wider text-accent uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
            SELECTED WORK & PRACTICAL APPLICATIONS
          </div>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Selected Projects & Practical Work
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted sm:text-xl">
            A collection of applications and software solutions developed to solve practical problems using modern technologies. Each project represents thoughtful engineering, clean architecture, and user-centered execution.
          </p>
        </header>

        {/* Project Showcase Section using reusable ProjectCard */}
        <div className="space-y-16 py-16 sm:py-20">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              variant="detailed"
              index={index}
            />
          ))}
        </div>

        {/* Closing CTA */}
        <section className="border-t border-border pt-16 sm:pt-20">
          <div className="rounded-2xl border border-border bg-surface-secondary/40 p-6 text-center sm:p-10 lg:p-12">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Have an Idea for a New Project?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-muted sm:text-base">
              Whether you need a full-stack platform, an API integration, or modern mobile application, let's explore how we can work together.
            </p>
            <div className="mt-8">
              <Button to="/contact" variant="primary">
                Discuss a Project
              </Button>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}

export default Projects;
