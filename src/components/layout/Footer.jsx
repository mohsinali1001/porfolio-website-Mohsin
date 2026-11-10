import { Link } from 'react-router-dom';

const QUICK_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Skills', path: '/skills' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
];

const CURRENT_YEAR = new Date().getFullYear();

function Footer() {
  return (
    <footer className="w-full border-t border-border bg-surface text-muted transition-colors duration-200">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Brand & Description */}
          <div className="space-y-3">
            <Link
              to="/"
              className="text-lg font-bold tracking-tight text-foreground transition-colors hover:text-accent"
            >
              MOHSIN<span className="text-accent">.</span>
            </Link>
            <p className="max-w-sm text-sm text-muted">
              Full-Stack Developer focused on building modern, robust, and user-centric web applications with clean architecture.
            </p>
          </div>

          {/* Quick Navigation */}
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wider text-foreground">
              Navigation
            </h2>
            <ul className="mt-3 space-y-2">
              {QUICK_LINKS.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted transition-colors hover:text-foreground"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect / Social */}
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wider text-foreground">
              Connect
            </h2>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a
                  href="https://github.com/mohsinali1001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-muted transition-colors hover:text-foreground"
                >
                  GitHub
                  <span aria-hidden="true" className="text-xs">↗</span>
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-muted transition-colors hover:text-foreground"
                >
                  LinkedIn (Placeholder)
                  <span aria-hidden="true" className="text-xs">↗</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@mohsinali.dev"
                  className="inline-flex items-center gap-1.5 text-muted transition-colors hover:text-foreground"
                >
                  Email (Placeholder)
                  <span aria-hidden="true" className="text-xs">↗</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-muted gap-2">
          <p>© {CURRENT_YEAR} Mohsin. All rights reserved.</p>
          <p className="text-xs">Built with React, Vite & Tailwind CSS v4</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
