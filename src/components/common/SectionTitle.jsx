function SectionTitle({
  eyebrow,
  title,
  description,
  alignment = 'left',
  as: HeadingTag = 'h2',
  className = '',
}) {
  const isCentered = alignment === 'center';

  return (
    <div
      className={`space-y-4 ${
        isCentered ? 'text-center mx-auto max-w-3xl' : 'max-w-3xl'
      } ${className}`}
    >
      {eyebrow && (
        <div
          className={`inline-flex items-center gap-2 rounded-full border border-border bg-surface-secondary px-3.5 py-1 text-xs font-semibold tracking-wider text-accent uppercase ${
            isCentered ? 'mx-auto' : ''
          }`}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
          {eyebrow}
        </div>
      )}

      {title && (
        <HeadingTag className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          {title}
        </HeadingTag>
      )}

      {description && (
        <p className="text-base leading-relaxed text-muted sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}

export default SectionTitle;

