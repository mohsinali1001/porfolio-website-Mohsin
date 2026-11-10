import { personalData } from '../data/personal';
import Button from '../components/common/Button';

function About() {
  return (
    <div className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        {/* Section A: Page Introduction */}
        <header className="border-b border-border pb-12 sm:pb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-secondary px-3.5 py-1 text-xs font-semibold tracking-wider text-accent uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
            ABOUT ME
          </div>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {personalData.tagline}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted sm:text-xl">
            {personalData.aboutBio[0]}
          </p>
        </header>

        {/* Section B: Professional Background */}
        <section className="border-b border-border py-16 sm:py-20">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Technical Background & Focus
              </h2>
              <p className="mt-3 text-sm text-muted">
                Core competencies developed across frontend, backend, database design, and mobile engineering.
              </p>
            </div>
            <div className="space-y-6 text-base leading-relaxed text-muted lg:col-span-7">
              {personalData.aboutBio.slice(1).map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        {/* Section C: Development Philosophy */}
        <section className="border-b border-border py-16 sm:py-20">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Development Philosophy
            </h2>
            <p className="mt-2 text-sm text-muted">
              Guiding principles that define how I write code and build software.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {personalData.philosophy.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-border bg-surface p-6 transition-colors hover:border-accent/40"
              >
                <h3 className="text-base font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section D: My Journey */}
        <section className="border-b border-border py-16 sm:py-20">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Engineering Journey
            </h2>
            <p className="mt-2 text-sm text-muted">
              Progressive growth in software engineering and system architecture.
            </p>
          </div>

          <div className="mt-10 space-y-6">
            {personalData.journeyMilestones.map((milestone, idx) => (
              <div
                key={milestone.title}
                className="relative rounded-xl border border-border bg-surface p-6 sm:p-8"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                  <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                    {milestone.phase}
                  </span>
                  <span className="text-xs text-muted">Milestone 0{idx + 1}</span>
                </div>
                <h3 className="mt-3 text-lg font-bold text-foreground sm:text-xl">
                  {milestone.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {milestone.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section E: Working Approach */}
        <section className="border-b border-border py-16 sm:py-20">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Project Execution Workflow
            </h2>
            <p className="mt-2 text-sm text-muted">
              A structured, repeatable methodology for delivering reliable software.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {personalData.workingSteps.map((step) => (
              <div
                key={step.step}
                className="rounded-xl border border-border bg-surface p-6"
              >
                <span className="text-xs font-bold text-accent">{step.step}</span>
                <h3 className="mt-2 text-base font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section F: Closing CTA */}
        <section className="pt-16 sm:pt-20">
          <div className="rounded-2xl border border-border bg-surface-secondary/40 p-6 text-center sm:p-10 lg:p-12">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Explore My Work or Start a Conversation
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-muted sm:text-base">
              Discover real-world applications I have built or reach out to discuss collaboration opportunities.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button to="/projects" variant="primary" className="w-full sm:w-auto">
                View Selected Projects
              </Button>
              <Button to="/contact" variant="secondary" className="w-full sm:w-auto">
                Get in Touch
              </Button>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}

export default About;
