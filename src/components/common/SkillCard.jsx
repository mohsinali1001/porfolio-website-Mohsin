function SkillCard({ skill, showDescription = false, className = '' }) {
  if (!skill) return null;

  return (
    <div
      className={`flex flex-col justify-between rounded-xl border border-border bg-surface p-6 transition-colors hover:border-accent/50 ${className}`}
    >
      <div>
        <h3 className="text-base font-semibold text-foreground sm:text-lg">
          {skill.title}
        </h3>
        {showDescription && skill.description && (
          <p className="mt-2 text-xs leading-relaxed text-muted">
            {skill.description}
          </p>
        )}
      </div>

      <div className={`pt-4 ${showDescription ? 'mt-6 border-t border-border/60' : 'mt-4'}`}>
        <div className="flex flex-wrap gap-2">
          {skill.items.map((item) => (
            <span
              key={item}
              className="inline-flex items-center rounded-md border border-border bg-surface-secondary px-2.5 py-1 text-xs font-medium text-foreground"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SkillCard;

