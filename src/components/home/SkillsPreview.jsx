import { Link } from 'react-router-dom';
import { skillsData } from '../../data/skills';
import SkillCard from '../common/SkillCard';

function SkillsPreview() {
  const featuredSkills = skillsData.filter((skill) => skill.featured);

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

        {/* Skills Grid using reusable SkillCard */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredSkills.map((category) => (
            <SkillCard key={category.id} skill={category} />
          ))}
        </div>

      </div>
    </section>
  );
}

export default SkillsPreview;
