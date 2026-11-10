import { Link } from 'react-router-dom';

const SKILL_CATEGORIES = [
  {
    title: 'Frontend',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Tailwind CSS'],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'Python', 'Django'],
  },
  {
    title: 'Databases',
    skills: ['MongoDB', 'MySQL', 'PostgreSQL'],
  },
  {
    title: 'Programming Languages',
    skills: ['JavaScript', 'Python', 'Java', 'C++', 'Dart'],
  },
  {
    title: 'Tools & Platforms',
    skills: ['Git', 'GitHub', 'VS Code', 'Android Studio'],
  },
];

function SkillsPreview() {
  return (
    <section className="border-t border-border bg-surface/50 py-16 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-secondary px-3.5 py-1 text-xs font-semibold tracking-wider text-accent uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
              WHAT I WORK WITH
            </div>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Technologies I use to build.
            </h2>
          </div>

          <Link
            to="/skills"
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-accent-hover"
          >
            Explore All Skills
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        {/* Skills Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SKILL_CATEGORIES.map((category) => (
            <div
              key={category.title}
              className="rounded-xl border border-border bg-surface p-6 transition-colors hover:border-accent/50"
            >
              <h3 className="text-base font-semibold text-foreground">
                {category.title}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center rounded-md border border-border/60 bg-surface-secondary px-2.5 py-1 text-xs font-medium text-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default SkillsPreview;

