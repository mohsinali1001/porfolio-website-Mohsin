import { Link } from 'react-router-dom';
import { navigationLinks } from '../../data/navigation';
import { socialLinks } from '../../data/socialLinks';
import SocialLinks from '../common/SocialLinks';

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
              {navigationLinks.map((link) => (
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
            <div className="mt-3">
              <SocialLinks links={socialLinks} variant="list" />
            </div>
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
