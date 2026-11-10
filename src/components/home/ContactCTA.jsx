import { Link } from 'react-router-dom';

function ContactCTA() {
  return (
    <section className="border-t border-border bg-surface-secondary/40 py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        
        {/* Section Label */}
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-1 text-xs font-semibold tracking-wider text-accent uppercase">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
          HAVE A PROJECT IN MIND?
        </div>

        {/* Heading */}
        <h2 className="mt-5 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          Let's build something meaningful together.
        </h2>

        {/* Description */}
        <p className="mx-auto mt-4 max-w-2xl text-base text-muted sm:text-lg leading-relaxed">
          Have an idea, a project, or an opportunity to discuss? I'm open to connecting and exploring how we can work together.
        </p>

        {/* Action Button */}
        <div className="mt-8">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-lg bg-accent px-8 py-3.5 text-base font-semibold text-white shadow-xs transition-colors hover:bg-accent-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            Get in Touch
          </Link>
        </div>

      </div>
    </section>
  );
}

export default ContactCTA;

