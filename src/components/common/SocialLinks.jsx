import { socialLinks as defaultSocialLinks } from '../../data/socialLinks';

function SocialLinks({
  links = defaultSocialLinks,
  variant = 'cards', // 'cards' (Contact page) or 'list' (Footer) or 'inline'
  className = '',
}) {
  if (!links || links.length === 0) return null;

  if (variant === 'list') {
    return (
      <ul className={`space-y-2 text-sm ${className}`}>
        {links.map((channel) => (
          <li key={channel.name}>
            <a
              href={channel.url}
              target={channel.isExternal ? '_blank' : undefined}
              rel={channel.isExternal ? 'noopener noreferrer' : undefined}
              aria-label={`Open ${channel.name}`}
              className="inline-flex items-center gap-1.5 text-muted transition-colors hover:text-foreground"
            >
              {channel.name}
              {channel.isExternal && (
                <span aria-hidden="true" className="text-xs">↗</span>
              )}
            </a>
          </li>
        ))}
      </ul>
    );
  }

  // Cards layout (used on Contact page)
  return (
    <div className={`space-y-4 ${className}`}>
      {links.map((channel) => (
        <div
          key={channel.name}
          className="rounded-xl border border-border bg-surface p-5 transition-colors hover:border-accent/40"
        >
          <span className="text-xs font-semibold uppercase tracking-wider text-accent">
            {channel.label || channel.name}
          </span>
          <div className="mt-2">
            <a
              href={channel.url}
              target={channel.isExternal ? '_blank' : undefined}
              rel={channel.isExternal ? 'noopener noreferrer' : undefined}
              aria-label={`Connect via ${channel.name}`}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-accent transition-colors break-all"
            >
              {channel.value || channel.url}
              {channel.isExternal && (
                <span aria-hidden="true" className="text-xs">↗</span>
              )}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SocialLinks;

