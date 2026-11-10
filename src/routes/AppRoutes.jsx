import { Routes, Route } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import Home from '../pages/Home';

/**
 * Temporary Route Placeholder Component
 * Used exclusively for Phase 2 layout, routing, and theme verification.
 * Does not contain actual page designs (scheduled for later phases).
 */
function RoutePlaceholder({ title, description }) {
  return (
    <section className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8">
      <div className="inline-flex items-center rounded-full border border-border bg-surface-secondary px-3 py-1 text-xs font-semibold tracking-wider text-accent uppercase">
        Phase 2 Layout Verification
      </div>
      <h1 className="mt-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h1>
      <p className="mx-auto mt-3 max-w-md text-base text-muted">
        {description}
      </p>
    </section>
  );
}

function NotFoundPlaceholder() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
        404
      </h1>
      <p className="mt-3 text-lg text-muted">
        Page not found. The requested route does not exist.
      </p>
    </section>
  );
}

function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route
          path="/about"
          element={
            <RoutePlaceholder
              title="About Route"
              description="Full developer biography, journey, and background will be implemented in Phase 5."
            />
          }
        />
        <Route
          path="/skills"
          element={
            <RoutePlaceholder
              title="Skills Route"
              description="Comprehensive technical skill groupings and proficiencies will be implemented in Phase 6."
            />
          }
        />
        <Route
          path="/projects"
          element={
            <RoutePlaceholder
              title="Projects Route"
              description="Detailed project showcases, live demos, and case studies will be implemented in Phase 7."
            />
          }
        />
        <Route
          path="/contact"
          element={
            <RoutePlaceholder
              title="Contact Route"
              description="Contact form and communication channels will be implemented in Phase 8."
            />
          }
        />
        <Route path="*" element={<NotFoundPlaceholder />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;

