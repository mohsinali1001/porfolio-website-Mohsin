import { useState } from 'react';
import { socialLinks } from '../data/socialLinks';
import SocialLinks from '../components/common/SocialLinks';
import Button from '../components/common/Button';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submissionNotice, setSubmissionNotice] = useState(null);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = 'Full name is required.';
    }

    if (!formData.email.trim()) {
      errs.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address.';
    }

    if (!formData.subject.trim()) {
      errs.subject = 'Subject is required.';
    }

    if (!formData.message.trim()) {
      errs.message = 'Message content is required.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Please provide a message of at least 10 characters.';
    }

    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmissionNotice(null);
      return;
    }

    setErrors({});
    
    // Explicit architectural notice: No backend service is connected.
    // Rather than faking API delivery, we open the mail client with pre-filled content.
    const mailtoUrl = `mailto:contact@mohsinali.dev?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `From: ${formData.name} (${formData.email})\n\n${formData.message}`
    )}`;

    window.location.href = mailtoUrl;

    setSubmissionNotice(
      'Form inputs verified. Because no backend email service is currently connected, your message has been prepared in your default email client. You can also contact me directly via the links below.'
    );
  };

  return (
    <div className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <header className="border-b border-border pb-12 sm:pb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-secondary px-3.5 py-1 text-xs font-semibold tracking-wider text-accent uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
            GET IN TOUCH
          </div>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Let's Discuss Your Next Project.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted sm:text-xl">
            Have a project idea, development opportunity, or collaboration in mind? Get in touch using the form or connect through the verified channels below.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-12 py-16 sm:py-20 lg:grid-cols-12 lg:gap-16">
          
          {/* Contact Details & Alternative Channels using reusable SocialLinks */}
          <div className="space-y-8 lg:col-span-5">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-foreground">
                Connect Directly
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Feel free to connect directly via GitHub or alternative professional channels.
              </p>
            </div>

            <SocialLinks links={socialLinks} variant="cards" />

            <div className="rounded-xl border border-border bg-surface-secondary/40 p-5 text-xs text-muted leading-relaxed">
              <span className="font-semibold text-foreground">Direct Mail:</span> You can also compose a direct message in your mail application to{' '}
              <a href="mailto:contact@mohsinali.dev" className="text-accent underline hover:text-accent-hover">
                contact@mohsinali.dev
              </a>.
            </div>
          </div>

          {/* Form Area */}
          <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8 lg:p-10 lg:col-span-7">
            <h2 className="text-xl font-bold text-foreground sm:text-2xl">
              Send a Message
            </h2>
            <p className="mt-2 text-xs text-muted">
              All fields are required. Form entries are validated on the client side.
            </p>

            {submissionNotice && (
              <div
                role="status"
                className="mt-6 rounded-lg border border-accent/30 bg-accent/5 p-4 text-sm text-foreground leading-relaxed"
              >
                {submissionNotice}
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate className="mt-8 space-y-6">
              {/* Full Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-foreground"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`mt-2 block w-full rounded-lg border bg-surface px-4 py-3 text-sm text-foreground transition-colors placeholder:text-muted/60 focus-visible:outline-2 focus-visible:outline-offset-2 ${
                    errors.name
                      ? 'border-red-500 focus-visible:outline-red-500'
                      : 'border-border focus-visible:outline-accent'
                  }`}
                  placeholder="e.g. Jane Doe"
                  aria-invalid={errors.name ? 'true' : 'false'}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                />
                {errors.name && (
                  <p id="name-error" role="alert" className="mt-1.5 text-xs text-red-500 font-medium">
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email Address */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-foreground"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`mt-2 block w-full rounded-lg border bg-surface px-4 py-3 text-sm text-foreground transition-colors placeholder:text-muted/60 focus-visible:outline-2 focus-visible:outline-offset-2 ${
                    errors.email
                      ? 'border-red-500 focus-visible:outline-red-500'
                      : 'border-border focus-visible:outline-accent'
                  }`}
                  placeholder="name@example.com"
                  aria-invalid={errors.email ? 'true' : 'false'}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                />
                {errors.email && (
                  <p id="email-error" role="alert" className="mt-1.5 text-xs text-red-500 font-medium">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-foreground"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`mt-2 block w-full rounded-lg border bg-surface px-4 py-3 text-sm text-foreground transition-colors placeholder:text-muted/60 focus-visible:outline-2 focus-visible:outline-offset-2 ${
                    errors.subject
                      ? 'border-red-500 focus-visible:outline-red-500'
                      : 'border-border focus-visible:outline-accent'
                  }`}
                  placeholder="e.g. Full-Stack Project Inquiry"
                  aria-invalid={errors.subject ? 'true' : 'false'}
                  aria-describedby={errors.subject ? 'subject-error' : undefined}
                />
                {errors.subject && (
                  <p id="subject-error" role="alert" className="mt-1.5 text-xs text-red-500 font-medium">
                    {errors.subject}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className={`mt-2 block w-full rounded-lg border bg-surface px-4 py-3 text-sm text-foreground transition-colors placeholder:text-muted/60 focus-visible:outline-2 focus-visible:outline-offset-2 ${
                    errors.message
                      ? 'border-red-500 focus-visible:outline-red-500'
                      : 'border-border focus-visible:outline-accent'
                  }`}
                  placeholder="Describe your project, timeline, and requirements..."
                  aria-invalid={errors.message ? 'true' : 'false'}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                />
                {errors.message && (
                  <p id="message-error" role="alert" className="mt-1.5 text-xs text-red-500 font-medium">
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Submit Button using reusable Button */}
              <Button type="submit" variant="primary" size="md">
                Send Message
              </Button>
            </form>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Contact;
