import { skillsData } from '../data/skills';
import { personalData } from '../data/personal';
import SkillCard from '../components/common/SkillCard';
import Button from '../components/common/Button';

function Skills() {
  return (
    <div className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <header className="border-b border-border pb-12 sm:pb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-secondary px-3.5 py-1 text-xs font-semibold tracking-wider text-accent uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
            TECHNICAL EXPERTISE
          </div>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Technologies and tools I work with.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted sm:text-xl">
            A comprehensive overview of my technical stack, programming competencies, and engineering tooling. Focused on practical utility, clean architecture, and reliable execution.
          </p>
        </header>

        {/* Skill Categories using reusable SkillCard */}
        <section className="border-b border-border py-16 sm:py-20">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {skillsData.map((group) => (
              <SkillCard
                key={group.id}
                skill={group}
                showDescription={true}
              />
            ))}
          </div>
        </section>

        {/* Development Capabilities */}
        <section className="border-b border-border py-16 sm:py-20">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Development Capabilities
            </h2>
            <p className="mt-2 text-sm text-muted">
              Concrete solutions and technical systems I am capable of designing and delivering.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {personalData.capabilities.map((cap) => (
              <div
                key={cap.title}
                className="rounded-xl border border-border bg-surface p-6"
              >
                <div className="h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
                <h3 className="mt-3 text-base font-semibold text-foreground">
                  {cap.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {cap.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Closing CTA */}
        <section className="pt-16 sm:pt-20">
          <div className="rounded-2xl border border-border bg-surface-secondary/40 p-6 text-center sm:p-10 lg:p-12">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              See How These Skills Are Applied in Real Projects
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-muted sm:text-base">
              Explore hands-on software solutions or get in touch to discuss technical requirements.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button to="/projects" variant="primary" className="w-full sm:w-auto">
                Explore Selected Projects
              </Button>
              <Button to="/contact" variant="secondary" className="w-full sm:w-auto">
                Let's Connect
              </Button>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}

export default Skills;
