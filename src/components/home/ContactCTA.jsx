import SectionTitle from '../common/SectionTitle';
import Button from '../common/Button';

function ContactCTA() {
  return (
    <section className="border-t border-border bg-surface-secondary/40 py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="HAVE A PROJECT IN MIND?"
          title="Let's build something meaningful together."
          description="Have an idea, a project, or an opportunity to discuss? I'm open to connecting and exploring how we can work together."
          alignment="center"
        />

        <div className="mt-8">
          <Button to="/contact" variant="primary" size="lg">
            Get in Touch
          </Button>
        </div>
      </div>
    </section>
  );
}

export default ContactCTA;
