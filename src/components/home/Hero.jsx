import { useState } from 'react';
import { personalData } from '../../data/personal';
import Button from '../common/Button';

function Hero() {
  const [imageError, setImageError] = useState(false);

  return (
    <section className="relative overflow-hidden bg-background py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          
          {/* Left Column: Text & CTAs */}
          <div className="flex flex-col items-start lg:col-span-7">
            {/* Intro Label */}
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-secondary px-3.5 py-1 text-xs font-semibold tracking-wider text-accent uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
              {personalData.greeting}
            </div>

            {/* Name */}
            <h1 className="mt-5 text-3xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              {personalData.name}<span className="text-accent">.</span>
            </h1>

            {/* Title */}
            <p className="mt-3 text-lg font-medium text-accent sm:text-xl">
              {personalData.title}
            </p>

            {/* Description */}
            <p className="mt-6 max-w-2xl text-base text-muted sm:text-lg leading-relaxed">
              {personalData.shortDescription}
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center">
              <Button to="/projects" variant="primary">
                View My Projects
              </Button>

              <Button to="/contact" variant="secondary">
                Let's Connect
              </Button>

              <Button
                href={personalData.resumePath}
                variant="ghost"
                external
                download
                className="gap-2 sm:ml-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                  aria-hidden="true"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" x2="12" y1="15" y2="3" />
                </svg>
                Download Resume
              </Button>
            </div>
          </div>

          {/* Right Column: Portrait Area / Future 3D Spline Scene Container */}
          <div className="w-full lg:col-span-5">
            <div
              id="hero-visual-container"
              className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl border border-border bg-surface-secondary shadow-sm sm:max-w-md lg:max-w-none"
            >
              {!imageError ? (
                <img
                  src={personalData.profileImagePath}
                  alt={`${personalData.name} - ${personalData.title}`}
                  loading="eager"
                  width="480"
                  height="600"
                  onError={() => setImageError(true)}
                  className="h-full w-full object-cover object-center transition-opacity duration-300"
                />
              ) : (
                <div
                  className="flex h-full w-full flex-col items-center justify-center p-8 text-center"
                  aria-label="Portrait Placeholder"
                >
                  <div className="flex h-24 w-24 items-center justify-center rounded-full border border-border bg-surface text-muted">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-12 w-12 text-muted"
                      aria-hidden="true"
                    >
                      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </div>
                  <p className="mt-4 text-sm font-medium text-foreground">
                    Portrait / 3D Scene Slot
                  </p>
                  <p className="mt-1 text-xs text-muted">
                    Reserved for profile image or Spline 3D scene
                  </p>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;
