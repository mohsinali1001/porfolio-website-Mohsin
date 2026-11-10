import { Link } from 'react-router-dom';
import { personalData } from '../../data/personal';

function AboutPreview() {
  return (
    <section className="border-t border-border bg-background py-16 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
          
          {/* Section Header */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-secondary px-3.5 py-1 text-xs font-semibold tracking-wider text-accent uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
              ABOUT ME
            </div>
            <h2 className="mt-5 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {personalData.tagline}
            </h2>
          </div>

          {/* Editorial Content */}
          <div className="flex flex-col justify-between space-y-6 lg:col-span-7">
            <div className="space-y-4 text-base leading-relaxed text-muted sm:text-lg">
              <p>{personalData.aboutBio[0]}</p>
              <p className="border-l-2 border-accent pl-4 text-foreground/90 font-medium">
                {personalData.supportingStatement}
              </p>
            </div>

            <div className="pt-2">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-accent-hover"
              >
                More About Me
                <span aria-hidden="true" className="text-base transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default AboutPreview;
