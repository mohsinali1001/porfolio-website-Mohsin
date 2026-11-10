import { Link } from 'react-router-dom';

function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  to,
  onClick,
  download,
  external,
  disabled = false,
  className = '',
  type = 'button',
  ...rest
}) {
  const baseStyles =
    'inline-flex items-center justify-center font-semibold rounded-lg transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 disabled:pointer-events-none';

  const sizeStyles = {
    sm: 'px-3.5 py-1.5 text-xs',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-3.5 text-base',
  }[size] || 'px-6 py-3 text-sm';

  const variantStyles = {
    primary:
      'bg-accent text-white shadow-xs hover:bg-accent-hover focus-visible:outline-accent',
    secondary:
      'border border-border bg-surface text-foreground hover:bg-surface-secondary hover:border-accent focus-visible:outline-accent',
    outline:
      'border border-border bg-transparent text-foreground hover:border-accent hover:text-accent focus-visible:outline-accent',
    ghost:
      'bg-transparent text-muted hover:text-foreground hover:bg-surface-secondary focus-visible:outline-accent',
  }[variant] || 'bg-accent text-white hover:bg-accent-hover';

  const combinedClasses = `${baseStyles} ${sizeStyles} ${variantStyles} ${className}`.trim();

  // Internal link via React Router
  if (to) {
    return (
      <Link to={to} className={combinedClasses} {...rest}>
        {children}
      </Link>
    );
  }

  // External anchor or file download
  if (href) {
    return (
      <a
        href={href}
        className={combinedClasses}
        target={external || download ? '_blank' : undefined}
        rel={external || download ? 'noopener noreferrer' : undefined}
        download={download}
        {...rest}
      >
        {children}
      </a>
    );
  }

  // Standard interactive button
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClasses}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;

